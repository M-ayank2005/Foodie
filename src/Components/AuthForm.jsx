'use client';
import React, { useState } from "react";
import { UserAuth } from "../../src/app/context/AuthContext";

const AuthForm = () => {
  const { user, googleSignIn, emailSignUp, emailSignIn } = UserAuth();
  const [isSignUp, setIsSignUp] = useState(true); // Switch between sign-up and login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      emailSignUp(email, password, displayName);
    } else {
      emailSignIn(email, password);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">
        {isSignUp ? "Sign Up" : "Sign In"}
      </h2>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        {isSignUp && (
          <input
            type="text"
            placeholder="Username"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="p-2 border border-gray-300 rounded"
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded"
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </form>
      <div className="mt-4">
        <button
          onClick={googleSignIn}
          className="py-2 px-4 bg-red-500 text-white rounded"
        >
          Continue with Google
        </button>
      </div>
      <p className="mt-4">
        {isSignUp ? "Already have an account?" : "Don't have an account?"}
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="text-blue-500 ml-2"
        >
          {isSignUp ? "Sign In" : "Sign Up"}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;
