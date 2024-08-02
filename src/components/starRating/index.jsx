import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { RiRadarFill } from 'react-icons/ri';

function StarRating({ noOfStars = 5 }) {
    const [rating,setRating] = useState(0);
    const [hover,setHover] = useState(0);
    
    function handleClick(getcid){
        setRating(getcid)

    }
    function handleMouseMove(getcid){
        setHover(getcid)
    }
    function handlemouseLeave(){
        setHover(rating)
    }

    return (
        <div className='flex'>
            {[...Array(noOfStars)].map((_,index)=>{
                index += 1;
                const starClass = index <= (hover || rating) ?'text-yellow-500':'text-gray-300'
                return <FaStar key={index}
                onClick={()=>handleClick(index)}
                onMouseMove={()=>handleMouseMove(index)}
                onMouseLeave={()=>handlemouseLeave()}
                size={40}
                className={`cursor-pointer ${starClass}`}/>
            })}
            
        </div>

    )
}

export default StarRating
