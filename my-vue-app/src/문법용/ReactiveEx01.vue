
<template>
 <button @click="increment">
  {{ state.count }}
</button> 
</template>

<script setup>

// v-model 이랑 비슷한 기능인듯하다.
import { ref,reactive ,nextTick ,onMounted,onUnmounted ,onBeforeMount,onUpdated} from 'vue'

const x=ref("x");
const state = reactive({ count: 0 })

function increment() {
  state.count++

  nextTick(()=>{
    console.log("?????")
    
  })


}

// Dom 노드 생성전 이다. 이때 처리할게 있다면 처리하는 로직
onBeforeMount(()=>{console.log(x)})

// DOM 노드 생성이 완료된 후 에 실행됨
onMounted(()=>{console.log("마운트")})
// 스테이트 값이 변할시에만 실행됨
onUpdated(()=>{console.log("스테이트 값이 변경된다면")})

onUnmounted(()=>{console.log("언마운트 이는 좀 뭐랄까 표현이 어려운데 체감하려면 페이지 이동시에 아마 뜰뜻 아니면 코드상으로 뭔갈 지우면 뜰듯")})
</script>