import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const redirectToRecipe = () => {
    navigate("/recipes");
  };
  return (
    <div className="flex flex-wrap overflow-x-hidden py-10 px-10 max-w-screen h-screen bg-white text-green-500">
      <div className="w-[70%] ">
        <h1 className="text-xl">Welcome to FlavorFiesta</h1>
        <h1 className="font-[Open_Sans] tracking-wider text-black text-8xl mt-10 mb-10 pl-16">
          Expl
          <span className="inline-block border-4 border-green-500 rounded-full w-14 h-14 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://media.istockphoto.com/id/901354116/photo/traditional-italian-pasta-alla-norma-with-eggplant-tomato-cheese-and-basil.jpg?s=612x612&w=0&k=20&c=SIZvs4HVWT0ICi9-nP8w9TUhj3U8EksujdLyNUVpCY8="
              alt="o"
            />
          </span>
          re Easy
          <br />
          And Delici
          <span className="inline-block border-3 border-orange-400 rounded-full w-14 h-14 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://images.pexels.com/photos/30892987/pexels-photo-30892987/free-photo-of-delicious-pancakes-with-honey-and-strawberries.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="o"
            />
          </span>
          us <br />
          Recipes
        </h1>
        <button
          onClick={redirectToRecipe}
          className=" ml-20 py-2 px-4 bg-green-900 rounded-full text-white active:scale-95 hover:bg-green-800"
        >
          All Recipes <i className="text-2xl ri-arrow-right-up-line"></i>
        </button>
      </div>

      <div className="w-[30%]">
        <div className="w-[100%] h-[350px] mt-7 rounded-full overflow-hidden">
          <video
            className="w-full h-full object-cover rounded-full"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://videos.pexels.com/video-files/7172260/7172260-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Home;
