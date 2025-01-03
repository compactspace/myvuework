export const Api={


    login:{
        loginSignUp:'/api/loginsignup.do'

    },
    logout:{
        loginOut:'/api/tobelogout.do'
    }
    ,
    userUtil:{
             myinfo:'/api/myinfoToBe.do',
            updateMyinfo:'/api/myinfoupdateToBe.do',
          loginSignUp:'/api/loginsignup.do',
           loginOut:'/api/tobelogout.do'
    }
    
,

    board:{
        update:'/api/vuegetboardUpdate.do',
        delete:'/api/boardDelete.do'

    }
,
    oneday:{

        //원데이클래스의 예약 조회등 관련
        reserve:{
            opendyList:"/api/openclassList.do"
        }


    }


}