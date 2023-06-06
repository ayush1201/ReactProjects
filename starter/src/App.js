import React from "react";
import reviews from "./data";
import Testimonial from "./components/Testimonial";

const App = () => {
  return(
    <div className="flex flex-col bg-gray-200 justify-center items-center w-[100vw] h-[100vh]">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        <div className="bg-violet-400 h-[4px] w-[20%] mt-1 mx-auto"></div>
        <Testimonial reviews={reviews}/>
      </div>
    </div>
  )
};

export default App;
