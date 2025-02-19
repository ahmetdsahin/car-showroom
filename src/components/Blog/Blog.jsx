import React from "react";
import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img3.jpg";
import img5 from "../../assets/img/img5.jpg";

const Blog = () => {
  return (
    <div className="container px-6 md:pl-16 pt-10">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-3xl tracking-wide text-pretty">
          Our Blog Recent Articles
        </h1>
        <p className="text-xs font-light tracking-wider text-amber-600 text-pretty">
          ALL ABOUT CARS
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-6">
        <a
          href="#"
          className="flex flex-col items-center gap-x-4 md:flex-row transition-all duration-300 hover:scale-[1.02]"
        >
          <img
            src={img1}
            className="object-cover w-full h-96 md:w-36 md:h-36 rounded-lg"
            alt="Sport Cars and Technology"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h1 className="mb-2 text-lg tracking-wide text-pretty">
              Sport Cars And Their Constant Urge To Test Technology
            </h1>
            <p className="mb-3 text-xs text-gray-500 tracking-widest text-pretty">
              Jan 3, 2025 / FreshRoad
            </p>
          </div>
        </a>

        <a
          href="#"
          className="flex flex-col items-center gap-x-4 md:flex-row transition-all duration-300 hover:scale-[1.02]"
        >
          <img
            src={img2}
            className="object-cover w-full h-96 md:w-36 md:h-36 rounded-lg"
            alt="Sport Cars and Technology"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h1 className="mb-2 text-lg tracking-wide text-pretty">
            How To Save Your Money & Time – Work While Being Driven
            </h1>
            <p className="mb-3 text-xs text-gray-500 tracking-widest text-pretty">
              Jan 3, 2025 / FreshRoad
            </p>
          </div>
        </a>

        <a
          href="#"
          className="flex flex-col items-center gap-x-4 md:flex-row transition-all duration-300 hover:scale-[1.02]"
        >
          <img
            src={img3}
            className="object-cover w-full h-96 md:w-36 md:h-36 rounded-lg"
            alt="Sport Cars and Technology"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h1 className="mb-2 text-lg tracking-wide text-pretty">
            A Review Of New Modern Designed Rims & The Overall Look
            </h1>
            <p className="mb-3 text-xs text-gray-500 tracking-widest text-pretty">
              Jan 3, 2025 / FreshRoad
            </p>
          </div>
        </a>

        <a
          href="#"
          className="flex flex-col items-center gap-x-4 md:flex-row transition-all duration-300 hover:scale-[1.02]"
        >
          <img
            src={img5}
            className="object-cover w-full h-96 md:w-36 md:h-36 rounded-lg"
            alt="Sport Cars and Technology"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h1 className="mb-2 text-lg tracking-wide text-pretty">
          
The Finest Seats For Your Car And Where To Find Them Today
            </h1>
            <p className="mb-3 text-xs text-gray-500 tracking-widest text-pretty">
              Jan 3, 2025 / FreshRoad
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Blog;
