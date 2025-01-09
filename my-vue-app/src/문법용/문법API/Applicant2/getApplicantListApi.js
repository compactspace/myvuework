import axios from "axios";

import { toRaw } from "vue";
export const getApplicantListApi = async (
  loginId,
  hireProcessArr,
  MDetail,
  postIdx,
  pageSetting,
  choiceStatus,
  injectedValue
) => {
 
 
console.log(` choiceStatus: ${choiceStatus.value}          postIdx:   ${postIdx.value}   hireProcessArr   ${hireProcessArr.value}`)


  let bodyData = {
    loginId: loginId,
    postIdx: postIdx.value.toString(),
    firstProc: choiceStatus.value,
    keyword: choiceStatus.value,
    currentPage: pageSetting.value.currentPage.toString(),
    pageSize: pageSetting.value.pageSize.toString(),
  };
  // console.log(bodyData);
  let res = await axios.post("/api/applicantList.do", bodyData);

 // let hirProcessArr = new Array();
  let temporayryArr = new Object();

  res.data.MDetail.forEach(item => {

    let { hirProcess, title } = item;

    //  console.log(`엠디테일에서 postIdx ${postIdx}  그리고 title  ${title}`);
      // temporayryArr[i] = hirProcess.split(" → ").map((item) => item.trim());
     
      temporayryArr[item.postIdx] = hirProcess.split(" → ").map((item) => item.trim());
  


 if(postIdx.value==item.postIdx){
 // console.log(`postIdx.value  ${postIdx.value} element.postIdx ${item.postIdx}`)
 hireProcessArr= [...hirProcess.split(" → ").map((item) => item.trim())];
 //console.log(  hireProcessArr.value ) 
}
  });
 

  choiceStatus.value = hireProcessArr[0];  
  hireProcessArr.push("합격");
  hireProcessArr.push("탈락");
  MDetail.value.hirProcess = [...hireProcessArr];
  


  injectedValue.value = {
    list: res.data.list,
    count: res.data.count,
  };



console.log(`choiceStatus.value  ${choiceStatus.value}`)











  

  return injectedValue;
  //return res.data.list
};