import React from "react";
import { useForm } from "react-hook-form";

const Createrecipe = () => {
  const { register, handleSubmit } = useForm();

  const SubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <div className="flex py-10 px-10 max-w-screen h-screen ">
      <div className="w-[40%] bg-amber-300 h-[600px]">
        <h1>hey</h1>
      </div>

      <div className="w-[60%] h-[600px] px-20">
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
            {...register("chefName")}
            placeholder="Enter Chef Name title"
          />
          <select
            className="block border-b outline-teal-50 mb-4 px-4 py-2 border"
            {...register("category")}
          >
            <option value="none">Select Category</option>
            <option value="cat-1">Breakfast</option>
            <option value="cat-2">Lunch</option>
            <option value="cat-3">Drink</option>
            <option value="cat-4">dessert</option>
          </select>

          <textarea
            className="border-b border-green-400 outline-none p-2 w-full"
            {...register("Description")}
            placeholder=" Enter Description - Seperated by comma(,)"
          ></textarea>

          <textarea
            className="border-b border-green-400 outline-none p-2 w-full"
            {...register("Ingredients")}
            placeholder=" Enter Ingredients - Seperated by comma(,)"
          ></textarea>

          <textarea
            className="border-b border-green-400 outline-none p-2 w-full"
            {...register("Instructions")}
            placeholder="Enter Instructions - Seperated by comma(,)"
          ></textarea>

          <button className="mt-6 block px-4 py-2 bg-blue-700 rounded text-white active:scale-95">
            Create Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Createrecipe;
