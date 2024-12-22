<template>

<button @click="countUp">카운트 업 버튼</button>
<span>{{ count }}</span>

<span v-if="count%2==0">짝수</span>
<span v-else="count%2==1">홀수</span>


</template>


<script setup>
import {ref, onMounted} from 'vue';



const count=ref(0);

const countUp=()=>{

    count.value++;
}



</script>