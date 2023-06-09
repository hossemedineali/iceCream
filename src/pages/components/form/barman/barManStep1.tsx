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

    return ( <div className=" w-full h-full flex flex-col gap-10 ">
      <div className="h-80  border-black max-h-72 w-full ">

     <video ref={ref}  className='h-full w-full'/> 
      </div>

     
      <div className="w-full px-4 py-4">

<button  onClick={()=>setStep(2)} disabled={!decodedCode}  className="bg-white disabled:cursor-not-allowed border w-full border-gray-600 mt-5 h-12 max-w-96 text-2xl hover:scale-105 active:scale-95 transition-all duration-150 ease-in-out  text-black">
  {!decodedCode?'Please wait ,Scaning':'Next'}</button>
      </div>

    </div> );
}
 
export default BarManStep1;