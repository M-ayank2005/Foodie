// app/login/page.jsx
'use client';
import React from "react";
import AuthForm from "../../Components/AuthForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center">
        {/* Logo or Brand Section */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-2">Welcome to Foodie</h1>
          <p className="text-blue-100">Sign in to access your account</p>
        </div>
        
        {/* Auth Form Container */}
        <div className="w-full max-w-md bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl p-8 space-y-6 border border-white/20">
          <AuthForm />
        </div>
        
        {/* Footer */}
        <div className="mt-8 text-center text-sm text-blue-100">
          <p>© 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;