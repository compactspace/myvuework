import axios from "axios";
import { Api } from "../Api";


///openclassList.do
export const getChoiceDayClassListApi= async (onedayclass_num,choiceOpenday)=>{

let bodyData={
    onedayclass_num:1
    ,
    choiceOpenday:"2024-04-20"

}


  let result=await axios.post(Api.oneday.reserve.opendyList,bodyData);

return result.data

}