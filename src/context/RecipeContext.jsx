import { createContext, use, useEffect, useState } from "react";

export const recipecontext = createContext(null);

const RecipeContext = (props) => {
  const initialData = JSON.parse(localStorage.getItem("recipes")) || [
    {
      id: 1,
      category: "breakfast",
      chef: "Emily Johnson",
      desc: "A healthy and quick breakfast option to start your day.",
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      ingredients: "Oats Milk Honey Banana",
      instructions: "Mix oats with milk, add honey and top with banana slices.",
      title: "Oatmeal Delight",
    },
    {
      id: 2,
      category: "breakfast",
      chef: "Liam Smith",
      desc: "Crispy and golden brown pancakes with a touch of vanilla.",
      image: "https://cdn.dummyjson.com/recipe-images/2.webp",
      ingredients: "Flour Eggs Milk Sugar Vanilla",
      instructions:
        "Mix ingredients, cook on pan till golden, serve with syrup.",
      title: "Vanilla Pancakes",
    },
    {
      id: 3,
      category: "lunch",
      chef: "Olivia Williams",
      desc: "A hearty Italian pizza loaded with cheese and veggies.",
      image: "https://cdn.dummyjson.com/recipe-images/3.webp",
      ingredients: "Pizza base Tomato sauce Cheese Veggies",
      instructions: "Spread sauce on base add toppings bake till cheese melts.",
      title: "Veggie Pizza",
    },
    {
      id: 4,
      category: "lunch",
      chef: "Noah Brown",
      desc: "Spicy and flavorful chicken curry, perfect for lunch.",
      image: "https://cdn.dummyjson.com/recipe-images/4.webp",
      ingredients: "Chicken Onion Tomato Spices",
      instructions: "Cook chicken with onions tomatoes and spices till done.",
      title: "Spicy Chicken Curry",
    },
    {
      id: 5,
      category: "dinner",
      chef: "Ava Davis",
      desc: "A light and refreshing grilled salmon recipe.",
      image: "https://cdn.dummyjson.com/recipe-images/5.webp",
      ingredients: "Salmon Lemon Olive oil Herbs",
      instructions: "Marinate salmon grill till cooked serve with lemon.",
      title: "Grilled Salmon",
    },
    {
      id: 6,
      category: "dinner",
      chef: "William Miller",
      desc: "Creamy and delicious pasta Alfredo perfect for dinner.",
      image: "https://cdn.dummyjson.com/recipe-images/6.webp",
      ingredients: "Pasta Cream Garlic Parmesan",
      instructions: "Cookpasta prepare Alfredo sauce mix and serve hot.",
      title: "Pasta Alfredo",
    },
    {
      id: 7,
      category: "dessert",
      chef: "Sophia Wilson",
      desc: "Rich and creamy chocolate cake for sweet cravings.",
      image: "https://cdn.dummyjson.com/recipe-images/7.webp",
      ingredients: "Flour Cocoa Sugar Eggs Butter",
      instructions: "Prepare batter bake in oven cool and serve.",
      title: "Chocolate Cake",
    },
    {
      id: 8,
      category: "dessert",
      chef: "James Moore",
      desc: "A classic vanilla ice cream treat for dessert lovers.",
      image: "https://cdn.dummyjson.com/recipe-images/8.webp",
      ingredients: "Milk Cream Sugar Vanilla extract",
      instructions:
        "Mix ingredients churn in ice cream maker freeze and enjoy.",
      title: "Vanilla Ice Cream",
    },
    {
      id: 9,
      category: "drink",
      chef: "Isabella Taylor",
      desc: "A refreshing glass of homemade lemonade.",
      image: "https://cdn.dummyjson.com/recipe-images/9.webp",
      ingredients: "Lemon Sugar Water Mint",
      instructions: "Squeeze lemons mix with water and sugar add mint leaves.",
      title: "Classic Lemonade",
    },
    {
      id: 10,
      category: "drink",
      chef: "Benjamin Anderson",
      desc: "A creamy and delightful mango milkshake.",
      image: "https://cdn.dummyjson.com/recipe-images/10.webp",
      ingredients: "Mango Milk Sugar Ice cubes",
      instructions: "Blend all ingredients until smooth serve chilled.",
      title: "Mango Milkshake",
    },
  ];
  const [data, setData] = useState(initialData);

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(data));
  }, [data]);

  return (
    <recipecontext.Provider value={{ data, setData }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipeContext;
