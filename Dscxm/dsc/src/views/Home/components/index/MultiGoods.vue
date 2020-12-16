<!-- 底部更多商品页 -->
<template>
  <div class="multigoods">
    <div class="multigoods-lists">
      <ul class="ul-one" v-if="flag">
        <li v-for="(resdatas,index) in resdata" :key="index">
          <router-link :to="'/dateils/' + resdatas.goods_id" tag="div">
          <img :src="resdatas.goods_img" alt="" />
          <p class="fristP">{{ resdatas.title }}</p>
          <p>
            <span>￥</span>
            <span class="span2">{{ resdatas.shop_price }}</span>
          </p>
          </router-link>
        </li>
      </ul>
      <ul class="ul-tow" v-else >
       <li v-for="(resdatas,index) in resdata" :key="index">
         <router-link :to="'/dateils/' + resdatas.goods_id" tag="div">
          <img :src="resdatas.img" alt="" />
          <p class="fristP">{{ resdatas.goods_name }}</p>
          <div class="ul-tow-bot">
            <div class="left">
              <img :src="resdatas.user_picture" alt="" />
              <span>{{ resdatas.user_name }}</span>
            </div>
            <div class="right">
              <i class="iconfont icon-danxuankuangxuanzhong"></i>
              <span>{{ resdatas.dis_browse_num}}</span>
            </div>
          </div>
        </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
  name: "page-navbar",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    resdata: Array,
    datas: Number,
  },
  data() {
    //这里存放数据
    return {
      flag: true,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    datas: function () {
      if (this.datas == 1) {
        this.flag = false;
        console.log(this.resdata);
      } else {
        this.flag = true;
      }
    },
  },
  //方法集合
  methods: {},
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.multigoods {
  width: 95%;
  height: 50rem;
  margin: 0 auto;
  .multigoods-lists {
    width: 100%;
    margin: 0 auto;
    .ul-one {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li {
        width: 46%;
        background-color: white;
        margin-top: 1rem;
        padding: 0.5rem;
        img {
          width: 100%;
        }
        .fristP {
          margin: 1rem 0;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
          text-align: left;
        }
        p:last-child {
          margin: 1rem 0;
          color: red;
          text-align: left;
          .span2 {
            font-size: 1.6rem;
          }
        }
      }
    }
    .ul-tow {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li {
        width: 46%;
        height: 26.5rem;
        background-color: white;
        margin-top: 1rem;
        padding: 0.5rem;
        img {
          width: 100%;
          height: 48.46vw;
        }
        .fristP {
          margin: 1rem 0;
          text-overflow: -o-ellipsis-lastline;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          line-clamp: 2;
          -webkit-box-orient: vertical;
          text-align: left;
        }
        .ul-tow-bot {
          display: flex;
          width: 100%;
          justify-content: space-between;
          .left,
          .right {
            height: 3rem;
            display: flex;
          }
          .left {
            width: 55%;
            line-height: 2.5rem;
            img {
              width: 2.5rem;
              height: 2.5rem;
              border-radius: 50%;
            }
            span {
              margin-left: 0.5rem;
              font-size: 0.8rem;
            }
          }
          .right {
            width: 45%;
            line-height: 2.5rem;
            justify-content: center;
            i {
              color: #999;
              margin-right: 1rem;
            }
            span {
              color: #999;
            }
          }
        }
      }
    }
  }
}
</style>