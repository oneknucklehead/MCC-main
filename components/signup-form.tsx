"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

import axios from "axios";

import Slider from "@/components/Slider";

import Link from "next/link";

export function SignupForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    regNumber: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    regNumber: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: "",
    }));
  };

  const validateEmail = () => {
    let valid = true;
    let newErrors = { email: "", regNumber: "" };

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
      valid = false;
    }

    if (!formData.regNumber.trim()) {
      newErrors.regNumber = "Registration number is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail()) {
      console.error("Invalid email address");
      return;
    }

    try {
      const response = await axios.post(
        "https://api.mcc-alumni.snaplogix.in/auth/first-signup",
        formData
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
    setStep(2);
  };

  const handleLoginClick = () => {
    router.push("/login"); // Navigate to the login page
  };

  return (
    <div className="grid grid-cols-12 bg-[#004225]">
      <div
        className="col-span-8 h-fit"
        style={{
          boxShadow: "0 0 10px #FFD700",
        }}
      >
        <Slider />
      </div>
      <div className="col-span-4 flex justify-center border-l-2 border-white p-10 h-[100vh] items-center bg-[#121212]">
        <div
          className="text-white max-w-md w-full rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-black"
          style={{
            boxShadow: "0 0 10px #FFD700",
          }}
        >
          {step === 1 && (
            <form onSubmit={handleEmailSubmit}>
              <div className="my-6 pb-16">
                <h2 className="font-bold text-xl text-white">
                  Welcome to MCC Alumni Portal
                </h2>
                <p className="text-white text-xs max-w-sm mt-2">
                  Login if you have an existing account
                </p>
              </div>
              <LabelInputContainer className="mb-4 text-white">
                <Label htmlFor="email" className="text-white">
                  Email Address
                </Label>
                <Input
                  id="email"
                  placeholder="youremail@domain.com"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </LabelInputContainer>
              <LabelInputContainer className="mb-4 pt-4">
                <Label htmlFor="regNumber" className="text-white">
                  Registration Number
                </Label>
                <Input
                  id="regNumber"
                  placeholder="ex.xxx"
                  type="text"
                  value={formData.regNumber}
                  onChange={handleInputChange}
                />
                {errors.regNumber && (
                  <p className="text-red-500 text-sm">{errors.regNumber}</p>
                )}
              </LabelInputContainer>

              <button
                className="bg-[#28A745] relative group/btn w-full text-white rounded-md h-10 font-medium text-sm"
                type="submit"
              >
                Next &rarr;
              </button>

              <div className="text-center mt-4 text-xs">
                <span className="text-neutral-600 dark:text-neutral-300">
                  Already have an account?
                </span>
                <button
                  type="button"
                  onClick={handleLoginClick}
                  className="text-blue-500 dark:text-blue-400 underline ml-2"
                >
                  Log in
                </button>
              </div>

              <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            </form>
          )}

          {step === 2 && (
            <div className="my-16 text-center">
              <p className="text-[4rem] font-semibold text-neutral-800 dark:text-neutral-200">
                {responseMessage}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
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
