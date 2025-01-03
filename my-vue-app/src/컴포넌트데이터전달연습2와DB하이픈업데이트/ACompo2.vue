<template >
  <h1>A컴포</h1>
  <template v-if="isSuccess" >
  <select v-model="n_alert" @change="changeKeyWordFnc(n_alert)" >
    <option  v-for="key in alertList.keyword" :key="key">
      {{ key }}
    </option>
  </select>
  <div v-if="n_alert==alertList.foudalert.n_alert">
  {{ alertList.foudalert }}
  
  </div> 
  </template>
</template>
<script setup>
import axios from "axios";
import { ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
//이번 예제는 DB에서 테이블 alert 테이블과 , alertconfirm 테이블 2개를 만들고 할거다.
// 먼저 alert 테이블: pk alert_id 와 alert_way 컬럼은 1차경고-2차경고-3차경고 형식으로 데이터를 넣고
//alertconfirm 테이블은 pk alertconfirm_id 와 참조 키 alert_id 그리고 받은 경고 N_alert 으로 1차 ->업뎃 2차 업뎃
// 형식으로 한다.
//이제 학습목표는 이러하다.
// 메인바에서 검색 조건을 1차 경고, 2차 경고 3차경 고로 조회하여  alertconfirm  을 출력하도록 하며
// 단 alert 테이블 과 alertconfirm 테이블을 조인을 해야한다.
// 그리고 난뒤 B컴포에서 alertconfirm 컬럼의 N_alert 의 값을 업데이트문 칠것이다.

const data = ref({});

const alert_id= ref('');
const n_alert=ref('');


const { data: alertList, isSuccess ,refetch} = useQuery({
  queryKey: ["alertAndList"],
  queryFn: () => getnAlertSearch(alert_id,n_alert),
});
const changeKeyWordFnc=(n_alert)=>{
    
    refetch({
        queryKey: ["alertAndList"],
        queryFn:()=> getnAlertSearch(alert_id, n_alert)
    })
}

const getnAlertSearch = async (alert_id,n_alert) => {
    console.log(alert_id.value)
    console.log(n_alert.value)
    
    let bodyData={
       alert_id:parseInt(alert_id.value),
       n_alert:n_alert.value
}

if(n_alert.value==''){
    bodyData.alert_id=4;
    bodyData.n_alert='';
}
if(alert_id.value==''){
    bodyData.alert_id=4;
}

console.log(bodyData)

  let res = await axios.post("/api/getNalertSearch.do", bodyData);
  
  let keyword = res.data.alertsearchkeyword[0].alert_way;
  let result = keyword.replace(/[^\w가-힣\s-]/g, "-").split("-");

  // 빈 문자열을 제거한 후 새로운 배열 생성
  let newKeyWordArr = await result.filter((item) => item.trim() !== "");

  data.value.keyword = newKeyWordArr;
  if(n_alert.value==''){
      n_alert.value=newKeyWordArr[0]
   
}


  data.value.foudalert=res.data.nalertsearch[0];
  return data;
};
</script>
