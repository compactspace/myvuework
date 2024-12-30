<template>
  <template v-if="!changePassWord">
    <div class="myInfoWrapper">
      <div class="myInfoArea">
      <h2>개인정보 확인 및 변경 </h2>
        <div class="myInfoSameCss">
          <span class="sameSpan"> 아이디: </span>

          <template v-if="!changeClick">
            <span class="sameSpan">
              {{ myInfo.id }}
            </span>
          </template>
          <template v-else>
            <input
              class="sameInput"
              v-model="updateUserInof.id"
              placeholder="변경하실 아이디를 입력해주세요"
            />
          </template>
        </div>

        <div class="myInfoSameCss">
          <span class="sameSpan"> 가입경로 </span>

          <span class="sameSpan">
            {{ myInfo.user_where }}
          </span>
        </div>

        <div class="myInfoSameCss">
          <span class="sameSpan"> 연락쳐 </span>
          <template v-if="!changeClick">
            <span class="sameSpan"> 연락쳐: {{ myInfo.user_tell }} </span>
          </template>
          <template v-else>
            <input
              class="sameInput"
              v-model="updateUserInof.user_tell"
              placeholder="수정하실 연락쳐를 입력해주세요"
            />
          </template>
        </div>

        <div class="myInfoSameCss">
          <span class="sameSpan"> 이메일 </span>

          <template v-if="!changeClick">
            <span class="sameSpan">
              {{ myInfo.email }}
            </span>
          </template>
          <template v-else>
            <input
              class="sameInput"
              v-model="updateUserInof.email"
              placeholder="수정하실 이메일을 입력해주세요"
            />
          </template>
        </div>

        <div class="myInfoSameCss">
          <span class="sameSpan"> 주소 </span>

          <template v-if="!changeClick">
            <span class="sameSpan">
              {{ myInfo.user_address }}
            </span>
          </template>
          <template v-else>
            <input
              class="sameInput"
              v-model="updateUserInof.user_address"
              placeholder="수정하실 연락쳐를 입력해주세요"
            />
          </template>
        </div>

        <div class="myInfoSameCss">
          <span class="sameSpan"> 가입일 </span>
          <span class="sameSpan">
            {{ myInfo.create_signup }}
          </span>
        </div>

        <div class="myInfoSameCss">
          <template v-if="!changeClick">
            <button @click="goChangeMyInfoFnc">개인정보 변경하기</button>
            <button @click="goChangePassWordFnc">비밀번호 변경하기</button>
          </template>
          <template v-else>
            <button @click="goChangeMyInfoFnc">취소</button>
            <button @click="confirmMyInfoFnc">반영하기</button>
          </template>
        </div>
      </div>
    </div>
  </template>
  <template v-else>
    <template v-if="props"></template>
    <PassWoardWrapper :propsKey="stepStatus" class="passWoardWrapper">
      <div class="stepArea">
        <h3 class="step1">Step1비밀번호확인</h3>
        <h3 class="step2">Step2비밀번변경</h3>
      </div>
      <div class="myInfoArea">
        <template v-if="!oldpasswordStatus">
          <input
            class="oldpassword samepasswordcss"
            v-model="oldpassword"
            placeholder="현재사용중인 비밀번호를 입력해주세요"
          />
          <button @click="oldpasswordCheckFnc()">비밀번호 확인</button>
          <button @click="oldpasswordCheckFnc('cancleMessage')">취소</button>
        </template>
        <template v-else>
          <h3>비밀번호가 확인 되었습니다. 사용하실 새로운 비밀 번호를 입력해주세요</h3>
          <input
            class="newpassword samepasswordcss"
            v-model="newpassword"
            placeholder="새롭게 사용하실 비밀번호를 입력해주세요"
          />
          <input
            class="newpassword samepasswordcss"
            v-model="newpasswordcheck"
            placeholder="새롭게 사용하실 비밀번호를 입력해주세요"
          />
          <button @click="newpasswordCheckFnc">비밀번호 변경하기</button>
          <button @click="newpasswordCheckFnc('cancleMessage')">취소</button>
        </template>
      </div>
    </PassWoardWrapper>
  </template>
</template>

<script setup>
import { inject, ref } from "vue";

import { useRoute, useRouter } from "vue-router";
//유즈쿼리나 뮤테이트 가 아닌 가벼운 서버와 통신시는 여기서 axios처리 하자. 가령 비번 확인같은거
import axios from "axios";
import { useMyinfoUpdateMutate } from "../../../hook/user/useMyinfoUpdateMutate";

