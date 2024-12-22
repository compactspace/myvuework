<template>
  
    <div class="Myinfowrapper">
  <!-- 여기도 나중 반복문 돌리자.. -->
     <div class="myinfoarea">
        <div class="myImage" v-if="temporaryImageURL">
            <img :src="temporaryImageURL"/>
        </div>
        <div v-else>
            이미지를 등록해보세요
        </div>

        <div>
         <input type="file" @change="getTheFile">
        </div>
        <div>
         <input type="text" placeholder="닉네임">
        </div>
        <div>
         <input type="text" placeholder="연락쳐">
        </div>

     </div>
  
  
    </div>
      
  </template>
  <script setup>

  import {ref} from 'vue';
  import axios from 'axios';
  const temporaryImageURL=ref();

  const getTheFile= async (e)=>{

   //주의 해라, 파일 자체는 웹브라우져 인메모리 어딘가에 있음
   //아무튼 fileInfo는 파일 이름 ,변경날짜를 가지고있음
   const fileInfo=e.target.files[0];//File 객체리턴
   console.log(fileInfo)
   //파일명과 확장자를 쪼갠다.
   const fileSpilt=fileInfo.name.split('.');

   // 이름과 확장자로 다시
   const fileName=fileSpilt[0];
   const fileExtention=fileSpilt[1].toLowerCase();

   console.log(fileExtention)
   if(fileExtention==='jpg'||fileExtention=='png'||fileExtention==='webp'||fileExtention=="gif"){
      const tempoImage=window.URL.createObjectURL(fileInfo);

      temporaryImageURL.value=tempoImage

     await axios.post('http://localhost:8000/d',{temporaryImageURL});
   }


  }



      
  </script>
  <style>
 .Myinfowrapper{

    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;

 }
 .myinfoarea{
    display: flex;
    flex-direction: column;

 }
  </style>