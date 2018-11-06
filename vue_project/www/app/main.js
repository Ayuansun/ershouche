import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import store from "./store";
import iView from 'iview';
import router from "./router.js";
import VueRouter from "vue-router";
Vue.use(iView);
Vue.use(VueRouter);

new Vue({
    el:"#app",
    store,
    router,
    render:(h)=>h(App)
})