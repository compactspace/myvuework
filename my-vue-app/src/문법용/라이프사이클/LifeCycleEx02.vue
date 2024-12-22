<template>
    <h1 @click="upFnc">클릭</h1>
    <h1 @click="getState">겟을해야 마운트업데이트반영?</h1>
    <!-- 좀더 정확히는 바인딩하고 가져와야 아래처럼 마운트업데이트 훅이 실행됨
    상태가 바뀐다고 실행되는게 아니라 
    됨 -->
    <!-- <h1 v-if="getState !=0">
        {{ getState }}
    </h1> -->
</template>

<script setup>
import { onUnmounted, onUpdated, ref } from 'vue';
import { onBeforeMount, onMounted } from 'vue';
import axios from 'axios';
const cnt=ref(0);

const upFnc=()=>{  
    cnt.value++;
}

const getState=()=>{
    console.log(cnt.value)
    return cnt;
}

onBeforeMount(()=>{
    console.log('비포마운트')
})



onUpdated(()=>{
    console.log('악시오스로 받아온뒤 마운트 업뎃')
})

onMounted(  ()=>{
    console.log("마운티드")
//   data.value= await axios.get("http://localhost:8000");
})

</script>