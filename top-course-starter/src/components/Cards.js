import React from "react";
import Card from "./Card";

const Cards = ({courses}) => {

    const allCourses = [];
    const getCourses = () => {
        Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
                allCourses.push(course);
            })
        });
    }

    return(
        <div>{
            getCourses().map((course) => {
                <Card/>
            })
        }
        </div>
    );
};

export default Cards;