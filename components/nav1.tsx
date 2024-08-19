"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import MCC_logo from "@/assets/mcc_logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const logout = async () => {
    localStorage.removeItem("userData");
    window.location.assign("/login");
  };
  useEffect(() => {
    const item = localStorage.getItem("userData");
    if (item) {
      setUserData(item);
    }
  });
  return (
    <nav className="bg-[#004225] fixed h-24 top-0 w-full z-50">
      <div className="flex justify-between items-center ml-8 mr-20">
        <a href="/">
          <Image src={MCC_logo} alt="MCC logo" className="p-6 w-[44vw]" />
        </a>
        <div className="hidden md:flex space-x-10">
          <Link className="text-white" href="./land">
            Home{" "}
          </Link>
          <Link className="text-white" href="./gallery">
            Gallery
          </Link>
          <Link className="text-white" href="./team">
            Team{" "}
          </Link>
          <Link
            className="text-white"
            href="https://www.yourdesignstore.in/partners/mccalumnistore"
            target="_blank"
          >
            Store{" "}
          </Link>

          <Link
            className="text-white"
            href={`${userData ? "./profile" : "./login"}`}
          >
            Profile
          </Link>
          {userData === "" ? null : (
            <button className="text-white" onClick={() => logout()}>
              Logout
            </button>
          )}
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
      {isOpen && (
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
      )}
    </nav>
  );
};

export default Navbar;
