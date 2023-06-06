import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft,FiChevronRight } from "react-icons/fi";

const Testimonial = (props) => {

    let reviews = props.reviews;
    const [index,setIndex] = useState(0);
    function leftShiftHandler(){
        if(index-1 < 0){
            setIndex(reviews.length - 1);
        }
        else{
            setIndex(index-1);
        }
    }

    function rightShiftHandler(){
        if(index+1 > reviews.length-1){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }

    function surprisetHandler(){
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }

    return(
        <div className="bg-white w-[85vw] md:w-[700px] m-10 p-10 transition-all duration-200 flex flex-col justify-center items-center rounded-md
        hover:shadow-xl">
            <Card review={reviews[index]}/>


            <div className="flex text-violet-400 font-bold text-3xl mt-9 gap-3 mx-auto">
                <button onClick={leftShiftHandler} className="hover:text-violet-500">
                    <FiChevronLeft/>
                </button>
                <button onClick={rightShiftHandler} className="hover:text-violet-500">
                    <FiChevronRight/>
                </button>
            </div>

            <div className="mt-6">
                <button onClick={surprisetHandler} className="bg-violet-400 hover:bg-violet-500 text-white border-none transition-all duration-200
                px-10 py-2 rounded-md font-bold text-lg">
                    Surprise Me
                </button>
            </div>
        </div>
    );
};

export default Testimonial;