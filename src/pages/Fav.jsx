import React, { useState, useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";
import Footer from "../components/Footer";

const Fav = () => {
  const favorite = JSON.parse(localStorage.getItem("fav") || []);

  // const [favorite, setFavorite] = useState([]);

  // useEffect(() => {
  //   const favData = JSON.parse(localStorage.getItem("fav")) || [];
  //   setFavorite(favData);
  // }, []); // Load only once when component mounts

  const renderrecipes = favorite.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return (
    <div className="grid gap-6 px-10 py-10 text-black  grid-cols-1  md:grid-cols-3 lg:grid-cols-4">
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
