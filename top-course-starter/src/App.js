import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl,filterData } from "./data";
import { async } from "q";

const App = () => {

  const [courses,setCources] = useState(null);

  useEffect(() => {
    const fetchData = async() => {
      try{
        const res = await fetch(apiUrl);
        const data = await res.json();
        // setCources(data.data);
        console.log(data);
      }
      catch(e){

      }
    }
    fetchData();
  },[]);

  return(
    <div>
      <Navbar/>

      <Filter filterData={filterData}/>

      {/* <Cards courses={courses}/> */}
    </div>
  );
};

export default App;
