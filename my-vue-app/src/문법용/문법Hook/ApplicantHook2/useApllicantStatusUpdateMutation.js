import { updateApplicantStatusApi } from "../../문법API/Applicant2/updateApplicantStatusApi";

import { useMutation ,useQueryClient} from "@tanstack/vue-query";
import { useRouter } from "vue-router";

export  const useApllicantStatusUpdateMutation=(keyword,postIdx,loginId)=>{

    const router=useRouter();
    const queryClient=useQueryClient();

    return (
        useMutation({
            mutationKey:["statusUpdate"],
            mutationFn: ()=>updateApplicantStatusApi(keyword,postIdx,loginId),
            enabled: false,
            onSuccess: () => {
                queryClient.invalidateQueries(
                    ["applicantList"]);
                    queryClient.invalidateQueries(
                        ["postingApplicant"]);
                        router.push({
                            name:"awsex03"
                        })
                  
              },
        })
    )


    
}  