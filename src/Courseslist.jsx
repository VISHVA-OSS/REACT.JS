import Course from "./Course";
import image from "./assets/image.png"
import audio1 from "./assets/audio1.jpg"
import benz from "./assets/benz.jpg"
import supra from "./assets/supra.jpg"
import fortuner from "./assets/fortuner.webp"
import defender from "./assets/defender.jpg"
import city from "./assets/city.jpg"
import { useState, useEffect } from "react";

function Courselist(){

    // Data List

    const [course, setCourse] = useState( [
        {
            id: 1,
            name : "BMW",
            price : "₹99",
            rating : 4,
            image : image
            
        },
        {
            id : 2,
            name : "AUDI",
            price : "₹199",
            rating : 4,
            image: audio1
        },
        {
            id : 3,
            name : "BENZ",
            price : "₹299",
            rating : 4,
            image: benz

        },
        {
            id : 4,
            name : "SUPRA",
            price : "₹399",
            rating : 4,
            image:supra
        },
        {
            id : 5,
            name : "FORTUNER",
            price : "₹499",
            rating : 4,
            image:fortuner
        },
        {
            id : 6,
            name : "DEFENDER",
            price : "₹599",
            rating : 4,
            image:defender
        },
        {
            id : 7,
            name : "CITY",
            price : "₹699",
            rating : 4,
            image:city
        }
    ]);

    // Deleting the data //

    function handleDelete(id){
        console.log(id);
        const newCourse = course.filter((course)=> course.id != id) 
        setCourse(newCourse)
    }

    // Sorting

    // course.sort((x,y) => y.price-x.price)

    // Filtering

    //const vfmCourse= course.filter((course)=> course.price<200)
    
    // Maping

    const courselist = course.map((course)=> <Course key={course.id} image={course.image} name={course.name} price={course.price} rating={course.rating} id = {course.id} delete = {handleDelete}/>)
    return(
        <>
        {courselist}
        </>
    )
}

export default Courselist;
