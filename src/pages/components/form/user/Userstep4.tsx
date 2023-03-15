import { useQrCode, useUserSteps } from "~/store/store";
import  QRCode  from "qrcode";
import { useState } from "react";
const UserStep4 = () => {
  
    const [qrCodeIsError,setQrCodeIsError]=useState(false)
    const {setStep}=useUserSteps()
    const {setUrl}=useQrCode()


  
    const handelGenerate= ()=>{
      
        QRCode.toDataURL(`Other - Wahnut + Dry - ce + Fruit - Apple,Orange,banana,peneaple`).then((res)=>{
          setUrl(res)
          setStep(5)
        }).catch(()=>{
          setQrCodeIsError(true)
        })
    } 
    return ( <div   className=" gap-5 px-2 py-4  text-2xl flex flex-col w-full max-w-full b- h-screen">
    <h1 className="text-3xl ">Result</h1>
              <p className={`text-lg  `}>View your options , if you do not like it you can shuffle to chanfe the combination.</p>

              
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




                <button    className="  h-12 mt-5 max-w-96 text-2xl hover:scale-105 active:scale-95 transition-all duration-150 ease-in-out disabled:cursor-not-allowed border rounded-md border-black text-black">Shuffle</button>
                <div className="flex-grow"></div>
                {qrCodeIsError&&<p className="text-md text-indigo-600 px-10 text-center">Sorry... something went wrong ! please try again in a second</p>}
              <button  onClick={()=>{handelGenerate()}}   className=" h-12  max-w-96 text-2xl hover:scale-105 active:scale-95 transition-all duration-150 ease-in-out disabled:cursor-not-allowed border rounded-md bg-black text-white mt-auto mb-4">Generate Order</button>

    </div> );
}
 
export default UserStep4;