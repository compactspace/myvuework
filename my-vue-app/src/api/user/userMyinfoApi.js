import axios from "axios";
import { Api } from "../Api";

export const userMyinfoApi=async (userId)=>{

    let bodyData={
        id:userId
    }

    let result= await axios.post(Api.userUtil.myinfo,bodyData);

    return result.data

}

