/**
 * Created by Administrator on 2017/8/30.
 */
export default {

  //登录
  LOGIN: '/login',
  HOME: '/',
  //主页
  MAIN: '/main',
  /********************首页********************/
  INFO_MANAGE: {
    LIST: '/main/info/list',
    TYPE: '/main/info/type',
    ADD_EDITOR: '/#/main/info/add_article',
  },
  BANNER_MANAGE: {
    LIST: '/main/banner',
  },
  NEWS_FLASH: {
    LIST: '/main/newsFlash/list',
    EXAMINE: '/main/newsFlash/examine',
    EXAMINE_NO: '/main/newsFlash/examine_no',
    ADD_EDITOR: '/main/newsFlash/add',
  },
  AUTHOR_MANAGE: {
    LIST: '/main/author'
  },
  WX_ARTICLE: {
    LIST: '/main/wx',
    EDITOR: '/main/wx/editor'
  },
  WITHDRAW: {
    LIST: '/main/withdraw',
  },
  VIDEO_MANAGE: {
    LIST: '/main/videoManage/list',
    ADD_EDITOR: '/main/videoManage/add_editor'
  },
  /*****************************社群管理***********************************/
  COMMUNITY: {
    LIST: '/main/community/list',
    ADD_EDITOR_ARTICLE: '/main/community/add_editor_article',
    ADD_EDITOR_VIDEO: '/main/community/add_editor_video',
    //社群公告
    ANNOUNCEMENT: '/main/community/announcement'
  }

}
