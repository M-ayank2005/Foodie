"use client";
import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { Mail, User, Shield } from "lucide-react";

const ProfilePage = () => {
  const { user } = UserAuth();
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  const handleImageError = () => {
    setImageError(true);
  };

  const getInitials = (name) => {
    if (!name) return '?';
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black">
        <Shield className="w-16 h-16 text-gray-400 mb-4" />
        <h1 className="text-2xl font-semibold text-gray-700">Protected Route</h1>
        <p className="text-gray-500 mt-2">You must be logged in to view this page</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-gray-800 rounded-xl my-32 shadow-md overflow-hidden">
        {/* Header Section */}
        <div className="p-8 border-b border-gray-200">
          <div className="flex items-center space-x-6">
            {user.photoURL && !imageError ? (
              <img
                src={user.photoURL}
                alt={user.displayName}
                onError={handleImageError}
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                {getInitials(user.displayName)}
              </div>
            )}
            <div>
              <h1 className="text-2xl font-bold text-gray-300">
                {user.displayName || 'No Name'}
              </h1>
              <div className="flex items-center mt-2 text-gray-500">
                <Mail className="w-4 h-4 mr-2" />
                <span>{user.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          <div className="bg-gray-400 rounded-lg p-6">
            <div className="flex items-center">
              <User className="w-5 h-5 text-blue-500 mr-2" />
              <h2 className="text-lg font-semibold text-blue-900">Account Details</h2>
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex items-center text-gray-600">
                <span className="font-medium mr-2">Login Provider:</span>
                <span className="capitalize">{user.providerData[0]?.providerId || 'email'}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <span className="font-medium mr-2">Account Created:</span>
                <span>{user.metadata?.creationTime ? new Date(user.metadata.creationTime).toLocaleDateString() : 'N/A'}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <span className="font-medium mr-2">Last Sign In:</span>
                <span>{user.metadata?.lastSignInTime ? new Date(user.metadata.lastSignInTime).toLocaleDateString() : 'N/A'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;