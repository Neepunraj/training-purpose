import React, { useState } from 'react'
import CustomTester from './customTester'

function CustomModel() {
    const [isPopup, setIspopup] = useState(false)
    function onClose(){
        setIspopup(false)
    }


    return (
        <div>
            <h1>Custom Model Popop</h1>
            <button onClick={() => setIspopup(!isPopup)}> Show Custom Model</button>
            {isPopup ? <CustomTester
                id={'custom-id'}
                header={<h1>This is Header</h1>}
                footer={<h1>This is footer</h1>}
                body={<div>This is body</div>}
                onClose={onClose}
            

            /> : null}
        </div>
    )
}

export default CustomModel
