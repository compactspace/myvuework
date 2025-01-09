import { useQuery } from "@tanstack/vue-query";
import { getMDetailApi } from "../../문법API/Applicant2/getMDetailApi";
export const useGetMDetailQuery =(postIdx,MDetail,choiceStatus,provideMDVal)=>{


return (
    useQuery({
        queryKey: ["infoMDetail"],
        queryFn: () => getMDetailApi(postIdx,MDetail,choiceStatus,provideMDVal),
        
      })
)


}