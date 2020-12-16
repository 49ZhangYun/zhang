<!-- 首页新闻模块 -->
<template>
  <div class="goodsmore">
    <div class="goodsmorediv">
      <img
        src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978466633.png"
        alt=""
      />
      <div class="goodsmore-new">
        <ul ref="news" class="new-ul" :class="{ tran: flag }">
          <li v-for="(item, index) in arr" :key="index">{{ item.title }}</li>
        </ul>
      </div>
      <i class="iconfont icon-jiantou1"></i>
    </div>
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
      arr: [{ title: "新闻一" }, { title: "新闻二" }, { title: "新闻三" }],
      timefn: null,
      flag: false,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    NewTimefn() {
      let oUl = this.$refs.news;
      oUl.style.top = "-4rem";
      this.flag = !this.flag;
      setTimeout(() => {
        this.arr.push(this.arr[0]);
        this.arr.shift(this.arr[0]);
        this.flag = !this.flag;
        oUl.style.top = "0";
      }, 500);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.timefn = setInterval(() => {
      this.NewTimefn();
    }, 2000);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {
    clearInterval(this.timefn);
  }, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.goodsmore {
    width: 95%;
    height: 5rem;
    margin: -1rem auto;
  background-color: white;
  border-bottom-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
  .goodsmorediv {
    height: 4rem;
    width: 90%;
    display: flex;
    margin: 0 auto;
    img {
      width: 25%;
    }
    .goodsmore-new {
      width: 70%;
      position: relative;
      overflow: hidden;
      .tran {
        transition: all 0.5s linear;
      }
      .new-ul {
        height: 4rem;
        position: absolute;
        top: 0;
        li {
          width: 100%;
          height: 4rem;
          line-height: 4rem;
          padding-left: 2rem;
          font-size: 1.4rem;
        }
      }
    }
    i {
      display: block;
      border: 1px solid red;
      width: 5%;
      height: 1.68rem;
      border-radius: 50%;
      text-align: center;
      font-size: 1.7rem;
      color: red;
      margin-top: 1rem;
    }
  }
}
</style>