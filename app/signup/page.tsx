import React from "react";
import { SignupForm } from "@/components/signup-form";
import Nav from "@/components/nav";

const SignupPage = () => {
  return (
    <div className="max-h-[100vh]">
      <Nav />
      <div className="grid">
        <SignupForm />
      </div>
    </div>
  );
};

export default SignupPage;
