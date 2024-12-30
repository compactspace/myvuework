<template>
  <template v-if="isLoading"> </template>

  <template v-if=" myInfoData?.userInfo!=undefined &&  isSuccess">
  <div class="myInfoAllWrapper">
    <NaveBar/>
    <MyInfoBody />   
  </div>
  </template>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useUserMyinfoQuery } from "../../hook/user/useUserMyinfoQuery";
import  MyInfoBody  from "../../components/page/myinfo/MyInfoBody.vue";
import {  watchEffect } from "vue";
import { provide,ref } from "vue";
import NaveBar from "../../components/common/NaveBar.vue"

//키명이 userInfo 으로 넘어온다.
const { params } = useRoute();
const myInfo=ref({})



const { data: myInfoData, isLoading, isSuccess } = useUserMyinfoQuery(params.userId);
watchEffect(()=>{    

    if(isSuccess.value){
        console.log("isSuccess.value: "+isSuccess.value)
        let newobj={...myInfoData.value.userInfo}
        myInfo.value=newobj;    
    }
    //직관적으로 if문 속에 있어야 할거 같지만 밖에 있어야 작동이 되어 하위 컴포에서 받는게 가능 몰러..ㅎㅎ
    provide("myInfo",myInfo)
})
</script>

<style>

.myInfoAllWrapper{
    max-width: 786px;

    margin: 0 auto;
}

</style>
