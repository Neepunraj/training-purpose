import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
{/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"20"}
      /> */}

function ImageSlider({ url, page, limit }) {
    const [fetchedData, setFetchedData] = useState([]);
    const [errors, setErrors] = useState(null);
    const [isloading, setisloading] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0);


    async function fetchImage(getUrl) {
        setisloading(true)
        try {
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            const data = await response.json()
            
            if (data) {
                setFetchedData(data)
                setisloading(false)
            }

        } catch (err) {
            setErrors(err)
            console.log(err)
        }


    }
    function handlePrevious() {
        setCurrentSlide((currentSlide-1+fetchedData.length)%fetchedData.length)
       

    }
    function handleNext() {
        setCurrentSlide((currentSlide+1)%fetchedData.length)
        
        
    }

    useEffect(() => {
        fetchImage(url)

    }, [url])







    return (
        <div className='overflow-hidden relative'>ImageSlider
            <div className={`flex transition ease-out duration-40`}
            style={{
                transform: `translateX(-${currentSlide * 100}%)`,
            }}
                >
                {fetchedData && fetchedData.length > 0 ?
                    fetchedData.map((item, index) =>
                        <img
                            key={item.id}
                            src={item.download_url}
                            alt={item.download_url}

                        />
                    ) : null}



            </div>
            <div className='absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl'>
                <BsArrowLeftCircleFill onClick={handlePrevious} size={40} className='cursor-pointer' />
                <BsArrowRightCircleFill onClick={handleNext} size={40} className='cursor-pointer' />

            </div>
            <div className='absolute buttom-0 py-4 flex justify-center gap-3 w-full'>
            {fetchedData && fetchedData.length > 0 ?
                    fetchedData.map((_, index) =>
                        <div key={index} onClick={()=>setCurrentSlide(index)}
                        className={`rounded-full w-5 h-5 cursor-pointer ${currentSlide === index? 'bg-white':'bg-gray-500'}`}></div>
                    ) : null}

            </div>


        </div>
    )
}

export default ImageSlider
