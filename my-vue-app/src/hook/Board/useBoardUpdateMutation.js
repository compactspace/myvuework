


/**
 * @function useMutation 
 * 훅=함수로 데이터베이스의 업데이트/삭제/삽입을 담당할때 쓴다고암기하자.
 * @function useQueryClient 
 * 훅=함수로 useMutation 의 실행후, useQuery에게 업/삭/삽입 을 했다고
 * 알려주는 역활로, 따라서 useQuery는 자동으로 select 문으로 최신 업데이트를 보여주게된다.
 * 
 * */ 
import { useMutation, useQueryClient } from '@tanstack/vue-query';
import { getBoardUpdateApi } from '../../api/Board/getBoardUpdateApi';
import { useRouter } from 'vue-router';
import axios from 'axios';



export const useBoardUpdateMutation=(changeDetaile,seq)=>{
    
    //여긴 초기화 영역으로 한번만 실행 여기서 변수 초기화 세팅을 못함  몸통 부분은
    //초기화시 딱한번 읽힘  그리고 리턴부 부터 계속 실행됨
    //여기선 변수조작 불가능(가능하더라도 힘들듯)
   console.log("초기화 영역으로 여긴 한번만 실행")

   const queryClient = useQueryClient();
   const router = useRouter();

   //리턴부는 이제부터 호출 될때마다 실행 되는 것임
   return useMutation({
    mutationKey:["boardUpdate"],
    mutationFn:  () =>getBoardUpdateApi(changeDetaile,seq) ,
   onMutate:()=>{
    console.log("온뮤테이티드")
   }
   ,
    onError:()=>{
        console.log("에러")
    },
    onSuccess:()=>{
    console.log("석세스함수겅공")
    router.go(-1);
    }

    })



}