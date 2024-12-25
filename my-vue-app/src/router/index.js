// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import MainHome from '../views/main/MainHome.vue';
import OnedayClass from '../views/onedayClass/OnedayClass.vue';
import LoginGo from '../views/login/LoginGo.vue';
import ProductList from '../views/product/ProductList.vue';
import MyInfoMation from '../views/myinfomation/MyInfoMation.vue';
import ReviewPage from '../components/page/review/ReviewPage.vue';
import FormDataEx01 from '../문법용/FormData/FormDataEx01.vue';
//import PaiginPlacticeEx01 from '../문법용/페이징라이브러리/PaiginPlacticeEx01.vue';
import PaiginPlacticeEx02 from '../문법용/페이징라이브러리/PaiginPlacticeEx02.vue';
//라우트(routes) 정의 : URL 요청에 대해 어떤 페이지(컴포넌트)를 보여줄지에 대한 매핑정보를 정의

import PropsToTanStackQueryEx01 from '../문법용/텐스텍쿼리/PropsToTanStackQueryEx01.vue';

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



  {
    path: '/onedayclass',
    name: 'about',
    component: OnedayClass,
  },

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
    path:'/review',
    name:"review",
    component:ReviewPage
  }

///여기 이하는 그냥 문법용 라우터이다.
,
{
  path:'/formdataex01',
  name:'formdataex01',
  component:FormDataEx01
},
// {
// path:'/PaiginPlacticeEx01',
// name:"PaiginPlacticeEx01",
// component:PaiginPlacticeEx01

// }
//PaiginPlacticeEx02
,
{
  path:'/PaiginPlacticeEx02',
  name:"PaiginPlacticeEx02",
  component:PaiginPlacticeEx02
  
  }
//PropsToTanStackQueryEx01
,
{
  path:'/PropsToTanStackQueryEx01',
  name:"PropsToTanStackQueryEx01",
  component:PropsToTanStackQueryEx01
  
  }

];
const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;