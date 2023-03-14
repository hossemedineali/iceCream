import { useState } from "react";
import { useUserPreferances, useUserSteps } from "~/store/store";



const categories=['Frozen Yogurt','Superfood','Juices','Smoothie']
const UserStep2 = () => {
  const [isError,setIsError]=useState(false)
  const {categorie,setCategorie}=useUserPreferances()
  const {setStep}=useUserSteps()
  const handelClick=(x:string)=>{
    if(categorie==x){
      setCategorie('')
    }
    else{
      setCategorie(x)
    }
    setIsError(false)
  }

  const handelNext=()=>{
    if(categorie){
      setStep(3)
    }
    else{
      setIsError(true)
    }
  }
  return <div className=" gap-5 px-2 py-4 flex flex-col w-full h-screen">
  <h1 className="text-3xl pl-3">Select category</h1>
            <p className={`text-lg pl-3 ${isError?'scale-105 text-red-700 font-medium':''}`}>Please select a category.</p>

            {categories.map((item,index)=>{
              return <div onClick={()=>handelClick(item)} key={index}  className='border hover:translate-x-2 hover:cursor-pointer h-12 flex p-5 items-center rounded-3xl  justify-between'><p className="text-xl">{item}</p>
                {categorie==item&&<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="green" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>}

               </div>
            })}

<button  onClick={handelNext}  className="bg-gray-600 h-12 max-w-96 text-2xl hover:scale-105 active:scale-95 transition-all duration-150 ease-in-out disabled:cursor-not-allowed text-white">Next</button>

  </div>;
};

export default UserStep2;
