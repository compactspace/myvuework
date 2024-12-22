
<template>
<h1>하하하하{{data.a}}</h1>
</template>
<script setup>
import { onUnmounted, onUpdated, ref } from 'vue';
import { onBeforeMount, onMounted } from 'vue';
import axios from 'axios';

let data=ref();
onBeforeMount(   ()=>{
   console.log("비포마운트")
   debugger
 let pro= axios.get("http://localhost:8000").then(  (res)=>{
    debugger
        console.log(res)
        data.value=   res.data
    }).catch((err)=>{
        console.log(err)
    }) 

   
}

)

onUpdated(()=>{
    console.log('악시오스로 받아온뒤 마운트 업뎃')
})

onMounted(  ()=>{
    console.log("마운티드")
//   data.value= await axios.get("http://localhost:8000");
})

</script>