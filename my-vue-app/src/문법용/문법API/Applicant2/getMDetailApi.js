
import axios from "axios";


export const getMDetailApi = async (postIdx, MDetail, choiceStatus, provideMDVal) => {  
  
  
  let res = await axios.post("/api/MDetail.do",{loginId:"company01"});

  MDetail.value.Md = [...res.data.MDetail];

  let hirProcessArr = new Array();
  let hirProcessArrBox;


  let temporayryArr = new Object();
 
  res.data.MDetail.forEach((item) => {
    let { hirProcess,  title } = item;
    if(item.postIdx===postIdx.value){
   //   console.log(`엠디테일에서 postIdx ${ item.postIdx}  그리고 title  ${title}`);   
      hirProcessArrBox=[...hirProcess.split(" → ").map((item) => item.trim())];
    }
    temporayryArr[item.postIdx] = hirProcess.split(" → ").map((item) => item.trim());
  
  });

 

  if(hirProcessArrBox==undefined){
    hirProcessArrBox=[...res.data.MDetail[0].hirProcess.split(" → ").map((item) => item.trim())];
  }
  

  hirProcessArr = hirProcessArrBox  
  hirProcessArr.push("합격");
  hirProcessArr.push("탈락");
  console.log(hirProcessArr);
  MDetail.value.hirProcess = [...hirProcessArr];
  MDetail.value.hireProcessArr = { ...temporayryArr };

  provideMDVal.value = hirProcessArr;

   postIdx.value = res.data.MDetail[0].postIdx;
  // //console.log(`postIdx.value:  ${postIdx.value} `);

  return res.data.MDetail;
};
