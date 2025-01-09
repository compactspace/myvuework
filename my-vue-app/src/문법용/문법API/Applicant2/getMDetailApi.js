
import axios from "axios";


export const getMDetailApi = async (MDetail) => {  
  
  let res = await axios.post("/api/MDetail.do",{loginId:"company01"}); 
  
  let hirProstingArr = new Array(); 
  let hireProcessArr = new Array();
  let hirePostingIdx= new Array();

let fullHirProcess= new Array(); 

  let i=0;


console.log(res.data)



  res.data.MDetail.forEach((item) => {
    let { hirProcess,  title ,postIdx} = item;
     // console.log(postIdx)
    if(i==0){
   //   console.log(hirProcess)
      hireProcessArr = hirProcess.split(" → ").map((item) => item.trim());
    }
    hirProstingArr[i] = title 
    hirePostingIdx[i]=postIdx;
    fullHirProcess[i]= hirProcess.split(" → ").map((item) => item.trim());
    
    i++;
  });   
  
  hireProcessArr.push("합격");
  hireProcessArr.push("탈락");
  MDetail.value.hirePosting = [...hirProstingArr];
  MDetail.value.hireProcess = [ ...hireProcessArr] ;
  MDetail.value.hirePostingIdx = [ ...hirePostingIdx] ;
  MDetail.value.fullHirProcess= [ ...fullHirProcess] ;
  MDetail.value.defaultPostIdx=hirePostingIdx[0];
  MDetail.value.defaulFirstPor=hireProcessArr[0];
  // MDetail.value.pullHireList=res.data.MDetail
  
console.log(MDetail.value.fullHirProcess)



  // MDetail.value.Md = [...res.data.MDetail];
  // provideMDVal.value.hirePosting=hirePosting;
  // provideMDVal.value=MDetail.value;


  return MDetail;
};
