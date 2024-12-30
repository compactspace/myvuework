import { userMyinfoUpdateApi } from "../../api/user/userMyinfoUpdateApi";
import { useMutation } from "@tanstack/vue-query";
import { useRouter } from "vue-router";

//async 를 붙이면 이상한 에러나니 붙이지 말자
export const useMyinfoUpdateMutate=  (updateUserInof)=>{

  const  router=useRouter();
    return   useMutation ({
             mutationFn:()=>userMyinfoUpdateApi(updateUserInof),
            mutationKey:['myinfoupdate'],
            onSuccess:()=>{
                alert("라우터고!")
                router.push('/');
            }

        })

    


}