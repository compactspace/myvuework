import { useQuery } from "@tanstack/vue-query";
import { getMDetailApi } from "../../문법API/Applicant/getMDetailApi";
export const useGetMDetailQuery =(postIdx,MDetail)=>{


return (
    useQuery({
        queryKey: ["infoMDetail"],
        queryFn: () => getMDetailApi(postIdx,MDetail),
        
      })
)


}


