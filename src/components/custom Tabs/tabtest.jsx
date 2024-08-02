import React, { useState } from 'react'
import Tabs from './tabs'
function RandomComponent(){
    return <h1>This is random Component</h1>
}
function Tabtest() {
    

    function handleChange(currentTI){
        console.log(currentTI);

    }

    const tabs = [
        {
            label:'Tab 1',
            content: <div>this is Content for tab 1</div>
        },
        {
            label:'Tab 2',
            content: <div>this is Content for tab 2</div>
        },
        {
            label:'Tab 3',
            content: <RandomComponent />
        },

    ]


    


    return (
        <Tabs tabsContent={tabs} onChange={handleChange}
         />
        
    )
}

export default Tabtest
