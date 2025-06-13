import React, { useContext, useEffect, useState } from "react";
import { recipecontext } from "../context/RecipeContext";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Singlerecipe = () => {
  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );
  const { data, setData } = useContext(recipecontext);
  const navigate = useNavigate();
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: recipe?.title,
      chef: recipe?.chef,
      image: recipe?.image,
      category: recipe?.category,
      desc: recipe?.desc,
      ingredients: recipe?.ingredients,
      instructions: recipe?.instructions,
    },
  });

  const UpdateHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };
    localStorage.setItem("recipes", JSON.stringify(copydata));

    setData(copydata);

    toast.success("Recipe Updated!");
  };

  const DeleteHandler = () => {
    const filterdata = data.filter((r) => r.id != params.id);
    setData(filterdata);
    localStorage.setItem("recipes", JSON.stringify(filterdata));

    // Remove from favorites
    const filterfav = favorite.filter((f) => f.id != params.id);
    setFavorite(filterfav);
    localStorage.setItem("fav", JSON.stringify(filterfav));
    toast.success("Recipe Delete!");
    navigate("/recipes");
  };

  const FavHandler = () => {
    const copyfav = [...favorite];
    copyfav.push(recipe);
    setFavorite(copyfav);
    localStorage.setItem("fav", JSON.stringify(copyfav));
  };

  const UnFavHandler = () => {
    const filterfav = favorite.filter((f) => f.id != recipe?.id);
    setFavorite(filterfav);
    localStorage.setItem("fav", JSON.stringify(filterfav));
  };

  // useEffect(() => {
  //   console.log("Singlerecipe.jsx Mounted");

  //   return () => {
  //     console.log("Singlerecipe.jsx Mounted");
  //   };
  // }, []);

  return recipe ? (
    <div className="w-full flex p-6">
      <div className="relative left w-1/2 p-10 flex-col justify-items-center">
        {favorite.find((f) => f.id == recipe?.id) ? (
          <i
            onClick={UnFavHandler}
            className="absolute right-[5%] text-3xl text-yellow-400 ri-star-fill"
          ></i>
        ) : (
          <i
            onClick={FavHandler}
            className="absolute right-[5%] text-3xl text-yellow-400 ri-star-line"
          ></i>
        )}
        <h1 className="text-4xl mb-2 font-bold text-black">{recipe.title}</h1>
        <img
          className="h-[30vh] w-[20vw] mb-2 rounded"
          src={recipe.image}
          alt=""
        />
        <h2 className="text-red-500 mb-2">
          <span className="text-black font-bold">Chef Name: </span>
          {recipe.chef}
        </h2>
        <h2 className="text-red-500 mb-2">
          <span className="text-black font-bold">Category: </span>
          {recipe.category}
        </h2>
        <p className="text-black mb-2 tracking-tight">
          <span className="text-black font-bold">Description:</span>{" "}
          {recipe.desc}
        </p>
        <p className="text-black mb-2 tracking-tight">
          <span className="text-black font-bold">Ingredients:</span>{" "}
          {recipe.ingredients}
        </p>
        <p className="text-black mb-2 tracking-tight">
          <span className="text-black font-bold">Instructions:</span>{" "}
          {recipe.instructions}
        </p>
      </div>
      <div className="right border-2 text-black w-1/2 p-10">
        <form onSubmit={handleSubmit(UpdateHandler)}>
          <label
            htmlFor="image"
            className="block font-semibold mb-1 text-gray-700"
          >
            Image URL
          </label>
          <input
            type="url"
            id="image"
            className="border-b border-green-400 outline-none p-2 w-full mb-2"
            {...register("image")}
            placeholder="Enter Image URL"
          />

          <label
            htmlFor="title"
            className="block font-semibold mb-1 text-gray-700"
          >
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            className="border-b border-green-400 outline-none p-2 w-full mb-2"
            {...register("title")}
            placeholder="Enter Recipe Title"
          />

          <label
            htmlFor="chef"
            className="block font-semibold mb-1 text-gray-700"
          >
            Chef Name
          </label>
          <input
            type="text"
            id="chef"
            className="border-b border-green-400 outline-none p-2 w-full mb-2"
            {...register("chef")}
            placeholder="Enter Chef Name"
          />

          <label
            htmlFor="category"
            className="block font-semibold mb-1 text-gray-700"
          >
            Category
          </label>
          <select
            id="category"
            className="block border-b outline-teal-50 mb-2 px-4 py-2 border w-full"
            {...register("category")}
          >
            <option value="none">Select Category</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="drink">Drink</option>
            <option value="dessert">Dessert</option>
          </select>

          <label
            htmlFor="desc"
            className="block font-semibold mb-1 text-gray-700"
          >
            Description
          </label>
          <textarea
            id="desc"
            className="border-b border-green-400 outline-none p-2 w-full"
            {...register("desc")}
            placeholder="Enter Description - Separated by comma(,)"
          ></textarea>

          <label
            htmlFor="Ingr"
            className="block font-semibold mb-1 text-gray-700"
          >
            Ingredients
          </label>
          <textarea
            id="Ingr"
            className="border-b border-green-400 outline-none p-2 w-full"
            {...register("ingredients")}
            placeholder="Enter Ingredients - Separated by comma(,)"
          ></textarea>

          <label
            htmlFor="Inst"
            className="block font-semibold mb-1 text-gray-700"
          >
            Instructions
          </label>
          <textarea
            id="Inst"
            className="border-b border-green-400 outline-none p-2 w-full"
            {...register("instructions")}
            placeholder="Enter Instructions - Separated by comma(,)"
          ></textarea>

          <button className="mt-2 block px-4 py-2 bg-blue-700 rounded text-white active:scale-95">
            Update Recipe
          </button>
          <button
            onClick={DeleteHandler}
            className="mt-2 block px-4 py-2 bg-red-700 rounded text-white active:scale-95"
          >
            Delete Recipe
          </button>
        </form>
      </div>
    </div>
  ) : (
    "Loading..."
  );
};

export default Singlerecipe;
