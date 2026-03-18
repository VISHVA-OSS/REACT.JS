import Course from "./Course";
import image from "./assets/image.png"
import audio1 from "./assets/audio1.jpg"
import benz from "./assets/benz.jpg"
import supra from "./assets/supra.jpg"
import fortuner from "./assets/fortuner.webp"
import defender from "./assets/defender.jpg"
import city from "./assets/city.jpg"

function Courselist(){

    // Data List

    const course = [
        {
            name : "BMW",
            price : "₹99",
            rating : 4,
            image : image
            
        },
        {
            name : "AUDI",
            price : "₹199",
            rating : 4,
            image: audio1
        },
        {
            name : "BENZ",
            price : "₹299",
            rating : 4,
            image: benz

        },
        {
            name : "SUPRA",
            price : "₹399",
            rating : 4,
            image:supra
        },
        {
            name : "FORTUNER",
            price : "₹499",
            rating : 4,
            image:fortuner
        },
        {
            name : "DEFENDER",
            price : "₹599",
            rating : 4,
            image:defender
        },
        {
            name : "CITY",
            price : "₹699",
            rating : 4,
            image:city
        }
    ]

    // Sorting

    // course.sort((x,y) => y.price-x.price)

    // Filtering

    const vfmCourse= course.filter((course)=> course.price<200)
    
    // Maping

    const courselist = course.map((course, index)=> <Course key={index} image={course.image} name={course.name} price={course.price} rating={course.rating}/>)
    return(
        <>
        {courselist}
        </>
    )
}

export default Courselist;
