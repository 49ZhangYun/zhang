import { getCategorypage, famousBrand, detailsImgdata, relatedData, houseinFDatas } from "../api/api"

const actions = {
    async actChangeCategorypage(context, obj) {
        let res = await getCategorypage(obj.url, obj.params, obj.type)
        context.commit("changeCategorypage", res.data)
    },
    async actChangeFamousBrand(context, obj) {
        let res = await famousBrand(obj.url, obj.params, obj.type)
        context.commit("chengeFamousBrand", res.data)
    },
    async actchengeDetailsimg(context, obj) {
        let res = await detailsImgdata(obj.url, obj.params, obj.type)
        context.commit("chengeDetailsimg", res.data)
        context.commit("chengeDetailsimg2", res.data.basic_info)
        let object = {
            images: res.data.goods_thumb,
            price: res.data.shop_price,
            dprice: res.data.market_price,
            title: res.data.goods_name
        }
        context.commit("changePosterDatas", object)
    },
    async actchengeRelatedData(context, obj) {
        let res = await relatedData(obj.url, obj.params, obj.type)
        context.commit("chengeRelatedData", res.data)
    },
    async actchengeHouseinfiniteDatas(context, obj) {
        let res = await houseinFDatas(obj.url, obj.params, obj.type)
        context.commit("chengeHouseinfiniteDatas", res.data)
    },
    setUserInfo(context, data) {
        context.commit("setUserInfo", data)
    }
}
export default actions