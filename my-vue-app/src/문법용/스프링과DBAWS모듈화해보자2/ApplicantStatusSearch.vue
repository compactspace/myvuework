<template>
<template v-if="isSuccess">
    <div class="searchWrapper">
      <div class="searchBox">
        <div class="searchArea">
          <div>포스팅내역조회:</div>          
          <!--   @click="postIdxChangeFnc(MDetail.hireProcessArr[postIdx])" -->
          <select
            @change="postIdxChangeFnc(Md)"
            v-model="Md"
            class="postingArea"
          >
            <option v-for="m in MDetail.Md" :value="m.title" >{{m.title}}</option>
          </select>
        </div>
        <div class="searchArea">
          <div>지원자 상태 관리{{ MDetail.hirProcess }}</div>
          <select v-model="choiceStatus" @change="choiceStatusFnc(choiceStatus)" class="statusArea">
            <option v-for="hirProcess in MDetail.hirProcess" :value="hirProcess">
              {{ hirProcess }}
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
  import { ref, inject } from "vue";

  
  //학원과는 다르게 여기 일일히 아이디를 바꾸어주며 테스트
  const loginId = "company01"
  
  //독립적이다.
  const MDetail = ref({});
  
const Md=ref({})

  const provideMDVal = inject("provideMDVal");
  
  //현재 applicant를 페이징 용으로 사용할건데 혹시 모르니 변수명을 최후에 고칠것이다.
  const pageSetting = ref({
    currentPage: 1,
    pageSize: 5,
  });
  const postIdx = ref(null);
  const choiceStatus = ref(null);
  const injectedValue = inject("provideVal");
  const hireProcessArr = ref([]);
  
  const { data: Mdetail, isSuccess ,refetch:getMDtailRefetch } = useGetMDetailQuery(
    postIdx,
    MDetail,
    choiceStatus,
    provideMDVal,
   
  );
  
  const { data: applicantlist,refetch: getApplicantListRefetch} = useGetApplicantListQUery(
    loginId,
    hireProcessArr,
    MDetail,
    postIdx,
    pageSetting,
    choiceStatus,
    injectedValue
  );
  
const postIdxChangeFnc2=()=>{
  //getMDtailRefetch();
}

  const postIdxChangeFnc = (x) => {
    console.log(x.hirProcess.split(" → ").map((item) => item.trim())[0])
     choiceStatus.value=x.hirProcess.split(" → ").map((item) => item.trim())[0]
    hireProcessArr.value = x;
   // getApplicantListRefetch();
  };
  
  const choiceStatusFnc = (x) => {
    console.log(x)
  //  getApplicantListRefetch();
  };



</script>
  <style>
  .searchWrapper,
  .searchArea,
  .searchBox {
    display: flex;
  }
  .searchWrapper {
    justify-content: end;
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