<!-- 首页 -->
<template>
  <div class="index-top" v-infinite-scroll="loadMore">
    <div class="index-meng" :style="bg"></div>
    <div class="bg" v-if="bgHside"></div>
    <div class="index-swiper">
      <Loading v-show="Hside" />
      <Swiper @Bcolor="bcolor" />
      <Goodslist />
      <HomeNews />
      <ActivityImg />
      <Seckill />
      <GroupBooking />
      <IndexMultiUl @indexs="datafn" />
      <MultiGoods :resdata="resdata" :datas="datas" />
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Swiper from "../components/index/Swiper";
import Goodslist from "../components/index/Goodslist";
import HomeNews from "../components/index/HomeNews";
import MultiGoods from "../components/index/MultiGoods";
// import Axios from "axios"
import IndexMultiUl from "../components/index/IndexMultiUl";
import { getHomeList } from "../../../api/api";
import Loading from "@/components/Loading";
import ActivityImg from "../components/index/ActivityImg"
import GroupBooking from "../components/index/GroupBooking"
import Seckill from "../components/index/Seckill"
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Swiper,
    Goodslist,
    HomeNews,
    MultiGoods,
    IndexMultiUl,
    Loading,
    ActivityImg,
    GroupBooking,
    Seckill
  },
  data() {
    //这里存放数据
    return {
      colorarr: ["#409eff", "#E43124", "#4091FF", "#3c81ff", "#028379"],
      bg: { background: "" },
      resdata: [], //数据--父传子
      datas: 0, //点击的下标 --父传子
      page: 1,
      size: 10,
      dataUrl: "/goods/type_list",
      dataType: "is_best",
      Hside: false,
      bgHside: false,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    bcolor(data) {
      this.bg.background = this.colorarr[data];
    },
    async getBestDatas(url, page, size, type) {
      this.Hside = true;
      let result = await getHomeList(url, {
        page: page,
        size: size,
        type: type,
      });
      if (result.data) {
        let resultArr = result.data;
        this.resdata = this.resdata.concat(resultArr);
        this.Hside = false;
      }
    },
    datafn(data) {
      this.page = 1;
      this.resdata = [];
      this.datas = data.index;
      this.dataUrl = data.url;
      this.dataType = data.type;
      this.getBestDatas(data.url, this.page, this.size, data.type);
    },
    loadMore() {
      this.page++;
      this.getBestDatas(this.dataUrl, this.page, this.size, this.dataType);
    },
    scrollPage(){
      if (document.documentElement.scrollTop > 0) {
        this.bgHside = true;
      } else if (document.documentElement.scrollTop < 300) {
        this.bgHside = false;
      }
    }
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getBestDatas(this.dataUrl, this.page, this.size, this.dataType);
    window.addEventListener("scroll", this.scrollPage, false);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.index-top {
  position: relative;
  top: -9rem;
  .bg {
    width: 100%;
    left: 0;
    top: 0;
    height: 8.8rem;
    background: red;
    position: fixed;
    z-index:90;
  }
  .index-meng {
    background: red;
    height: 22.8rem;
    border-bottom-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
    transition: all 0.5s;
  }
  .index-swiper {
    position: relative;
    top: -5rem;
  }
  
}
</style>