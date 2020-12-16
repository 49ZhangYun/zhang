<!--  -->
<template>
  <div class="housebrand">
    <h4>品牌精选</h4>
    <ul>
      <li v-for="(items, index) in brandarr" :key="index">
        <img :src="items.brand_logo" alt="" />
        <p>{{ items.brand_name }}</p>
      </li>
    </ul>
  </div>
</template>
<style lang="less">
.housebrand {
  width: 95%;
  margin: 1rem auto;
  background-color: white;
  border-radius: 1rem;
  h4 {
    height: 4rem;
    line-height: 4rem;
    text-indent: 2em;
  }
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 23%;
      text-align: center;
      height: 6rem;
      img {
        width: 100%;
      }
    }
  }
}
</style>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { getHomeList } from "../../../../api/api";
// import Axiso from "axios"
export default {
  //import引入的组件需要注入到对象中才能使用
  props:{
    num:Number
  },
  components: {},
  data() {
    //这里存放数据
    return {
      brandarr: [],
      cat_id: null,
      url: "/visual/visual_second_category",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async getBestDatas(url, cat_id) {
      let result = await getHomeList(url, {
        cat_id: cat_id,
      });
      if (result.data) {
        let resultArr = result.data;
        this.brandarr = resultArr.brand;
      }
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.cat_id=this.num
    this.getBestDatas(this.url, this.cat_id);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
