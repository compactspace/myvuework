import { getPostingApplicantListApi } from "../../문법API/Applicant2/getPostingApplicantListApi";
import { useQuery } from "@tanstack/vue-query";

export const useGetPostingApplicantListQuery=(firstProc,postIdx,loginId ,currentPage ,pageSize,injectedValue,MdetailList,hireProcessStatus,provideMDVal)=>{


    return (useQuery({
        queryKey:["postingApplicant"],
        queryFn:()=>getPostingApplicantListApi(firstProc,postIdx,loginId ,currentPage ,pageSize,injectedValue,MdetailList,hireProcessStatus,provideMDVal)
        ,
        //enabled:false
    }))

}

