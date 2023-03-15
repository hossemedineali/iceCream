const Header = () => {
    return ( <div className="h-16 bg-white w-full justify-between flex items-center ">
            <span className="  px-4 text-3xl ">LOGO</span>
            <div className="flex-grow max-w-lg relative ">
                <input className="border w-full h-12"/>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
            </div>
            <div className="flex px-5 gap-5 items-center text-xl">
                    <span className=" p-2 w-14 aspect-square text-sm rounded-full bg-slate-500 text-center flex items-center ">Image</span>
                    <p>Albert Fiores</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

            </div>
    </div> );
}
 
export default Header;