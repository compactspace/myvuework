<template>
  <select v-model="choiceCondiction">
    <option>서류심사중</option>
    <option>면접</option>
    <option>합격</option>
    <option>불합격</option>
  </select>
</template>
<script setup>
import { useQuery, useMutation } from "@tanstack/vue-query";
import { inject,ref } from "vue";
import axios from "axios";
const proValue = inject("proValue");
const choiceCondiction=ref('');

const { data: boardList } = useQuery({
  queryKey: ["boardList",choiceCondiction],
  queryFn: () => getSearchBoard(choiceCondiction),
});

//첫 번째 연습 홈페이지 진입시 A컴포에서 useQuery로 받아온 데이터를 B컴포넌트에 전달하기

// 두 번째 연습은 이미 진입한 페이지에서 A컴포에서 검색이라던지 조회조건을 useQuery로 받아와 다시 B컴포로 넘기는 것이다.
//  예를 들자면 select 태그를 보면 된다.
const getSearchBoard = async (choiceCondiction) => {
    let bodyData={
        status:choiceCondiction.value
    }
    console.log(bodyData)
  let res = await axios.post("/api/vuegetboard.do", bodyData);
  proValue.value = res.data;
  return res.data;
};



// 3세번째 연습은?? 
// A컴포로 부터 받은 데이터럴  B컴포에서 백단 DB에 접근하여 업데이트 딜리트 등을 한후 B컴포의 상태변화도 일으 킬 것이다.
// 이제 B컴포로 가서 딜리트 업데이트 인설트를 해보자.





</script>
