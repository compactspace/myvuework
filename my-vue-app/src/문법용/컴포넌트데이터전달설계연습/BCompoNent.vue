<template>
  <!-- 
    합격 버튼 플로우
    서류심사중 ->면접준비중->최종합격

    불합격 버튼 플로우
    서류탈락 -> 면접탈락

     -->

  <!-- 잘짜자...  -->
  <div v-if="proValue != undefined">
  {{ proValue.boardList[0].writer }}
    <div
      v-if="proValue.boardList[0].status === '서류심사중' ||
        proValue.boardList[0].status === '면접준비중'
      "
    >
      <button @click="합격클릭(proValue.boardList[0].status, 'success',proValue.boardList[0].seq)">합격</button>
      <button :value="faile" @click="합격클릭(proValue.boardList[0].status, 'faile',proValue.boardList[0].seq)">
        불합격
      </button>
    </div>
    <div
      v-if="
        proValue.boardList[0].status === '서류탈락' ||
        proValue.boardList[0].status === '면접탈락'
      "
    >
      <button @click="합격클릭(proValue.boardList[0].status, 'success',proValue.boardList[0].seq)">합격</button>
      <button :value="faile" @click="합격클릭(proValue.boardList[0].status, 'faile',proValue.boardList[0].seq)">
        불합격
      </button>
    </div>


    <div
      v-if="
        proValue.boardList[0].status === '최종합격'
      "
    >
     <h3>지원자 이력서 보기</h3>
    </div>




  </div>

  <!-- <div class="boardWrapper" v-if="proValue != undefined">
    <div v-for="board in proValue.boardList" class="seqAndContent">
      <div>{{ board.seq }}</div>
      <div>{{ board.content }}</div>
      <button @click="updateBtn(e)">클릭</button>
    </div>
  </div> -->
</template>
<script setup>
import axios from "axios";
import { inject, ref } from "vue";
import { useMutation , useQueryClient} from "@tanstack/vue-query";
const proValue = inject("proValue");

const choiceStatus = ref({});

// 합격 버튼 플로우
// 서류심사중 ->면접준비중->최종합격

// 불합격 버튼 플로우
// 서류탈락 -> 면접탈락

const 합격클릭 = async (data, message,seq) => {
    console.log(message)
    console.log(seq)
  let status;
  if (data === "서류심사중") status = "면접준비중";
  if (data === "면접준비중") status = "최종합격";
  if (message === "faile") {
    if (data === "서류심사중") status = "서류탈락";
    if (data === "면접준비중") status = "면접탈락";
  }
    const bodyData = {
     status:status,
     seq:seq
    }
    updateBtn(bodyData)
    // await axios.post('/api/vuegetboardStatusUpdate.do', bodyData);
};


const client= useQueryClient();

const { mutate: updateBtn } = useMutation({



  mutationFn: async (bodyData)=>
  
  {await axios.post('/api/vuegetboardStatusUpdate.do', bodyData)
    console.log(bodyData)

   },
  mutationKey: ["updateBoard"],
  onSuccess: () => {
            router.go(-1);
            queryClient.invalidateQueries({
                queryKey: ['boardList'],
            });
        }
});



</script>

<style>
.boardWrapper {
  display: flex;
  flex-direction: column;
}

.seqAndContent {
  display: flex;
}
</style>
