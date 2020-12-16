<!-- 分类列表组件 -->
<template>
  <div class="category">
    <ul>
      <li
        v-for="(item, index) in arr"
        :key="index"
        @click="changeli(index)"
        :class="{ lis: flag == index }"
      >
        {{ item.cat_name }}
      </li>
    </ul>
  </div>
</template>
<style lang="less">

.category {
  width: 30%;
  margin-top: 5rem;
  height: 100%;
  position: fixed;
  ul {
    width: 100%;
    height: 100%;
    li {
      width: 100%;
      height: 3rem;
      text-align: center;
      line-height: 3rem;
      font-size: 1.4rem;
      color: #999;
    }
    .lis {
      border-left: 2px solid red;
      color: red;
    }
  }
}
</style>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import Axios from "axios";
import { getCategoryLeft } from "../../../api/api";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      arr: [],
      flag: 0,
      cateimg: null,
    };
  },
  //监听属性 类似于data概念
  computed: {
    flagfn() {
      return this.$store.state.flag;
    },
  },
  //监控data中的数据变化
  watch: {
    flagfn(value) {
      if (value == true) {
        if (this.flag != 6) {
          this.flag += 1;
          this.$store.commit("changeflag", null);
        }
      } else if (value == false) {
        if (this.flag != 0) {
          this.flag -= 1;
          this.$store.commit("changeflag", null);
        }
      }
      this.$emit("transfer", {
        id: this.arr[this.flag].cat_id,
        img: this.arr[this.flag].touch_catads,
      });
      this.$store.commit("changeStyle", true);
    },
  },
  //方法集合
  methods: {
    changeli(index) {
      this.flag = index;
      this.$emit("transfer", {
        id: this.arr[this.flag].cat_id,
        img: this.arr[this.flag].touch_catads,
      });
      this.getRight();
      this.$store.commit("changeStyle", true);
    },
    async getRight() {
      let result = await getCategoryLeft();
      this.arr = result.data;
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getRight();
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
