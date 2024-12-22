<template>


<div class="modalwrapper">

<div class="modalarea">
    <!-- 이부분은 나중 반복문 돌리면 될듯 -->

    <div class="procontents">
        <div v-if="oneday41">
            <img :src="oneday41" class="imagecontents">

        </div>
        <div>
            <button @click="closeDetail">모달접기</button>
        </div>

    </div>
</div>


</div>
</template>

<script setup>
import oneday41 from '../../../이미지확인용/oneday41.jpg'
import { ModalCloPenStore } from '../../../store/ModalStore';
const modalStroe=ModalCloPenStore();
const closeDetail=()=>{
    modalStroe.ChangeClopen();
}
</script>

<style>
.modalwrapper{
    width: 100vw;
    height: 100vh;
    background-color: #ddd;
    position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.modalarea{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}


</style>