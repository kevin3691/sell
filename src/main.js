import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import VueResouce from 'vue-resource'
import goods from "./components/goods/goods";
import seller from "./components/seller/seller";
import ratings from  './components/ratings/ratings'
import 'common/stylus/index.styl'

Vue.use(VueRouter);
Vue.use(VueResouce)
/* eslint-disable no-new */
let app = Vue.extend(App);

let router = new VueRouter({
  linkActiveClass:'active'
});

router.map({
  '/goods':{
    component:goods
  },
  '/seller': {
    component: seller
  },
  '/ratings': {
    component: ratings
  }
});

router.start(app,'#app');

router.go('/goods')
