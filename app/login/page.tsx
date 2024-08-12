import React from "react";
import { LoginForm } from "@/components/login-form";
import Nav from "@/components/nav";

const LoginPage = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-[#004225]">
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
