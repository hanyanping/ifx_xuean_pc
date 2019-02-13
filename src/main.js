// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import infiniteScroll from 'vue-infinite-scroll'
Vue.prototype.isShowWx = true;
Vue.prototype.ishowHelp = false;
// require styles
import 'swiper/dist/css/swiper.css'
import App from './App'
import router from './router'
import $ from 'jquery'
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(ElementUI);
Vue.use(infiniteScroll);
router.afterEach((to,from,next) => {
    window.scrollTo(0,0);
});
router.beforeEach((to, from, next) => {
    next()
    // let accessToken = Util.localStorageUtil.get('access_token');
    // if(accessToken){
    //     next()
    // }else{
    //     Service.user().getToken({}).then(
    //         response => {
    //             if (response) {
    //                 Util.localStorageUtil.set("access_token", response.data);
    //             }
    //             console.log( Util.localStorageUtil.get('access_token'))
    //             next()
    //         },
    //         err => {
    //             next()
    //         }
    //     );
    // }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
