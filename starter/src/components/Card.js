import React from "react";
import {FaQuoteLeft,FaQuoteRight} from "react-icons/fa";


const Card = (props) => {

    let review = props.review;

    return(
        <div className="flex flex-col md:relative items-cente">
            <div className="absolute top-[-7rem] mx-auto z-10">
                <img src={review.image} className="aspect-square rounded-full w-[140px] z-[25]" />
                <div className="aspect-square rounded-full w-[140px] bg-violet-500 absolute top-[-6px] left-[10px] z-[-10]"></div>
            </div>

            <div className="text-center mt-7"> 
                <p className="font-bold text-2xl">{review.name}</p>
                <p className="text-violet-300 uppercase text-sm">{review.job}</p>
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteLeft/>
            </div>

            <div className="mt-4 text-slate-500 text-center">
                <p>{review.text}</p>
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteRight/>
            </div>
        </div>
    );
};

export default Card;