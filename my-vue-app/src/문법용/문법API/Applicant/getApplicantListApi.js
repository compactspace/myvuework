import axios from "axios";

export const getApplicantListApi= async (postIdx,pageSetting,choiceStatus,injectedValue)=>{

console.log(`postIdx:  ${postIdx.value}`)

    let bodyData = {
      postIdx: postIdx.value,
      firstProc:"서류심사중",
      keyword: "서류심사중",
      currentPage: pageSetting.value.currentPage.toString(),
      pageSize: pageSetting.value.pageSize.toString(),
    };
    if(choiceStatus.value!='서류심사중'){
      bodyData.keyword=choiceStatus.value;
    }
   // console.log(pageSetting.value)
  
  
  
    console.log(bodyData)
    let res = await axios.post("/api/applicantList.do", bodyData);
 //   console.log(res.data);
    // applicant.value = [...res.data.ApplicantList];
    injectedValue.value={
    list:res.data.ApplicantList,
    count:res.data.count
    };
  // injectedValue.list= res.data.ApplicantList
  // injectedValue.count= res.data.count
    console.log(injectedValue.value)
    return res.data.ApplicantList


}