<!-- 首页组件 -->
<template>
  <div class="home-page">
    <HomeHeader />
    <div class="navbar">
      <ly-tab v-model="selectedId" :items="items" :options="options" @change="chengetab" :selectedId="selectedId"></ly-tab>
      <div class="catrgory-btn">
        <i class="iconfont icon-fenlei"></i>
        分类
      </div>
      <div class="bg" v-if="selectedId!=0"></div>
    </div>
    <div>
        <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer from "@/components/Footer"; //引入底部模块
import HomeHeader from "./components/HomeHeader"; //引入头部搜索模块
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
    HomeHeader,
  },
  data() {
    //这里存放数据
    return {
      selectedId: 0,
      items: [
        { label: "首页" },
        { label: "家用电器" },
        { label: "男装女装" },
        { label: "鞋靴箱包" },
        { label: "手机数码" },
        { label: "电脑办公" },
        { label: "家居家纺" },
        { label: "个人化妆" },
      ],
      options: {
        activeColor: "#1d98bd",
        // 可在这里指定labelKey为你数据里文字对应的字段名
      },
      routerDatas:["/home/index","/home/household","/home/clothing","/home/shoebag","/home/mobilephones","/home/computer","/home/hometextiles","/home/personalmakeup"]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
      chengetab(item,index){
          this.$router.push(this.routerDatas[index])
      }
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
      this.routerDatas.forEach((item,index) => {
          if(item==this.$route.path){
              this.selectedId=index
          }
      });
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
body,html{
  background-color: rgb(228, 222, 222);
}
.home-page {
    // background-color:transparent;
    height: 10rem;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    .bg {
    width: 100%;
    left: 0;
    top: 0;
    height: 8.8rem;
    background: red;
    position: fixed;
    z-index: -1;
  }
  .navbar {
    background-color: transparent;
    display: flex;
    top: 4.3rem;
    left: 0;
    position: fixed;
    z-index: 99;
    width: 100%;
    .ly-tab {
      width: 85%;
      .ly-tabbar {
        width: 100%;
        background-color: transparent;
        border-bottom: 0;
        box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0);
        .ly-tab-list {
          a {
            color: white;
          }
        }
      }
    }
    .catrgory-btn {
      width: 15%;
      height: 4.4rem;
      text-align: center;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      i{
        font-size: 2rem;
        box-shadow: -6px 0 4px -4px rgba(0, 0, 0, 0.4);
      }
    }
  }
}
</style>