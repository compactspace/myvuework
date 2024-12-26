<template>
  
  <div class="modalWrapper">

    <div class="modalArea" v-if="isSuccess">
      <div v-for="detail in boardDetail">
 
        <div class="sameDetailCss">
          <div>글제목</div>
          <div >
            {{ detail[0].title }}
         </div>
        </div>
        <div class="sameDetailCss">
          <div>작성번호</div>
          <input type="hidden" v-model="changeDetaile.seq"/>
          <div >{{ detail[0].seq }}</div>
        </div>
        <div class="boardcontent">
          <div class="cutLine">내용</div>
          <div class="contentBox">
            <input type="text" v-model="changeDetaile.content">
            <!-- {{ changeDetaile.content ==null }}
            {{ detail[0].content }} -->
            <p v-if="changeDetaile.content!=null &&  changeDetaile.content!=''">
                수정후 내용:  {{ changeDetaile.content }}
            </p>
            <p v-else>
              수정전 내용:  {{ detail[0].content }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="btnArea">
        <button @click="boardUpdateFnc">수정</button>
        <button @click="boardDeleteFnc">게시글 삭제</button>
        
    </div>
  </div>
</template>

<script setup>

import { useBoardUpdateMutation } from "../../hook/Board/useBoardUpdateMutation";
import { useBoardDeleteMutation } from "../../hook/Board/useBoardDeleteMutation";
import { ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import axios from "axios";
import { useRoute } from "vue-router";


const changeDetaile=ref({})


const { params } = useRoute();

const seq=params.seq;


const useGetBoardDetail = async () => {
  let result = await axios.post("/api/vuegetboardDetail.do", { seq: params.seq });
  console.log(result.data);
  return result.data;
};

const { data: boardDetail, isSuccess } = useQuery({
  queryKey: ["boardDetail"],
  queryFn: useGetBoardDetail,
});


const {mutate: boardUpdateFnc}=useBoardUpdateMutation(changeDetaile,seq);

const {mutate: boardDeleteFnc}=useBoardDeleteMutation(seq);


</script>

<style>
.modalWrapper {
  
    height: 986px;
    max-width: 786px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  
}

.modalArea {
  display: flex;
  flex-direction: column;
  width: 80%;
  font-size: 23px;
}

.sameDetailCss {  
    display: flex;
    justify-content: space-between;
    padding: 20px 20px;

}


.boardcontent{
    display: flex;
  flex-direction: column;

  padding: 20px 20px;
  

}
.cutLine{
    
    background-color: #f0f0f0
}


.contentBox{
border:1px solid #f0f0f0;
padding: 10px 10px;
max-height: 300px;

}

.btnArea{

    display: flex;
}


</style>
