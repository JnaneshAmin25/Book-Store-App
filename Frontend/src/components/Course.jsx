import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards';
import { Link } from "react-router-dom";

function Course() {
  
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:mt-0 md:px-20 px-4'>
            <div className=" mt-28 items-center justify-center text-center md:mt-16 md:py-24">
                <h1 className="text-2xl  md:text-4xl">
                    We're delighted to have you{" "}
                    <span className="text-pink-500 hover:text-pink-700 duration-300"> Here! :)</span>
                </h1>
                <p className="mt-16">
                    Explore our exclusive collection of premium books, carefully chosen to enrich your mind and spark your imagination. 
                    Whether you're looking for timeless classics, gripping novels, or insightful non-fiction, you'll find treasures worth every penny. 
                    Invest in your passion for reading and let every page take you on an unforgettable journey!
                </p>
                <Link to="/">
                    <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                        Back
                    </button>
                </Link>
            </div>
            <div className='mt-12 items-center justify-center grid grid-cols-1 md:grid-cols-4'>
                {
                    list.map((item) => (
                        <Cards key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
      
    </>
  )
}

export default Course
