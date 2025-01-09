import axios from "axios";

//이는 첫 페이지 진입이나
//포스팅탭을 바꿀때 사용된다.
export const getApplicantListApi = async (firstProc,postIdx,loginId ,currentPage ,pageSize,injectedValue,provideMDVal) => {

  console.log( ` 첫 리스트:   firstProc: ${firstProc.value}  postIdx: ${postIdx.value} `)
  let bodyData = {
    loginId: loginId.value,
    postIdx: postIdx.value.toString(),
    firstProc: firstProc.value,
    keyword: firstProc.value,
    currentPage: currentPage.value.toString(),
    pageSize: pageSize.value.toString(),
  };
 
 let res = await axios.post("/api/applicantList.do", bodyData);


  //console.log(res.data.MDetail[0].hirProcess.split(" → ").map((item) => item.trim()))

  for(let key in res.data.MDetail){
    if(postIdx.value==res.data.MDetail[key].postIdx){
   //이건 합격 불합격 버튼에서 사용할 채용절차를 담을 비교배열이다.
   provideMDVal.value=res.data.MDetail[key].hirProcess.split(" → ").map((item) => item.trim())
      break;
 }
}
 provideMDVal.value.push("합격");
 provideMDVal.value.push("탈락");

 injectedValue.value=res.data
  return  injectedValue

};