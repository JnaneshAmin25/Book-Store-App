import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Freebook() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    const filterData = list.filter((data)=>data.category==="Free");
    //console.log(filterData);
    
    return (
    <>
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
            <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
            <p className="text-sm md:text-xl">
                Expand your horizons with our range of free offered courses designed to empower learners of all levels. 
                Dive into topics that intrigue you, gain new skills, and earn certificates—all without spending a dime. 
                Start your journey to personal and professional growth today!
            </p>
        </div>
        <div className="slider-container">
            <Slider {...settings}>
                {filterData.map((item)=>(
                    <Cards item={item} key={item.id}/>
                ))}      
            </Slider>
        </div> 
    </div>  
    </>
    )
}

export default Freebook


