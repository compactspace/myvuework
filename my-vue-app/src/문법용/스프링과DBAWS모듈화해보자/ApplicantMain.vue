<template>
<ApplicantSearch/>
<ApplicantBody/>
</template>
<script setup>
import ApplicantSearch from './ApplicantSearch.vue';
import ApplicantBody from './ApplicantBody.vue';
import { ref,provide } from 'vue';

const provideVal=ref(null)
provide("provideVal",provideVal)

</script>