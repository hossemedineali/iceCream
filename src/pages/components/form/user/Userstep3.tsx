import { useUserPreferances, useUserSteps } from "~/store/store";

import {motion} from 'framer-motion'


const categories=[8,12]

const UserStep2 = () => {
  const {setSize}=useUserPreferances()
  const {setStep}=useUserSteps()
  const handelClick=(x:number)=>{
    
      setSize(x)
        setStep(4)
  }


  return <div   className=" gap-5 px-2 py-4 flex flex-col w-full h-screen">
  <h1 className="text-3xl ">Select Size</h1>
            <p className={`text-lg  `}>Please select a size.</p>

            {categories.map((item,index)=>{
              return <div onClick={()=>handelClick(item)} key={index}  className='border hover:translate-x-2 hover:cursor-pointer h-12 flex p-5 items-center rounded-3xl  justify-between'><p className="text-xl">{item}oz</p>
                

               </div>
            })}


  </div>;
};

export default UserStep2;
