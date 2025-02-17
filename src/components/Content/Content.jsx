import React from "react";
import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img2.jpg";
import img3 from "../../assets/img/img3.jpg";
import img4 from "../../assets/img/img4.jpg";
import img5 from "../../assets/img/img5.jpg";
import img6 from "../../assets/img/img6.jpg";
import img7 from "../../assets/img/img7.jpg";
import img8 from "../../assets/img/img8.jpg";

const Content = () => {
  return (
    <div className="container">
      <div className="px-6 md:pl-16 pt-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
        <div className="w-full md:w-2/3 text-center md:text-left mb-6 md:mb-0">
          <p className="text-2xl md:text-3xl font-normal leading-relaxed text-pretty">
            What We Provide Is The Luxury <br />
            Transport And Comfortable <br />
            Experience For You
          </p>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-sm md:text-xs text-gray-600 leading-relaxed text-pretty">
            Vivamus arcu felis bibendum ut tristique et egestas. <br />
            Ultricies leo intege in malesuada nunc vel risus commodo. <br />
            Sapien nec sagittis aliquam male bibendum arcu vitae lorem sed.
            <br />
            <br />
            🗸 Consectetur adipiscing elit, sed do eiusmod tempo <br />
            🗸 Ut enim ad minima veniam, quis nostrum <br />
            🗸 Temporibus autem quibusdam et aut officiis aut
          </p>
        </div>
      </div>

      {/* Resim Grid Alanı */}
      <div className="px-10 md:pl-16 pt-10  grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        
        <div>
          <img
            className="object-cover object-center w-full h-40 max-w-full rounded-lg"
            src={img1}
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="object-cover object-center w-full h-40 max-w-full rounded-lg"
            src={img2}
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="object-cover object-center w-full h-40 max-w-full rounded-lg"
            src={img3}
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="object-cover object-center w-full h-40 max-w-full rounded-lg"
            src={img4}
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="object-cover object-center w-full h-40 max-w-full rounded-lg"
            src={img5}
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="object-cover object-center w-full h-40 max-w-full rounded-lg"
            src={img6}
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="object-cover object-center w-full h-40 max-w-full rounded-lg"
            src={img7}
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="object-cover object-center w-full h-40 max-w-full rounded-lg"
            src={img8}
            alt="gallery-photo"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
