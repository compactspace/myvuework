<template>

<input type="file" @change="fileChange"/>
<input type="text" v-model="textData.writer">
<input type="text" v-model="textData.content">
<button @click="객체확인">버튼</button>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';


const file=ref('');
const textData=ref({});

const fileChange=(e)=>{
const fileListObj=e.target.files[0]
console.log(fileListObj instanceof File)
file.value=fileListObj
}


const 객체확인=()=>{



let formData=new FormData();
formData.append('inputFile',file.value)


const to={...textData.value,
    id:'ssssss'
}


formData.append('textData',new Blob([JSON.stringify(to)],{type:'application/json'})
)




for(let [key, value] of formData.entries()){
	console.log(key, value);
}
//formdataEx01.do

let header={'Content-Type':"multipart/form-data"}

 axios.post('http://localhost:8090/finall/formdataEx01.do',formData)



}




</script>