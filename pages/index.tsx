import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import * as React from "react";
import queryString from "query-string";

const Home: NextPage = () => {
  // const [accessToken, setAccessToken] = React.useState({});
  // const isAuthorized = typeof accessToken === "string";

  // const handleLogin = () => {
  //   // window.location.href = "http://localhost:8888/login";
  //   window.location.href = "https://playlistpro-backend.vercel.app/login";
  //   // redirect to profile page
  // };

  // const storeToken = (userToken: string) => {
  //   sessionStorage.setItem("token", JSON.stringify(userToken));
  // };

  // const getToken = () => {
  //   const tokenString = sessionStorage.getItem("token");
  //   const userToken = JSON.parse(tokenString || "{}");
  //   const parsed = queryString.parse(window.location.search);
  //   const token =
  //     typeof userToken === "object" ? parsed.access_token : userToken;
  //   if (!token) return;

  //   storeToken(token);
  //   setAccessToken(token);
  // };

  // React.useEffect(() => {
  //   getToken();
  // }, []);

  return (
    // <div className="grid place-content-center h-screen">
    //   <h1 className="text-5xl pb-10">Playlist Master</h1>
    //   {isAuthorized ? (
    //     <div>Logged In</div>
    //   ) : (
    //     <button
    //       onClick={handleLogin}
    //       className="text-white rounded-full bg-black px-3"
    //     >
    //       Log In
    //     </button>
    //   )}
    // </div>
    <div />
  );
};

export default Home;
