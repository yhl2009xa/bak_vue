// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './basic/router';

/******引用外部的全局的插件******/
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import lodash from 'lodash'
Vue.prototype._ = lodash;

Vue.use(iView);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
