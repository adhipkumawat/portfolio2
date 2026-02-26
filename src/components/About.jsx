import React from 'react'

function About  () {
  return (
     <div class="bg-[url('https://i.pinimg.com/1200x/f0/f9/3a/f0f93af44e5c6aa3ea40a4f2f2a7695a.jpg')] bg-cover bg-no-repeat h-300 bg-black ">
     <div className='h-12 border-2 w-100 ml-160 '>
             <h1 className='uppercase text-5xl text-amber-200 text-center mt-20 font-bold'>who am i ?</h1>
             <p className='text-white mt-10 text-center'>At the end of 2020 I completed my school, then i took a drop of 1 year and joined a course in web devlopment. after completing that, i took a bca cource with specalization in ai/ml artifical inteligency with machine learning in 2023 from jecrc univercity</p>
             <p className='text-white mt-8 text-center'>Additionaly, i like to play pc games and read story type books in my leisure time which is kind a fun and relaxing  </p>
             <div className='h-12 w-45 border-2 border-amber-50 rounded-3xl bg-amber-200 mt-20 ml-28 cursor-pointer'><h1 className='text-black text-center uppercase mt-2.5 font-bold'>show my resume</h1></div>
       </div>
    <img className='h-150 w-105 mt-250' src="/newboy1.png" />
    </div>
  )
}

export default About