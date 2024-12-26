<template>
  <div class="boardWrapper">
    <div v-if="qnaList">
      <div v-for="list in qnaList">
        {{ list.seq }}
        {{ list.writer }}
        {{ list.content }}
      </div>
    </div>
  </div>

  <!-- 
    property totalItems :총 항목 개수
    property items-per-page : 페이지의 주기성
    property max-pages-shown : 총 페이지를 결정
    property onClick : 이벤트 발생 함수
    v-model          :  반응형 객체로 number 자료형으로 세팅할것
    -->
  <Pagination
    :totalItems="209"
    :items-per-page="5"
    :max-pages-shown="5"
    :onClick="clickFnc"
    v-model="cPage"
  />
</template>

<script setup>
import axios from "axios";
import Pagination from "./paginateLive.vue";
import { onMounted, reactive, ref } from "vue";
const cPage = ref(100);

console.log(Pagination);
const qnaList = ref({});
const paginData = {
  startpage: 0,
};

const clickFnc = async () => {
  paginData.startpage = (cPage.value - 1) * 5;
  await axios
    .post("/api/vuegetboard.do", paginData)
    .then((response) => {
      qnaList.value = response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
</script>

<style>
.boardWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 786px;
  max-width: 786px;
}

.boardContentArea {
  display: flex;
  flex-direction: column;
  width: 80%;
}

.boardContentList {
  display: grid;
  grid-template-columns: 5% 10% 70%;
  height: 48px;
}

.btnArea {
  display: flex;
}
</style>
