<!-- 购物车组件 -->
<template>
  <div class="cart">
    <div class="cart-hint" v-if="hintSH">
      <img src="@/assets/inages/cart-empty.png" alt="" />
      <p>您的购物车还是空空的，快去逛逛吧！</p>
      <div class="hint-btn">
        <router-link to="/home" tag="button">去逛逛</router-link>
        <router-link to="/home" tag="button">看看关注</router-link>
      </div>
    </div>
    <div class="goodsCart" v-else>
      <div class="goodsCart-top">
        <i class="iconfont icon-dingwei">请选择</i>
        <p>编辑商品</p>
      </div>
      <div class="goodsCart-bank">
        <div class="store" v-for="(item, index) in cargoodsid" :key="index">
          <div class="store-all">
            <div @click="isSelectTfALL(item, index, cargoodsid)">
              <i class="iconfont icon-danxuankuang"></i>
              <i
                class="iconfont icon-danxuankuangxuanzhong"
                v-if="item.isshopSelect"
              ></i>
            </div>
            <p>{{ item.shop_name }}</p>
          </div>
          <div
            class="bank"
            v-for="(items, smindex) in item.child"
            :key="items.goods_id"
          >
            <div class="bank-icon">
              <div @click="isSelectTf(item, index, smindex)">
                <i class="iconfont icon-danxuankuang"></i>
                <i
                  class="iconfont icon-danxuankuangxuanzhong"
                  v-if="items.isSelect"
                ></i>
              </div>
            </div>
            <div class="bank-text">
              <div class="bank-text-left">
                <img :src="items.goods_thumb" alt="" />
              </div>
              <div class="bank-text-right">
                <p class="right-title">{{ items.goods_name }}</p>
                <div class="payfor">
                  <div class="payfor-price">
                    <span>￥{{ items.shop_price }}</span>
                    <span>￥{{ items.market_price }}</span>
                  </div>
                  <div class="payfor-num">
                    <button @click="minusshop(item, index, smindex)">-</button>
                    <input type="text" v-model="items.value" />
                    <button @click="addshop(item, index, smindex)">+</button>
                    <i class="iconfont icon-shoucang1"></i>
                    <i
                      class="iconfont icon-shanchu1"
                      @click="removeshop(item, index, smindex)"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cart-aggregate">
      <div class="aggregate-left" @click="totality">
        <i
          :class="
            !selectAll
              ? 'iconfont icon-danxuankuang'
              : 'iconfont icon-danxuankuangxuanzhong'
          "
          >全选</i
        >
      </div>
      <div class="aggregate-center">
        <p>合计：<span>￥{{totalprices.toFixed(2)}}</span></p>
        <p>（不含运费，以节省￥0.00元）</p>
      </div>
      <div class="aggregate-right">去结算（{{sum}}）</div>
    </div>
    <Related />
    <Footer />
  </div>
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer from "@/components/Footer";
import Related from "@/components/Related";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
    Related,
  },
  data() {
    //这里存放数据
    return {
      isSelectdata: false,
      hintSH: null,
      isAll: this.$store.state.selectAll,
    };
  },
  //监听属性 类似于data概念
  computed: {
    cargoodsid() {
      return this.$store.state.cartsData;
    },
    selectAll() {
      return this.$store.state.selectAll;
    },
    sum(){
      let count = 0
      this.$store.state.cartsData.forEach(element => {
        element.child.map((smsum)=>{
          if(smsum.isSelect){
            count += smsum.value
          }
        })
      });
      return count
    },
    totalprices(){
      let count = 0
      this.$store.state.cartsData.forEach(element => {
        element.child.map((smsum)=>{
          if(smsum.isSelect){
            count += Number(smsum.shop_price)*smsum.value
          }
        })
      });
      return count
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    isSelectTf(items, index, smindex) {
      
      this.$store.commit("selsectAll", { items, index, smindex });
    },
    isSelectTfALL(item, index) {
      this.$store.commit("AllselsectAll", { item, index });
    },
    totality() {
      this.$store.commit("totality");
    },
    addshop(item, index, smindex) {
      this.$store.commit("addshop", { item, index, smindex });
    },
    minusshop(item, index, smindex) {
      this.$store.commit("minusshop", { item, index, smindex });
    },
    removeshop(item, index, smindex) {
      this.$store.commit("removeshop", { item, index, smindex });
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    if (this.cargoodsid.length>=1) {
      this.hintSH = false;
    } else {
      this.hintSH = true;
    }
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.cart-hint {
  width: 95%;
  margin: 1rem;
  background-color: white;
  text-align: center;
  padding-bottom: 4rem;
  img {
    width: 10rem;
    height: 10rem;
    margin-top: 4rem;
  }
  p {
    margin-top: 1.5rem;
    font-size: 1.4rem;
  }
  .hint-btn {
    margin-top: 1.5rem;
    button {
      border: 1px solid rgb(220, 220, 220);
      padding: 0.5rem 1.5rem;
      margin-right: 1rem;
      background-color: white;
    }
  }
}
.goodsCart {
  width: 100%;
  .goodsCart-top {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0.8rem;
    i {
      font-size: 1.4rem;
      color: #666;
    }
    p {
      font-size: 1.4rem;
      color: red;
    }
  }
  .goodsCart-bank {
    width: 100%;
    .store-all {
      width: 100%;
      display: flex;
      height: 3rem;
      div {
        width: 10%;
        position: relative;
        i {
          position: absolute;
          top: 20%;
          left: 20%;
        }
        .icon-danxuankuang {
          color: #999;
        }
        .icon-danxuankuangxuanzhong {
          color: red;
        }
      }
      p {
        line-height: 3rem;
        font-size: 1.4rem;
        font-weight: 700;
      }
    }
    .bank {
      width: 100%;
      display: flex;
      margin: 1rem 0;
      .bank-icon {
        width: 10%;
        position: relative;
        div {
          position: absolute;
          top: 40%;
          left: 20%;
          font-size: 2rem;
          i {
            position: absolute;
          }
          .icon-danxuankuang {
            color: #999;
          }
          .icon-danxuankuangxuanzhong {
            color: red;
          }
        }
      }
      .bank-text {
        width: 88%;
        display: flex;
        padding: 1rem 0;
        background-color: white;
        .bank-text-left {
          width: 20%;
          padding: 0 0.8rem;
          img {
            width: 100%;
          }
        }
        .bank-text-right {
          width: 80%;
          .right-title {
            margin-bottom: 1rem;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .payfor {
            display: flex;
            justify-content: space-between;
            .payfor-price {
              span:first-child {
                color: red;
                font-size: 1.4rem;
              }
              span:last-child {
                color: #999;
                font-size: 0.8rem;
              }
            }
            .payfor-num {
              button {
                width: 2rem;
                height: 2rem;
              }
              input {
                width: 2.5rem;
                height: 2rem;
                text-align: center;
              }
              .icon-shoucang1 {
                margin: 0 0.5rem;
              }
            }
          }
        }
      }
    }
  }
}
.cart-aggregate {
  width: 100%;
  position: fixed;
  background-color: white;
  z-index: 99;
  display: flex;
  bottom: 5rem;
  height: 5rem;
  .aggregate-left {
    width: 20%;
    line-height: 5rem;
    text-align: center;
    .icon-danxuankuang {
      color: #999;
    }
    .icon-danxuankuangxuanzhong {
      color: red;
    }
  }
  .aggregate-center {
    width: 50%;
    text-align: right;
    padding-right: 0.8rem;
    p:first-child {
      height: 3rem;
      font-size: 1.4rem;
      line-height: 3rem;
      span {
        color: red;
      }
    }
    p:last-child {
      color: #999;
    }
  }
  .aggregate-right {
    width: 30%;
    background-color: red;
    line-height: 5rem;
    color: white;
    text-align: center;
    font-size: 1.4rem;
  }
}
</style>