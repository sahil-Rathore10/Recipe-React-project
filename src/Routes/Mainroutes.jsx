import React from "react";
import { Route, Routes } from "react-router-dom";
import Recipes from "../pages/Recipes";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Createrecipe from "../pages/Createrecipe";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/create-recipe" element={<Createrecipe />} />
    </Routes>
  );
};

export default Mainroutes;
