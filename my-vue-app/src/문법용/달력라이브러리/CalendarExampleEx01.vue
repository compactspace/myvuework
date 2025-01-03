<template>
  <div>
    <h3>선택한 날짜: {{ formattedDate }}</h3>
    <!-- 좀 설명이 그지 같은데..
     밑에 있는 format 는  vue-datepicker  의 내장으로 깔려있는 태그에 출력될 형식을 말하는 거고(참조이미지 폴더보아라)
     현재 v-model 이 가르키는 반응형 객체는 저게 적용이 되는게 아님
     자바스크립트의 date 객체를 가르킴.
     따라서 v-model의 date를 쉽게 포맷 해주는 라이브러리 npm install date-fns 를 설치하고
     
     -->
    <vue-datepicker 
      v-model="selectedDate" 
      :format="'yyyy-M-dd'" 
    />

  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { format } from 'date-fns';
import VueDatepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

// 반응형으로 선택된 날짜를 저장
const selectedDate = ref(null);
const formattedDate = ref('');

// 선택된 날짜가 변경될 때마다 `formattedDate` 업데이트
watch(selectedDate, (newDate) => {

  console.log( selectedDate)

  if (newDate) {
    formattedDate.value = format(newDate, 'yyyy-M-dd');
  }
});
</script>