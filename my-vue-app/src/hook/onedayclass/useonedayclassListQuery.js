
import { useQuery } from "@tanstack/vue-query";
import { getOnedayClassListApi } from "../../api/onedayclass/getOnedayClassListApi";

export const useonedayclassListQuery=(onedayclass_num)=>{

    return(
        useQuery({
            queryKey:['onedayclassList'],
            queryFn:()=>getOnedayClassListApi(onedayclass_num)
        })
    )

}