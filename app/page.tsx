"use client";
import React from "react";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/signup");
    }, 3000); // Delay of 1 second (1000 milliseconds)

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-zinc-900">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
        Welcome to MCC Alumni Portal
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mt-4">
        Redirecting to signup...
      </p>
    </div>
  );
};

export default HomePage;
