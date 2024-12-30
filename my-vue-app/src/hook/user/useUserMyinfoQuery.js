import { userMyinfoApi } from "../../api/user/userMyinfoApi";
import { useQuery } from "@tanstack/vue-query";

export const useUserMyinfoQuery=(userId)=>{

return (

    useQuery({

        queryKey:['userId'],
        queryFn:()=>userMyinfoApi(userId)
    })
)

}


