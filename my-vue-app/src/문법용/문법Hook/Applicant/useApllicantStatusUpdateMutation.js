import { updateApplicantStatusApi } from "../../문법API/Applicant/updateApplicantStatusApi";

import { useMutation } from "@tanstack/vue-query";

export  const useApllicantStatusUpdateMutation=(keyword,postIdx,loginId)=>{


    return (
        useMutation({
            mutationKey:["statusUpdate"],
            mutationFn:()=>updateApplicantStatusApi(keyword,postIdx,loginId),
            enabled: false, 
        })
    )


    
}  