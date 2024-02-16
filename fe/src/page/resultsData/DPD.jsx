import React from 'react'
import background from "../../assets/image/as.jpg";
import Nav from "../Navigation/nav";
import Info from "../Info/Info";

const DPD = () => {
  return (
    <div
      className="bg-white m relative min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <Nav />
      <h1 className="text-white font-serif font-bold text-center text-4xl mt-3 mx-auto relative z-10">
        Hasil Suara Dewan Perwakilan Daerah
      </h1>
      <Info />

    </div>
  )
}

export default DPD