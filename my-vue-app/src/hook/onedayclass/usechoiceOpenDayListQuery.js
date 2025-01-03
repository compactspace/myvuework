import { getChoiceDayClassListApi } from "../../api/onedayclass/getChoiceDayClassListApi";

import { useQuery } from "@tanstack/vue-query";

export const usechoiceOpenDayListQuery = (onedayclass_num,choiceOpenday)=>{


    return (
        useQuery ({
            queryKey:['choiceOpenClassList',choiceOpenday],
            queryFn:()=>getChoiceDayClassListApi(onedayclass_num,choiceOpenday) ,
            
                enabled: false, // 컴포넌트 마운트 시 자동으로 실행되지 않게 함
              
        })
    )

}
