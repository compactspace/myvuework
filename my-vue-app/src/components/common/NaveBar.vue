<template>

    <div class="navebarwrapper">
        <div class="navebararea">
            <div class="rightarea barsame">
                <div>
                    HOME
                </div>
                <div>
                    <router-link to="/login">

                        로그인
                    </router-link>
                </div>
            </div>

            <div class="leftarea barsame">
                <div>
                   테스트환경 {{ isLogin.id }} 님 환영하고요
                   비번은 {{ isLogin.pwd }} 입니다.
                   그냥 박아둔 데이터 입니다.
                   
                </div>
            </div>
        </div>

    </div>

</template>

<script setup>
import { onBeforeMount ,ref } from 'vue';

import { LoginforDevelopeStroe } from '../../store/LoginforDevelopeStroe';

const isLogin=LoginforDevelopeStroe();
const currentLogin=ref({});

onBeforeMount(()=>{

    console.log(isLogin.id);
    currentLogin.value=isLogin;
    

})



</script>
<style>
.navebararea {
    padding: 10px 10px;
    display: flex;
    justify-content: space-between;
}

.barsame {
    display: flex;
    justify-content: space-between;
}



</style>