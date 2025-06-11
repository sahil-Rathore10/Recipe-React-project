import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // using react-icons for hamburger

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="flex justify-between items-center p-6 rounded-full border-2 relative">
      <h1 className="text-2xl font-[Helvetica] font-bold text-green-600">
        FlavorFiesta
      </h1>

      {/* Hamburger for small & medium screens */}
      <div
        className="md:hidden cursor-pointer text-3xl text-green-600"
        onClick={toggleMenu}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Nav Links for large screens */}
      <div className="hidden md:flex justify-between gap-16">
        {["/", "/recipes", "/about", "/contact", "/fav"].map((path, idx) => (
          <NavLink
            key={idx}
            className={({ isActive }) =>
              isActive ? "text-lg text-green-300" : "text-green-500 text-lg"
            }
            to={path}
          >
            {["Home", "Recipes", "About", "Contact", "Favorite"][idx]}
          </NavLink>
        ))}
      </div>

      {/* Create Recipe Button */}
      <NavLink
        to="/create-recipe"
        className={({ isActive }) =>
          isActive
            ? "text-green-300 border py-2 px-4 rounded hidden md:block"
            : "text-green-500 border-green-500 border py-2 px-4 rounded hidden md:block"
        }
      >
        Create Recipe
      </NavLink>

      {/* Dropdown menu for small/medium screens */}
      {isOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden z-10">
          {["/", "/recipes", "/about", "/contact", "/fav"].map((path, idx) => (
            <NavLink
              key={idx}
              className={({ isActive }) =>
                isActive
                  ? "text-lg text-green-300 my-2"
                  : "text-green-500 text-lg my-2"
              }
              to={path}
              onClick={() => setIsOpen(false)}
            >
              {["Home", "Recipes", "About", "Contact", "Favorite"][idx]}
            </NavLink>
          ))}
          <NavLink
            to="/create-recipe"
            className={({ isActive }) =>
              isActive
                ? "text-green-300 border py-2 px-4 rounded mt-2"
                : "text-green-500 border-green-500 border py-2 px-4 rounded mt-2"
            }
            onClick={() => setIsOpen(false)}
          >
            Create Recipe
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
