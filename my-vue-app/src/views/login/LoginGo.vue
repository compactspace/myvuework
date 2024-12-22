<template>

<h1>로그인 페이지 입니다.</h1>

<h1>아직 백엔드가 없습니다. 메인홈으로 돌아가기 클릭</h1>
<button @click="gobackmain">메인홈으로</button>




</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

import axios from 'axios';

const router = useRouter(); //기능

const route = useRoute(); //정보

console.log('route.name: ', route.name); // home
console.log('route.path: ', route.path); // /

const gobackmain= async ()=>{

  await  axios.post('http://localhost:4000/user/login',{

    id:"younggoo1000", 
    password:"1111"


  });


}
</script>