import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import { Navbar, TabItem } from 'mint-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// import { InfiniteScroll } from 'mint-ui';
// Vue.use(InfiniteScroll);

import LyTab from "ly-tab"
Vue.use(LyTab)

import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style (>= Swiper 6.x)
import 'swiper/swiper-bundle.css'
Vue.use(VueAwesomeSwiper, /* { default options with global component } */ )

import store from "./store/index"

//导入路由模块
import router from "./router/router.js"

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')