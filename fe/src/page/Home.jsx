import React from "react";
import Info from "./Info/Info";
import Nav from "./Navigation/nav";

const Home = () => (
  <div className="min-h-screen bg-blue-300 flex flex-col">
    <Nav />
    <h1 className="text-white font-serif font-bold text-center text-4xl mt-3 mx-auto relative z-10">
      Selamat datang di Infoemasi Layanan
    </h1>
    <Info />
  </div>
);

export default Home;
