<!-- 海报 -->
<template>
  <div class="poeter"  @touchmove.prevent @mousewheel.prevent v-if="postershows" >
      <div class="poeter-img" @click="poeters">
          <img src="@/assets/inages/poster-close.png" alt="">
      </div>
      <div class="poeter-close">
          <img :src="posterDatas.images" alt="">
      </div>
      <div class="poeter-text">
          <p class="pone"><span>￥{{posterDatas.price}}</span><span>￥{{posterDatas.dprice}}</span></p>
          <p class="ptwo">{{posterDatas.title}}</p>
      </div>
      <div class="poeter-hint">
          长按可保存到手机
      </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props:{
      postershows:Boolean
  },
  data() {
    //这里存放数据
    return {
    };
  },
  //监听属性 类似于data概念
  computed: {
      posterDatas(){
          return this.$store.state.posterDatas
      }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
      poeters(){
          this.$emit("poeters")
      }
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.poeter{
    width: 80%;
    height: 75%;
    position: absolute;
    top: 10%;
    left: 10%;
    z-index: 101;
    background-color: white;
    .poeter-img{
        width: 2.5rem;
        height: 4rem;
        position: absolute;
        top: -4rem;
        right: 0;
        img{
            width: 100%;
        }
    }
    .poeter-close{
        img{
            width:100%;
        }
    }
    .poeter-text{
        p{
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .pone{
            height: 3rem;
            line-height: 3rem;
            margin-left:1rem;
            span:first-child{
                font-size: 2rem;
                color: red;
            }
            span:last-child{
                font-size: 1.6rem;
                color: #999;
                text-decoration: line-through;
            }
        }
        .ptwo{
            margin-left:1rem;
            font-size: 1.4rem;
        }
    }
    .poeter-hint{
        width: 100%;
        height: 3rem;
        position: absolute;
        bottom: -3rem;
        text-align: center;
        line-height: 3rem;
        font-size: 1.6rem;
        color: white;
    }
}
</style>