
import { useQuery } from "@tanstack/vue-query";


export const  useGetBoardDetail=()=>{

return(

    useQuery({
    queryKey:['seq']

    })

)


}

