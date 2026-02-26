
import './index.css' 

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from './components/About'
import Hero from './components/Hero';
import Let from './components/Let'
import Skills from './components/Skills'


   
    const router = createBrowserRouter(
      [
         {
        path:"/",
          element: <div>
            <Hero/>
            <About/>
            <Skills/>
            <Let/>
           
          </div>
         
       },
      {
        path:"/about",
          element: 
          <div>
          <About/>
           <Skills/>
          <Let/>
          </div>
       },
       {
        path:"/skills",
          element:
          <div>
         <Skills/>
          <Let/>
        </div>
       },
        {
        path:"/let",
          element:   <Let/>
       }
       
      ]
    )


function App() {
  return (
    <>
     <div>
        <RouterProvider router={router}/>
     </div>
    </>
  )
}

export default App
