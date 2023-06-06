import React from "react";
import Testimonials from "./components/Testimonials";
import reviews from "./data";

const App = () => {
  return(
    <div>

      <div>
        <h1>Our Testimonials</h1>
        <div></div>
        <Testimonials reviews={reviews}/>
      </div>
    </div>
  )
};

export default App;
