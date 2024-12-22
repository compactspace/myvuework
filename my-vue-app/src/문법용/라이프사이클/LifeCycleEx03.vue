<template>
 
 <!-- 우선은 팩트체크: 비포마운트 보다 기본적인 양뱡향 모델 데이터 파싱이 더
 빠른듯 하다. 
 -->
 <h1 >{{ x.key  }}</h1>
 
</template>

<script setup>
import { onBeforeUnmount,onRenderTracked, onBeforeUpdate, onUnmounted, onUpdated, ref } from 'vue';
import { onBeforeMount, onMounted } from 'vue';
import axios from 'axios';

const x=ref();
let y;
onBeforeMount(   ()=>{
   
    console.log("비포마운트")
   
   let pro= setTimeout(()=>{
        
        // x.value={key:"값"}  
        console.log(x)
      
 },2000)


}

)
console.log("-----------------------------------")
onUpdated(()=>{
    console.log('악시오스로 받아온뒤 마운트 업뎃')
})

onMounted(  ()=>{
    console.log("마운티드")
//   data.value= await axios.get("http://localhost:8000");
})

onBeforeUpdate(()=>{
    console.log("비포 업데이트")
})

onRenderTracked((e)=>{
   
})



</script>