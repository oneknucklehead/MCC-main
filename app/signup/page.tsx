"use client";

import React, { useEffect, useRef, useState } from "react";
import MCC_logo from "@/assets/mcc_logo.svg";
import img1 from "@/assets/slider_img/out_slider/File_1.jpeg";
import img2 from "@/assets/slider_img/out_slider/File_2.jpeg";
import img3 from "@/assets/slider_img/out_slider/File_3.jpeg";
import Image from "next/image";
import Slider from "@/components/Slider";
import { cn } from "@/lib/utils";

import leftA from "@/assets/left.svg";
import rightA from "@/assets/right.svg";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useRouter } from "next/navigation";

const Signup: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3];
  const [progress, setProgress] = useState(0);
  const [email, setEmail] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const [errors, setErrors] = useState({
    email: "",
    regNumber: "",
  });

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  const slides = [
    {
      image: img1,
      description: "Description for Slide 1",
    },
    {
      image: img2,
      description: "Description for Slide 2",
    },
    {
      image: img3,
      description: "Description for Slide 3",
    },
  ];

  const validateEmailAndRegistration = () => {
    let valid = true;
    let newErrors = { email: "", regNumber: "" };

    if (!email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
      valid = false;
    }

    if (!regNumber.trim()) {
      newErrors.regNumber = "Registration number is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmailAndRegistration()) {
      console.error("Invalid email address or registration number");
      return;
    }

    try {
      const response = await axios.post(
        "https://api.mcc-alumni.snaplogix.in/auth/first-signup",
        {
          email,
          regNumber,
        }
      );

      console.log(response.status);

      switch (response.status) {
        case 200:
          setResponseMessage(
            "Thank you! Please check your email for further steps of the signup process."
          );
          break;
        case 400:
          setResponseMessage(
            "Bad request: Missing fields. Please ensure all required fields are filled."
          );
          break;
        case 404:
          setResponseMessage(
            "Alumni not found or email mismatch. Please check your information and try again."
          );
          break;
        default:
          setResponseMessage(
            "Unexpected error occurred. Please try again later."
          );
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          setResponseMessage(`Error: ${error.response.data.message}`);
        } else if (error.request) {
          setResponseMessage(
            "No response received from server. Please try again later."
          );
        } else {
          setResponseMessage(`Error: ${error.message}`);
        }
      } else {
        setResponseMessage(`An unexpected error occurred: ${error}`);
      }
      console.error(error);
    }
  };

  const handleLoginClick = () => {
    router.push("/login"); // Navigate to the login page
  };

  const startSlider = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
  };

  const resetProgress = () => {
    setProgress(0);
    setTimeout(() => setProgress(2), 100); // Ensure smooth transition
  };
  useEffect(() => {
    startSlider();
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 100);

    return () => {
      clearInterval(intervalRef.current!);
      clearInterval(progressInterval);
    };
  }, []);

  const nextSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrentIndex((currentIndex + 1) % images.length);
    resetProgress();
    startSlider();
  };

  const prevSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    resetProgress();
    startSlider();
  };

  useEffect(() => {
    if (progress === 0) {
      setProgress(2);
    }
  }, [currentIndex]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="bg-black text-white flex flex-col h-screen">
      <header className="flex w-full justify-between items-center p-5 bg-[#002f1c] text-white h-24 border-b-2 border-white shadow-[0_0_10px_rgba(255,215,0,0.5)]">
        {/* <Image src={logo} alt="Logo" className="h-[3vw]" /> */}

        <Image src={MCC_logo} alt="MCC logo" className="p-6 w-[44vw]" />
        <nav className="flex items-center">
          <a
            href="/signup"
            className="ml-4 px-4 py-2 bg-black text-white rounded-lg text-base shadow-[0_0_5px_rgba(255,215,0,0.5)]"
          >
            Sign Up
          </a>
          <a
            href="/login"
            className="ml-4 px-4 py-2 bg-black text-white rounded-lg text-base shadow-[0_0_5px_rgba(255,215,0,0.5)]"
          >
            Login
          </a>
        </nav>
      </header>

      <main className="flex flex-1">
        <section className="carousel flex-4 bg-[#002f1c] relative w-full h-full border-r-2 border-white shadow-[0_0_10px_rgba(255,215,0,0.5)]">
          {images.map((img, index) => (
            <div
              className={`absolute w-full h-full transition-opacity duration-1000
              ${currentIndex === index ? "opacity-100" : "opacity-0"}
              `}
            >
              <Image
                alt={`Slide ${index + 1}`}
                src={img}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}

          {/* <div className="carousel-controls absolute top-1/2 w-full flex justify-between transform -translate-y-1/2">
            <button
              className="carousel-prev bg-transparent border-none text-white p-2 text-3xl opacity-60 hover:opacity-100"
              onClick={() =>
                setCurrentIndex(
                  (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
                )
              }
            >
              &lt;
            </button>
            <button
              className="carousel-next bg-transparent border-none text-white p-2 text-3xl opacity-60 hover:opacity-100"
              onClick={() =>
                setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
              }
            >
              &gt;
            </button>
          </div> */}
          <div className="absolute bottom-4 right-4 flex space-x-8">
            <button onClick={prevSlide} className="px-1 rounded">
              <Image src={leftA} alt="" className="w-8 h-8" />
            </button>
            <button onClick={nextSlide} className="bx-2 rounded">
              <Image src={rightA} alt="" className="w-8 h-8" />
            </button>
          </div>
          <div className="absolute top-0 left-0 w-full h-1 bg-gray-200">
            <div
              className="h-full bg-blue-500"
              style={{
                width: `${progress}%`,
                transition: "width 100ms linear",
              }}
            ></div>
          </div>
        </section>
        <section className="signup-form flex-3 bg-[#121212] p-10 flex flex-col justify-center relative">
          <div className="welcome-message text-center text-2xl mb-6 absolute top-10 left-1/2 transform -translate-x-1/2">
            Welcome to the MCC Alumni Portal
          </div>
          <div className="form-box bg-black bg-opacity-80 p-10 rounded-lg shadow-[0_0_10px_rgba(255,215,0,0.5)]">
            <h2 className="text-center text-lg mb-6">Sign Up</h2>
            <form onSubmit={handleFormSubmit}>
              <LabelInputContainer className="mb-4 text-white">
                <Label htmlFor="email" className=" text-white block mb-2">
                  Registered Email:
                </Label>

                <Input
                  type="email"
                  placeholder="youremail@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  name="email"
                  required
                  className="w-full mb-6 p-3 bg-[#333] text-white rounded border border-[#002f1c]"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </LabelInputContainer>
              <LabelInputContainer className="mb-4 pt-4">
                <Label htmlFor="reg-number" className="text-white block mb-2">
                  Registration Number:
                </Label>

                <Input
                  type="text"
                  id="reg-number"
                  name="reg-number"
                  placeholder="ex.xxx"
                  value={regNumber}
                  onChange={(e) => setRegNumber(e.target.value)}
                  required
                  className="w-full mb-6 p-3 bg-[#333] text-white rounded border border-[#002f1c]"
                />
                {errors.regNumber && (
                  <p className="text-red-500 text-sm">{errors.regNumber}</p>
                )}
              </LabelInputContainer>
              <button
                type="submit"
                className="bg-[#28A745] text-white p-3 rounded w-full"
              >
                Register
              </button>
              {responseMessage && (
                <p className="text-xs mt-4">{responseMessage}</p>
              )}
            </form>
            <div className="login-message mt-6 text-center text-sm">
              Already have an account?{" "}
              <button
                type="button"
                onClick={handleLoginClick}
                className="text-blue-500 font-bold underline ml-2"
              >
                Log in
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Signup;

// import React from "react";
// import { SignupForm } from "@/components/signup-form";
// import Nav from "@/components/nav";

// const SignupPage = () => {
//   return (
//     <div className="max-h-[100vh]">
//       <Nav />
//       <div className="grid">
//         <SignupForm />
//       </div>
//     </div>
//   );
// };

// export default SignupPage;
