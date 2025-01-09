<template>
 <h1>지원자관리</h1>

   <ApplicantStatusSearch/>
<ApplicantBody/>
 

</template>



<script setup>
import ApplicantStatusSearch from './ApplicantStatusSearch.vue';
import ApplicantBody from './ApplicantBody.vue';

import { useGetMDetailQuery } from '../문법Hook/ApplicantHook2/useGetMDetailQuery';
import { ref } from 'vue';
import { provide } from 'vue';



const provideVal=ref()
provide("applicantProvide",provideVal)

//불 합 격 버튼을 위한 각 포스팅에 대한 진행절차 배열을 담는다.
// 초기화는 api에서 할것이다.
const provideMDVal=ref()
provide("provideMDVal",provideMDVal)




</script>