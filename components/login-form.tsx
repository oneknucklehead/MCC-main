"use client";
import React, { useState } from "react";
import axios from "axios";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

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
    let newErrors = { email: "", password: "" };

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const validatePassword = () => {
    let valid = true;
    let newErrors = { email: "", password: "" };

    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleEmailSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateEmail()) {
      setStep(2);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validatePassword()) {
      try {
        const response = await axios.post(
          "https://api.mcc-alumni.snaplogix.in/auth/login",
          formData
        );
        if (response.status === 200) {
          setResponseMessage("Login successful. Welcome back!");
          router.push("/land"); // Redirect to dashboard or desired page after login
          console.log(response.data);
          localStorage.setItem("userData", JSON.stringify(response.data));
          // setUserData({ ...response.data });
          // console.log(userData);
        }
      } catch (error) {
        switch (error.response.status) {
          case 200:
            setResponseMessage("Login successful. Welcome back!");
            console.log(error);

            router.push("/land"); // Redirect to dashboard or desired page after login
            break;
          case 400:
            setResponseMessage(
              "Invalid request body. Missing email or password."
            );
            console.log(error);

            break;
          case 404:
            setResponseMessage("User does not exist.");
            console.log(error);

            break;
          default:
            setResponseMessage(
              "Unexpected error occurred. Please try again later."
            );
            console.log(error);
        }
        if (axios.isAxiosError(error)) {
          if (error.response) {
            setResponseMessage(`Error: ${error.response.data.message}`);
            console.log(error);
          } else if (error.request) {
            setResponseMessage(
              "No response received from server. Please try again later."
            );
            console.log(error);
          } else {
            setResponseMessage(`Error: ${error.message}`);
          }
          console.log(error);
        } else {
          setResponseMessage(`An unexpected error occurred: ${error}`);
          console.log(error);
        }
      }
    }
  };

  const handleSignupClick = () => {
    router.push("/signup"); // Navigate to the signup page
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome Back
      </h2>
      <p className="text-neutral-600 text-xs max-w-sm mt-2 dark:text-neutral-300">
        Please enter your credentials to log in.
      </p>

      {responseMessage && (
        <div className="mb-4 p-2 text-center text-sm text-red-500">
          {responseMessage}
        </div>
      )}

      {step === 1 && (
        <form className="my-8" onSubmit={handleEmailSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
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

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] text-sm"
            type="submit"
          >
            Next &rarr;
            <BottomGradient />
          </button>

          <div className="text-center mt-4 text-xs">
            <span className="text-neutral-600 dark:text-neutral-300">
              Don't have an account?
            </span>
            <button
              type="button"
              onClick={handleSignupClick}
              className="text-blue-500 dark:text-blue-400 underline ml-2 text-sm"
            >
              Sign up
            </button>
          </div>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
      )}

      {step === 2 && (
        <form className="my-8" onSubmit={handlePasswordSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="••••••"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] text-sm"
            type="submit"
          >
            Log in &rarr;
            <BottomGradient />
          </button>
        </form>
      )}
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
