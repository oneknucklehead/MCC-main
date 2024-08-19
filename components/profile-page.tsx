"use client";
import Image from "next/image";
import back from "@/assets/back1.svg";
import Dprofile from "@/assets/default-profile.svg";
import cap from "@/assets/cap.svg";
import share from "@/assets/share.svg";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProfilePage() {
  const [userData, setUserData] = useState<object | null>({});
  // const [formData, setFormData] = useState({
  //   email: "kavya.k8@gmail.com",
  //   password: "Sway014_san032",
  // });
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  useEffect(() => {
    const userDataLocal = localStorage.getItem("userData");

    if (userDataLocal) {
      try {
        const parsedUserData = JSON.parse(userDataLocal);
        setUserData(parsedUserData);
        // console.log(parsedUserData);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);
  return (
    <div className="bg-white w-full h-[100vh] mt-24">
      <div className="flex m-5 mt-0 justify-between">
        <div id="left" className="w-[25%] m-4">
          <button className="flex bg-none text-sm items-center bg-zinc-200 border border-zinc-400 rounded-md p-2">
            <Image src={back} alt="back_btn" className="w-6 h-6 mr-2" />
            <p>Back</p>
          </button>
          <Image
            src={Dprofile}
            alt="Default Profile"
            className="w-full p-8 rounded-full h-[35vh] mt-8 mb-8"
          />
          <div className="flex mb-2 pt-10 items-center text-black">
            <h4 className="font-semibold text-xl ">Intro</h4>
            <span className="ml-4">----------</span>
          </div>
          <p className="text-sm m-2 text-justify pt-6 overflow-y-auto h-[18vh] text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, nostrum veniam ipsum dolorum debitis blanditiis autem
            adipisci voluptates pariatur numquam modi, quas minima laudantium
            sint animi quo possimus amet placeat. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Accusantium, nostrum veniam ipsum
            dolorum debitis blanditiis autem adipisci voluptates pariatur
            numquam modi, quas minima laudantium sint animi quo possimus amet
            placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, nostrum veniam ipsum dolorum debitis blanditiis autem
            adipisci voluptates pariatur numquam modi, quas minima laudantium
            sint animi quo possimus amet placeat. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Accusantium, nostrum veniam ipsum
            dolorum debitis blanditiis autem adipisci voluptates pariatur
            numquam modi, quas minima laudantium sint animi quo possimus amet
            placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, nostrum veniam ipsum dolorum debitis blanditiis autem
            adipisci voluptates pariatur numquam modi, quas minima laudantium
            sint animi quo possimus amet placeat.
          </p>
        </div>
        <div id="right" className="m-4 w-[66%] text-black">
          <button className="flex bg-none text-sm items-center bg-zinc-200 border border-zinc-400 rounded-md p-2">
            <Image src={share} alt="share_btn" className="w-6 h-6 mr-2" />
            <p className="text-black">Share</p>
          </button>
          <hr className="border-b-1 mt-6 border-zinc-300" />
          <h2 className="text-6xl font-[100] mt-10 ml-2">
            {userData?.studentName}
          </h2>
          <h4 className="text-xs font-bold mt-2 ml-2">
            Registration Number: {userData?.regNumber}
          </h4>
          <p className="text-xs mt-2 ml-2 mb-10 ">
            Batch: {userData?.joiningBatch}
          </p>
          <div className="flex mb-2 pt-16 items-center">
            <h4 className="font-semibold text-4xl ">Course</h4>
            <span className="ml-4">----------</span>
          </div>
          <div className="flex justify-between w-[80%]">
            <div className="flex m-4 pt-6">
              <Image
                src={cap}
                alt="hat"
                className="w-20 bg-zinc-200 p-5 rounded-md mr-4 shadow-3xl"
              />
              <div className="flex flex-col">
                <b>ABC Course Name</b>
                <p>{userData?.course}</p>
                <p className="text-black font-semibold text-xs mt-4">
                  Year 2012 - 2026
                </p>{" "}
              </div>
            </div>
            <div className="flex m-4 pt-6">
              <Image
                src={cap}
                alt="hat"
                className="w-20 bg-zinc-200 p-5 rounded-md mr-4 shadow-3xl"
              />
              <div className="flex flex-col">
                <b>ABC Course Name</b>
                <p>Master of Science in something</p>
                <p className="text-black font-semibold text-xs mt-4">
                  Year 2012 - 2026
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="flex justify-between w-[80%]">
            <div className="flex m-4 pt-6">
              <Image
                src={cap}
                alt="hat"
                className="w-20 bg-zinc-200 p-5 rounded-md mr-4 shadow-3xl"
              />
              <div className="flex flex-col">
                <b>ABC Course Name</b>
                <p>Master of Science in something</p>
                <p className="text-black font-semibold text-xs mt-4">
                  Year 2012 - 2026
                </p>{" "}
              </div>
            </div>
            <div className="flex m-4 pt-6">
              <Image
                src={cap}
                alt="hat"
                className="w-20 bg-zinc-200 p-5 rounded-md mr-4 shadow-3xl"
              />
              <div className="flex flex-col">
                <b>ABC Course Name</b>
                <p>Master of Science in something</p>
                <p className="text-black font-semibold text-xs mt-4">
                  Year 2012 - 2026
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
