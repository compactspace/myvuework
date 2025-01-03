<template>
  <div class="reserveWrapper">
    <div v-if="isSuccess" class="onedayInfoArea">
      <div class="imageArea">
        <!-- {{ candiImage }} -->
        <div
          class="unitImage"
          :style="{
            backgroundImage: 'url(' + candiImage[0] + ')',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '300px',
          }"
        ></div>
        <div class="candidateImage">
          <div
            @click="unitImageChangeFnc(idx)"
            class="candidateImageList"
            v-for="(candi, idx) in candiImage"
            :key="candi"
          >
            <div
              :style="{
                backgroundImage: 'url(' + candi + ')',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '80px',
                height: '60px',
              }"
            ></div>
          </div>
        </div>
      </div>
      <div class="textArea">
        <div class="classnameArea">
          {{ oneDayClass.oneDayClassList[0].onedayclass_name }}
        </div>
        {{ oneDayClass.oneDayClassList[0]}}
        <div class="useInfoArea">
          {{ oneDayClass.oneDayClassList[0].onedayclass_name }}
        </div>
      </div>
    </div>
    <vue-datepicker v-model="selectedDate" :format="'yyyy-M-dd'" />

    <div v-if="choiceOpendayClassList != undefined" class="choiceOpendayAreaa">
      {{ choiceOpendayClassList }}
    </div>
    <h1>선택한날짜 :{{ formattedDate }}</h1>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { provide, ref, watch } from "vue";
import { useonedayclassListQuery } from "../../hook/onedayclass/useonedayclassListQuery";
import { usechoiceOpenDayListQuery } from "../../hook/onedayclass/usechoiceOpenDayListQuery";

import { format } from "date-fns";
import VueDatepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
// 반응형으로 선택된 날짜를 저장
const selectedDate = ref(null);
const formattedDate = ref("");
const route = useRoute();
const { params } = route;
const onedayclass_num = ref(params.onedayclass_num);
//console.log(`현재 원데이클래스 번호 ${onedayclass_num.value}`)
//후보이미지
const candiImage = ref([]);

const { data: oneDayClass, isSuccess } = useonedayclassListQuery(onedayclass_num);

const { data: choiceOpendayClassList, refetch } = usechoiceOpenDayListQuery(
  onedayclass_num,
  formattedDate
);

// 선택된 날짜가 변경될 때마다 `formattedDate` 업데이트
watch(oneDayClass, () => {
  let temporaryObj = new Array();
  let i = 0;
  for (let key in oneDayClass.value.oneDayClassList[0]) {
    let imageCheck = oneDayClass.value.oneDayClassList[0];
    if (
      imageCheck[key] != undefined &&
      imageCheck[key].toString().indexOf("/src/Image/OnedayClassImage/") != -1
    ) {
      temporaryObj[i] = imageCheck[key];
      i = i + 1;
      console.log(i);
    }
  }
  candiImage.value = [...temporaryObj];
});

// 선택된 날짜가 변경될 때마다 `formattedDate` 업데이트
watch(selectedDate, (newDate) => {
  //console.log(selectedDate)
  if (newDate) {
    formattedDate.value = format(newDate, "yyyy-M-dd");
    refetch();
    console.log("왓더..");
  }
  console.log(candiImage.value);
});

const unitImageChangeFnc = (idx) => {
  let temporaArray = candiImage.value;
  let first = new Array(1);
  console.log(idx);

  first[0] = candiImage.value[idx];
  //console.log(first)
  //idx
  temporaArray.splice(idx, 1);

  let newarr = first.concat(temporaArray);

  console.log(newarr);

  // candiImage.value=null
  candiImage.value = [...newarr];
};

//주석처리 단 v-if 에서 함수를 호출 가능함은 암기하자.
// const typeCheckFnc=(candi)=>{

//     if(candi==null ||  candi==undefined){
//         console.log("널이거나 언디파인")
//         return -1
//     }
//     //imagelocallpath
//     let candiImage=  candi.toString();
//     if(candiImage.indexOf('/src/Image/OnedayClassImage/')==-1){
//      return -1}

//     if(candiImage.indexOf('jpeg')!=-1||candiImage.indexOf('jpg')!=-1||candiImage.indexOf('png')!=-1){
//         console.log(candiImage)
//         return candiImage;
//     }else{
//         console.log("그외")
//         return -1
//     }

// }

//다음 쌍의 주석처리: 데이트피커 제공자 함수로 속성으로 넣으면됨 지금 필요 없어서 주석처리
// @open="setFirstDayOfMonth
// const setFirstDayOfMonth=()=>{
// const currentDate=new Date();
// currentDate.setDate(1); // 현재 달의 1일로 설정
// selectedDate.value = currentDate; // v-model에 값 설정
// formattedDate.value = format(selectedDate.value, 'yyyy-M-dd');
// console.log("formattedDate.value:  "+formattedDate.value);
// refetch();
// }
</script>
<style>
.reserveWrapper {
  max-width: 480px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  box-shadow: 0 0 17px 3px rgb(171 171 171 / 50%);
  position: relative;
}

.onedayInfoArea,
.imageArea {
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
}
.onedayInfoArea {
  height: 500px;
  justify-content: space-around;
}

.candidateImage {
  display: flex;
  justify-content: space-evenly;
}

.classnameArea {
  color: #252525;
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.08px;
  margin-bottom: 15px;
}

.dp__main,
.dp__theme_light {
  width: 80% !important;
  margin: 0 auto !important;
}

.dp__outer_menu_wrap {
  width: 100% !important;
  top: 50px !important;
  left: 0px !important;
}

.dp__calendar_row {
  /* height: 600px !important; */
}
</style>
