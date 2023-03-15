import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import { useAdmin } from "~/store/store";
import Header from "./components/admin/header";
import Ingredients from "./components/admin/ingredients";
import NavBar from "./components/admin/navBar";

const Admin = () => {
    const {currentTab}=useAdmin()
  if (isMobile) {
    return (
      <div className=" flex  h-screen flex-col justify-center px-2 text-2xl">
        <h2>This page is only available on desktop.</h2>
        <p>Please switch to a desktop device to view this page.</p>
      </div>
    );
  }
  return (
    <div className="flex h-auto min-h-screen w-full flex-col bg-slate-300">
      <Header />
      <div className="flex w-full  flex-grow">
        <NavBar/>
        <div className="flex-grow ">
               {currentTab=='ingredients'&& <Ingredients/>}
        </div>
      </div>
    </div>
  );
};




export default Admin;
