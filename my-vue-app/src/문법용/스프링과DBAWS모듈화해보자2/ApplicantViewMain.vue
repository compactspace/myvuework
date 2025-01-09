<template>
 <h1>지원자관리</h1>
   <ApplicantStatusSearch/>
   <!-- <ApplicantBody/> -->
</template>



<script setup>
import ApplicantStatusSearch from './ApplicantStatusSearch.vue';
import { ref } from 'vue';
import { provide } from 'vue';
const provideVal=ref()
provide("provideVal",provideVal)
const provideMDVal=ref()
provide("provideMDVal",provideMDVal)
</script>