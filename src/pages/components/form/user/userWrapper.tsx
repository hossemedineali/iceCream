import { useUserSteps } from "~/store/store";
import UserStep1 from "./Userstep1";
import UserStep2 from "./Userstep2";
import UserStep3 from "./Userstep3";
import UserStep4 from "./Userstep4";
import UserStep5 from "./Userstep5";



const UserWrapper = () => {
    const {step}=useUserSteps()
   return ( <div>
    {step== 1&&<UserStep1/>  }
    {step== 2&&<UserStep2/>  }
    {step== 3&&<UserStep3/>  }
    {step== 4&&<UserStep4/>  }
    {step== 5&&<UserStep5/>  }

    </div> );
}
 
export default UserWrapper;