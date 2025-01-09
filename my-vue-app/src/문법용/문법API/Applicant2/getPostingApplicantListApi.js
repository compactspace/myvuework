import axios from "axios";

// 이는 진행절차 탭을 바꾸거나
// 합격/불합격 버튼을 누를시 쿼리클라이언트 키 캐쉬 삭제 요청으로 타게된다.
export const getPostingApplicantListApi = async (firstProc,postIdx,loginId ,currentPage ,pageSize,injectedValue,MdetailList,hireProcessStatus,provideMDVal) => {

  console.log( `firstProc: ${firstProc.value}  postIdx: ${postIdx.value} `)
 console.log(MdetailList.value.hireProcess)

 //탈락후 합격시도 쿼리키 삭제로 리패치가 되는데 이시점에선
 // 마지막 기억인 firstProc.value=="탈락" 을 기억하고 있으니
 //다시 첫번째 진행절차로 돌려준다.
 if(firstProc.value=="탈락"){
  firstProc.value=MdetailList.value.hireProcess[0]
 }

  let bodyData = {
    loginId: loginId.value,
    postIdx: postIdx.value.toString(),
    firstProc: firstProc.value,
    keyword: firstProc.value,
    currentPage: currentPage.value.toString(),
    pageSize: pageSize.value.toString(),
  };
 
 let res = await axios.post("/api/applicantList.do", bodyData);

 injectedValue.value=res.data
 
  // let hireProcessArr = new Array();

  res.data.MDetail.forEach((item) => {
    let { hirProcess,  title } = item;
     // console.log(postIdx)
    if(item.postIdx==postIdx.value){
     console.log(hirProcess)
     MdetailList.value.hireProcess = hirProcess.split(" → ").map((item) => item.trim());
     provideMDVal.value=null;
     provideMDVal.value=hirProcess.split(" → ").map((item) => item.trim());
    
    }    
 
  }); 
  console.log(  MdetailList.value.hireProcess )  
  hireProcessStatus.value=MdetailList.value.hireProcess[0]



  MdetailList.value.hireProcess.push("합격");
  MdetailList.value.hireProcess.push("탈락");

  provideMDVal.value.push("합격");
  provideMDVal.value.push("탈락");


  return  injectedValue

};