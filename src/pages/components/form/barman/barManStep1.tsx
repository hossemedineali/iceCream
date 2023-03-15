import { useState } from "react";
import { useZxing } from "react-zxing";
import { useBarMan } from "~/store/store";

const BarManStep1 = () => {
    const {setStep,setDecodedCode,decodedCode}=useBarMan()
  const { ref } = useZxing({
    onResult(result) {
      setDecodedCode(result.getText())
      
    },
    
  });

    return ( <div className=" w-full h-full flex flex-col gap-5 ">
      <div className="h-60 border border-black max-h-[80vh] w-full ">

     <video ref={ref}  className=''/> 
      </div>

      {!decodedCode&&<div className=" h-12 text-2xl flex justify-center items-center">
          <p className="">Please wait ,Scaning</p>
        </div>}

        {decodedCode&&<div className=" h-12 text-2xl flex justify-center items-center">
          <p className="text-green">You can proceed</p>
        </div>}
      <div className="w-full px-4 py-4">

<button  onClick={()=>setStep(2)} disabled={!decodedCode}  className="bg-white disabled:cursor-not-allowed border w-full border-gray-600 mt-5 h-12 max-w-96 text-2xl hover:scale-105 active:scale-95 transition-all duration-150 ease-in-out  text-black">Next</button>
      </div>

    </div> );
}
 
export default BarManStep1;