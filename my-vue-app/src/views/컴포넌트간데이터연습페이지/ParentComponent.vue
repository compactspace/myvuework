<template>
    <h1>최상위 부모 컴포</h1>
    <button @click="clickFnc">클릭</button>
<BrotherOne/>
<BrotherTwo/>


</template>

<script setup>
import BrotherOne from '../../문법용/컴포넌트간데이터전달연습/BrotherOne.vue';
import BrotherTwo from '../../문법용/컴포넌트간데이터전달연습/BrotherTwo.vue';
import { watchEffect ,ref} from 'vue';
import { provide } from 'vue';


const parentNum=ref(0)

const clickFnc=()=>{
    parentNum.value++;

}

watchEffect(()=>{

console.log(`부모 왓치 이팩트 ${parentNum.value}`)
})

provide("parentValue",parentNum)


</script>


