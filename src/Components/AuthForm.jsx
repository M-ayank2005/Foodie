// app/components/AuthForm.jsx
"use client";
import React, { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { UserAuth } from "../app/context/AuthContext";

const AuthForm = () => {
  const { googleSignIn, emailSignUp, emailSignIn, loading } = UserAuth();
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!?])[A-Za-z\d@#$%^&*!?]{7,}$/;
    return passwordRegex.test(password);
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validatePassword(password)) {
      setError(
        "Password must be at least 7 characters long, contain at least 1 capital letter, and at least 1 number."
      );
      return;
    }

    try {
      if (isSignUp) {
        await emailSignUp(email, password, displayName);
      } 
      else {
        await emailSignIn(email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="space-y-6">
      {/* Form Header */}
      <div className="space-y-2 ">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
          {isSignUp ? "Create Account" : "Sign In"}
        </h2>
        <p className="text-sm text-gray-500">
          {isSignUp
            ? "Join us today and start your journey"
            : "Welcome back! Please enter your details"}
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 text-red-800 rounded-lg p-4 text-sm">
          {error}
        </div>
      )}

      {/* Auth Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {isSignUp && (
          <div className="space-y-1">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900 text-sm placeholder-gray-400"
              placeholder="Enter your username"
              required
            />
          </div>
        )}

        <div className="space-y-1">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900 text-sm placeholder-gray-400"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-gray-900 text-sm placeholder-gray-400 pr-10"
              placeholder="Enter your password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <HiEyeOff className="w-5 h-5" />
              ) : (
                <HiEye className="w-5 h-5" />
              )}
            </button>
          </div>
          <p className="mt-1 text-xs text-gray-500">
            Password must be at least 7 characters with 1 capital letter and 1
            number
          </p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Processing...
            </>
          ) : isSignUp ? (
            "Create Account"
          ) : (
            "Sign In"
          )}
        </button>
      </form>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      {/* Google Sign In */}
      <button
        onClick={handleGoogleSignIn}
        disabled={loading}
        className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-700 hover:bg-gray-50 transition-colors duration-200 space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FcGoogle className="w-5 h-5" />
        <span>Google</span>
      </button>

      {/* Toggle Sign In/Up */}
      <p className="text-center text-sm text-gray-600">
        {isSignUp ? "Already have an account?" : "Don't have an account?"}
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          type="button"
          className="ml-1 text-blue-600 hover:text-blue-700 font-medium"
        >
          {isSignUp ? "Sign In" : "Sign Up"}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;
