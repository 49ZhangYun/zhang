<!--  -->
<template>
  <div class="categorypage">
    <div class="categorypage-top">
      <div class="categorypage-tops-le">
        <i class="iconfont icon-jiantou3" @click="tuichu"></i>
        <input type="text" />
        <i class="iconfont icon-sousuo2"></i>
      </div>
      <i class="iconfont icon-leimupinleifenleileibie i3" @click="tabstyle"></i>
    </div>
    <div class="categorypage-nav">
      <ul>
        <li :class="liones ? 'lis' : ''" @click="lione">
          综合<i
            :class="
              liones
                ? 'iconfont icon-jiantou'
                : 'iconfont icon-jiantou-copy-copy'
            "
          ></i>
        </li>
        <!-- icon-jiantou-copy-copy向下  icon-jiantou向上-->
        <li :class="litwos ? 'lis' : ''" @click="litwo">新品</li>
        <li :class="litreens ? 'lis' : ''" @click="litreen">销售</li>
        <li :class="lifours ? 'lis' : ''" @click="lifour">
          价格<i
            :class="
              topbot
                ? 'iconfont icon-jiantou'
                : 'iconfont icon-jiantou-copy-copy'
            "
          ></i>
        </li>
        <li @click="lifive">筛选</li>
      </ul>
    </div>
    <div
      :class="masclass ? 'categorypage-center' : 'categorypage-centerB'"
      ref="shopdiv"
    >
      <ul>
        <li v-for="(list, index) in actChangeCategorypage" :key="index">
          <router-link :to="'/dateils/' + list.goods_id" tag="div">
            <div class="B-left">
              <img :src="list.goods_thumb" alt="" />
            </div>
            <div class="B-right">
              <p class="text-xiang">
                {{ list.goods_name }}
              </p>
              <p class="text-price">
                <span>￥</span>
                <b>{{ list.shop_price }}</b>
              </p>
              <p class="text-details">
                <span class="spana">进店</span>
                <span class="spanb">{{ list.sale }}人以购买</span>
                <i class="iconfont icon-gouwuche1"></i>
              </p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <transition>
      <div class="filtrate" v-show="lifives">
        <div class="self-support">
          <span>自营产品</span>
          <mt-switch></mt-switch>
        </div>
        <div class="option">
          <p :class="optiontopp ? 'btnb' : ''" @click="optiontop">
            仅看有货<img
              src="../../../assets/inages/xiazai.png"
              alt=""
              v-show="optiontopp"
            />
          </p>
          <p :class="optionbotp ? 'btnb' : ''" @click="optionbot">
            促销<img
              src="../../../assets/inages/xiazai.png"
              alt=""
              v-show="optionbotp"
            />
          </p>
        </div>
        <div class="price">
          <p>价格区间</p>
          <div>
            <input type="number" placeholder="最低价" v-model="params.min" />
            <input type="number" placeholder="最高价" v-model="params.max" />
          </div>
        </div>
        <div class="brand">
          <span>品牌</span>
          <div>
            <span v-show="brandnames">{{ strvalue }}</span>
            <i class="iconfont icon-jiantou1" @click="selectedbrandShow"></i>
          </div>
        </div>
        <div class="buttonbox">
          <button class="btn1" @click="filtrate">关闭</button>
          <button class="btn2" @click="filtrateget">确定</button>
        </div>
      </div>
    </transition>
    <transition>
      <div class="selected-brand" v-show="selectedbrands">
        <div class="selected">已选品牌:{{ strvalue }}</div>
        <mt-checklist
          v-model="value"
          :options="options"
          @change="checkon"
        ></mt-checklist>
        <div class="buttonbox">
          <button class="btn1" @click="selectedbrandHide">取消</button>
          <button class="btn2" @click="brandname">确定</button>
        </div>
      </div>
    </transition>
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
      strvalue: null,
      value: [],
      options: [
        {
          label: "乐力",
          values: "乐力",
        },
        {
          label: "BH(必艾奇)",
          values: "BH(必艾奇)",
        },
        {
          label: "斯伯丁",
          values: "斯伯丁",
        },
        {
          label: "鸿星尔克",
          values: "鸿星尔克",
        },
        {
          label: "美的",
          values: "美的",
        },
      ],
      masclass: true,
      liones: true,
      litwos: false,
      litreens: false,
      lifours: false,
      url: "/catalog/goodslist",
      params: {
        cat_id: 1136,
        warehouse_id: 0,
        area_id: 0,
        min: "",
        max: "",
        filter_attr: "",
        ext: "",
        goods_num: 0,
        size: 10,
        page: 1,
        sort: "goods_id",
        self: 0,
        intro: "",
        order: "asc",
      },
      type: "post",
      optiontopp: false,
      optionbotp: false,
      selectedbrands: false,
      lifives: false,
      brandnames: false,
      topbot: true,
    };
  },
  //监听属性 类似于data概念
  computed: {
    actChangeCategorypage() {
      return this.$store.state.CategorypageArr;
    },
    actChangeFamousBrand() {
      return this.$store.state.famousBrandArr;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getpage() {
      this.params.cat_id = this.$route.params.cid;
      let obj = {
        url: this.url,
        params: this.params,
        type: this.type,
      };
      this.$store.dispatch("actChangeCategorypage", obj);
    },
    tabstyle() {
      this.masclass = !this.masclass;
    },
    lione() {
      this.$store.state.CategorypageArr=[],
      this.params.page = 1;
      this.params.sort = "goods_id";
      this.liones = true;
      this.litwos = false;
      this.litreens = false;
      this.lifours = false;
      this.lifives = false;
      this.getpage();
    },
    litwo() {
      //last_update
      this.$store.state.CategorypageArr=[],
      this.params.page = 1;
      this.params.sort = "last_update";
      this.liones = false;
      this.litwos = true;
      this.litreens = false;
      this.lifours = false;
      this.lifives = false;
      this.getpage();
    },
    litreen() {
      //sales_volume
      this.$store.state.CategorypageArr=[],
      this.params.page = 1;
      this.params.sort = "sales_volume";
      this.liones = false;
      this.litwos = false;
      this.litreens = true;
      this.lifours = false;
      this.lifives = false;
      this.getpage();
    },
    lifour() {
      //shop_price
      this.$store.state.CategorypageArr=[],
      this.params.page = 1;
      this.params.sort = "shop_price";
      this.liones = false;
      this.litwos = false;
      this.litreens = false;
      this.lifours = true;
      this.lifives = false;
      this.topbot = !this.topbot;
      if (this.topbot) {
        this.params.order = "asc";
      } else {
        this.params.order = "desc";
      }
      this.getpage();
    },
    lifive() {
      //筛选显示
      this.lifives = true;
    },
    filtrate() {
      //筛选影藏
      this.lifives = false;
    },
    filtrateget() {
      //筛选影藏加传值
      if (this.optiontopp) {
        this.params.goods_num = 1;
      } else {
        this.params.goods_num = 0;
      }
      if (this.optionbotp) {
        this.params.intro = "promote";
      } else {
        this.params.intro = "";
      }
      this.filtrate();
      this.getpage();
    },
    inscroll() {
      console.log(1);
    },
    tuichu() {
      //后退
      history.back();
    },
    optionbot() {
      //促销盒子选中 样式更改
      this.optionbotp = !this.optionbotp;
    },
    optiontop() {
      //促销盒子选中 样式更改
      this.optiontopp = !this.optiontopp;
    },
    checkon() {
      //品牌选中 内容更改
      this.strvalue = this.value.join(",");
    },
    selectedbrandHide() {
      //品牌出现
      this.selectedbrands = false;
    },
    selectedbrandShow() {
      //品牌 退出隐藏
      this.selectedbrands = true;
    },
    brandname() {
      //品牌选中 退出隐藏
      this.brandnames = true;
      this.selectedbrandHide();
    },
    onscroll() {
      let offsetHeight = this.$refs.shopdiv.offsetHeight;
      let woffsetHeight = window.screen.height;
      let offsetTop = this.$refs.shopdiv.offsetTop;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop; // 滚动条偏移量
      let a = offsetHeight - woffsetHeight + offsetTop + 10
      if (scrollTop == a) {
        this.params.page += 1;
        this.getpage();
      }
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getpage();
    window.addEventListener("scroll", this.onscroll);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {
     window.removeEventListener("scroll", this.onscroll);
  }, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translateX(200px);
}
.v-enter-active,
.v-leave-active {
  transition: all 1s ease;
}
.categorypage-top {
  width: 100%;
  height: 4.5rem;
  border-bottom: 1px solid rgb(223, 219, 219);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  background-color: white;
  z-index: 99;
  .categorypage-tops-le {
    width: 90%;
    position: fixed;
    top: 1rem;
    left: 0;
    height: 3.5rem;
    z-index: 100;
    display: flex;
    .icon-jiantou3 {
      width: 10%;
      height: 2rem;
      line-height: 2rem;
      text-align: center;
    }
    input {
      width: 90%;
      border: 1px solid #999;
      height: 2rem;
      border-radius: 1rem;
      text-indent: 1em;
    }
    .icon-sousuo2 {
      position: absolute;
      top: 0.3rem;
      right: 0.6rem;
    }
  }
  .i3 {
    width: 10%;
    position: absolute;
    top: 1rem;
    right: 0;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    font-size: 2 rem;
  }
}
.categorypage-nav {
  width: 100%;
  height: 4rem;
  margin-top: 4.5rem;
  background-color: white;
  ul {
    width: 100%;
    display: flex;
    li {
      width: 20%;
      height: 4rem;
      line-height: 4rem;
      text-align: center;
    }
    .lis {
      color: red;
    }
  }
}
.categorypage-center {
  width: 95%;
  margin: 1rem auto;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 48%;
      height: 27rem;
      background-color: white;
      position: relative;
      margin-bottom: 1rem;
      img {
        width: 100%;
        margin-bottom: 0.5rem;
      }
      .text-xiang {
        width: 95%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        padding-left: 0.8rem;
        height: 3.2rem;
      }
      .text-price {
        color: red;
        margin: 0.5rem 0;
        padding-left: 0.8rem;
        b {
          font-size: 1.6rem;
        }
      }
      .text-details {
        padding-left: 0.8rem;
        .spana {
          background-color: rgb(250, 197, 197);
          color: red;
          padding: 0.1rem;
        }
        .spanb {
          color: rgb(161, 159, 159);
          margin-left: 1rem;
        }
        i {
          position: absolute;
          right: 0.5rem;
          color: red;
        }
      }
    }
  }
}
.categorypage-centerB {
  width: 95%;
  margin: 1rem auto;
  ul {
    width: 100%;
    li {
      width: 100%;
      display: flex;
      margin-bottom: 1rem;
      background-color: white;
      height: 10rem;
      .B-left {
        width: 25%;
        img {
          width: 100%;
          margin: 0.5rem 0 0 0.5rem;
        }
      }
      .B-right {
        width: 75%;
        padding: 0.5rem;
        .text-xiang {
          width: 95%;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          padding-left: 0.8rem;
          height: 3.2rem;
        }
        .text-price {
          color: red;
          margin: 0.5rem 0;
          padding-left: 0.8rem;
          b {
            font-size: 1.6rem;
          }
        }
        .text-details {
          margin-top: 1rem;
          padding-left: 0.8rem;
          .spana {
            background-color: rgb(250, 197, 197);
            color: red;
            padding: 0.1rem;
          }
          .spanb {
            color: rgb(161, 159, 159);
            margin-left: 1rem;
          }
          i {
            position: absolute;
            right: 3rem;
            color: red;
          }
        }
      }
    }
  }
}
.filtrate {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 99;
  height: 100%;
  background-color: rgb(240, 240, 240);
  .self-support {
    display: flex;
    height: 5rem;
    background-color: white;
    line-height: 5rem;
    span {
      font-size: 1.8rem;
      margin-left: 1rem;
    }
    .mint-switch {
      position: absolute;
      right: 1rem;
      top: 1rem;
    }
  }
  .option {
    display: flex;
    height: 5rem;
    background-color: white;
    margin-top: 1.5rem;
    p {
      width: 10rem;
      height: 2.5rem;
      position: relative;
      background-color: rgb(236, 233, 233);
      text-align: center;
      line-height: 2.5rem;
      margin: 1rem 0 0 2rem;
      color: rgb(135, 134, 134);
      img {
        width: 1.5rem;
        height: 1.5rem;
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
    .btnb {
      border: 1px solid red;
      color: red;
    }
  }
  .price {
    width: 100%;
    height: 10rem;
    background-color: white;
    margin-top: 1.5rem;
    p {
      font-size: 1.8rem;
      margin-left: 1rem;
      height: 4rem;
      line-height: 4rem;
      border-bottom: 1px solid rgb(212, 211, 211);
    }
    div {
      width: 100%;
      input {
        background-color: rgb(238, 233, 233);
        width: 13rem;
        height: 3rem;
        text-align: center;
        margin: 1.5rem 0 0 1.5rem;
      }
    }
  }
  .brand {
    height: 5rem;
    background-color: white;
    line-height: 5rem;
    margin-top: 1.5rem;
    position: relative;
    span {
      font-size: 1.8rem;
    }
    div {
      position: absolute;
      top: 0;
      right: 1rem;
      span {
        font-size: 1.2rem;
      }
      .icon-jiantou1 {
        font-size: 2.6rem;
      }
    }
  }
  .buttonbox {
    width: 100%;
    height: 6rem;
    position: absolute;
    bottom: 0;
    button {
      width: 50%;
      height: 6rem;
      font-size: 1.6rem;
    }
    .btn1 {
      background-color: white;
    }
    .btn2 {
      background-color: red;
      color: white;
    }
  }
}
.selected-brand {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  height: 100%;
  background-color: rgb(240, 238, 238);
  .selected {
    width: 100%;
    height: 4rem;
    font-size: 1.6rem;
    line-height: 4rem;
    background-color: white;
    text-indent: 2rem;
  }
  .buttonbox {
    width: 100%;
    height: 6rem;
    position: absolute;
    bottom: 0;
    button {
      width: 50%;
      height: 6rem;
      font-size: 1.6rem;
    }
    .btn1 {
      background-color: white;
    }
    .btn2 {
      background-color: red;
      color: white;
    }
  }
}
</style>
