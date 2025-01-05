import { useQuery } from "@tanstack/vue-query";
import { getApplicantPaginApi } from "../../문법API/Applicant/getApplicantPaginApi";

export const useApplicantPaginQuery=(injectedValue,cPage)=>{

    return(useQuery({
        queryKey:['paginList',cPage],
        queryFn:()=>getApplicantPaginApi(injectedValue,cPage),
        enabled:false

    }))

}