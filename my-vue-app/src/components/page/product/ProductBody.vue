<template>
  
  <div class="productbodywrapper">

    <div class="productarea">
        <!-- 이부분은 나중 반복문 돌리면 될듯 -->

        <div class="procontents">
            <div v-if="oneday41">
                <img :src="oneday41" class="imagecontents">

            </div>
            <div>
                <button @click="moreDetail">상세정보모달</button>
            </div>

        </div>
    </div>
    <button @click="getthefuckimg">이미지가져와</button>

  </div>

  <div v-if="imge">
    <img :src="imge"/>
  </div>
    
</template>
<script setup>
import oneday41 from '../../../이미지확인용/oneday41.jpg'
import { ModalCloPenStore } from '../../../store/ModalStore';
import { ref } from 'vue';
import axios from 'axios';
const ModalStore=ModalCloPenStore();


const imge=ref();
const getthefuckimg= async ()=>{

  let  DataFromServer =   await axios.get("http://localhost:4000/getthefuckimg");

    let imageArray=DataFromServer.data 
    console.log(imageArray.data)
    let imageURL=window.URL.createObjectURL(new Blob(imageArray.data));
    console.log(imageURL)
    imge.value=imageURL;
   

}


const moreDetail=()=>{
    ModalStore.ChangeClopen();
}
    
</script>
<style>
.productbodywrapper{

    padding: 20px 20px;
    max-width: 786px;
    width: 786px;
    margin: 0 auto;

}
.productarea{

    display: flex;
    flex-direction: column;



}

.imagecontents{

    width: 300px;
    height: 200px;

}
</style>