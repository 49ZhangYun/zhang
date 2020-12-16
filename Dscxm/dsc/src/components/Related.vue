<!-- 猜你喜欢 -->
<template>
  <div class="related">
    <p class="related-title">
      <span>——————</span> 猜你喜欢 <span>——————</span>
    </p>
    <ul>
      <li v-for="item in relatedDatas" :key="item.goods_id">
        <router-link :to="'/dateils/' + item.goods_id" tag="div">
          <img :src="item.goods_thumb" alt="" />
          <p class="lis-text">{{ item.goods_name }}</p>
          <p class="lis-price">
            ￥<span>{{ item.shop_price }}</span>
          </p>
        </router-link>
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
      url: "/goods/goodsguess",
      params: {
        page: 1,
        size: 10,
      },
      type: "post",
    };
  },
  //监听属性 类似于data概念
  computed: {
    relatedDatas() {
      return this.$store.state.relatedData;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    let obj = {
      url: this.url,
      params: {
        page: this.params.page,
        size: this.params.size,
      },
      type: this.type,
    };
    this.$store.dispatch("actchengeRelatedData", obj);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.related {
  width: 100%;
  margin-bottom: 5rem;
  .related-title {
    width: 100%;
    text-align: center;
    height: 5rem;
    line-height: 5rem;
    color: #999;
    font-size: 1.4rem;
    span {
      color: rgb(209, 209, 209);
    }
  }
  ul {
    width: 96%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 49%;
      background-color: white;
      margin-bottom: 1rem;
      img {
        width: 100%;
      }
      .lis-text {
        height: 3rem;
        padding: 0.5rem 1rem;
        font-size: 1.4rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .lis-price {
        margin: 1rem 0;
        text-align: center;
        font-size: 1.2rem;
        color: red;
        font-weight: 700;
        span {
          font-size: 1.6rem;
        }
      }
    }
  }
}
</style>