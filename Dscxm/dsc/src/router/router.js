import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter) //使用

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
import Home from "../views/Home/Home.vue"
import Category from "../views/Category/Category.vue"
import Find from "../views/Find/Find.vue"
import Cart from "../views/Cart/Cart"
import Mine from "../views/Mine/Mine"

let routes = [{
        path: "/",
        redirect: "/home"
    }, {
        path: "/home",
        component: Home, //() => import("../views/Home/children/Index"),//按需引入，路由的懒加载,
        children: [{
            path: "/",
            redirect: "/home/index"
        }, {
            path: "index", //首页
            component: () =>
                import ("../views/Home/children/Index") //按需引入，路由的懒加载
        }, {
            path: "shoebag", //鞋靴箱包
            component: () =>
                import ("../views/Home/children/ShoeBag") //按需引入，路由的懒加载
        }, {
            path: "clothing", //男装女装
            component: () =>
                import ("../views/Home/children/Clothing") //按需引入，路由的懒加载
        }, {
            path: "household", //家用电器
            component: () =>
                import ("../views/Home/children/Household") //按需引入，路由的懒加载
        }, {
            path: "computer", //电脑办公
            component: () =>
                import ("../views/Home/children/Computer") //按需引入，路由的懒加载
        }, {
            path: "hometextiles", //家居家纺HomeTextiles hometextiles
            component: () =>
                import ("../views/Home/children/HomeTextiles") //按需引入，路由的懒加载
        }, {
            path: "personalmakeup", //个人化妆
            component: () =>
                import ("../views/Home/children/PersonalMakeup") //按需引入，路由的懒加载
        }, {
            path: "mobilephones", //手机数码
            component: () =>
                import ("../views/Home/children/MobilePhones") //按需引入，路由的懒加载
        }]

    }, {
        path: "/category",
        component: Category
    }, {
        path: "/find",
        component: Find
    }, {
        path: "/cart",
        component: Cart
    }, {
        path: "/mine",
        component: Mine
    },
    {
        path: "/categprypage/:cid",
        component: () =>
            import ("../views/Category/commponents/Categprypage")
    },
    {
        path: "/dateils/:cid",
        component: () =>
            import ("../views/Details/Details")
    },
    {
        path: "/login",
        component: () =>
            import ('../views/Login/Login')
    },
    {
        path: "/register",
        component: () =>
            import ('../views/Login/Register')
    },

]

//创建一个路由对象
let router = new VueRouter({
    routes
})
router.beforeEach((to, from, next) => {
    console.log(to);
    console.log(from);
    console.log(next);
    if (to.fullPath == "/mine" || to.fullPath == "/login") {
        next();
        return;
    }
    const token = JSON.parse(window.localStorage.getItem("userInfo")).token
    console.log(token);
    if (!token) return next("/login")
    next()
})

export default router