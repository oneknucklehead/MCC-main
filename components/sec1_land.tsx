"use client";
import { useEffect } from "react";
import Image from "next/image";
import one from "@/assets/slider_img/in_slider/CollegeLogo.png";
import two from "@/assets/slider_img/in_slider/Cul_ah_66.jpeg";
import three from "@/assets/slider_img/in_slider/EminentPersonality2.jpeg";
import four from "@/assets/slider_img/in_slider/GoldenJubilee6.jpeg";
import five from "@/assets/slider_img/in_slider/MCCCHoir22.jpeg";
import six from "@/assets/slider_img/in_slider/MCCChoir.jpeg";
import sev from "@/assets/slider_img/in_slider/MCCNCCBatch.jpeg";
import eight from "@/assets/slider_img/in_slider/MCCStudents.jpeg";
import nine from "@/assets/slider_img/in_slider/Notablepersonalities.jpeg";
import ten from "@/assets/slider_img/in_slider/PPVeerappaMoily.jpeg";
import elev from "@/assets/slider_img/in_slider/RandomPics2.jpeg";
import twel from "@/assets/slider_img/in_slider/SportsDAy16.jpeg";
import thirteen from "@/assets/slider_img/in_slider/SportsDAy21.jpeg";
import fourteen from "@/assets/slider_img/in_slider/SportsDat24.jpeg";
import fifteen from "@/assets/slider_img/in_slider/SportsDay76.jpeg";
import sixteen from "@/assets/slider_img/in_slider/Sportsday2.jpeg";
import seventeen from "@/assets/slider_img/in_slider/Sr. GenevievPrincipal.jpeg";
import eighteen from "@/assets/slider_img/in_slider/Student Batch 33.jpeg";
import nineteen from "@/assets/slider_img/in_slider/Student_COuncil_6.jpeg";
import twenty from "@/assets/slider_img/in_slider/Student_Strength_2.jpeg";
import twentyone from "@/assets/slider_img/in_slider/Student_Strength_MCC.jpeg";
import twentytwo from "@/assets/slider_img/in_slider/Student_Union.jpeg";
import twentythree from "@/assets/slider_img/in_slider/Yamakazhi.jpeg";

// import { CardHoverEffect } from "@/components/sec2_land";
import Sec2Land from "@/components/sec2_land";
import Calender from "@/components/calender1";

import ScrollButton from "./ui/ScrollBtn";

import "./style.css";
import Slider from "./slider-new";

