import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-6 rounded-full border-2">
      <h1 className="text-2xl font-[Helvetica] font-bold text-green-600">
        FlavorFiesta
      </h1>
      <div className="flex justify-between gap-16">
        <NavLink
          className={(e) =>
            e.isActive ? "text-lg text-green-300" : "text-green-500 text-lg"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={(e) =>
            e.isActive ? "text-lg text-green-300" : "text-green-500 text-lg"
          }
          to="/recipes"
        >
          Recipes
        </NavLink>
        <NavLink
          className={(e) =>
            e.isActive ? "text-lg text-green-300" : "text-green-500 text-lg"
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={(e) =>
            e.isActive ? "text-lg text-green-300" : "text-green-500 text-lg"
          }
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className={(e) =>
            e.isActive ? "text-lg text-green-300" : "text-green-500 text-lg"
          }
          to="/fav"
        >
          Favorite
        </NavLink>
      </div>
      <NavLink
        to="/create-recipe"
        className={(e) =>
          e.isActive
            ? "text-green-300 border py-2 px-4 rounded"
            : "text-green-500 border-green-500 border py-2 px-4 rounded"
        }
      >
        Create Recipe
      </NavLink>
    </div>
  );
};

export default Navbar;
