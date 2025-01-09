import axios from "axios";

export const updateApplicantStatusApi= async (keyword,postIdx,loginId)=>{

let bodyData={
    keyword:keyword.value,
    postIdx:postIdx.value,
    loginId:loginId.value
}

console.log(bodyData)
///prx/api/manage-hire/statusUpdate.do
let res= await axios.post('/api/statusUpdate.do',bodyData)

console.log(res.data)

keyword.value=''
postIdx.value=''
loginId.value=''



}