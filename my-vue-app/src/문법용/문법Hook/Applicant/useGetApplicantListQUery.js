import { getApplicantListApi } from "../../문법API/Applicant/getApplicantListApi";
import { useQuery } from "@tanstack/vue-query";

export const useGetApplicantListQUery =(postIdx,pageSetting,choiceStatus,injectedValue)=>{

return(
    useQuery({
        queryKey:["applicantList"],
        queryFn:()=>getApplicantListApi(postIdx,pageSetting,choiceStatus,injectedValue),
        enabled: false
    })
)


}