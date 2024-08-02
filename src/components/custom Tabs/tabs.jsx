import React, { useState } from 'react'

function Tabs({tabsContent,onChange}) {
    const [currInt,setCurrIn] = useState('')
    function handleClick(gti){
        setCurrIn(gti)
       
    }
    return (
        <div>
            <div>
                {tabsContent.map((item,index)=>
                <div onClick={()=>handleClick(index)} key={item.label}>{item.label}
                </div>)}
                
                </div>
                <div>
                {tabsContent[currInt] && tabsContent[currInt].content}
                
                </div>
                
        </div>
    )
}

export default Tabs
