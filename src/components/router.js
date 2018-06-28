/**
 * Created by ASUS2 on 2018/6/26.
 */
import commonPath from "$utils/path"

export default [
  {
    path: commonPath.HOME,
    redirect: commonPath.MAIN
  },
  {
    path: commonPath.LOGIN,
    name: commonPath.LOGIN,
    componentUrl: 'login/index'
  }, {
    path: commonPath.MAIN,
    name: commonPath.MAIN,
    componentUrl: 'main/index',
    redirect: commonPath.NEWS_FLASH.LIST,
    children: [
      {
        path: commonPath.NEWS_FLASH.LIST,
        componentUrl: 'main/7_24_manage/index',
        name:commonPath.NEWS_FLASH.LIST
      },
      {
        path: commonPath.AUTHOR_MANAGE.LIST,
        componentUrl: 'main/author_mange/index',
      },
      {
        path: commonPath.WX_ARTICLE.LIST,
        componentUrl: 'main/wx_manage/index',
      },
      {
        path: commonPath.INFO_MANAGE.LIST,
        componentUrl: 'main/info_manage/index',
      },
    ]
  }
]
