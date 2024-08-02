import React, { useEffect, useState } from 'react'

function RandomColorGenerator() {
    
    const [typeOfcolor,setTypeofColor] = useState('hex')
    const [color,setColor] = useState('#000000')
    
    
    
    function RandomGeneratorUtility(length){
        return Math.floor(Math.random()* length)
       

    }

    
    function hexCodeGenerator(){
        const hexArry = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexColor ='#'
        for(let i=0;i<6;i++){
            hexColor += hexArry[RandomGeneratorUtility(hexArry.length)]
        }
        setColor(hexColor)


    }
    function rgbColorGenerator(){
        const a= RandomGeneratorUtility(256)
        const b= RandomGeneratorUtility(256)
        const c =RandomGeneratorUtility(256)
        setColor(`rgb(${a},${b},${c})`)
        

    }
    
    useEffect(()=>{
        if(typeOfcolor === 'hex') hexCodeGenerator();
        else rgbColorGenerator ();

    },[typeOfcolor])


    return (
        <div style={{background:color}} className='w-screen'>
            <div className='gap-3'>
                <h1 className='text-2xl font-bold font-mono text-white'>This is Random Color Generator</h1>
            </div>
            <div className='p-2 gap-2 flex'>
                <button onClick={()=>setTypeofColor('hex')} className='border-2 border-red-300 bg-red-500 text-white rounded-lg w-full text-center p-1'>Create Hex Color</button>
                <button onClick={()=>setTypeofColor('rgb')} className='border-2 border-red-300 bg-red-500 text-white rounded-lg w-full text-center p-1'>Create RGB Color</button>
                <button onClick={typeOfcolor === 'hex'?
                    hexCodeGenerator:rgbColorGenerator
                } 
                className='border-2 border-red-300 bg-red-500 text-white rounded-lg w-full text-center p-1'>Create Random Color</button>

            </div>
            <div>
                {typeOfcolor === 'hex'? <div className='text-white'>Hex: {color}</div>: <div className='text-white'>RGB Color : {color}</div> }
                </div>


        </div>
    )
}

export default RandomColorGenerator
