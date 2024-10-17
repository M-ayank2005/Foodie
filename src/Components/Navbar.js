'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { UserAuth } from "../app/context/AuthContext";
import DarkModeToggle from './DarkModeToggle';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const { user, logOut, loading } = UserAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [imgError, setImgError] = useState(false);

    const handleSignOut = async () => {
        try {
            await logOut();
            setIsOpen(false);
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    const NavLink = ({ href, children }) => (
        <Link
            href={href}
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-sm hover:bg-yellow-600 rounded-lg transition-colors duration-200"
        >
            {children}
        </Link>
    );

    const AuthButton = ({ onClick, children }) => (
        <button
            onClick={onClick}
            className="w-full md:w-auto px-6 py-2 bg-white text-yellow-500 hover:bg-yellow-100 
            rounded-full font-semibold shadow-md transition-all duration-200 
            hover:shadow-lg text-sm"
        >
            {children}
        </button>
    );

    return (
        <nav className="bg-yellow-500 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo and Brand */}
                    <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-10 h-10 relative">
                            <Image
                                src="https://ih0.redbubble.net/image.465217072.5837/sticker,375x360-bg,ffffff.u3.png"
                                alt="Logo"
                                fill
                                className="rounded-full bg-white p-1 object-contain"
                                onError={() => setImgError(true)}
                                unoptimized // Add this if the external image source has issues with Next.js image optimization
                            />
                        </div>
                        <Link 
                            href="/"
                            className="text-white font-mono font-bold text-2xl hover:text-yellow-200 
                            transition-colors duration-200"
                        >
                            Foodie
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="flex space-x-4 items-center text-white">
                            <NavLink href="/">Home</NavLink>
                            <NavLink href="/about">About</NavLink>
                            <NavLink href="/menu">Menu</NavLink>
                            <NavLink href="/contact">Contact</NavLink>
                            <div className="px-2">
                                <DarkModeToggle />
                            </div>
                        </div>
                        
                        {!loading && (
                            <div className="flex space-x-3 items-center">
                                {!user ? (
                                    <Link href="/LoginPage">
                                        <AuthButton>Login</AuthButton>
                                    </Link>
                                ) : (
                                    <>
                                        <Link href="/profile">
                                            <AuthButton>Profile</AuthButton>
                                        </Link>
                                        <AuthButton onClick={handleSignOut}>
                                            Sign Out
                                        </AuthButton>
                                    </>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-yellow-200 focus:outline-none"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-yellow-500 shadow-inner">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/about">About</NavLink>
                        <NavLink href="/menu">Menu</NavLink>
                        <NavLink href="/contact">Contact</NavLink>
                        <div className="px-4 py-2">
                            <DarkModeToggle />
                        </div>
                        
                        {!loading && (
                            <div className="space-y-2 px-4 py-2">
                                {!user ? (
                                    <Link href="/LoginPage" className="block">
                                        <AuthButton>Login</AuthButton>
                                    </Link>
                                ) : (
                                    <>
                                        <Link href="/profile" className="block">
                                            <AuthButton>Profile</AuthButton>
                                        </Link>
                                        <AuthButton onClick={handleSignOut}>
                                            Sign Out
                                        </AuthButton>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;