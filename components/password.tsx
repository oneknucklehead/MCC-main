"use client";
import React, { useState, Suspense } from "react";
import axios from "axios";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

export function PasswordSetupForm() {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    password: "",
    confirmPassword: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const searchParams = useSearchParams();
  const userID = searchParams.get("userID");

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

  const validatePassword = () => {
    let valid = true;
    let newErrors = { password: "", confirmPassword: "" };

    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      valid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handlePasswordSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validatePassword()) {
      try {
        const response = await axios.post(
          "https://api.mcc-alumni.snaplogix.in/auth/set-password",
          { userID, password: formData.password }
        );

        switch (response.status) {
          case 200:
            setResponseMessage("Password set successfully!");
            // Redirect to login page after a successful password setup
            router.push("/login");
            break;
          case 400:
            setResponseMessage(
              "Invalid request body. Missing userID or password."
            );
            break;
          case 404:
            setResponseMessage("User not found.");
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
    }
  };

  const handleLoginClick = () => {
    router.push("/login"); // Navigate to the login page
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Setup Your Password
      </h2>
      <p className="text-neutral-600 text-xs max-w-sm mt-2 dark:text-neutral-300">
        Please enter your new password to complete the signup process.
      </p>

      <form className="my-8" onSubmit={handlePasswordSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            placeholder="••••••••"
            type="password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
          )}
        </LabelInputContainer>
        {responseMessage && (
          <p className="text-green-500 text-sm flex justify-center">
            {responseMessage}
          </p>
        )}

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] text-sm"
          type="submit"
        >
          Setup Password &rarr;
          <BottomGradient />
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
      </form>
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







