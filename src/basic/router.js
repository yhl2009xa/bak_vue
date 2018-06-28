/**
 * Created by ASUS2 on 2018/6/26.
 */
import Vue from 'vue'
import  Router from 'vue-router'
import routers from '$components/router'
Vue.use(Router)


var myRouter = new Router({
  routes:convertRouteMap(routers)
})


myRouter.beforeEach((to, from, next) => {
  next();
  // console.log("12321");
})

function convertRouteMap(rts) {
  var routerArr = [];
  for(var rt of rts){
    var  rtObj = {};
    rtObj.path = rt.path;
    rtObj.name = rt.name?rt.name:'';
    rtObj.redirect = rt.redirect?rt.redirect:null;
    rtObj.component =  getPromisedComponent(rt.componentUrl);
    if(rt.hasOwnProperty("children")){
      var childrenRouters = rt.children;
      rtObj.children =  convertRouteMap(childrenRouters);
    }
    routerArr.push(rtObj);
  }
  return routerArr;
}

/**
 * resolve 一个空函数
 * 实现组件的按需加载
 * @param url
 * @returns {Function}
 */
function getPromisedComponent(url){
  return function(resolve){
    require.ensure([],function(require){
      resolve(require('@/components/' + url + '.vue'));
    })

  }
}

export default myRouter
