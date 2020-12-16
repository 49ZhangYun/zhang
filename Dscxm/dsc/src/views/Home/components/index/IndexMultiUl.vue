<!--  -->
<template>
  <div class="multigood-bar">
    <ul>
      <li
        v-for="itme in lis"
        :key="itme.id_num"
        @click="selected"
        ref="lis"
        :data-num="itme.id_num"
      >
        <p>{{ itme.title }}</p>
        <p>{{ itme.title2 }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      lis: [
        {
          id_num: 0,
          title: "精选",
          title2: "为你推荐",
          urls:"/goods/type_list",
          type:"is_best"
        },
        {
          id_num: 1,
          title: "社区",
          title2: "新奇好物",
          urls:"/discover/find_list",
          type:""
        },
        {
          id_num: 2,
          title: "新品",
          title2: "潮流上新",
          urls:"/goods/type_list",
          type:"is_new"
        },
        {
          id_num: 3,
          title: "热卖",
          title2: "火热爆款",
          urls:"/goods/type_list",
          type:"is_hot"
        },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
      fn() {
      this.$refs.lis[0].setAttribute("class", "lastP");
    },
    selected(e) {
      this.$refs.lis.forEach((items) => {
        items.setAttribute("class", "");
      });
      let eIndex = e.currentTarget.getAttribute("data-num")
      e.currentTarget.setAttribute("class", "lastP");
      let eObj={
          index:Number(eIndex),
          url:this.lis[eIndex].urls,
          type:this.lis[eIndex].type
      }
      this.$emit("indexs",eObj);
    }
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.fn();
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.multigood-bar {
  width: 95%;
  margin: 0 auto;
  ul {
    width: 100%;
    display: flex;
    background-color: white;
    li {
      width: 25%;
      height: 5rem;
      text-align: center;

      p:first-child {
        font-size: 1.6rem;
        font-weight: 700;
      }
      p:last-child {
        width: 65%;
        margin: 0.5rem auto;
        border-radius: 1rem;
        color: black;
      }
    }
    .lastP {
      p:last-child {
        background: orangered;
        color: white;
      }
    }
  }
}
</style>