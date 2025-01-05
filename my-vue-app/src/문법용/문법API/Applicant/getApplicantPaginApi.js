import axios from "axios";

export const getApplicantPaginApi= async (injectedValue,cPage)=>{


//console.log(injectedValue.value.list[0])



   
    let bodyData = {
      postIdx: injectedValue.value.list[0].postIdx,
      firstProc:"서류심사중",
      keyword: injectedValue.value.list[0].status,
      currentPage: cPage.value.toString(),
      pageSize: "5",
    };
 
    if(bodyData.keyword.indexOf("탈락")!=-1){
        bodyData.keyword="탈락";
    }
   // console.log(pageSetting.value)  
     //console.log(bodyData)
    let res = await axios.post("/api/applicantList.do", bodyData);
    injectedValue.value={
        list:res.data.ApplicantList,
        count:res.data.count
        };
      // injectedValue.list= res.data.ApplicantList
      // injectedValue.count= res.data.count
        console.log(injectedValue.value)
        return res.data.ApplicantList
}