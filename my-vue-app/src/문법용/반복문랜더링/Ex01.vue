

<template>

<div v-for="data in testData1 ">

    <img :src="data.img">

</div>



</template>
<script setup>
import {ref, onMounted} from 'vue'
import {testData1} from '../../스크립트불러오기친해지자/RefEx01'

console.log(testData1)



</script>