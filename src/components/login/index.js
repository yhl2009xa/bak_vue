/**
 * Created by ASUS2 on 2018/6/26.
 */
import AjaxHelper from '$utils/ajaxHelper';
import dataApi from '$utils/dataApi';
import commonUtil from '$utils/common';
import commonPath from '$utils/path';

export  default {
  data : function(){
    return {
      form: {
        uname: '',
        passwd: ''
      },
      rules: {
        uname: [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ],
        passwd: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods:{
    handleSubmit(){
      this.$refs.loginForm.validate((valid) =>{
        if (valid) {
          let url = dataApi.LOGIN;
          let callback = function(status,data){
            if(status == "success"){
              let cookieKey = JSON.stringify({
                userName: data.nickname,
                uid:data.id,
                token: data.token
              });
              commonUtil.setCookie('hrUserInfo', cookieKey);
              this.$router.push({
                path:commonPath.MAIN
              });
            }

          };
          new AjaxHelper({isNeedToken:false}).post(url, this.form, callback.bind(this));
        }
      });


    }
  }
}
