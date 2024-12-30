import axios from "axios";
import { Api } from "../Api";
import { UserInfoStroe } from "../../store/UserInfoStroe";
 export const userMyinfoUpdateApi= async (updateUserInof)=>{

console.log(updateUserInof)


    let bodyData={
        oldid:updateUserInof.value.oldid,
       newid:updateUserInof.value?.id||''

}




     let result= await axios.post(Api.userUtil.updateMyinfo, bodyData);

     console.log(result.data)
    let {updateStatusCode}=result.data
    if(updateStatusCode==1){
        sessionStorage.login_store=null;      
        sessionStorage.userInfostore=null;
       UserInfoStroe().user.loginId=null;
        alert("정보반영에 성공하였습니다.")
        console.log( sessionStorage)
    }


}