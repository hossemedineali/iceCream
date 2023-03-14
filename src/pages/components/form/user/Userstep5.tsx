import { useUserSteps } from "~/store/store";

const UserStep5 = () => {

    const {setStep}=useUserSteps()
    return (<div className=" gap-5 px-2 py-4 flex flex-col w-full h-screen">
    <h1 className="text-3xl pl-3 mx-auto">Your Results</h1>
              <p className={`text-lg pl-3 mx-auto `}>Show this to the counter.</p>

              <div className="w-full max-w-xs max-h-64 mx-auto aspect-square border">

              </div >

              <div className="pl-3 flex flex-col gap-2">
              <div className="w-full h-auto flex text-2xl ">
                <p className="font-bold  w-20">Other  </p>
                <p className="ml-5 font-extralight">Wahnut</p>
                
              </div>

              <div className="w-full h-auto flex text-2xl ">
                <p className="font-bold  w-20">Dry  </p>
                <p className="ml-5 font-extralight">Ce</p>
                
              </div>

              <div className="w-full h-auto flex text-2xl ">
                <p className="font-bold  w-20">Fruit  </p>
                <p className="ml-5 font-extralight">Apple,Orange</p>
                
              </div>

              <div className="w-full h-auto flex text-2xl ">
                <p className="font-bold  w-20">Base  </p>
                <p className="ml-5 font-extralight">Milk</p>
                
              </div>

              </div>
              <button  onClick={()=>{setStep(1)}}   className=" h-12  max-w-96 text-2xl hover:scale-105 active:scale-95 transition-all duration-150 ease-in-out disabled:cursor-not-allowed border rounded-md bg-black text-white mt-auto mb-4">Return</button>
    </div> );
}
 
export default UserStep5;