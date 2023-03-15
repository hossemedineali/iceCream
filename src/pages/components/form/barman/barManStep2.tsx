import { useBarMan } from "~/store/store";

const BarManStep2 = () => {

    const {decodedCode,setStep,setDecodedCode,setScan}=useBarMan()
    const handelRescan=()=>{
        setDecodedCode('')
        setScan(true)
        setStep(1)
    }
    return (  <div className=" gap-5 px-2 py-4 flex flex-col w-full h-screen">
    <h1 className="text-3xl ">Customers Order</h1>
    <p className={`text-lg  `}>Here is what the custommer choose</p>
    <div className="w-full h-auto flex  ">
                <p className=" w-1/3 font-bold  ">Other  </p>
                <p className="ml-5 font-extralight w-2/3">Wahnut</p>
                
              </div>

              <div className="w-full h-auto flex  ">
                <p className=" w-1/3 font-bold  ">Dry  </p>
                <p className="ml-5 font-extralight w-2/3">Ce</p>
                
              </div>

              <div className="w-full h-auto flex  ">
                <p className=" w-1/3 font-bold  ">Fruit  </p>
                <p className="ml-5 font-extralight w-2/3  break-word flex flex-wrap">Apple, ,Apple, Orange, Apple, Orange,</p>
                
              </div>

              <div className="w-full h-auto flex  ">
                <p className=" w-1/3 font-bold  ">Base  </p>
                <p className="ml-5 font-extralight w-2/3">Milk</p>
                
              </div> 

              <button   disabled={!decodedCode}  className="bg-white disabled:cursor-not-allowed border w-full border-gray-600 mt-5 h-12 max-w-96 text-2xl hover:scale-105 active:scale-95 transition-all duration-150 ease-in-out  text-black">Confirm</button>

              <button  onClick={handelRescan}   className="bg-white disabled:cursor-not-allowed border w-full border-gray-600 mt-5 h-12 max-w-96 text-2xl hover:scale-105 active:scale-95 transition-all duration-150 ease-in-out  text-black">Scan</button>

    </div> );
}
 
export default BarManStep2;