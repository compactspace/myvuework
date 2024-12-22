

<template>
    <div v-if="isLoading">
        로딩중
    </div>
    <div v-if="isSuccess">
        <input type="text" v-model="target.review_writer" />
        <div @click="checkout" >클릭</div>
       <!-- {{ reviewDataList }} -->
        <div class="reviewWrapper">

            <div v-for="rewview in reviewDataList" class="reviewlist">
                <div class="writerinfoArea">
                    <div>리뷰번호 {{ rewview.review_num }}</div>
                    <div>작성자 {{ rewview.review_name }}</div>
                </div>

                <div class="reviewcontentarea">

                    <div>
                        {{ rewview.review_comment }}
                    </div>
                </div>
            </div>

        </div>
        
    </div>

</template>


<script setup>


import axios from 'axios';
import { useQuery } from '@tanstack/vue-query'; 
import { ref, watch, watchEffect } from 'vue';
const reviewDataList=ref({});

const target=ref({})
const getReivewList= async ()=>{
    
  const DataFromServer=  await axios.get("http://localhost:4000/user/reivew?limit=0 &onedayclass_num=0")

  reviewDataList.value=DataFromServer.data.reviews
  return reviewDataList;


}

const {

    data:reviewlist,
    isError,
    isSuccess,
    isLoading,
    refetch,

}=useQuery({
    queryKey:['reviewList'],
    queryFn:getReivewList,
    refetchOnWindowFocus:true,
    refetchInterval:0,
    cacheTime:100000,
    staleTime: 100000,
    //refetchInterval:1
})

const test=ref({})
const checkout=()=>{

   
    target.value.review_writer=reviewlist.value.review_writer
    console.log(target.value)
    
}

watchEffect(()=>{
    if(isSuccess.value && reviewlist.value){
        target.value=reviewlist.value[0]
console.log(target.value)
    }
})
</script>

<style>
.reviewWrapper{
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

}

.reviewlist{
    width: 689px;    
 display: flex;
 gap: 10px;


}
.writerinfoArea{
    display: flex;
    flex-direction: column;
    width: 10vh;
}
.reviewcontentarea{
    width: 20vh;
    flex-grow: 1;
}
</style>