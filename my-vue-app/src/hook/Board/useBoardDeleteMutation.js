import { useMutation } from "@tanstack/vue-query";
import { tryBoardDeleteApi } from "../../api/Board/tryBoardDeleteApi";
import { useRouter } from "vue-router";
export const useBoardDeleteMutation=(seq)=>{

    const router=useRouter();

    return useMutation({
        mutationKey:['boardList'],
        mutationFn:()=>tryBoardDeleteApi(seq),
        onSuccess:()=>{
            console.log('삭제 성공')
            router.go(-1);
        }


    })


}