'use client';
import React, { useState } from "react";
import { HiEye, HiEyeOff } from 'react-icons/hi'; 
import { UserAuth } from './AuthContext';  // Import UserAuth context

const AuthForm = () => {
  const { googleSignIn, emailSignUp, emailSignIn } = UserAuth();  // Use UserAuth for actual Firebase auth
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{7,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      alert("Password must be at least 7 characters long, contain at least 1 capital letter, and at least 1 number.");
      return;
    }
    if (isSignUp) {
      emailSignUp(email, password, displayName);
    } else {
      emailSignIn(email, password);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">
        {isSignUp ? "Create an Account" : "Welcome Back"}
      </h2>
      <form onSubmit={handleSubmit} className="w-full space-y-6">
        {isSignUp && (
          <input
            type="text"
            placeholder="Username"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          required
        />
        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 pr-10"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            {showPassword ? (
              <HiEyeOff size={24} className="text-gray-700" />
            ) : (
              <HiEye size={24} className="text-gray-700" />
            )}
          </button>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </form>

      <div className="mt-6 space-y-3 w-full">
        <button
          onClick={googleSignIn}
          className="w-full py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-200"
        >
          Continue with Google
        </button>
        <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
          Continue with Facebook
        </button>
        <button className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-200">
          Continue with GitHub
        </button>
      </div>

      <p className="mt-6 text-gray-600">
        {isSignUp ? "Already have an account?" : "Don't have an account?"}
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="ml-2 text-blue-500 hover:text-blue-600"
        >
          {isSignUp ? "Sign In" : "Sign Up"}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;
