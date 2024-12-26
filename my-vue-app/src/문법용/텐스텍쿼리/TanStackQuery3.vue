<template>
  <div class="boardSearchWrapper">
    <div>총 개시글:{{ boardList?.boartCnt || 0 }}</div>
    <div>
      <button @click="mySearchyFnc">내가 작성한글</button>
    </div>
  </div>
  <div v-if="isSuccess">
    <!-- "seq": 2,
            "title": "만능입니다.",
            "writer": "신말자",
            "content": "만능연필",
            "regdate": "2024-06-13", -->
    <div class="boardWrapper">
      <div v-for="list in boardList.boardList" class="boardGrid">
        <div>
          {{ list.seq }}
        </div>
        <div @click="boardDeatailFnc(list.seq)">
          {{ list.title }}
        </div>
        <div>
          {{ list.content }}
        </div>
      </div>
    </div>
  </div>

  <!-- 
property items-per-page : 총 페이지 값을 묵음처리할 단위
property max-pages-shown : 묶음 처리한 단위를 최대 몇개로 표현할건지
-->
  <Pagination
    :totalItems="boardList?.boartCnt || 0"
    :items-per-page="1"
    :max-pages-shown="5"
    :onClick="clickOpencPage"
    v-model="startpage"
  />
  <div class="searchWrapper">
    검색:<input type="text" v-model="searchKeyWord" />
        <button @click="searchKeyWordFnc">확인</button>
  </div>



</template>
<script setup>
import { ref } from "vue";

import { useRouter } from 'vue-router';
import Pagination from "../페이징라이브러리/paginateLive.vue";
import BoardModalDetail from "../모달컴포넌트문법/BoardModalDetail.vue";
import {useGetBoardListSearchQuery} from '../../hook/Board/useGetBoardListSearchQuery'
const startpage = ref(1);
const searchKeyWord = ref("");
const router=useRouter();



const searchCondiction = ref({
   startpage: 0,
   writer:'',
   content:''
});
const {data:boardList,isSuccess}= useGetBoardListSearchQuery(searchCondiction)

const clickOpencPage = () => {
  console.log(startpage.value);
  //0 5 10 15 ....
  searchCondiction.value.startpage = (startpage.value - 1) * 5;

  searchCondiction.value.writer='';
  searchCondiction.value.content='';

};

const mySearchyFnc=()=>{
  searchCondiction.value.writer='asd123';
  searchCondiction.value.content='';
}

const searchKeyWordFnc=()=>{
  searchCondiction.value.content= searchKeyWord.value;
  console.log(searchKeyWord.value)
  searchCondiction.value.writer='';
}


const boardDeatailFnc=(param)=>{

  console.log(param)
  router.push({
        name: 'boardDetail.do',
        params: { seq: param },
    });

}



</script>
<style>

  .boardSearchWrapper{

    display: flex;
    justify-content: space-between;

  }

.boardWrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 786px;
  padding-left: 30%;
}

.boardGrid {
  width: 100%;
  display: grid;
  grid-template-columns: 10% 50% 40%;
}
</style>
