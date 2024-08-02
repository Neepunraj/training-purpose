import React, { useEffect, useState } from 'react'

function TesterRandomcolor() {
    const [colour, setColour] = useState('')
    const [colourType, setColorType] = useState('hex')
    function randomColUtility(length) {
        return Math.floor(Math.random() * length)
    }


    function createHexClr() {
        const arrayHex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
        let hex = '#'
        for (let i = 0; i < 6; i++) {
            hex += arrayHex[randomColUtility(arrayHex.length)]
        }
        setColour(hex)

    }
    function createRGBColor() {
        const a = randomColUtility(256)
        const b = randomColUtility(256)
        const c = randomColUtility(256)
        setColour(`rgb(${a},${b},${c})`)
       

    }
    useEffect(()=>{
        if(colourType === 'hex') createHexClr();
            else createRGBColor()

    },[colourType])


    return (
        <div style={{background:colour}}>
            <div >
                <h1>This is random color generator</h1>
            </div>
            <div className='gap-2 p-2 justify-between'>
                <button onClick={()=>setColorType('hex')} className='text-white p-2 cursor-pointer'>Create Hex</button>
                <button onClick={()=>setColorType('rgb')} className='text-white p-2 cursor-pointer'>Create RGB</button>
                <button onClick={colourType === 'hex'?
                    createHexClr:createRGBColor
                } className='p-2 cursor-pointer text-white '>Create Random</button>
            </div>
            <div>
                <p className='text-white'>{colour}</p>

            </div>

        </div>

    )
}

export default TesterRandomcolor
