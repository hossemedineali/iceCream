import { it } from "node:test";
import { useAdmin } from "~/store/store";

const categories=['Frozen Yogurt','Superfood','Juices','Smoothie']

const Ingredients = () => {

    const {category,setCategory}=useAdmin()
    
  return (
    <div className="px-5 flex h-full w-full flex-col">
     <Header />
        <div className="bg-white flex-grow px-1">

     <h1 className="text-4xl">Advanced</h1>
     <div className="flex gap-4">
            {categories.map((item,index)=>{
                return <span onClick={()=>{setCategory(item)}} key={index} className={`w-32 py-1 px-3 text-center rounded-lg border hover:cursor-pointer hover:border-salt-500 ${category==item?'bg-slate-400':''}`}>{item}</span>
            })}
     </div>
            </div>
    </div>
  );
};






const  Header=()=>{

    const {currentTab}=useAdmin()
    
    return  <div className="items-center py-4  flex gap-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-7 w-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-7 w-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
    <p className="text-2xl">{currentTab}</p>
  </div>
}

export default Ingredients;
