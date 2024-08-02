import { useState } from 'react'
import Accordian from './components/Accordian'
import CustomModel from './components/custom-model-pop'
import RandomColorGenerator from './components/RandomColorGenerator'
import StarRating from './components/starRating'
import ImageSlider from './components/Imageslider'
import TesterRandomcolor from './components/RandomColorGenerator/testerRandomcolor'
import Tabtest from './components/custom Tabs/tabtest'
import LoadMoreData from './components/loadmoredata'



function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='bg-gray-100 h-screen flex justify-center'>
    
    {/* <Accordian /> */}
   {/*  <CustomModel /> */}
    {/* <RandomColorGenerator /> */}
   {/*  <TesterRandomcolor /> */}
   {/* <StarRating /> */}
   {/* <ImageSlider url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"5"} /> */}
       {/* <Tabtest />  */}
       <LoadMoreData />
  
   </div>
  )
}

export default App