import { PassWoardWrapper } from "../../../styledcomponent/MyInfoBodyStyled";

import { CommonsUserUtil } from "../../../commons/commonsUserUtil/commonUserUtil";



const props = defineProps({
  stepMessage: {
    type: String,
    default: "step1",
  },
});
// 프롭스를 변경시 담을 반응객체 값
const stepStatus = ref(props.stepMessage);

//키명이 userInfo 으로 넘어온다.
const { params } = useRoute();
// console.log("올드유저 아이디"+params.userId)

const router=useRouter();

const myInfo = inject("myInfo");
//유저의 정보를 변경하는 템플릿으로의 전환 값
const changeClick = ref(false);
//비밀번호 변경 템플릿 으로의 전환  값
const changePassWord = ref(false);
//예전 비번을 담을 값
const oldpassword = ref(null);
//예전 비번 확인 여부를 담을 값
const oldpasswordStatus = ref(false);
console.log(changeClick.value);

//새롭게 사용할 비밀번호를 담을 값
const newpassword = ref(null);
//새롭게 사용할 비밀번호를 제대로 기입했는지 담을값
const newpasswordcheck = ref(null);

const updateUserInof = ref({
  oldid: params.userId,
});

const goChangeMyInfoFnc = () => {
  if (!changeClick.value) {
    changeClick.value = true;
    return;
  }
  changeClick.value = false;
};

const goChangePassWordFnc = () => {
  changePassWord.value = true;
};
const { mutate: confirmMyInfoFnc } = useMyinfoUpdateMutate(updateUserInof);

const oldpasswordCheckFnc = async (Message) => {

    if(Message==="cancleMessage"){

        changePassWord.value=false;
        return;
    }


  var pattern = /\s/g;
  if (oldpassword.value == null || oldpassword.value.match(pattern) != null) {
    alert("사용중인 비밀번호를 입력해주세요");
    return;
  }
  let bodyData = {
    oldpassword: oldpassword.value,
  };
  await axios.post("/api/oldpasswordcheckToBe.do", bodyData).then((res) => {
    if (res.data.passwordcheckStatusCode == 1) {
      oldpasswordStatus.value = true;
      alert("비밀번호가 확인되었습니다.");
      stepStatus.value = "step2";
    } else {
      alert("비밀번호가 틀렸습니다.");
    }
  });
};

const newpasswordCheckFnc =  async (Message) => {
  // console.log(newpassword.value)
  // console.log(newpasswordcheck.value)

    if(Message=== 'cancleMessage'){
        oldpasswordStatus.value=false;
        changePassWord .value=false;
        stepStatus.value = "step1";
        return;
    }



  if (newpassword.value != newpasswordcheck.value) {
    alert("비밀번호가 틀렸습니다 다시 입력해주세요");
    return;
  }
  let bodyData={
    newpasswordcheck:newpasswordcheck.value,
    id:params.userId,

  }

  console.log(bodyData)

  let updateCheck=false
 await axios.post('/api/tonewpasswordUpdate.do' ,bodyData)
 .then((res)=>{

    if(res.data.passwordUpdateStatusCode==1){
        alert("비밀번호 변경에 성공하혔습니다. 로그인 해주세요")
        updateCheck=true;
    }
    else{
        alert("잠시후 다시 시도해주세요")
    }

 })

//await 속에서 호출하면 뭔까 꼬여서 에러가 나서 따로 뺌 딱 이이유임.
if(updateCheck){
        CommonsUserUtil.StoreAndSessionRemove( router);        

}


};
</script>
<style>
.myInfoWrapper {
  max-width: 786px;
  max-height: 1200px;
  margin: 0 auto;
  height: 1200px;
  display: flex;
  justify-content: center;
  padding-top: 110px;
}

.myInfoArea {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
}

.myInfoSameCss {
  padding: 10px 10px;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
  font-family: "Noto Sans KR", sans-serif;
  color: #212121;
  display: flex;
  justify-content: space-between;
}

.sameSpan {
  display: inline-block;
}

.sameInput::-webkit-input-placeholder {
  display: inline-block;
  color: #ff5862;
}

button {
  display: inline-block;
  border: none;
  width: 100%;
  padding: 20px 20px;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
  font-family: "Noto Sans KR", sans-serif;
  color: #212121;
}
</style>
