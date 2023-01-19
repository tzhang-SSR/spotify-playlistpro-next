import * as React from "react";

const LoginPage = () => {
  const handleLogin = () => {
    // window.location.href = "http://localhost:8888/login";
    window.location.href = "https://playlistpro-backend.vercel.app/login";
  };

  return (
    <div className="grid place-content-center h-screen">
      <h1 className="text-5xl pb-10">PlaylistPro</h1>
      <button
        onClick={handleLogin}
        className="text-white rounded-full bg-black px-3"
      >
        Log In
      </button>
    </div>
  );
};

export default LoginPage;
