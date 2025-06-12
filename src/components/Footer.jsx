import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Footer = () => {
  //   const navigate = useNavigate;

  return (
    <footer className="bg-green-50 text-gray-700 pt-10 pb-6 px-6">
      {/* Top Part: Newsletter & Links */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 max-w-7xl mx-auto">
        {/* Left Side: Website Name & Email Subscribe */}
        <div className="lg:w-1/3 space-y-4">
          <h2 className="text-3xl font-bold text-green-600 font-[Helvetica]">
            FlavorFiesta
          </h2>
          <p className="text-gray-600">
            Join our newsletter to get delicious recipes delivered straight to
            your inbox!
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-l border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button className="bg-green-500 text-white px-4 rounded-r hover:bg-green-600">
              Subscribe
            </button>
          </div>
        </div>

        {/* Center Part: Navigation & Categories */}
        <div className="lg:w-1/3 flex justify-between">
          {/* Navigation Links */}
          <div className="lg:ml-20 ml-4">
            <h3 className="text-xl font-semibold mb-4 text-green-700">
              Navigate
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-green-600 font-semibold">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-green-600 font-semibold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/recipes"
                  className="hover:text-green-600 font-semibold"
                >
                  Recipes
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-green-600 font-semibold"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/fav" className="hover:text-green-600 font-semibold">
                  Favorite
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-700">
              Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-600 font-semibold">
                  Breakfast
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 font-semibold">
                  Lunch
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 font-semibold">
                  Dinner
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 font-semibold">
                  Drink
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-600 font-semibold">
                  Dessert
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side: Follow Me */}
        <div className="lg:w-1/3 space-y-4 ml-8">
          <h3 className="text-xl font-semibold text-green-700">Follow Me</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-green-200 text-gray-700 hover:bg-green-300 p-3 rounded-full"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-green-200 text-gray-700 hover:bg-green-300 p-3 rounded-full"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-green-200 text-gray-700 hover:bg-green-300 p-3 rounded-full"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="bg-green-200 text-gray-700 hover:bg-green-300 p-3 rounded-full"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Part: Copyright */}
      <div className="mt-10 border-t border-gray-300 pt-4 text-center text-sm text-gray-500">
        © 2025 FlavorFiesta. All rights reserved. Designed with ❤️ by Sahil
        Rathore.
      </div>
    </footer>
  );
};

export default Footer;
