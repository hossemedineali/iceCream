import { useState } from "react";
import { useUserPreferances, useUserSteps } from "~/store/store";

import {motion} from 'framer-motion'

const categories=['Frozen Yogurt','Superfood','Juices','Smoothie']
const UserStep2 = () => {
  const {setCategorie}=useUserPreferances()
  const {setStep}=useUserSteps()


  const handelClick=(x:string)=>{
 
      setCategorie(x)
      setStep(3)
  }

  
  return <motion.div initial={{x:'100vw'}} animate={{x:0}} transition={{duration:1}} className=" gap-5 px-2 py-4 flex flex-col w-full h-screen">
  <h1 className="text-3xl ">Select Category</h1>
            <p className={`text-lg  `}>Please select a category.</p>

            {categories.map((item,index)=>{
              return <div onClick={()=>handelClick(item)} key={index}  className='border hover:translate-x-2 hover:cursor-pointer h-12 flex p-5 items-center rounded-3xl  justify-between'><p className="text-xl">{item}</p>
               

               </div>
            })}


  </motion.div>;
};

export default UserStep2;
