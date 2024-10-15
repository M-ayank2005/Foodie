import React from "react";
import AuthForm from "../auth/page";

const Page = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg sm:max-w-md">
        <AuthForm />
      </div>
    </div>
  );
};

export default Page;
