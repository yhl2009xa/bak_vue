/**
 *后台服务API
 */
var rootUrl = "";

export default {
  QINIU_DOMAIN:"hooahimg.comein.cn",
  //获取七牛token
  TOKEN:rootUrl+'/web/common-provider/file/token/get',
  LOGIN: rootUrl + "/web/user-provider/back/login",

  INFO_MANAGE:{
    //文章列表
    LIST: rootUrl + "/web/news-provider/admin/news/listNewsArticle",
    ADD:rootUrl +'/web/news-provider/admin/news/insertNewsArticle',
    EDITOR:rootUrl +'/web/news-provider/admin/news/updateNewsArticle',
    DELETE:rootUrl +'/web/news-provider/admin/news/deleteNewsArticle',
    BATCH_DELETE:rootUrl +'/web/news-provider/admin/news/deleteBatchNewsArticle',
    //文章详情
    ARTICLE_DETAIL :rootUrl +'/web/news-provider/admin/news/getNewsArticleById',
    //文章置顶
    ARTICLE_TOP :rootUrl +'/web/news-provider/admin/news/topNewsArticle',
    //文章推送
    ARTICLE_PUSH :rootUrl +'/web/news-provider/admin/news/pushNewsArticle',

    //文章分类
    ARTICLE_TYPE:rootUrl +'/web/news-provider/admin/news/listNewsCategory',
    ADD_TYPE:rootUrl +'/web/news-provider/admin/news/insertNewsCategory',
    EDITOR_TYPE:rootUrl +'/web/news-provider/admin/news/updateNewsCategory',
    DELETE_TYPE:rootUrl +'/web/news-provider/admin/news/deleteNewsCategory',
    BATCH_DELETE_TYPE:rootUrl +'/web/news-provider/admin/news/deleteBatchNewsCategory',

  },
  AUTHOR_MANAGE:{
    LIST:rootUrl + '/web/user-provider/admin/listAuthor',
    ADD:rootUrl + '/web/user-provider/admin/insertUser',
    EDITOR:rootUrl + '/web/user-provider/admin/insertUser',
    COPYRIGHT:rootUrl + '/web/user-provider/admin/copyright/edit',
  },
  WX_MANAGE:{
    LIST: rootUrl + "/web/common-provider/wx/listArticle",
    //快速添加文章链接
    ADD_FAST:rootUrl +'/web/common-provider/wx/spider/url',
    //删除
    DELETE:rootUrl +'/web/common-provider/wx/delArticle',
    //详情
    DETAIL:rootUrl +'/web/common-provider/wx/getArticleById',

  },
  NEWS_FLASH:{
    //快讯已审核列表
    EXAMINE: rootUrl + "/web/news-provider/admin/information/listInformation",
    //快讯已审核详情
    EXAMINE_DETAIL:rootUrl +'/web/news-provider/admin/information/getInformationById',
    //快讯已审核新增
    EXAMINE_ADD:rootUrl +'/web/news-provider/admin/information/checkInformation',

    //快讯已审核编辑
    EXAMINE_EDITOR:rootUrl +'/web/news-provider/admin/information/updateInformation',
    //快讯已审核删除
    EXAMINE_DELETE:rootUrl +'/web/news-provider/admin/information/deleteUncheckedInformation',



    //快讯未审核列表
    EXAMINE_NO:rootUrl +'/web/news-provider/admin/information/check/listUncheckedInformation',
    //快讯未审核详情
    EXAMINE_NO_DETAIL:rootUrl +'/web/news-provider/admin/information/check/getUncheckedInformationById',
    //快讯未审核删除
    EXAMINE_NO_DELETE:rootUrl +'/web/news-provider/admin/information/check/deleteUncheckedInformation',
  },
  WITHDRAW:{
    LIST:rootUrl + "/web/user-provider/admin/list/withdraw/ing",
    EXAMINE:rootUrl + "/web/user-provider/admin/withdraw/success",
  },

  /***************************直播/录播管理****************************/
  VIDEO_MANAGE:{
    //列表
    LIST:'/web/news-provider/admin/live/listLive',
    ADD:'/web/news-provider/admin/live/insertLive',
    UPDATE:'/web/news-provider/admin/live/updateLive',
    DELETE:'/web/news-provider/admin/live/deleteLive',
    //单个播放信息
    DETAIL:'/web/news-provider/admin/live/getLiveById'
  },
  /*****************************社群管理***********************************/
  COMMUNITY:{
    //列表
    LIST:'/web/news-provider/admin/community/listCommunity',
    //新增社群
    ADD:'/web/news-provider/admin/community/insertCommunity',
    //社群详情
    DETAIL:'/web/news-provider/admin/community/getCommunityById',
    //编辑社群
    EDITOR:'/web/news-provider/admin/community/updateCommunity',
    //删除社群
    DELETE:'/web/news-provider/admin/community/deleteCommunity',

    //公告删除,修改
    ANNOUNCEMENT_UPDATE:'/web/news-provider/admin/community/active/updateActiveStatus',
    //公告列表
    ANNOUNCEMENT_LIST:'/web/news-provider/admin/community/active/listActive',
    //文章详情
    ANNOUNCEMENT_DETAIL_ARTICLE:'/web/news-provider/admin/community/article/getArticleById',
    //文章新增
    ANNOUNCEMENT_ADD_ARTICLE:'/web/news-provider/admin/community/article/insertArticle',
    //文章编辑
    ANNOUNCEMENT_EDITOR_ARTICLE:'/web/news-provider/admin/community/article/updateCommunity',
    //文章快速添加
    ANNOUNCEMENT_ARTICLE_ADD_FAST:'/web/common-provider/wx/spider/url/immediately',

    //社群直播详情
    ANNOUNCEMENT_DETAIL_VIDEO:'/web/news-provider/admin/community/live/getLiveById ',
    //社群直播新增
    ANNOUNCEMENT_ADD_VIDEO:'/web/news-provider/admin/community/live/insertLive',
    //社群直播编辑
    ANNOUNCEMENT_EDITOR_VIDEO:'/web/news-provider/admin/community/live/updateLive',
  },
  BANNER_MANAGE:{
    LIST: '/web/common-provider/admin/home/listBanner',
    ADD:'/web/common-provider/admin/home/insertBanner',
    DELETE:'web/common-provider/admin/home/deleteBanner',
    UPDATE:'web/common-provider/admin/home/updateBanner'
  }

}
