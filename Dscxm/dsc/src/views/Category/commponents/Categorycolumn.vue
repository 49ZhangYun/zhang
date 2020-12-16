<!-- 分类商品栏目 -->
<template>
  <div class="column" id="wrapper" @click="clickcolumn">
    <div id="wrap" :class="{ top: translateYObj }">
      <img :src="columnimg" alt="" class="imgb" />
      <ul v-for="(item, index) in sondatas" :key="index" ref="ul">
        <p>{{ item.cat_name }}</p>
        <router-link
          :to="'/categprypage/'+item.child[index].cat_id"
          tag="li"
          v-for="(liitem, index) in item.child"
          :key="index"
        >
          <img :src="liitem.touch_icon" alt="" />
          <span>{{ liitem.cat_name }}</span>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import BScroll from "better-scroll";

export default {
  //import引入的组件需要注入到对象中才能使用
  props: {
    sondatas: Array,
    columnimg: String,
  },
  components: {},
  data() {
    //这里存放数据
    return {
      bs: null,
      boolean: null
    };
  },
  //监听属性 类似于data概念
  computed: {
    translateYObj() {
      return this.$store.state.translateYObj;
    },
  },
  //监控data中的数据变化
  watch: {
    boolean: function (newval) {
      if (newval == true) {
          this.$store.commit("changeflag", true);
      } else if (newval == false) {
          this.$store.commit("changeflag", false);
      }
      this.boolean = null;
    },
  },
  //方法集合
  methods: {
    scroll() {
      this.bs = new BScroll("#wrapper", {
        pullUpLoad: true,
        scrollbar: false,
        pullDownRefresh: true,
        click: true,
      });
      this.bs.on("scroll", (obj) => {
        let maxHeight =
          document.getElementById("wrap").scrollHeight -
          document.getElementById("wrapper").offsetHeight;
         if(obj.y== -maxHeight){
           this.$store.commit("changeflag",true)
         } 
      });
    },
    clickcolumn() {
      this.$store.commit("changeStyle", false);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {
    this.scroll();    
  }, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.column {
  width: 70%;
  height: calc(100% - 9.5rem);
  position: absolute;
  right: 0rem;
  top: 5rem;
  overflow: hidden;
  .top {
    transform: translateY(0) !important;
  }
  div {
    .imgb {
      width: 95%;
    }
    ul {
      width: 95%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      p {
        width: 100%;
        font-size: 1.6rem;
        font-weight: 700;
        text-align: center;
        height: 2rem;
        line-height: 2rem;
        margin: 1rem 0;
      }
      li {
        width: 26%;
        text-align: center;
        margin: 1rem 0;
        img {
          width: 100%;
          margin-bottom: 0.5rem;
        }
      }
    }
  }
}
</style>