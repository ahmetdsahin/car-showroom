import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import car1 from "../../assets/img/car1.jpg";
import car2 from "../../assets/img/car2.jpg";
import car3 from "../../assets/img/car3.jpg";
import car4 from "../../assets/img/car4.jpg";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Cards = () => {
  return (

    
    <div>
        <h1 className="ml-16 text-3xl tracking-wide">Luxury Limousine For Maximum<br/>
        Satisfaction. Enjoy.</h1>
        <br/>
        <p className="ml-16 text-xs font-light tracking-wider text-amber-600">EXCLUSIVE CARS</p>
        <br/>
      <Carousel responsive={responsive} className="mx-15">
        <div className="flex flex-col items-center bg-neutral-100 px-3 py-8 w-[320px] h-auto gap-y-3">
          <img className="items-center px-5 py-3" src={car1} alt="" />{" "}
          <h1 className="text-xl font-light">Rolls Royce Ghost 3</h1>
          <p className=" text-sm font-extralight">
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipisicing elit.
          </p>
          <p className="text-sm font-light">
            <span className="text-xl font-normal">$180 </span>/ Per Hour{" "}
          </p>
          <button className="border-1 py-3 px-8 border-b-amber-800 text-xs font-light ">
            + MORE DETAILS
          </button>
        </div>
        <div className="flex flex-col items-center bg-neutral-100 px-3 py-8 w-[320px] h-auto gap-y-3">
          <img className="items-center px-5 py-3" src={car2} alt="" />{" "}
          <h1 className="text-xl font-light">Range Rover Evoque</h1>
          <p className=" text-sm font-extralight">
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipisicing elit.
          </p>
          <p className="text-sm font-light">
            <span className="text-xl font-normal">$180 </span>/ Per Hour{" "}
          </p>
          <button className="border-1 py-3 px-8 border-b-amber-800 text-xs font-light ">
            + MORE DETAILS
          </button>
        </div>
        <div className="flex flex-col items-center bg-neutral-100 px-3 py-8 w-[320px] h-auto gap-y-3">
          <img className="items-center px-5 py-3" src={car3} alt="" />{" "}
          <h1 className="text-xl font-light">Porche Taycan Sport</h1>
          <p className=" text-sm font-extralight">
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipisicing elit.
          </p>
          <p className="text-sm font-light">
            <span className="text-xl font-normal">$180 </span>/ Per Hour{" "}
          </p>
          <button className="border-1 py-3 px-8 border-b-amber-800 text-xs font-light ">
            + MORE DETAILS
          </button>
        </div>
        <div className="flex flex-col items-center bg-neutral-100 px-3 py-8 w-[320px] h-auto gap-y-3">
          <img className="items-center px-5 py-3" src={car4} alt="" />{" "}
          <h1 className="text-xl font-light">Ferrari 365 Daytona</h1>
          <p className=" text-sm font-extralight">
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipisicing elit.
          </p>
          <p className="text-sm font-light">
            <span className="text-xl font-normal">$180 </span>/ Per Hour{" "}
          </p>
          <button className="border-1 py-3 px-8 border-b-amber-800 text-xs font-light ">
            + MORE DETAILS
          </button>
        </div>
      </Carousel>
    </div>
  );
};

export default Cards;
