import React from 'react'
import { Link } from 'react-router-dom'

function Hero () {
  return (
   <div class="bg-[url('https://i.pinimg.com/736x/b3/15/52/b315527f272a1a00df44206a286308b7.jpg')] bg-cover bg-no-repeat h-screen bg-black ">
    <div className='h-30  border-amber-50 flex flex-row justify-center uppercase gap-8'> 
      <div className='h-8 w-20 text-center e mt-14'> <Link to="/" className='text-white hover:text-black cursor-pointer' >Home</Link></div>
      <div className='h-8 w-20 text-center  mt-14'><Link to="/about" className='text-white  hover:text-black cursor-pointer'>about</Link></div>
      <div className='h-8 w-20  text-center  mt-14'><Link to="/skills" className='text-white  hover:text-black cursor-pointer'>Skills</Link></div>
      <div className='h-8 w-35 border-1 rounded-2xl border-white mt-14 ml-250 flex flex-row gap-2 justify-center cursor-pointer'><Link to="/let" className='text-white'>contact</Link>
      <div className='h-7 w-7  rounded-4xl bg-yellow-100'><img  src="https://img.icons8.com/external-kosonicon-solid-kosonicon/48/external-upper-right-arrow-arrows-set-2-kosonicon-solid-kosonicon-2.png" alt="external-upper-right-arrow-arrows-set-2-kosonicon-solid-kosonicon-2"/></div></div>
   </div>
         <h1 className='text-white text-center capitalize text-5xl mt-40 font-bold tracking-normal'>i'am adhip kumawat </h1>
         <div className='h-20 w-90 border-2 border-white rounded-3xl  ml-165 mt-4'>
         <h1 className='text-center text-5xl font-bold text-white capitalize mt-3'>web devloper</h1></div>
         <div className='flex flex-row gap-100'>
         <div className='h-30 w-50  border-black bg-white mt-50 ml-140 -rotate-5 rounded-2xl capitalize'>
          <h1 className='text-black text-center mt-3 text-2xl'>my experties</h1>
         <p className='text-black mt-4 ml-2'>BACKEND--*----------10%</p>
         <p className='text-black ml-2'>FRONTEND-------*---80%</p></div>
         <div className="h-90 w-80 mt-20 ">
          <img className='h-100 w-100' src="/boynew.png" />
          </div>
          
         </div>
      
      
      
      
      
      
      
      
         </div>
  )
}

export default Hero