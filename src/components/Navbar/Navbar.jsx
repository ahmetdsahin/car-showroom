import React from "react";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";

const NavLinks = [
  {
    id: "1",
    name: "ANASAYFA",
    link: "/#",
  },
  {
    id: "2",
    name: "ARABA FİLOSU",
    link: "/#arabafilosu",
  },
  {
    id: "3",
    name: "BLOG",
    link: "/#blog",
  },
  {
    id: "4",
    name: "HAKKIMIZDA",
    link: "/#hakkimizda",
  },
];

const Navbar = () => {
  return (
    <nav>
      <div className="bg-black text-white px-5 text-xs font-thin py-1 hidden md:block">
        <div className=" flex flex-row gap-x-8 justify-self-end tracking-widest">
          <p className="flex items-center gap-x-2">
            <FaPhone size={12} color="#fff" /> + 1234 5678 901
          </p>
          <div>|</div>
          <p className="flex items-center gap-x-2">
            {" "}
            <FaLocationDot size={12} color="#fff" /> 48 Rue De Valmy
          </p>
        </div>
      </div>
      <div className=" md:px-20 px-5  ">
        <div className="container flex justify-between items-center">
          <div><h1 className=" font-light tracking-widest text-xl">LUXEDRIVE</h1></div>
          <div className="hidden md:block   ">
              <ul className="flex items-center justify-center gap-6">
                {NavLinks.map((data) => (
                  <li key={data.id} className="py-4">
                    <a
                      className="py-4 hover:border-b-1 hover:text-gray-900 hover:border-gray-900 transition-colors duration-500 text-xs font-light"
                      href={data.link}
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          <div className="md:flex flex-row items-center gap-x-6 hidden "> < CiSearch  className="cursor-pointer"/> <CiMenuFries className="cursor-pointer"/></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
