import React from "react";
import Mainroutes from "./Routes/Mainroutes";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="py-6 px-10 w-screen h-screen overflow-x-hidden bg-white text-green-500">
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
