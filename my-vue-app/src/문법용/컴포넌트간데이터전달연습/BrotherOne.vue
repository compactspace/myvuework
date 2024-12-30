<template>
  <h1>형제1</h1>
  <button @click="clickFnc">클릭</button>
</template>

<script setup>
import { watchEffect ,ref} from 'vue';
import { inject } from 'vue';


const  fromParent=inject("parentValue");

const num=ref(0)
const clickFnc=()=>{

  num.value++;
}


//아무리 왓치 이팩트여도 상위 와치이팩트는 반응하지 않는다.
watchEffect(()=>{

  console.log(`형제1 이팩트 ${num.value} 그리고 형제1 이 부모로 부터 받은 왓치 이팩트 ${fromParent.value}`)
})


</script>
