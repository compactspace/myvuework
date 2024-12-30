import { UserInfoStroe } from "../../store/UserInfoStroe";
import { useRouter } from "vue-router";

export const CommonsUserUtil={
   

    StoreAndSessionRemove:(router)=>{
        sessionStorage.login_store=null;      
        sessionStorage.userInfostore=null;
        UserInfoStroe().user.loginId=null;
        router.push('/');
    }



}


  



