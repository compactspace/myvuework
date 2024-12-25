<template>

<button @click="intercepterFnc">인터셉터 버튼</button>
</template>
<script setup>
import { useQuery } from '@tanstack/vue-query';
import { ref } from 'vue';
const queryData=ref(1);

//온 마운티드 효과도 있고,
useQuery({
        queryKey: ['queryData', queryData],
        queryFn: () => queryInterCepter(queryData),
        staleTime: 1000 * 60,
    });

    // 인터셉터의 효과도 있다. 해당 쿼리키의 반응형 객체가 바뀔시
const queryInterCepter=()=>{
    console.log("인터셉터")
    return queryData;
}
const intercepterFnc=()=>{
    queryData.value++;
}

</script>