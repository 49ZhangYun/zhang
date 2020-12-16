import { MessageBox } from 'mint-ui';
let mutations = {
    changeflag(state, data) {
        state.flag = data
    },
    changeStyle(state, data) {
        state.translateYObj = data
    },
    changeCategorypage(state, data) {
        state.CategorypageArr = state.CategorypageArr.concat(data)
    },
    chengeFamousBrand(state, data) {
        state.famousBrandArr = data
    },
    chengeDetailsimg(state, data) {
        state.detaimgdata = data
    },
    chengeDetailsimg2(state, data) {
        state.detaimgdata2 = data
    },
    chengTrolleynum(state, data) {
        state.trolleynum = data
    },
    chengeRelatedData(state, data) {
        state.relatedData = data
    },
    chengeHouseinfiniteDatas(state, data) {
        state.houseinfiniteDatas = state.houseinfiniteDatas.concat(data)
    },
    changePosterDatas(state, data) {
        state.posterDatas = data
    },
    setcartsData(state, data) {
        if (data) {
            state.cartsData.push(data)
        }
        localStorage.setItem("carts", JSON.stringify(state.cartsData))
    },
    selsectAll(state, data) {
        data.items.child[data.smindex].isSelect = !data.items.child[data.smindex].isSelect;
        let isAll = data.items.child.every((isA) => {
            return isA.isSelect == true
        });
        data.items.isshopSelect = isAll;
        state.cartsData[data.index] = data.items;
        localStorage.setItem("carts", JSON.stringify(state.cartsData))
        state.selectAll = isAll
        localStorage.setItem("selectAll", JSON.stringify(state.selectAll))
    },
    AllselsectAll(state, data) {
        data.item.isshopSelect = !data.item.isshopSelect;
        state.cartsData[data.index].child.forEach((items) => {
            items.isSelect = data.item.isshopSelect
        });
        state.cartsData[data.index].isshopSelect = data.item.isshopSelect;
        data.item.child.forEach((items) => {
            items.isSelect = data.item.isshopSelect
        })
        localStorage.setItem("carts", JSON.stringify(state.cartsData))
        state.selectAll = data.item.isshopSelect
        localStorage.setItem("selectAll", JSON.stringify(state.selectAll))
    },
    totality(state) {
        state.selectAll = !state.selectAll;
        state.cartsData.forEach((items) => {
            items.isshopSelect = state.selectAll
            items.child.forEach((its) => {
                its.isSelect = state.selectAll
            })
        });
        localStorage.setItem("selectAll", JSON.stringify(state.selectAll))
        localStorage.setItem("carts", JSON.stringify(state.cartsData))
    },
    addshop(state, data) {
        state.cartsData[data.index].child[data.smindex].value += 1
        localStorage.setItem("carts", JSON.stringify(state.cartsData))
    },
    minusshop(state, data) {
        if (state.cartsData[data.index].child[data.smindex].value > 1) {
            state.cartsData[data.index].child[data.smindex].value -= 1
            localStorage.setItem("carts", JSON.stringify(state.cartsData))
        }
    },
    removeshop(state, data) {
        MessageBox.confirm('亲，您确定要放弃该宝贝吗?').then(() => {
            state.cartsData[data.index].child.splice(data.smindex, 1);
            if (state.cartsData[data.index].child.length == 0) {
                state.cartsData.splice(data.index, 1)
            }
            localStorage.setItem("carts", JSON.stringify(state.cartsData))
        }, () => {
            console.log(1);
        })
    },
    setUserInfo(state, data) {
        state.userInfo = data
        localStorage.setItem("userInfo", JSON.stringify(state.userInfo))
    }
}

export default mutations