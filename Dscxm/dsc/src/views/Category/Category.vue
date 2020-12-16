<!-- 分类组件-->
<template>
  <div class="category-box">
    <div class="categoryBox-top">
      <i class="iconfont icon-jiantou3" @click="tuichu"></i>
      <input type="text" />
      <i class="iconfont icon-sousuo2"></i>
    </div>
    <Categorylists @transfer="transferss" />
    <Categorycolumn :sondatas="sondatas" :columnimg="columnimg" />

    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer from "@/components/Footer";
import Categorylists from "../Category/commponents/Categorylists";
import Categorycolumn from "../Category/commponents/Categorycolumn";
import { getCategoryRight } from "../../api/api";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
    Categorylists,
    Categorycolumn,
  },
  data() {
    //这里存放数据
    return {
      sondatas: [],
      columnimg:
        "https://x.dscmall.cn/storage/data/touch_catads/15630384831872.jpg",
      id: 858,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    transferss(data) {
      this.columnimg = data.img;
      this.id = data.id;
      this.getRight(data.id);
    },
    async getRight(id) {
      let result = await getCategoryRight(id);
      this.sondatas = result.data;
    },
    tuichu() {
      history.back();
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getRight(this.id);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.category-box {
  width: 100%;
  height: 100vh;
  background-color:white;
  .categoryBox-top {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 3.5rem;
    z-index: 100;
    border-bottom: 0.1rem solid rgb(214, 214, 214);
    background-color: white;
    display: flex;
    padding-top: 1rem;
    .icon-jiantou3 {
      width: 10%;
      height: 2rem;
      line-height: 2rem;
      text-align: center;
    }
    input {
      width: 90%;
      border: 1px solid #999;
      height: 2rem;
      border-radius: 1rem;
    }
    .icon-sousuo2 {
      position: absolute;
      top: 1.3rem;
      right: 0.6rem;
    }
  }
  .categorylists {
    width: 25%;
    position: fixed;
    left: 0;
    top: 5rem;
    border-right: 1rx solid #999;
  }
  .categorycolumn {
    width: 70%;
    height: calc(100% - 7.5rem);
    position: absolute;
    right: 0;
    top: 5rem;
  }
}
</style>
