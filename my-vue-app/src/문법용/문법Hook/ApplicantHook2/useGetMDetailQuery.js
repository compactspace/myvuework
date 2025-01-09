import { useQuery } from "@tanstack/vue-query";
import { getMDetailApi } from "../../문법API/Applicant2/getMDetailApi";
export const useGetMDetailQuery =(MDetail)=>{


return (
    useQuery({
        queryKey: ["infoMDetail"],
        queryFn: () => getMDetailApi(MDetail),
        
      })
)


}