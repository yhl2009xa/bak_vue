import axios from 'axios';
import _ from 'lodash';
import commonUtil from './common';
import router from '$basic/router';
import commonPath from '$utils/path';

var AjaxHelper = function(options){
  this.options =  _.extend({},this.defaultOptions,options);
  this.isNeedToken = this.options.isNeedToken ?this.options.isNeedToken:false;
  this.isLoading = this.options.isLoading ? this.options.isLoading:false ;
  this.$vue = this.options.$vue ? this.options.$vue:false;
}


/**
 * @param loading  是否添加loading动画
 * @param $element 请求的元素
 * @param isNeedToLogin  当服务端返回的数据提示没有token时,是否需要跳转到登录界面
 * @constructor
 */
AjaxHelper.prototype.defaultOptions = {
  isLoading:false,
  isNeedToken:false
}


function errorHandler(that,err, callback){

}

/*
 * 鉴权：token 检测
 * */
AjaxHelper.prototype.setHeaderInfo = function(isNeedToken){
  if(this.isNeedToken){
    var userInfo = utils.getCookie("hrUserInfo");
    var  tokenStr = "",uid;
    if(!!userInfo){
      tokenStr = JSON.parse(userInfo).token;
      uid = JSON.parse(userInfo).uid;
    }
    if(tokenStr == ""){
      window.location.href = commonPath.LOGIN;
      console.log("未检测到token");
      return false;
    }
    return {
      'x-auth-token':tokenStr,
      "uid":uid
    }
  }else{
    return {

    }
  }
}


/**
 * post请求封装
 * @param url
 * @param data
 * @param callback
 * @param isNeedToken
 */
AjaxHelper.prototype.post = function(url,data,callback){
 this.showLoading();
  axios.post(url,
    JSON.stringify(commonUtil.addPostBody(data)),
    {headers: {"Content-Type": "application/json"}}
  ).then(function (response) {
    if(response.status == 200){
      var res = response.data;
      if(res.code && res.code == 200){
        if(typeof res.data != "undefined"){
          callback("success",res.data);
        }else{
          callback("success");
        }
      } else if(res.code == 1010000){
        router.push({
          path: commonPath.LOGIN
        });

      }else{
        console.log("error");
      }
    }else{
      console.log("error");
    }


  })



};


/**
 * 显示loading
 */
AjaxHelper.prototype.showLoading = function(){
  if(this.isLoading){
    this.$vue.$store.dispatch("showLoading",true);
  }
}

/**
 * 隐藏loading
 */
AjaxHelper.prototype.hideLoading = function(){
  if(this.isLoading){
    this.$vue.$store.dispatch("showLoading",false);
  }

}

export default AjaxHelper;
