// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import MainHome from '../views/main/MainHome.vue';
import OnedayClass from '../views/onedayClass/OnedayClass.vue';
import LoginGo from '../views/login/LoginGo.vue';
import ProductList from '../views/product/ProductList.vue';
import MyInfoMation from '../views/myinfomation/MyInfoMation.vue';
import ReviewPage from '../components/page/review/ReviewPage.vue';
import MyInfo from '../views/Myinfo/MyInfo.vue';





//여기 이하는 문법
import FormDataEx01 from '../문법용/FormData/FormDataEx01.vue';
//import PaiginPlacticeEx01 from '../문법용/페이징라이브러리/PaiginPlacticeEx01.vue';
import PaiginPlacticeEx02 from '../문법용/페이징라이브러리/PaiginPlacticeEx02.vue';
//라우트(routes) 정의 : URL 요청에 대해 어떤 페이지(컴포넌트)를 보여줄지에 대한 매핑정보를 정의

import PropsToTanStackQueryEx01 from '../문법용/텐스텍쿼리/PropsToTanStackQueryEx01.vue';
import TanStackQuery2 from '../문법용/텐스텍쿼리/TanStackQuery2.vue';
import TanStackQuery3 from '../문법용/텐스텍쿼리/TanStackQuery3.vue';
import BoardModalDetail from '../문법용/모달컴포넌트문법/BoardModalDetail.vue';

import ParentComponent from '../views/컴포넌트간데이터연습페이지/ParentComponent.vue';
//바로위와 다르다 이름만 비슷
import ParentCompoNent from '../문법용/컴포넌트데이터전달설계연습/ParentCompoNent.vue';

import ParentCompo2 from '../컴포넌트데이터전달연습2와DB하이픈업데이트/ParentCompo2.vue';


//달력 라이브러리 연습
import CalendarEx01 from '../문법용/달력라이브러리/CalendarExampleEx01.vue'

import AwsDBEx01 from '../문법용/스프링과DBAWS/AwsDBEx01.vue';

import ApplicantMain from '../문법용/스프링과DBAWS모듈화해보자/ApplicantMain.vue';


import ApplicantMain2 from '../문법용/스프링과DBAWS모듈화해보자2/ApplicantViewMain.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: MainHome,
  },

  {
    path: '/login',
    name: 'login',
    component: LoginGo,
  },
,
{
  path:'/MyInfo/:userId',
  name:"MyInfo",
  component:MyInfo
}
,

  {
    path: '/product',
    name: 'product',
    component: ProductList,
  },
  {
    path: '/myinfo',
    name: 'myinfo',
    component: MyInfoMation,
  },


  {
    path: '/review',
    name: "review",
    component: ReviewPage
  }


,{
  path:'/onedayclasreserve/:onedayclass_num',
  name:'onedayclasreserve',
  component:OnedayClass
}


  ///여기 이하는 그냥 문법용 라우터이다.
,{
  path:'/CalendarEx01',
  name:"CalendarEx01",
  component:CalendarEx01


}



  ,
  {
    path: '/formdataex01',
    name: 'formdataex01',
    component: FormDataEx01
  },
  // {
  // path:'/PaiginPlacticeEx01',
  // name:"PaiginPlacticeEx01",
  // component:PaiginPlacticeEx01

  // }
  //PaiginPlacticeEx02
  ,
  {
    path: '/PaiginPlacticeEx02',
    name: "PaiginPlacticeEx02",
    component: PaiginPlacticeEx02

  }
  //PropsToTanStackQueryEx01
  ,
  {
    path: '/PropsToTanStackQueryEx01',
    name: "PropsToTanStackQueryEx01",
    component: PropsToTanStackQueryEx01

  }
  ,
  {
    path: '/query2.do',
    name: "query ",
    component: TanStackQuery2

  }
  ,
  {
    path: '/query3.do',
    name: "query ",
    component: TanStackQuery3

  }

  ,
  {
    path: '/boardDetail.do/:seq',
    name: "boardDetail.do",
    component: BoardModalDetail
  }
  ,
  {
    path:'/ParentComponent',
    name:ParentComponent,
    component:ParentComponent

  }
,
  {
    path:"/datapattern",    
    name:"datapattern",
    component:ParentCompoNent
  }
,
{
  path:"/datapattern2",    
  name:"datapattern",
  component:ParentCompo2
}

,{
path:"/awsex01",
name:"awsex01",
component:AwsDBEx01
}

,{
  path:"/awsex02",
  name:"awsex02",
  component:ApplicantMain
}


,{
  path:'/awsex03',
  name:"awsex03",
  component:ApplicantMain2
}



];
const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;