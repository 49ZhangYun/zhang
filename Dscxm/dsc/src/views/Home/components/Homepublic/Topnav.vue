<!-- 家用电器头部导航 -->
<template>
  <div class="housenavtop">
    <ul>
      <router-link to="/home" tag="li" v-for="(item,index) in topnavarr" :key="index">
        <img
          :src="item.touch_icon"
          alt=""
        />
        <p>{{item.cat_name}}</p>
      </router-link>
    </ul>
  </div>
</template>
<style lang="less">
.housenavtop {
  width: calc(95% - 2rem);
  margin: 10rem auto 0;
  background-color: white;
  padding: 2rem 1rem; 
  border-radius:1rem ;
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 20%; 
      text-align: center;
      img {
        width: 90%;
      }
    }
  }
}
</style>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { getHomeList } from "../../../../api/api";
export default {
  //import引入的组件需要注入到对象中才能使用
  props:{
    num:Number
  },
  components: {},
  data() {
    //这里存放数据
    return {
      topnavarr:[],
      cat_id:null,
      url:"/visual/visual_second_category"
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async getBestDatas(url, cat_id) {
      this.cat_id=this.num
      let result = await getHomeList(url, {
        cat_id: cat_id,
      });
      if (result.data) {
        let resultArr = result.data;
        this.topnavarr = resultArr.category;
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
    this.getBestDatas(this.url,this.cat_id)
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
