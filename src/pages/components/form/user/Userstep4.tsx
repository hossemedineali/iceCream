import { useUserSteps } from "~/store/store";

const UserStep4 = () => {
    const {setStep}=useUserSteps()
    return ( <div className=" gap-5 px-2 py-4 flex flex-col w-full h-screen">
    <h1 className="text-3xl ">Result</h1>
              <p className={`text-lg  `}>View your options , if you do not like it you can shuffle to chanfe the combination.</p>

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




              <button    className=" h-12 mt-5 max-w-96 text-2xl hover:scale-105 active:scale-95 transition-all duration-150 ease-in-out disabled:cursor-not-allowed border rounded-md border-black text-black">Shuffle</button>
              <button  onClick={()=>{setStep(5)}}   className=" h-12  max-w-96 text-2xl hover:scale-105 active:scale-95 transition-all duration-150 ease-in-out disabled:cursor-not-allowed border rounded-md bg-black text-white mt-auto mb-4">Generate Order</button>

    </div> );
}
 
export default UserStep4;