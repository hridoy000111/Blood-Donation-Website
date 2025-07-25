import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

import heroImage from "../assets/images/blood-hero-page.png";
import { DonorContext } from "../Context/DonorContext";
import { RequestContext } from "../Context/RequestContext";

const Home = () => {
  const { donors } = useContext(DonorContext);
  const { requests } = useContext(RequestContext);
  return (
    <div className="bg-gray-200 min-h-screen py-10 px-4">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 mb-16">
        {/* Left Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-red-700 mb-4">
            Blood Donation Website
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            <Typewriter
              words={[
                "A single drop of blood can make a huge difference. Help save lives by becoming a donor today.",
              ]}
              loop={0}
              cursor
              cursorStyle=""
              typeSpeed={100}
              deleteSpeed={0}
              delaySpeed={2000}
            />
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link to="/request">
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg shadow-md">
                Post a Request
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-gray-400 hover:bg-gray-500 text-red-700 px-6 py-2 rounded-lg shadow-md">
                Become a Donor
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2">
          <img
            src={heroImage}
            alt="Blood Donation"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-3xl font-bold text-red-600">{donors.length}</h3>
            <p className="text-gray-700">Donors Registered</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-3xl font-bold text-red-600">
              {requests.length}
            </h3>
            <p className="text-gray-700">Requests Fulfilled</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-3xl font-bold text-red-600">50+</h3>
            <p className="text-gray-700">Active Volunteers</p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h4 className="text-lg font-bold mb-2">1. Register</h4>
            <p className="text-gray-600">
              Sign up to become a donor or request blood.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h4 className="text-lg font-bold mb-2">2. Connect</h4>
            <p className="text-gray-600">
              Find matching donors or requests in your area.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h4 className="text-lg font-bold mb-2">3. Save Lives</h4>
            <p className="text-gray-600">
              Donate or receive blood and save lives.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          What People Say
        </h2>
        <div className="bg-white p-6 rounded shadow">
          <p className="italic text-gray-700">
            "Thanks to this platform, I got the blood I needed during an
            emergency. Truly life-saving!"
          </p>
          <p className="mt-2 font-semibold text-gray-800">- Mahin, Dhaka</p>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="max-w-xl mx-auto text-center mb-20">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
          <p className="font-bold">Emergency?</p>
          <p>
            Call our 24/7 helpline:{" "}
            <span className="font-semibold">017XXXXXXXX</span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white py-6 border-t">
        <div className="max-w-6xl mx-auto text-center text-gray-600 text-sm">
          <p>&copy; 2025 BloodDonationWebsite. All rights reserved.</p>
          <p className="mt-1">
            <Link to="/about" className="hover:underline">
              About
            </Link>{" "}
            |
            <Link to="/contact" className="hover:underline mx-2">
              Contact
            </Link>{" "}
            |
            <Link to="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
