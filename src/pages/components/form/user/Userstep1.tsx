import { ChangeEvent, useState } from "react";
import { useUserPreferances, useUserSteps } from "~/store/store";

const UserStep1 = () => {

    const {calories,protein,setCalories,setProtein}=useUserPreferances()
    const [isError,setIsError]=useState(false)
    const {nextStep,step,setStep}=useUserSteps()
    const isValid=!!protein||!!calories
    
    const handelNext=()=>{
       if(isValid){
        setStep(2)
        
       }else{
        setIsError(true)
       }
     
    }
  
    const setCaloriesnHandler=(e:ChangeEvent<HTMLInputElement>)=>{
      const value=Number(e.target.value)
        setCalories(value )
        setIsError(false)

      
    }

    const setProteinHandler=(e:ChangeEvent<HTMLInputElement>)=>{
      const value=Number(e.target.value)
        console.log(value)
        setProtein(value )
        setIsError(false)

      
    }
    
    return ( <div className=" gap-5 px-2 py-4 flex flex-col w-full h-screen">
        <h1 className="text-3xl ">Input Requirments</h1>
        <p className={`text-lg  `}>You may select one or both options before proceeding with your order. </p>
        <p className={`text-lg  `}>Please note that <span className={`${isError?'scale-105 text-red-700 text-xl font-medium ':''}`}>at least one option must be selected.</span> </p>
        <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900">Calories</label>
    <input value={calories>0?calories : "" } onChange={setCaloriesnHandler} className="w-full max-w-96 border h-12 px-4 text-lg appearance-none" type="number"  placeholder="Enter"/>
  </div>
  <div className="mb-6">
  <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-900">Protein</label>
    <input value={protein>0?protein : "" } onChange={setProteinHandler} className="w-full max-w-96 border h-12 px-4 text-lg appearance-none" type="number"  placeholder="Enter"/>
  </div>
    <button  onClick={handelNext}  className="bg-gray-600 mt-5 h-12 max-w-96 text-2xl hover:scale-105 active:scale-95 transition-all duration-150 ease-in-out disabled:cursor-not-allowed text-white">Next</button>
    </div> );
}
 
export default UserStep1;