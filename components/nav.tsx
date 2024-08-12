"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import MCC_logo from "@/assets/mcc_logo.svg";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-[#002f1c] fixed h-24 top-0 w-full z-50">
        <div className="flex justify-between items-center h-full ml-8 mr-20">
          <a href="/">
            <Image
              src={MCC_logo}
              alt="MCC logo"
              className="p-16 min-w-[100px] w-[44vw]"
            />
          </a>
          <div className="hidden md:flex space-x-10">
            {/* <Link className="text-white" href="./gallery">
            Gallery
          </Link> */}
            {/* <Link className="text-white" href="./team">
            Team{" "}
          </Link> */}
            {/* <Link
            className="text-white"
            href="https://www.yourdesignstore.in/partners/mccalumnistore"
            target="_blank"
          >
            Store{" "}
          </Link> */}
            {/* <Link className="text-white" href="./land">
            Home{" "}
          </Link> */}

            <Link
              className="text-white hover:bg-[#555] transition-all duration-300 bg-black rounded-lg px-4 py-2"
              style={{
                boxShadow: "0 0 5px #FFD700",
              }}
              href="./login"
            >
              Login
            </Link>
            <Link
              className="text-white hover:bg-[#555] transition-all duration-300 bg-black rounded-lg px-4 py-2"
              href="./password"
              style={{
                boxShadow: "0 0 5px #FFD700",
              }}
            >
              Password
            </Link>
            {/* <Link className="text-white" href="./profile">
            Profile
          </Link> */}
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
        {/* {isOpen && (
        <div className="md:hidden">
          <Link className="block text-white py-2" href="/">
            Home
          </Link>
          <Link className="block text-white py-2" href="/about">
            About
          </Link>
          <Link className="block text-white py-2" href="/services">
            Services
          </Link>
          <Link className="block text-white py-2" href="/contact">
            Contact
          </Link>
        </div>
      )} */}
      </nav>
      {/* <div className="w-full grid grid-cols-12">
        <div
          className="h-10 bg-[#FFD700] col-span-8"
          style={{
            boxShadow: "0 0 10px #FFD700",
          }}
        ></div>
        <div className="col-span-4 h-2 bg-white"></div>
      </div> */}
    </div>
  );
};

export default Navbar;
