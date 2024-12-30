<template>     
  <div class="navebarwrapper">
    <div class="navebararea">
      <div class="linkarea">
        <div class="leftlink samelink">
          <div>
            <a class="sameAtage" @click="goHomeFnc"> Home </a>
          </div>
          <div>
            <template v-if="userInfo != null || userInfo != undefined"> </template>
            <template v-else>
              <a class="sameAtage" @click="goLoginFnc" > 로그인 </a>
            </template>
          </div>
        </div>
        <div class="rightlink samelink">
      
            <template v-if=" userInfo != undefined || userInfo != null ">
              <div @click="logoutFnc"> 로그아웃 </div>
              <div @click="myInfoFnc"> 나의정보 </div>
            </template>
            <template v-else> </template>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { UserInfoStroe } from "../../store/UserInfoStroe";
import axios from "axios";
import { Api } from "../../api/Api";
import { useRouter } from "vue-router";
import { watchEffect } from "vue";
const userInfo = UserInfoStroe().user.loginId;
console.log(sessionStorage)
console.log(userInfo)
const router=useRouter();

const goLoginFnc=()=>{

    router.push("/login");
}

const logoutFnc= async ()=>{
    await axios.get(Api.logout.loginOut).then((res)=>{
        sessionStorage.login_store=null;      
        sessionStorage.userInfostore=null;
            
    }).catch((err)=>{
        console.log(err)
    })
    console.log(sessionStorage)
     router.go("/")
}
const myInfoFnc = ()=>{
  router.push({
        name: 'MyInfo',
        params: { userId: userInfo },
    });
}

const goHomeFnc=()=>{

  router.push('/');

}

</script>
<style>
.navebarwrapper{
  position: fixed;
  z-index: 10;
    width: 100%;
    height: 75px;
    background: rgb(255, 255, 255);
}
.navebararea {
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 20px;
    line-height: 1.5;
    font-family:  'Noto Sans KR', sans-serif;
    color: #212121;
}
.linkarea{
    width: 100%;
    display: flex;
    justify-content: space-between;
    

}
.sameAtage{
    display: inline-block;
}
.samelink {
    width: 100%;
  display: flex;  
  padding: 20px 20px;
  gap: 30px;
}
.rightlink{
    justify-content: flex-end;
   
}

</style>
