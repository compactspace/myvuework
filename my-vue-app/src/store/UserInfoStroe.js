import { defineStore } from 'pinia';
import axios from 'axios';
import { Api } from '../api/Api';
import { ref } from 'vue';

export const UserInfoStroe = defineStore(
    
    'userInfostore',
    
    () => {
            const user=ref({});        
            async function loginSave(signUpInfo) {
                
                let bodyData={
                    id:signUpInfo.value.id,
                    password:signUpInfo.value.password

                }
                    
                let result=await axios.post(Api.login.loginSignUp,bodyData)
                console.log(result.data)
                user.value=result.data;
                 return result.data;
                
            }
        
        return { user, loginSave }
    }
,
    { persist: { storage: sessionStorage } }
)