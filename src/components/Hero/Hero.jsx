import React from 'react'
import photo1 from "../../assets/img/photo1.png";

const Hero = () => {
  return (
    <div className="container mb-10 relative mx-auto ">
    <div className="relative ">
      <img src={photo1} alt="Luxe Drive" className=" w-full  max-h-[520px] " />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <p className="text-white md:text-5xl text-2xl tracking-widest font-extralight ">
          LUXEDRIVE
        </p>
        <p className="text-gray-400 md:text-md text-xs tracking-widest font-extralight ">
          Luxury Cars
        </p>
      </div>
    </div>
  </div>
  
  )
}

export default Hero