"use client";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import Spinner from "../../Components/Spinner";

const ProfilePage = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="p-4 min-h-screen bg-gray-800 flex justify-center items-center">
      {loading ? (
        <Spinner />
      ) : user ? (
        <div className="bg-gray-300 shadow-lg rounded-lg p-6 w-full max-w-sm text-center">
          <img
            src={user.photoURL}
            alt="Profile Picture"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            {user.displayName}
          </h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="mt-4 text-sm text-gray-500">
            Welcome to your profile page! You are logged in using your Google account.
          </p>
        </div>
      ) : (
        <p className="text-red-500">You must be logged in to view this page - protected route.</p>
      )}
    </div>
  );
};

export default ProfilePage;
