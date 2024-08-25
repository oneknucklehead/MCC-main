"use client";
import Image from "next/image";
import back from "@/assets/back1.svg";
import Dfprofile from "@/assets/default-profile.svg";
import cap from "@/assets/cap.svg";
import share from "@/assets/share.svg";
import { useEffect, useState } from "react";
import axios from "axios";
interface UserData {
  studentName: string;
  course: string;
  city: string;
  email: string;
  homeState: string;
  joiningBatch: string;
  linkValidity: number;
  password: string;
  program: string;
  regNumber: string;
  typeLevel: string;
  _id: string;
}
export default function ProfilePage() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [city, setCity] = useState<string | undefined>("");
  const [image, setImage] = useState(null);
  const [Dprofile, setDprofile] = useState(null);
  const maxChar = 1200;
  const [introData, setIntroData] = useState<string | undefined>("");
  // const [formData, setFormData] = useState({
  //   email: "kavya.k8@gmail.com",
  //   password: "Sway014_san032",
  // });
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  useEffect(() => {
    const userDataLocal = localStorage.getItem("userData");

    if (userDataLocal) {
      try {
        const parsedUserData: UserData = JSON.parse(userDataLocal);
        setUserData(parsedUserData);
        setCity(parsedUserData.city);
        setIntroData(parsedUserData.intro);
        console.log(parsedUserData);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  useEffect(() => {
    const storedImage = localStorage.getItem("uploadedImage");
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);

  const handleImageUpload = (e) => {
    console.log("image upload");
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setImage(base64String);
        localStorage.setItem("uploadedImage", base64String); // Save to localStorage
      };
      reader.readAsDataURL(file);
    }
  };

  const updateButton = async () => {
    let updatedUserData = { ...userData, intro: "hello" };
    const response = await axios.post(
      "https://api.mcc-alumni.snaplogix.in/user/update_profile",
      updatedUserData
    );
    console.log(response);
  };
  const handleIntroData = (e) => {
    if (e.target.value.length <= maxChar) {
      setIntroData(e.target.value);
    }
  };
  const handleChangedData = async () => {
    const updatedUserData = { ...userData, intro: introData };
    console.log(updatedUserData);
    localStorage.setItem("userData", JSON.stringify(updatedUserData));
    const response = await axios.post(
      "https://api.mcc-alumni.snaplogix.in/user/update_profile",
      updatedUserData
    );
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  const handleCityChangeSubmit = async (e) => {
    const updatedUserData = { ...userData, city: city };
    console.log(updatedUserData);
    localStorage.setItem("userData", JSON.stringify(updatedUserData));
    const response = await axios.post(
      "https://api.mcc-alumni.snaplogix.in/user/update_profile",
      updatedUserData
    );
    console.log("city update");
    console.log(response);
  };
  const courseData = [
    {
      imgUrl:
        "https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg",
      courseName: "ABC Course Name",
      course: "Masters in arts",
      year: "2012 - 2026",
    },
    {
      imgUrl:
        "https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg",
      courseName: "ABC Course Name",
      course: "Masters in commerce",
      year: "2012 - 2020",
    },
    {
      imgUrl:
        "https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg",
      courseName: "ABC Course Name",
      course: "Masters in commerce",
      year: "2012 - 2020",
    },
    {
      imgUrl:
        "https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg",
      courseName: "ABC Course Name",
      course: "Masters in commerce",
      year: "2012 - 2020",
    },
    {
      imgUrl:
        "https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg",
      courseName: "ABC Course Name",
      course: "Masters in commerce",
      year: "2012 - 2020",
    },
  ];
  return (
    <div className="bg-white w-full h-[100vh] mt-24">
      <div className="flex m-5 mt-0 justify-between">
        <div id="left" className="w-[25%] m-4">
          <button className="flex bg-none text-sm items-center bg-zinc-200 border border-zinc-400 rounded-md p-2">
            <Image src={back} alt="back_btn" className="w-6 h-6 mr-2" />
            <p>Back</p>
          </button>
          <div className="">
            <div>
              {image ? (
                <Image
                  src={image}
                  alt="Uploaded"
                  width={300}
                  height={300}
                  style={{ height: "300px", marginTop: "10px" }}
                  className="rounded-full object-cover"
                />
              ) : (
                <Image
                  src={Dfprofile}
                  alt="Uploaded"
                  style={{ width: "300px", marginTop: "10px" }}
                />
              )}
            </div>
            <p>Update image:</p>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e)}
              className="flex bg-none text-sm items-center bg-zinc-200 border border-zinc-400 rounded-md p-2"
            />
          </div>

          {/* <button onClick={() => updateButton()}>Click</button> */}
          <div className="flex mb-2 pt-10 items-center text-black">
            <h4 className="font-semibold text-xl ">Intro</h4>
            <span className="ml-4">----------</span>
          </div>
          <textarea
            name=""
            rows={10}
            cols={40}
            id=""
            value={introData}
            onChange={(e) => handleIntroData(e)}
          ></textarea>
          <p className="text-right text-xs">
            {introData.length}/{maxChar}
          </p>
          <div>
            <button
              onClick={() => handleChangedData()}
              className="flex bg-none text-sm items-center bg-zinc-200 border border-zinc-400 rounded-md p-2"
            >
              Save changes
            </button>
          </div>
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
          <p className="text-xs mt-2 ml-2">Batch: {userData?.joiningBatch}</p>
          <div className="flex text-xs ml-2 gap-2 items-center">
            <p className="">City: </p>
            <input
              className=""
              value={city}
              onChange={(e) => handleCityChange(e)}
            />
            <button
              onClick={(e) => handleCityChangeSubmit(e)}
              className="flex bg-none items-center bg-zinc-200 border border-zinc-400 rounded-md p-2"
            >
              Save
            </button>
          </div>
          <div className="flex mb-2 pt-16 items-center">
            <h4 className="font-semibold text-4xl ">Course</h4>
            <span className="ml-4">----------</span>
          </div>
          <div className="grid grid-cols-2 w-[80%]">
            {userData?.furtherqualifications.map((course) => (
              <div className="flex m-4 pt-6">
                <Image
                  src={cap}
                  alt="hat"
                  className="w-20 p-5 bg-zinc-200 object-cover rounded-md mr-4 shadow-3xl"
                />
                <div className="flex flex-col">
                  {/* <b>{course.courseName}</b> */}
                  <b>{course.name}</b>
                  {/* <p>{course.course}</p> */}
                  <p>{course.type}</p>
                  {/* <p className="text-black font-semibold text-xs mt-4">
                    {course.year}
                  </p> */}
                  <p className="text-black font-semibold text-xs mt-4">
                    {course.period}
                  </p>{" "}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
