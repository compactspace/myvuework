import axios from "axios";

export const getMDetailApi= async (postIdx,MDetail)=>{

    //comp11 
    //biz01
    let res = await axios.post("/api/MDetail.do", {loginId:"biz01"});
 
    MDetail.value = [...res.data.MDetail];

    // postIdx.value = res.data.MDetail[0].postIdx;

    postIdx.value = res.data.MDetail[0].postIdx;
    console.log(`postIdx.value:  ${postIdx.value} 그리고 ${res.data.MDetail[0].postIdx}`)

    return res.data.MDetail;

}

