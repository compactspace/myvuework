<template>
  <div class="loginWrapper">
    <div class="loginSignArea">
      <div class="inputarea">
        <div>아이디입력</div>
        <input type="text" v-model="signUpInfo.id" />
      </div>
      <div class="inputarea">
        <div>비밀번호 입력</div>
        <input type="password" v-model="signUpInfo.password" />
      </div>

      <div class="singupArea">
        <div @click="loginSignUp">로그인하기</div>
      </div>
    </div>
  </div>

  <button @click="gobackmain">메인홈으로</button>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { UserInfoStroe } from "../../store/UserInfoStroe";

const signUpInfo = ref({});

const router = useRouter(); //기능

const route = useRoute(); //정보

const userInfo = UserInfoStroe();

console.log("route.name: ", route.name); // home
console.log("route.path: ", route.path); // /

const loginSignUp = async () => {
  if (!signUpInfo.value.id || !signUpInfo.value.password) {
    alert("아이디 또는 비밀번호를 입력해주세요");
    return;
  }

  let result = await userInfo.loginSave(signUpInfo);
  if (result.loginStatusCode == -1) {
    alert("아이디 또는 비밀번호가 잘못되었습니다.");
    return;
  }
  
  alert("로그인에 성공하셨습니다. 메인홈으로 이동합니다.")

  router.push('/');


};
</script>

<style>
.loginWrapper {
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.loginSignArea {
  gap: 30px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.inputarea {
  width: 100%;
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
}
input {
  height: 30px;
  width: 80%;
  display: inline-block;
}

.singupArea {
  font-size: 20px;
}
</style>
