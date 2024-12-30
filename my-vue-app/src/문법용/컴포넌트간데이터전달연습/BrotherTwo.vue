<template>
<h1>형제2</h1>
<button @click="clickFnc">클릭</button>

</template>

<script setup>
import { watchEffect ,ref} from 'vue';
const broNum2=ref(0)


const clickFnc=()=>{
    broNum2.value++;

}

watchEffect(()=>{

console.log(`형제2 이팩트 ${broNum2.value}`)
})



</script>
