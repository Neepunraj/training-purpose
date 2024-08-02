
import React, { useState } from 'react'
import data from './data'


function Accordian() {
    const [single, setSingle] = useState(null)
    const [multiple, setMultiple] = useState([])
    const [isMultiple, setisMultiple] = useState(false)

    function handleMultiple(getcurrId) {

        let cpymultiple = [...multiple]
        const index = cpymultiple.indexOf(getcurrId)

        if (index === -1) cpymultiple.push(getcurrId)
        else cpymultiple.splice(index, 1)


        setMultiple(cpymultiple)


    }
    function handleEnableDisable(){
        setisMultiple(!isMultiple)
        if(isMultiple) setMultiple([])
            else setSingle(null)
    }



    function handleSingle(getcurrID) {
        
        setSingle(getcurrID === single ? null : getcurrID)
    }
    return (
        <div className='border-2  border-red-300 my-3 rounded-lg flex flex-col  ml-5 items-center w-full  '>
            <h1 className='border-2 border-red-200 my-3 rounded-lg w-4/5 text-xl font-bold text-center'>Accordian Practice
            </h1>
            <button onClick={handleEnableDisable} className='text-white bg-red-600 rounded-full p-2 my-3  '>
                {isMultiple ? 'Disable Multiple' : 'Enable Multiple'}
            </button>
            <div>
                {data && data.length ?
                    data.map(item =>
                        <div onClick={isMultiple ? () => handleMultiple(item.id) : () => handleSingle(item.id)} key={item.id} className='border-2 border-red-100 p-2 rounded-lg gap-2  '>
                            <div className='flex justify-between'>
                                <h1 className='text-lg font-semibold cursor-pointer'>{item.question}</h1>
                                <button className='font-bold text-3xl cursor cursor-pointer'>+</button>
                            </div>
                            {
                                isMultiple ? (multiple.indexOf(item.id) !== -1 && <p>{item.answer}</p>) : single === item.id && <p>{item.answer}</p>
                            }

                        </div>


                    ) : null}
            </div>

        </div>
    )
}

export default Accordian
