import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Menu, X } from "lucide-react"; // lucide-react for icons (or use heroicons)

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-600 text-pink-400 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl font-bold">
          <Typewriter
            words={["BloodDonation"]}
            loop={0}
            cursor
            cursorStyle=""
            typeSpeed={300}
            deleteSpeed={0}
            delaySpeed={3000}
          />
        </h1>

        {/* Hamburger menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`flex flex-col md:flex-row md:items-center gap-4 md:gap-6 absolute md:static bg-gray-600 md:bg-transparent w-full md:w-auto left-0 px-4 md:px-0 transition-all duration-300 ease-in ${
            isOpen
              ? "top-16 opacity-100"
              : "top-[-490px] opacity-0 md:opacity-100"
          }`}
        >
          <Link
            className="hover:text-yellow-500 hover:scale-105 transition-all duration-300"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-yellow-500 hover:scale-105 transition-all duration-300"
            to="/request"
          >
            Blood Request
          </Link>
          <Link
            className="hover:text-yellow-500 hover:scale-105 transition-all duration-300"
            to="/requestlist"
          >
            RequestList
          </Link>
          <Link
            className="hover:text-yellow-500 hover:scale-105 transition-all duration-300"
            to="/donors"
          >
            DonorsList
          </Link>

          <Link
            className="hover:text-yellow-500 hover:scale-105 transition-all duration-300"
            to="/register"
          >
            DonorRegister
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
