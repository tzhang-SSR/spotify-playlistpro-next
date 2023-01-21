import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export { RouteGuard };
// Reference: https://jasonwatmore.com/post/2021/08/30/next-js-redirect-to-login-page-if-unauthenticated
function RouteGuard({ children }: { children: JSX.Element }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);

    // on route change complete - run auth check
    router.events.on("routeChangeComplete", authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };
  }, []);

  const storeToken = (userToken: string) => {
    localStorage.setItem("token", JSON.stringify(userToken));
  };

  function authCheck(url: string) {
    // redirect to login page if accessing a private page and not logged in
    const path = url.split("?")[0];
    const param = url.split("?")[1] || "";
    const isLoginPage = path === "/login";

    if (param.includes("access_token")) {
      storeToken(param.split("=")[1]);
      setAuthorized(true);
      // rediect to profile page with the access token
      router.push({ pathname: "/dashboard" });
      return;
    }

    const userToken = JSON.parse(localStorage.getItem("token") || "{}");
    console.log({ userToken });
    if (typeof userToken === "object" && !isLoginPage) {
      setAuthorized(false);
      router.push({ pathname: "/login" });
    } else {
      setAuthorized(true);
    }
  }

  return (authorized && children) || <div />;
}
