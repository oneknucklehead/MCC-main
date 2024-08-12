"use client";
import { useEffect } from "react";
import Image from "next/image";
import one from "@/assets/slider_img/in_slider/Cul_Ah_7.jpeg";
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
      <div id="main" className="relative shadow-lg mt-[10vh]">
        <ScrollButton />
        <ul className="slider relative w-full h-[80vh]">
          {[
            {
              title: "Lossless Youths",
              description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
              image: one.src,
            },
            {
              title: "Estrange Bond",
              description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
              image: two.src,
            },
            {
              title: "The Gate Keeper",
              description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
              image: three.src,
            },
            {
              title: "Last Trace Of Us",
              description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
              image: four.src,
            },
            {
              title: "Urban Decay",
              description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
              image: five.src,
            },
            {
              title: "The Migration",
              description:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
              image: six.src,
            },
            // {
            //   title: "The Migration",
            //   description:
            //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
            //   image: sev.src,
            // },
            // {
            //   title: "The Migration",
            //   description:
            //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
            //   image: eight.src,
            // },
            // {
            //   title: "The Migration",
            //   description:
            //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
            //   image: nine.src,
            // },
            // {
            //   title: "The Migration",
            //   description:
            //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
            //   image: ten.src,
            // },
            // {
            //   title: "The Migration",
            //   description:
            //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
            //   image: elev.src,
            // },
            // {
            //   title: "The Migration",
            //   description:
            //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
            //   image: twel.src,
            // },
            // {
            //   title: "The Migration",
            //   description:
            //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
            //   image: thirteen.src,
            // },
            // {
            //   title: "The Migration",
            //   description:
            //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
            //   image: fourteen.src,
            // },
            // {
            //   title: "The Migration",
            //   description:
            //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
            //   image: fifteen.src,
            // },
            // {
            //   title: "The Migration",
            //   description:
            //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
            //   image: sixteen.src,
            // },
            // {
            //   title: "The Migration",
            //   description:
            //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
            //   image: seventeen.src,
            // },
            // {
            //   title: "The Migration",
            //   description:
            //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
            //   image: eighteen.src,
            // },
            // {
            //   title: "The Migration",
            //   description:
            //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
            //   image: nineteen.src,
            // },
            // {
            //   title: "The Migration",
            //   description:
            //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
            //   image: twenty.src,
            // },
            // {
            //   title: "The Migration",
            //   description:
            //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
            //   image: twentyone.src,
            // },
            // {
            //   title: "The Migration",
            //   description:
            //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
            //   image: twentytwo.src,
            // },
            // {
            //   title: "The Migration",
            //   description:
            //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.",
            //   image: twentythree.src,
            // },
          ].map((item, index) => (
            <li
              key={index}
              className="item absolute w-[200px] h-[260px] list-none top-[50vh] transform -translate-y-1 z-10 bg-cover bg-center rounded-[8px] shadow-inner transition-transform duration-200"
              style={{
                backgroundImage: `url(${item.image})`,
                objectFit: "cover",
              }}
            >
              <div className="content absolute w-[30vw] max-w-[2rem] top-0 left-12 transform -translate-y-1 text-white">
                <h2 className="title font-extralight text-5xl uppercase">
                  {item.title}
                </h2>
                <p className="description leading-[1.7] mt-4 mb-6 text-xs">
                  {item.description}
                </p>
                <button className="flex bg-none text-xs items-center bg-zinc-600 border border-zinc-400 rounded-md p-3 text-white">
                  Read More
                </button>
              </div>
            </li>
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
      <div className="flex">
        <Sec2Land />

        <Calender />
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.554618889464!2d88.369616675998!3d22.52088763486236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02772ce2926b1d%3A0x233ed3fd41b96e0b!2sRash%20Behari%20Ave%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1723242943898!5m2!1sen!2sin"
          className="w-full h-[100vh]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="absolute max-w-96 top-10 left-[25%]">
          <div className="bg-white">
            <Image src={one} alt="" className="" />
            <div className="p-8">
              <h3 className="text-4xl py-8">Contact Us</h3>
              <p className="pb-8">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore fuga voluptatum, iure corporis inventore praesentium
                nisi. Id laboriosam ipsam enim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
