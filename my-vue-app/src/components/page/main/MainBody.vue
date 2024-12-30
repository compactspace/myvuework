<template>

  <div class="video-container">
    <video className="videobanner" muted autoPlay loop>
      <source
        src="https://videos.pexels.com/video-files/29955171/12855221_640_360_25fps.mp4"
        type="video/mp4"
      />
    </video>
  </div>

<div v-if="classList!=undefined">
  <div v-for="list in classList">
    <h1>{{list.onedayclass_name}}</h1>
  </div>

</div>


</template>

<script setup>
import { inject, watchEffect,ref } from 'vue';

const mainProVideValue=inject("provideValue");

const classList=ref(mainProVideValue)

console.log("자식 자바스크립트 영역")
watchEffect(()=>{  
    console.log(`자식 왓치 ${JSON.stringify(classList.value[0])}`)
})



</script>
<style>
.video-container {
  position: relative;
  width: 100%;
  top: 0px;
}

.videobanner {
  width: 100%;
  
}
</style>
