<template>
  <div class="video-container">
    <video className="videobanner" muted autoPlay loop>
      <source
        src="https://videos.pexels.com/video-files/29955171/12855221_640_360_25fps.mp4"
        type="video/mp4"
      />
    </video>
  </div>

  <div v-if="mainProVideValue != undefined" class="onedayclassWrapper">
    
    <div class="onedayclassArea">
      <div v-for="list in mainProVideValue" class="contentArea" @click="goReserveFnc(list.onedayclass_num)">
        <div class="textSamecss">수업이름: {{ list.onedayclass_name }}</div>
        <img :src="list.imagelocallpath1" />
        <div class="textSamecss">수업비용: {{ list.onedayclass_price }}</div>
      </div>
    </div>

    <Paginate
      class="paginate"      
      :totalItems="209"
      :items-per-page="5"
      :max-pages-shown="5"
      :onClick="clickFnc"
      v-model="cPage"
    />
  </div>
</template>

<script setup>
import { inject, ref } from "vue";
import Paginate from "../../../commons/mainhomepagenation/MainHomePaginate.vue";
import { useRouter } from "vue-router";


//주의: 기본 페이지 진입시는 백단에서 limit 0 5 로
// cPage는 5의 배수 단위로 limit 5,5  limit 10,5 limit 15,5 이렇게 처리할 것이다.
const cPage = ref(1);
const mainProVideValue = inject("provideValue");

const router=useRouter();

const clickFnc = () => {

  console.log(cPage.value)

};

const goReserveFnc= (onedayclass_num)=>{

  console.log(`선택한 원데이 클래스 번호 ${onedayclass_num}`)
  router.push({
    name:'onedayclasreserve',
    params:{onedayclass_num}
  })

}

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

.onedayclassWrapper {
  padding:30px 30px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  max-height: 300px;
  align-items: center;
}

.onedayclassArea {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.contentArea {
  display: flex;
  flex-direction: column;

}

img {
  display: inline-block;
  height: 80%;
  max-width: 262px;
  width: auto;
}

.textSamecss{
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 20px;
  font-weight: 600;

}
</style>
