import React from 'react'

function CustomTester({id,header,footer,body,onClose}) {
    return (
        <div id={id} className='border-2 border-red-500'>
            <div>
                <div className='flex w-full p-2 gap-3'>
                    <span onClick={onClose} className='cursor-pointer text-2xl font-bold'>X</span>
                    <div>{header? <div>{header}</div>:'HEADER'}</div>
                </div>
                
                <div>{body}</div>
                <div>{footer}</div>
            </div>
        </div>
    )
}

export default CustomTester
