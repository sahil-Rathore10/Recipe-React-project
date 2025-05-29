import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Createrecipe = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();

    const copydata = [...data];
    copydata.push(recipe);
    setData(copydata);
    //  setData([...data, recipe])

    toast.success("New Recipe Created!");
    reset();
    navigate("/recipes");
  };

  return (
    <div className="flex py-10 px-10 max-w-screen h-screen ">
      <div className="w-[40%] bg-amber-300 h-[600px]">
        <h1>hey</h1>
      </div>

      <div className="w-[60%] h-[600px] border-2 px-20">
        <h1 className="text-7xl mb-6">Create a Recipe</h1>
        <form onSubmit={handleSubmit(SubmitHandler)}>
          <input
            type="url"
            id="image"
            className="border-b border-green-400 outline-none p-2 w-full mb-4"
            {...register("image")}
            placeholder="Enter Image URL"
          />
          <input
            type="text"
            id="title"
            className="border-b border-green-400 outline-none p-2 w-full mb-4"
            {...register("title")}
            placeholder="Enter Recipe title"
          />
          <input
            type="text"
            id="chef name"
            className="border-b border-green-400 outline-none p-2 w-full mb-4"
            {...register("chef")}
            placeholder="Enter Chef Name title"
          />
          <select
            className="block border-b outline-teal-50 mb-4 px-4 py-2 border"
            {...register("category")}
          >
            <option value="none">Select Category</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="drink">Drink</option>
            <option value="dessert">dessert</option>
          </select>

          <textarea
            className="border-b border-green-400 outline-none p-2 w-full"
            {...register("desc")}
            placeholder=" Enter Description - Seperated by comma(,)"
          ></textarea>

          <textarea
            className="border-b border-green-400 outline-none p-2 w-full"
            {...register("Ingr")}
            placeholder=" Enter Ingredients - Seperated by comma(,)"
          ></textarea>

          <textarea
            className="border-b border-green-400 outline-none p-2 w-full"
            {...register("Inst")}
            placeholder="Enter Instructions - Seperated by comma(,)"
          ></textarea>

          <button className="mt-2 block px-4 py-2 bg-orange-700 rounded text-white active:scale-95">
            Create Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Createrecipe;