const Home: React.FC = () => {
  useEffect(() => {
    const slider = document.querySelector(".slider");

    function activate(e: MouseEvent | KeyboardEvent) {
      const items = document.querySelectorAll(".item");
      const target = e.target as HTMLElement;

      if (
        (target.closest(".next") ||
          (e as KeyboardEvent).key === "ArrowRight") &&
        slider
      ) {
        slider.appendChild(items[0]);
      }
      if (
        (target.closest(".prev") || (e as KeyboardEvent).key === "ArrowLeft") &&
        slider
      ) {
        slider.insertBefore(items[items.length - 1], items[0]);
      }
    }

    document.addEventListener("click", activate, false);
    document.addEventListener("keydown", activate, false);

    return () => {
      document.removeEventListener("click", activate, false);
      document.removeEventListener("keydown", activate, false);
    };
  }, []);

  return (
    <>
      <div id="main" className="relative shadow-lg mt-[11vh]">
        <ScrollButton />
        <ul className="slider relative w-full h-full flex flex-row gap-4 ">
          {[
            {
              title: "Lossless Youths",
              description:
                "Identified under the UGC Scheme as a College with Potential for Excellence (CPE) in 2006.",
              image: one.src,
            },
            {
              title: "Estrange Bond",
              description:
                "One of the first women’s colleges to be founded in 1944 in Trichur, Kerala, under Madras University",
              image: two.src,
            },
            {
              title: "The Gate Keeper",
              description:
                "On transferring and establishing its presence in Bangalore, it became one of the first women’s colleges in Karnataka, in 1948 affiliated to Mysore University.",
              image: three.src,
            },
            {
              title: "Last Trace Of Us",
              description:
                "Celebrated its Golden Jubilee in 1998, its academic excellence and noteworthy achievements.",
              image: four.src,
            },
            {
              title: "Urban Decay",
              description:
                "One of the first colleges in Bangalore to be granted affiliation by Bangalore University in 1964.",
              image: five.src,
            },
            {
              title: "The Migration",
              description:
                "Honoured by the Rotary Club for “its service to the community, serving the noble cause of education.",
              image: six.src,
            },
          ].map((item, index) => (
            <li
              key={index}
              className="item absolute w-[11.5vw] h-[28vh] list-none top-[80%] transform -translate-y-1/2 z-10 bg-cover bg-center rounded-[8px] shadow-inner transition-transform duration-200"
              style={{
                backgroundImage: `url(${item.image})`,
                objectFit: "cover",
              }}
            >
              <div className="content absolute w-[80%] max-w-[15rem] mt-7 left-[10%] transform -translate-y-1/2 text-white">
                <h2 className="title font-extralight text-3xl sm:text-4xl md:text-5xl uppercase">
                  {item.title}
                </h2>
                <p className="description leading-[1.7] mt-4 mb-6 text-sm sm:text-base">
                  {item.description}
                </p>
                <button className="flex bg-none text-sm sm:text-base items-center bg-zinc-600 border border-zinc-400 rounded-md p-3 text-white">
                  Read More
                </button>
              </div>
            </li>
            // <li
            //   key={index}
            //   className="item absolute w-[200px] h-[260px] list-none top-[50vh] transform -translate-y-1 z-10 bg-cover bg-center rounded-[8px] shadow-inner transition-transform duration-200"
            //   style={{
            //     backgroundImage: `url(${item.image})`,
            //     objectFit: "cover",
            //   }}
            // >
            //   <div className="content absolute w-[30vw] max-w-[2rem] top-0 left-12 transform -translate-y-1 text-white">
            //     <h2 className="title font-extralight text-5xl uppercase">
            //       {item.title}
            //     </h2>
            //     <p className="description leading-[1.7] mt-4 mb-6 text-xs">
            //       {item.description}
            //     </p>
            //     <button className="flex bg-none text-xs items-center bg-zinc-600 border border-zinc-400 rounded-md p-3 text-white">
            //       Read More
            //     </button>
            //   </div>
            // </li>
          ))}
        </ul>
        <nav className="nav absolute bottom-8 left-32 transform -translate-x-1/2 z-10 select-none">
          <button className="btn prev mx-10 p-3 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fff"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="btn next p-3 rounded-full cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fff"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </nav>
      </div>
      <h1 className="pt-20 pb-8 text-4xl font-semibold text-center">
        Welcome to the MCC Alumni portal
      </h1>
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <Sec2Land />
        </div>
        <div className="col-span-1">
          <Calender />
        </div>
      </div>
      {/* CAROUSEL */}
      <div className="my-8">
        <Slider />
      </div>
      <div>
        <iframe
          src="https://widgets.sociablekit.com/linkedin-page-posts/iframe/25444937"
          width="100%"
          height="1000"
        ></iframe>
      </div>
      <div className="relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.680599330093!2d77.5860741758574!3d12.992269214423185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1641a70ed907%3A0xa8a112f1da2049dd!2s58%2C%20Palace%20Rd%2C%20Abshot%20Layout%2C%20Vasanth%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560051!5e0!3m2!1sen!2sin!4v1724080807259!5m2!1sen!2sin"
          className="w-full h-[100vh]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute max-w-96 top-10 left-[25%]">
          <div className="bg-white">
            <Image src={one} alt="" className="" />
            <div className="p-8">
              <h3 className="text-4xl py-8">Contact Us</h3>
              <div className="my-4">
                <h1 className="text-lg">Mount Carmel College</h1>
                <p className="">
                  No 58, Palace Road, Vasanthnagar, Bengaluru, Karnataka 560052
                </p>
              </div>
              <p className="my-3">080 2226 1759</p>
              <p className="my-3">080 2228 6386</p>
              <div className="pb-8">
                <a className="underline" href="mailto:alumnae@mccblr.edu.in ">
                  alumnae@mccblr .edu.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
