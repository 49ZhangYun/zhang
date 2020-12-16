import Ajax from "./ajax";

const Base_Url = "/api"
const Base_URL2 = "http://localhost:3000/adminapi"
    //首页列表

export const getHomeList = (usrs, params) => Ajax(Base_Url + usrs, params);
//分类右侧
export const getCategoryRight = (cat_id) => {
    return Ajax(Base_Url + "/catalog/list/" + cat_id)
};
//分类左侧
export const getCategoryLeft = () => {
    return Ajax(Base_Url + "/catalog/list")
};
//分类列表页
export const getCategorypage = (usrs, params, type) => {
    return Ajax(Base_Url + usrs, params, type)
};
//品牌
export const famousBrand = (usrs, params, type) => {
    return Ajax(Base_Url + usrs, params, type)
};
export const detailsImgdata = (usrs, params, type) => {
    return Ajax(Base_Url + usrs, params, type)
};
//猜你喜欢
export const relatedData = (usrs, params, type) => {
    return Ajax(Base_Url + usrs, params, type)
};

export const houseinFDatas = (usrs, params, type) => { //houseinfiniteDatas
    return Ajax(Base_Url + usrs, params, type)
};
//获取手机验证码
export const getPhoneCode = (url, params, type) => Ajax(Base_URL2 + url, params, type)
    //短信登录
export const getPhoneLogin = (url, params, type) => Ajax(Base_URL2 + url, params, type)
    //账号登录
export const getLogin = (url, params, type) => Ajax(Base_URL2 + url, params, type)