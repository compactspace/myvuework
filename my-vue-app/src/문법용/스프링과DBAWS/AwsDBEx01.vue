<template>
  <template v-if="isSuccess">
    <div class="btnArea">
      <div class="btnPostingArea">
      {{ MDetail }}
        <select @click="postIdxChangeFnc" v-model="postIdx">
        
          <option v-for="m in MDetail" :value="m.postIdx">{{ m.title }}</option>
        </select>
       
      </div>
      <div class="statusArea" >
        <select v-model="choiceStatus" @change="choiceStatusFnc">
          <option>서류심사중</option>
          <option>면접진행중</option>
          <option>최종합격</option>
          <option>불합격</option>
        </select>
      </div>
    </div>
     <!-- {{ MDetail }} -->
        {{ applicant }}
  </template>
</template>

<script setup>
import axios from "axios";
import { useQuery } from "@tanstack/vue-query";
import { ref } from "vue";
const MDetail = ref(null);
const applicant = ref(null);
const postIdx = ref(null);

const choiceStatus=ref('서류심사중')


const postIdxChangeFnc = () => {
  refetch();
};

const choiceStatusFnc =()=>{

    console.log(choiceStatus.value)
    refetch();
}


const applicantListFnc = async ( postIdx,applicant,choiceStatus) => {
  console.log(choiceStatus.value);
  let bodyData = {
    postIdx: postIdx?.value || 1,
    keyword: "서류심사중",
    startSeq: 0,
    pageSize: 5,
  };
  if(choiceStatus.value!='서류심사중'){
    bodyData.keyword=choiceStatus.value;
  }



  console.log(bodyData)
  let res = await axios.post("/api/applicantList.do", bodyData);
  console.log(res.data);
  applicant.value = [...res.data.ApplicantList];

  return res.data;
};

const { data: applicantWithMDetail, isSuccess, refetch } = useQuery({
  queryKey: ["applicantWithMDetail"],
  queryFn: () => applicantListFnc(postIdx,applicant,choiceStatus),
});







const MDetailFnc = async () => {
 
  let res = await axios.post("/api/MDetail.do", {});
 
  MDetail.value = [...res.data.MDetail];
  postIdx.value = res.data.MDetail[0].postIdx;
  return res.data;
};
const { data: infoMDetail } = useQuery({
  queryKey: ["infoMDetail"],
  queryFn: () => MDetailFnc(),
});
</script>
<style>
.btnArea{
    background-color: red;
}

</style>