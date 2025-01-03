<template>
  <NaveBar />
  <MainBody />
</template>
<script setup>
import MainBody from "../../components/page/main/MainBody.vue";
import NaveBar from "../../components/common/NaveBar.vue";
import { useonedayclassListQuery } from "../../hook/onedayclass/useonedayclassListQuery";
import { provide, watchEffect } from "vue";
import { ref } from "vue";
// 여기서 미리 DB에서 받아올걸 받아온다 최상위 컴포넌트에서
// 각종 상품 정보라던지 원데이클래스 이미지 등이라던지 등등
console.log("부모 자바스크립트 영역")
const onedayclass_num = ref('');
const oneDayClassList=ref({
});
const { data: ClassList, isSuccess } = useonedayclassListQuery(onedayclass_num);

watchEffect(()=>{

  if(ClassList.value){

    oneDayClassList.value={...ClassList.value.oneDayClassList}
    console.log(oneDayClassList.value)
  }
  
})
provide("provideValue",oneDayClassList)

</script>
