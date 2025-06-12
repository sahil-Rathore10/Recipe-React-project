import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";
import Footer from "../components/Footer";

const Fav = () => {
  const favorite = JSON.parse(localStorage.getItem("fav") || []);

  const renderrecipes = favorite.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return (
    <div className="flex flex-wrap px-10 py-10 text-black">
      {favorite.length > 0 ? (
        renderrecipes
      ) : (
        <div className="w-full flex justify-center items-center h-[50vh]">
          <p className="text-2xl font-semibold text-gray-400">
            No Favorite found!
          </p>
        </div>
      )}
    </div>
  );
};

export default Fav;
