import React, { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import { useParams } from "react-router-dom";

const Singlerecipe = () => {
  const { data } = useContext(recipecontext);
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);

  return recipe ? <div>Singlerecipe</div> : "Loading...";
};

export default Singlerecipe;
