<template >
<template v-if="isSuccess">
{{ MdetailList }}
  <div class="searchWrapper">
    <div class="searchBox">
      <div class="searchArea">
        <div>포스팅내역조회:</div>
        <select
          @change="postingIdxChangeFnc($event)"
          class="postingArea"
          v-model="hirePostingStatus"
        >
          <option  v-for="(m, index) in MdetailList.hirePosting" :value="m"  :data-index="index" :key="index">{{ m }}</option>
        </select>
      </div>
      <div  class="searchArea">
        <div>지원자 상태 관리:{{ MdetailList.hireProcess }}</div>
        <select  @change="choiceStatusFnc" class="statusArea" v-model="hireProcessStatus">
          <option v-for="list in MdetailList.hireProcess" :value="list">
            {{ list }}
          </option>
        </select>
      </div>
    </div>
  </div>
  </template>
</template>

<script setup>
import { useGetMDetailQuery } from "../문법Hook/ApplicantHook2/useGetMDetailQuery";
import { useGetApplicantListQUery } from "../문법Hook/ApplicantHook2/useGetApplicantListQUery";
import { useGetPostingApplicantListQuery } from "../문법Hook/ApplicantHook2/useGetPostingApplicantListQuery";

import { ref, inject } from "vue";
import { watchEffect, watch } from "vue";
import axios from "axios";
//현재 applicant를 페이징 용으로 사용할건데 혹시 모르니 변수명을 최후에 고칠것이다.
const pageSetting = ref({
  currentPage: 1,
  pageSize: 5,
});
const MDetail = ref({});
const hirePostingStatus = ref(null);
const hireProcessStatus = ref(null);

const firstProc=ref(null);

const postIdx = ref(null);

//진자 ㅅㅂ
const loginId=ref("company01")

const  currentPage=ref("1");
const pageSize=ref("5"); 


const injectedValue = inject("applicantProvide");
const provideMDVal=inject("provideMDVal")



const { data: MdetailList, isSuccess } = useGetMDetailQuery( MDetail
);
// 이건 초기값 세팅이다.
watch(MdetailList, () => {
  console.log(MdetailList.value.hireProcess[0])
  hirePostingStatus.value = MdetailList.value.hirePosting[0];
  hireProcessStatus.value = MdetailList.value.hireProcess[0];  
  firstProc.value=MDetail.value.defaulFirstPor
  postIdx.value=MDetail.value.defaultPostIdx;
  loginId;

 apllicantListRefetch(firstProc,postIdx,loginId,currentPage ,pageSize,injectedValue,provideMDVal);

});
const { data: applicantlist,refetch:apllicantListRefetch } = useGetApplicantListQUery(firstProc,postIdx,loginId,currentPage ,pageSize,injectedValue,provideMDVal);

const {data:postingApplicant,refetch:postingApplicantRefetch}=useGetPostingApplicantListQuery(firstProc,postIdx,loginId ,currentPage ,pageSize,injectedValue,MdetailList,hireProcessStatus,provideMDVal)
//주의: 포스팅을 건드리면 프로세스텝 반응혈객체가 변해야한다 그냥 따로 하나 만들어야겠다.
const postingIdxChangeFnc = async (event) => {
  //console.log(`선택한 포스팅 ${hirePostingStatus.value}`) 
  let findPostIdx;

  const selectedOption = event.target.selectedOptions[0];  // 선택된 option을 가져옴
  const index = selectedOption.getAttribute('data-index'); // data-index에서 index를 가져옴
  //console.log(index);
 
  findPostIdx = MdetailList.value.hirePostingIdx[index];
  // console.log("해당 포스팅건의 찾은 포스팅 아이디:  " + findPostIdx);
 // console.log(MdetailList.value.fullHirProcess[index])
  firstProc.value=MdetailList.value.fullHirProcess[index][0];
 // console.log(`firstProc:   ${firstProc.value}`)
  postIdx.value = findPostIdx;

  postingApplicantRefetch(firstProc,postIdx,loginId,currentPage ,pageSize,injectedValue,MdetailList,hireProcessStatus,provideMDVal);
// let bodyData={
//     loginId: "company01",
//     firstProc:firstProc.value[0],
//     postIdx: postIdx.value.toString(),
//     keyword: firstProc.value[0],
//     currentPage: "1",
//     pageSize: "5",
//   }

// console.log(bodyData)

//   let res = await axios.post("/api/applicantList.do", bodyData);

// //console.log(res.data.list)

//   let findHirePorcess = res.data.MDetail[index].hirProcess
//     .split(" → ")
//     .map((item) => item.trim());

//   findHirePorcess.push("합격");
//   findHirePorcess.push("탈락");
//   MdetailList.value.hireProcess = [...findHirePorcess];
//   hireProcessStatus.value = MdetailList.value.hireProcess[0];
};
watch(applicantlist,()=>{
 // console.log(applicantlist.value)
})
const choiceStatusFnc = () => {
  if (postIdx.value == null) {
    postIdx.value = MDetail.value.defaultPostIdx;
  }
  firstProc.value=hireProcessStatus.value
  console.log(
    `선택한 postIdx: ${postIdx.value} 와  전형절차: ${hireProcessStatus.value}`
  );
  apllicantListRefetch(firstProc,postIdx,loginId,currentPage ,pageSize,injectedValue,provideMDVal);
  // console.log(MdetailList.value.hireProcess)
  // console.log(MdetailList.value.hirePosting)
  // console.log(MdetailList.value.hirePostingIdx)
};
</script>
<style>
.searchWrapper,
.searchArea,
.searchBox {
  display: flex;
}
.searchWrapper {
  /* justify-content: end; */
  padding: 20px 20px;
}

.searchBox {
  width: 50%;
  justify-content: space-around;
  gap: 20px;
}

.searchArea {
  width: 100%;
  justify-content: space-around;
  font-size: 20px;
  font-weight: 600;
  align-items: center;
}
.postingArea,
.statusArea {
  display: inline-block;
  font-size: 20px;
  font-weight: 600;
}
</style>
