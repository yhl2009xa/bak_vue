/**
 * Created by ASUS2 on 2018/3/28.
 */
import sha256 from 'sha256';
var fn = function(){};
/*
 * 通过此种方式，对象继承关系保留在原型链中，可以通过 instanceof 的检查。
 * 而通过 $.extend() 的方式实现的“继承”，只是简单的原型链方法复制，无法通过 instanceof 的检查。
 * */
var inherit = function(cons,prototype){
  fn.prototype = prototype;
  cons.prototype  = new fn();
  fn.prototype = null;
  cons.prototype.constructor  = cons
}

var uniqueIdLibs = {}; // 唯一 ID 库
var uniqueId = function(key){
  key = key || 'default';

  var id = uniqueIdLibs[key] ;
  uniqueIdLibs[key] = id = id == undefined ? 0 : ++id;

  return key + id;
}

var isArray = function(arg){
  if (!Array.isArray)
    return Object.prototype.toString.call(arg) === '[object Array]';
  return Array.isArray(arg);
}

/**
 * 日期格式化函数
 * @param  {Date}  dateTime 日期和时间
 * @param  {String}  format   日期的格式，形式类似于'yyyy-MM-dd H:i:s',
 * @param  {Boolean} pm       24小时制
 * @return {String}           格式化时间
 */
var dateFormat = function(dateTime, format,pm) {

  var dateTime = new Date(dateTime);

  var res = format,
    date = dateTime.getDate(),
    month = dateTime.getMonth() + 1,
    hours = dateTime.getHours(),
    minutes = dateTime.getMinutes(),
    secondes = dateTime.getSeconds();
  // 24小时制，转换小时制
  if(pm == true) {
    var str = hours > 12 ? 'pm' : 'am';
    hours = hours > 12 ? hours - 12 : hours;
    res = res.replace(/h+.i*.s*/i, '$& ' + str);
    // console.log(res);
  }


  // 以对象的形式返回日期的每一部分，key值用于进行正则匹配
  var o = {
    'y+': dateTime.getFullYear(),
    'm+': month < 10 ? "0" + month : month,
    'd+': date < 10 ? "0" + date : date,
    'h+': hours < 10 ? "0" + hours : hours,
    'i+': minutes < 10 ? "0" + minutes : minutes,
    's+': secondes < 10 ? "0" + secondes : secondes
  }


  for(var key in o) {
    var reg = new RegExp("(" + key + ")", 'i');
    if(reg.test(format)) {
      res = res.replace(RegExp.$1, o[key]);
    }
  }

  return res;
}

var setCookie = function(cookie_name,cookie_Key,expires,path){
  if(expires){
    var exp = new Date();
    exp.setTime(exp.getTime() + 7 * 24 * 3600 * 1000 );//过期时间 7天
    document.cookie =   cookie_name + "=" +  window.btoa(window.encodeURIComponent(cookie_Key)) + ";expires="+ exp.toGMTString() +";path=/";
  }else{
    document.cookie =   cookie_name + "=" +  window.btoa(window.encodeURIComponent(cookie_Key)) + ";path=/";
  }
}

var getCookie = function (cookie_name) {
  var results =  document.cookie.match('(^|;) ?' + cookie_name + '=([^;]*)(;|$)');
  if(results){
    try{
      var str =  window.decodeURIComponent(window.atob(results[2]));
      return str;
    }catch (e){
      return results[2];
    }

  }else{
    return "" ;
  }
};
var delCookie = function(cookie_name)//删除cookie
{
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  document.cookie= cookie_name + "="+""+";expires="+exp.toGMTString()+";path=/";
};


var base64Encrypt =  function(str){
  return window.btoa(window.encodeURIComponent(str));
}

var base64Decrypt = function(str){
  var bakStr = "";
  try{
    bakStr = window.decodeURIComponent(window.atob(str));
  } catch (e){
    console.warn(e);
  }

  return bakStr;
}




var thousandPoints = function(s,n){
  n = n >= 0 && n <= 20 ? n : 2;
  s = parseFloat((s + '').replace(/[^\d\.-]/g, '')).toFixed(n) + '';
  var l = s.split('.') [0].split('').reverse(),
    r = s.split('.') [1];
  var  t = '';
  for (var i = 0; i < l.length; i++)
  {
    t += l[i] + ((i + 1) % 3 == 0 && (i + 1) != l.length ? ',' : '');
  }

  var decimal = n == 0 ? '' :'.' + r
  return t.split('').reverse().join('') + decimal ;
}

/**
 * body部分加密
 */
var addPostBody = function(sourceParam){
  var randomStr = Math.random().toString(36).substr(2),
    timestamp = Date.parse(new Date()),
    sortParam = objKeySort(sourceParam);
  var param =
  {
    "content":sortParam.allParam,
    "did": "browser",
    "noise":randomStr,
    "sign":sha256(JSON.stringify(sortParam.deleteParam) + "-" + "browser" + "-" + randomStr + "-" + timestamp) ,
    "timestamp":timestamp
  };
  return param;
};

/**
 * object 键值排序
 * @param obj
 * @returns {{}}
 */
var  objKeySort = function (obj) {
  var newkey = Object.keys(obj).sort();
  var newObj = {};//创建一个新的对象，用于存放排好序的键值对
  for (var i = 0; i < newkey.length; i++) {//遍历newkey数组
    newObj[newkey[i]] = obj[newkey[i]];//向新创建的对象中按照排好的顺序依次增加键值对
    if(typeof newObj[newkey[i]] == "object"){
      var childKey =  Object.keys(newObj[newkey[i]]).sort();
      for(var j = 0 ; j <childKey.length;j++ ){
        newObj[newkey[i]][childKey[j]] = obj[newkey[i]][childKey[j]];//向新创建的对象中按照排好的顺序依次增加键值对
      }
    }
  }
  if(!!newObj.content){
    var allParam =  $.extend({},newObj);
    delete newObj.content;
    var deleteParam = $.extend({},newObj);
    return {allParam:allParam,deleteParam:deleteParam}
  }else{
    return {allParam:newObj,deleteParam:newObj}
  }
};

// /**
//  *解析详情页
//  *
//  */
// var  analysisHtml = function(strSource){
//     var string = strSource.replace(/[ ]/g,"&nbsp;");
//     string = string.replace(/img&nbsp;/g,"img  ");
//     string = string.replace(/\r\n/g,"<BR>");
//     string = string.replace(/\n/g,"<BR>");
//     return string;
// }
//
// /**
//  *查询到数据后解析详情页
//  */
// function analysisBackHtml(strSource){
//     var string = strSource.replace(/&amp;nbsp/g,"&nbsp;");
//     return string;
// }


export default  {
  inherit: inherit,                //  对象继承
  uniqueId: uniqueId,              // 获取 唯一 id，带有指定前缀
  isArray: isArray,                // 判断是否为 array
  dateFormat: dateFormat,          // 获取指定格式的时间
  setCookie: setCookie,            // 设置 cookie
  getCookie: getCookie,            // 获取 cookie
  base64Encrypt:base64Encrypt,     // base64 + encodeURIComponent 加密
  base64Decrypt:base64Decrypt,      // decodeURIComponent + base64 解密
  thousandPoints:thousandPoints,     // 千分位
  addPostBody:addPostBody
  // analysisHtml:analysisHtml,       //解析到数组，
  // analysisBackHtml:analysisBackHtml
}
