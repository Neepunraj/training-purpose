import React, { useEffect, useState } from 'react'

function LoadMoreData() {
    const [products, setProducts] = useState([]);
    const [errors, setErros] = useState('');
    const [isloadinga, setisloading] = useState(false);
    const [count, setCount] = useState(0);
    const [disablebutton, setDisablebutton] = useState(false);

    async function fetchProducts() {

        try {
            setisloading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const data = await response.json();
            console.log(data)
            if (data && data.products && data.products.length) {
                if(count===0) setProducts(data.products)
                    else{
                setProducts((prevData) => [...prevData,...data.products]);
                
                    }
                    setisloading(false);
            }

            console.log(data.products)
        } catch (error) {
            setErros(error.message);
            setisloading(false);
        }
    }
    useEffect(()=>{
        fetchProducts();

    },[count])
    
    useEffect(()=>{
        if(products && products.length ===100) setDisablebutton(true);
    },[products])
    
    if (errors) {
        return <div>Error Occured: {errors}</div>
    }
    if (isloadinga) {
        return <div>Data is Loading! please Wait</div>
    }
   console.log(products)



    return (
        <div>
            <div className='grid grid-cols-2'>
            {
                products.map((item)=>
                    <div key={item.id} className='grid grid-cols-2'>
                <img src={item.thumbnail} alt={item.id} />
                <p>{item.title}</p>
                
            </div>)
            }

            </div>
            <button disabled ={disablebutton} onClick={()=>setCount(count+1)}> Load more Data </button>
           {disablebutton?<p> max limit reached</p>:null}
        </div>

    )
}

export default LoadMoreData
