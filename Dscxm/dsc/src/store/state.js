let state = {
    flag: null,
    translateYObj: false,
    CategorypageArr: [],
    famousBrandArr: [],
    detaimgdata: {},
    detaimgdata2: {},
    trolleynum: 1, //物品数量CategorypageArr
    relatedData: [], //猜你喜欢
    houseinfiniteDatas: [],
    posterDatas: {}, //海报的数据
    cartsData: localStorage["carts"] ? JSON.parse(localStorage["carts"]) : [],
    selectAll: localStorage["selectAll"] ? JSON.parse(localStorage["selectAll"]) : false,
    userInfo: localStorage["userInfo"] ? JSON.parse(localStorage["userInfo"]) : {}
}
export default state