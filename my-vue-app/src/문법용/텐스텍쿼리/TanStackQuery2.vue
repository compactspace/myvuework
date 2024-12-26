<template>
<h1>dfdf</h1>
<input type="date" v-model="searchCondiction.startDate">
<input type="date" v-model="searchCondiction.endDate">
<button @click="getSearch">클릭</button>

</template>
<script setup>
import axios from 'axios';
import { ref, watch } from 'vue';


const searchCondiction=ref({});

const getSearch=async ()=>{


//백단에서 확인하려고 하드코딩용도로 writer:'asd123' 박아둠
    const reqBodyData={
        regdate:searchCondiction.value.startDate,
        startpage:0,
        writer:'asd123'
    }

   await  axios.post('/api/vuegetboard.do',reqBodyData)
    
  
}




</script>