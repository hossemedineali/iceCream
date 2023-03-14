import { useState } from "react";



const categories=['Frozen Yogurt','Superfood','Juices','Smoothie']
const UserStep2 = () => {
  const [isError,setIsError]=useState(false)
  
  return <div className=" gap-5 px-2 py-4 flex flex-col w-full h-screen">
  <h1 className="text-3xl pl-3">Select category</h1>
            <p className={`text-lg pl-3 ${isError?'scale-105 text-red-700 font-medium':''}`}>Please select a category.</p>

            {categories.map((item,index)=>{
              return <div key={index}  className='border h-12 flex p-5 items-center rounded-3xl'><p className="text-xl">{item}</p> </div>
            })}
  </div>;
};

export default UserStep2;
