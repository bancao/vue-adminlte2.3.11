// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import router from './router'
import index from './index'
import store from './vuex/store'

require('!style-loader!css-loader!./css/main.css')
require('!style-loader!css-loader!./bootstrap/css/bootstrap.css')
require('!style-loader!css-loader!./dist/css/skins/_all-skins.min.css')
require('!style-loader!css-loader!./dist/css/AdminLTE.min.css')
require('!style-loader!css-loader!./plugins/iCheck/flat/blue.css')
require('!style-loader!css-loader!./plugins/daterangepicker/daterangepicker.css')
require('./js/jquery.js')
require('./js/jquery.cookie.js')

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App }
// })

// 全局导航钩子
 router.beforeEach((to, from, next) => {
     // 判断该路由是否需要登录权限
     if (to.meta.requireAuth) {
         // 通过vuex state获取当前的token是否存在
         // console.log(isEmptyObject(store.state.user)) 
         var token = $.cookie("access_token")
         if(token) {   
             next();
         }
         else { 
             next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
         }
     }
     else {
         next();
     }
 })


 // http request 拦截器
// axios.defaults.baseURL = "http://localhost:3000";
axios.interceptors.request.use(
    config => {
        var token = $.cookie("access_token");
        if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.access_token = `${token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {   
        return response;
    },
    error => {
        console.log(error);
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    router.replace({
                        path: 'login',
                        query: {redirect: router.currentRoute.fullPath}
                    })
            }
        }
        return Promise.reject(error.response)   // 返回接口返回的错误信息
    });

Vue.prototype.$http = axios

 function isEmptyObject(obj) {
     for (var key in obj) {
         return false;
     }
     return true;
 }


const app = new Vue({
  store,
  router,
  render: h => h(index)
}).$mount('#app')




require('./plugins/sparkline/jquery.sparkline.min.js')
require('./bootstrap/js/bootstrap.min.js')
require('./plugins/slimScroll/jquery.slimscroll.min.js')
require('./dist/js/demo.js')
require('./dist/js/app.min.js')
