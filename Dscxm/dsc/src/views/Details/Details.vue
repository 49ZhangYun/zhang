<!-- 商品详情页 -->
<template>
  <div class="details-page">
    <div
      ref="header"
      :class="
        !headerdatas ? 'details-header' : 'details-header details-header-bgc'
      "
    >
      <div class="icon" @click="outpre">
        <i
          :class="
            !headerdatas
              ? 'iconfont icon-jiantou3 i-bgc'
              : 'iconfont icon-jiantou3'
          "
        ></i>
      </div>
      <ul v-show="headerdatas">
        <li
          v-for="(items, index) in headerarr"
          :key="index"
          @click="lisindex(index)"
          :class="{ lis: flags == index }"
        >
          {{ items }}
        </li>
      </ul>
      <div class="icon">
        <i
          :class="
            !headerdatas
              ? 'iconfont icon-fenxiang i-bgc'
              : 'iconfont icon-fenxiang'
          "
          @click="fenxiang"
        ></i>
      </div>
    </div>
    <div class="details-seiper">
      <mt-swipe :auto="3000">
        <mt-swipe-item
          v-for="imgs in getdatecil.gallery_list"
          :key="imgs.img_id"
        >
          <img :src="imgs.img_url" alt="" />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="details-text">
      <div class="commodityprices">
        <p>
          ￥<span class="spone">{{ getdatecil.shop_price }}</span>
          <span class="sptwo">{{ getdatecil.market_price }}</span>
        </p>
      </div>
      <div class="productsintroduction">
        {{ getdatecil.goods_name }}
      </div>
      <div class="inventory">
        <p>累计销售{{ getdatecil.sales_volume }}</p>
        <p>库存{{ getdatecil.goods_number }}</p>
        <p>
          {{ getdatecil2.province_name }}
          {{ getdatecil2.city_name }}
        </p>
      </div>
      <div></div>
    </div>
    <div class="details-sundry">
      <div class="sundry-serve">
        <p>
          赠送积分：<span>{{ getdatecil.use_give_integral }}积分</span>
        </p>
        <p>服务<span> 正品保证 七天无理由退换 闪速配送 </span></p>
      </div>
      <div class="sundry-site">
        <p @click="sitehide">
          送至：
          <span v-if="address">请选择</span>
          <span v-else>{{ sitedatas }}</span>
          <i class="iconfont icon-jiantou2"></i>
        </p>
        <p>
          运费：<span>{{ getdatecil.formated_goods_rate }}</span>
        </p>
      </div>
      <div class="sundry-num">
        <p @click="joincar">
          已选：<span>{{ carnum }}个</span
          ><i class="iconfont icon-jiantou2"></i>
        </p>
      </div>
      <div class="sundry-comment">
        <p>网友讨论圈<i class="iconfont icon-jiantou2"></i></p>
      </div>
    </div>
    <div
      class="mask"
      v-show="mask"
      @click.prevent="joinshow"
      @touchmove.prevent
      @mousewheel.prevent
    ></div>
    <div class="joincars" @touchmove.prevent @mousewheel.prevent>
      <transition>
        <div class="join" v-show="joins">
          <div class="join-top">
            <img :src="getdatecil.goods_thumb" alt="" />
            <div class="shoptext">
              <p>{{ getdatecil.goods_name }}</p>
              <p>{{ getdatecil.shop_price }}</p>
              <p>库存：{{ getdatecil.goods_number }}</p>
            </div>
          </div>
          <div class="join-out" @click="joinshowt">
            <i class="iconfont icon-chahao"></i>
          </div>
          <div class="join-num">
            <p>数量</p>
            <div class="numadd">
              <button @click="minus">-</button>
              <input type="text" v-model="carnum" />
              <button @click="add">+</button>
            </div>
          </div>
          <div class="join-btn">
            <button>立即购买</button>
            <button @click="addcar">加入购物车</button>
          </div>
        </div>
      </transition>
    </div>
    <div
      class="details-site"
      v-show="site"
      @touchmove.prevent
      @mousewheel.prevent
    >
      <mt-picker
        :slots="slots"
        :visibleItemCount="visibleItemCount"
        @change="onValuesChange"
      ></mt-picker>
      <div class="join-out" @click="siteshowt">
        <i class="iconfont icon-chahao"></i>
      </div>
      <div class="details-site-btn">
        <button @click="sitecancel">取消</button>
        <button @click="siteensure">确定</button>
      </div>
    </div>
    <div class="details-tab" id="details-tab">
      <mt-navbar v-model="selected">
        <mt-tab-item id="tab1">商品详情</mt-tab-item>
        <mt-tab-item id="tab2">规格参数</mt-tab-item>
      </mt-navbar>
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="tab1">
          <div class="tab1" v-html="getdatecil.desc_mobile"></div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab2">
          <div class="tab2">
            <table>
              <tr>
                <td>商品编号</td>
                <td>{{ getdatecil.goods_sn }}</td>
              </tr>
              <tr>
                <td colspan="2" style="text-align: left; text-indent: 3.5rem">
                  主体
                </td>
              </tr>
              <tr>
                <td>品牌</td>
                <td>{{ getdatecil.get_brand }}</td>
              </tr>
              <tr>
                <td>商品重量</td>
                <td>{{ getdatecil.goods_weight }}</td>
              </tr>
              <tr>
                <td>上架时间</td>
                <td>{{ getdatecil.add_time_format }}</td>
              </tr>
              <tr>
                <td colspan="2" style="text-align: left; text-indent: 2rem">
                  产品规格
                </td>
              </tr>
              <tr
                v-for="(trs, index) in getdatecil.attr_parameter"
                :key="index"
              >
                <td>{{ trs.attr_name }}</td>
                <td>{{ trs.attr_value }}</td>
              </tr>
            </table>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <div class="details-footer">
      <ul class="oul">
        <router-link to="" tag="li">
          <span class="iconfont icon-kefu1"></span>
          <p>客服</p>
        </router-link>
        <router-link to="" tag="li">
          <span class="iconfont icon-shoucang1"></span>
          <p>收藏</p>
        </router-link>
        <router-link to="/cart" tag="li">
          <span class="iconfont icon-gouwuche1"></span>
          <p>购物车</p>
          <em>{{ shopnum }}</em>
          <span :class="{ 'add-num': addTF }" v-if="addTF">+{{ carnum }}</span>
        </router-link>
      </ul>
      <div class="details-footer-btn">
        <button @click="addcar">加入购买车</button>
        <button>立即购买</button>
      </div>
    </div>
    <div class="details-share" v-if="detailsshareSH">
      <div class="iweixin" v-if="iweixinHs" @click="maskSh">
        <i class="iconfont icon-weixin"></i>
        <p>发送给好友</p>
      </div>
      <div class="ihaibao" @click="msakpostershow">
        <i class="iconfont icon-haibaofenxiang"></i>
        <p>生成海报</p>
      </div>
    </div>
    <Sharemask :showshareinfo="showshareinfo" />
    <Poster :postershows="postershows" @poeters="poeters" />
    <Related />
  </div>
</template>
<style lang="less">
</style>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import { actchengeDetailsimg } from "../../store/actions";
import cityjson from "../../assets/json/city.json";
import Related from "@/components/Related";
import debounce from "lodash.debounce";
import { isWinxin } from "../../utlis/index";
import Sharemask from "./commponents/Sharemask";
import Poster from "./commponents/Poster";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Related,
    Sharemask,
    Poster,
  },
  data() {
    //这里存放数据
    return {
      detailsshareSH: false,
      showshareinfo: false,
      iweixinHs: isWinxin(),
      headerarr: ["商品", "详情", "评论"],
      flags: 0,
      headerdatas: false,
      joins: false,
      mask: false,
      site: false,
      address: true,
      sitedatas: "",
      carnum: 1,
      selected: "tab1",
      visibleItemCount: 5,
      slots: [
        {
          flex: 1,
          values: Object.keys(cityjson),
          className: "slot1",
          textAlign: "center",
        },
        {
          divider: true,
          content: "-",
          className: "slot2",
        },
        {
          flex: 1,
          values: ["北京"],
          className: "slot3",
          textAlign: "center",
        },
        {
          divider: true,
          content: "-",
          className: "slot4",
        },
        {
          flex: 1,
          values: [
            "东城区",
            "西城区",
            "崇文区",
            "宣武区",
            "朝阳区",
            "丰台区",
            "石景山区",
            "海淀区",
            "门头沟区",
            "房山区",
            "通州区",
            "顺义区",
            "昌平区",
            "大兴区",
            "平谷区",
            "怀柔区",
            "密云县",
            "延庆县",
            "其他",
          ],
          className: "slot5",
          textAlign: "center",
        },
      ],
      carID: [],
      postershows: false,
      addTF: false,
    };
  },
  //监听属性 类似于data概念
  computed: {
    getdatecil() {
      return this.$store.state.detaimgdata;
    },
    getdatecil2() {
      return this.$store.state.detaimgdata2;
    },
    shopnum() {
      let count = 0;
      this.$store.state.cartsData.map((items) => {
        items.child.map((a) => {
          count += a.value;
        });
      });
      return count;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    lisindex(index) {
      this.flags = index;
      this.$nextTick(() => {
        if (index == 1) {
          let top =
            document.querySelector("#details-tab").offsetTop -
            window.scrollY -
            this.$refs.header.offsetHeight;
          //scrollY == pageYoffset
          window.scrollBy({ top: top, left: 0, behavior: "smooth" });
        } else if (index == 0) {
          let top = window.scrollY;
          console.log(top);
          window.scrollBy({ top: -top, left: 0, behavior: "smooth" });
        }
      });
    },
    outprevious() {
      history.back();
    },
    joincar() {
      this.joins = true;
      this.mask = true;
    },
    joinshow() {
      //加入购物车消失
      this.joins = false;
      this.mask = false;
      this.site = false;
      this.postershows = false;
    },
    joinshowt() {
      //加入购物车消失
      this.joinshow();
    },
    sitehide() {
      this.site = true;
      this.mask = true;
    },
    siteshowt() {
      this.joinshow();
    },
    minus() {
      //商品数量减
      if (this.carnum != 1) {
        this.carnum--;
      }
    },
    add() {
      this.carnum++;
    },
    onValuesChange(picker, values) {
      picker.setSlotValues(1, Object.keys(cityjson[values[0]]));
      picker.setSlotValues(2, cityjson[values[0]][values[1]]);
      this.sitedatas = values.join("-");
    },
    sitecancel() {
      if (this.address) {
        this.address = true;
      } else {
        this.address = false;
      }
      this.joinshow();
    },
    siteensure() {
      this.address = false;
      this.joinshow();
    },
    onscroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop; // 滚动条偏移量
      if (scrollTop >= 100) {
        this.headerdatas = true;
      } else {
        this.headerdatas = false;
      }
    },
    outpre() {
      history.back();
    },
    addcar() {
      this.joins = false;
      this.mask = false;
      this.addTF = true;
      setTimeout(() => {
        this.addTF = false;
      }, 1000);
      let detaimgdatas = this.$store.state.detaimgdata;
      let detaimgdata2 = this.$store.state.detaimgdata2;
      //第一部判断  判断商铺名是否一致
      let isTrue = this.$store.state.cartsData.find((item) => {
        return item.shopId == detaimgdata2.id;
      });
      var addsortchildData = {
        id: detaimgdata2.id,
        goods_id: detaimgdatas.goods_id,
        goods_name: detaimgdatas.goods_name,
        shop_price: detaimgdatas.shop_price,
        market_price: detaimgdatas.market_price,
        goods_thumb: detaimgdatas.goods_thumb,
        value: this.carnum,
        isSelect: true,
      };
      if (!isTrue) {
        var addsortData = {
          shopId: detaimgdata2.id,
          shop_name: detaimgdata2.shop_name,
          isshopSelect: true,
          child: [],
        };
        addsortData.child.push(addsortchildData);
      } else {
          let isChildTrue = isTrue.child.some((item) => {
            if (item.goods_id == detaimgdatas.goods_id) {
              item.value += this.carnum;
            }
            return item.goods_id == detaimgdatas.goods_id;
          });
          if(!isChildTrue){
            isTrue.child.push(addsortchildData);
          }
      }
      this.$store.commit("setcartsData", addsortData);
    },
    scrollPage: debounce(function () {
      //防抖模块
      const tabTop = document.querySelector("#details-tab").offsetTop;
      const scrTop = window.scrollY + 43;
      if (tabTop > scrTop) {
        this.flags = 0;
      } else {
        this.flags = 1;
      }
    }),
    maskSh() {
      this.showshareinfo = !this.showshareinfo;
    },
    fenxiang() {
      this.detailsshareSH = !this.detailsshareSH;
    },
    msakpostershow() {
      this.mask = true;
      this.postershows = true;
    },
    poeters() {
      this.mask = false;
      this.postershows = false;
      this.detailsshareSH = false;
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    let obj = {
      url: "/goods/show",
      params: {
        goods_id: this.$route.params.cid,
        warehouse_id: 0,
        area_id: 0,
        is_delete: 0,
        is_on_sale: 1,
        is_alone_sale: 1,
        parent_id: "",
      },
      type: "post",
    };
    this.$store.dispatch("actchengeDetailsimg", obj);
    window.addEventListener("scroll", this.onscroll);
    this.carID = localStorage.getItem("carID");
    document.addEventListener("scroll", this.scrollPage);
    let scrollTOP = document.documentElement || document.body;
    scrollTOP.scrollTop = 0;
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {
    window.removeEventListener("scroll", this.onscroll);
    document.removeEventListener("scroll", this.scrollPage);
  }, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.details-header {
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 99;
  .icon {
    width: 10%;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    .i-bgc {
      background-color: #999;
      border-radius: 50%;
      padding: 0.3rem;
      color: white;
    }
  }
  ul {
    display: flex;
    width: 60%;
    height: 4rem;
    li {
      width: 33%;
      height: 4rem;
      line-height: 4rem;
      text-align: center;
      font-size: 1.4rem;
    }
    .lis {
      border-bottom: 2px solid red;
    }
  }
}
.details-header-bgc {
  background-color: white;
}
.details-seiper {
  width: 100%;
  height: 38rem;
  .mint-swipe-item {
    width: 100%;
    img {
      width: 100%;
      height: 38rem;
    }
  }
}
.details-text {
  width: 100%;
  background-color: white;
  .commodityprices {
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    p {
      font-size: 1.4rem;
      color: red;
      .spone {
        font-size: 1.8rem;
        margin-right: 1.5rem;
        font-weight: 700;
      }
      .sptwo {
        font-size: 1.6rem;
        color: #999;
        text-decoration: line-through;
      }
    }
  }
  .productsintroduction {
    font-size: 1.6rem;
    margin: 1rem 0;
  }
  .inventory {
    display: flex;
    justify-content: space-between;
    height: 3rem;
    width: 100%;
    line-height: 3rem;
    p {
      color: #999;
      height: 3rem;
      font-size: 1.3rem;
    }
  }
}
.details-sundry {
  width: 100%;
  margin-top: 1rem;
  .sundry-serve {
    width: 100%;
    height: 10rem;
    p {
      width: 100%;
      height: 5rem;
      background-color: white;
      line-height: 5rem;
      text-indent: 2rem;
      font-size: 1.4rem;
      color: #999;
      border-bottom: 1px solid rgb(207, 205, 205);
      span {
        color: black;
      }
    }
  }
  .sundry-site {
    width: 100%;
    margin-top: 1rem;
    p {
      font-size: 1.4rem;
      color: #999;
      width: 100%;
      height: 4rem;
      text-indent: 2rem;
      line-height: 4rem;
      background-color: white;
      i {
        position: absolute;
        right: 2rem;
      }
      span {
        color: black;
      }
    }
  }
  .sundry-num {
    width: 100%;
    p {
      font-size: 1.4rem;
      color: #999;
      width: 100%;
      height: 4rem;
      text-indent: 2rem;
      line-height: 4rem;
      margin-top: 1rem;
      background-color: white;
      span {
        color: black;
      }
      i {
        position: absolute;
        right: 2rem;
      }
    }
  }
  .sundry-comment {
    width: 100%;
    p {
      font-size: 1.4rem;
      color: #999;
      width: 100%;
      height: 4rem;
      text-indent: 2rem;
      line-height: 4rem;
      margin-top: 1rem;
      background-color: white;
      i {
        position: absolute;
        right: 2rem;
      }
    }
  }
}
.mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background-color: rgba(68, 68, 68, 0.7);
  z-index: 100;
}
.joincars {
  .v-enter,
  .v-leave-to {
    opacity: 0;
    transform: translateY(220px);
  }
  .v-enter-active,
  .v-leave-active {
    transition: all 1s ease;
  }
  .join {
    width: 100%;
    height: 22rem;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: white;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    z-index: 101;
    .join-top {
      width: 95%;
      display: flex;
      margin-left: 1rem;
      img {
        width: 9rem;
        height: 9rem;
        margin-top: -1.5rem;
      }
      .shoptext {
        margin: 1rem 0 0 0.5rem;
        p:first-child {
          width: 90%;
          font-size: 1.6rem;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        p:nth-child(2) {
          font-size: 1.8rem;
          color: red;
          margin: 1rem 0 0.5rem;
        }
        p:last-child {
          font-size: 1.2rem;
          color: #999;
        }
      }
    }
    .join-out {
      position: absolute;
      top: 0.2rem;
      right: 0.2rem;
      i {
        font-size: 2rem;
      }
    }
    .join-num {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 2rem;
      p {
        text-indent: 1rem;
        font-size: 1.4rem;
        color: #999;
      }
      .numadd {
        margin-right: 2rem;
        button {
          width: 3rem;
          height: 3rem;
          font-size: 1.8rem;
        }
        input {
          width: 4rem;
          height: 3rem;
          text-align: center;
        }
      }
    }
    .join-btn {
      width: 100%;
      margin-top: 1.5rem;
      button {
        width: 50%;
        height: 5rem;
        color: white;
        font-size: 1.4rem;
      }
      button:first-child {
        background-color: tomato;
      }
      button:last-child {
        background-color: red;
      }
    }
  }
}
.details-footer {
  position: fixed;
  bottom: 0;
  height: 5rem;
  display: flex;
  width: 100%;
  background-color: white;
  .oul {
    display: flex;
    width: 50%;
    li {
      width: 33%;
      padding-top: 0.5rem;
      height: 4.5rem;
      text-align: center;
      position: relative;
      span {
        font-size: 2.2rem;
      }
      p {
        font-size: 1.2rem;
      }
      em {
        display: block;
        position: absolute;
        top: 0rem;
        right: 1.5rem;
        width: 2rem;
        height: 2rem;
        background-color: rgb(243, 33, 33);
        border-radius: 50%;
        line-height: 2rem;
        color: white;
      }
      .add-num {
        position: absolute;
        animation: identifier 1s linear;
        top: 0;
        left: 2rem;
        font-size: 1.4rem;
        color: red;
      }
      @keyframes identifier {
        0% {
          top: 0;
          opacity: 0;
        }
        50% {
          top: -2rem;
          opacity: 1;
        }
        100% {
          top: -2rem;
          opacity: 0;
        }
      }
    }
  }
  .details-footer-btn {
    width: 50%;
    height: 5rem;
    button {
      width: 50%;
      height: 5rem;
    }
    button:first-child {
      color: #fff;
      background-color: #f44;
      border: 1px solid #f44;
    }
    button:last-child {
      color: #fff;
      background-color: #ff976a;
      border: 1px solid #ff976a;
    }
  }
}
.details-tab {
  width: 100%;
  margin: 1rem 0;
  .mint-tab-container {
    .mint-tab-container-item {
      .tab1 {
        img {
          width: 100%;
        }
        .move-remove {
          display: none;
        }
      }
      .tab2 {
        width: 100%;
        table {
          width: 100%;
          background-color: white;
          border-collapse: collapse;
        }
        tr {
          height: 3rem;
        }
        td {
          border: 1px solid #999;
        }
        td:first-child {
          width: 25%;
          text-align: center;
        }
        td:nth-child(2) {
          text-align: left;
          text-indent: 1.5rem;
        }
      }
    }
  }
}
.details-site {
  width: 100%;
  height: 28rem;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: white;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
  z-index: 101;
  .join-out {
    position: absolute;
    top: 1rem;
    right: 1rem;
    i {
      font-size: 2rem;
    }
  }
  .picker {
    margin: 3rem 0;
  }
  .details-site-btn {
    height: 4rem;
    width: 100%;
    button {
      height: 4rem;
      width: 50%;
    }
    button:first-child {
      background-color: #ff976a;
    }
    button:last-child {
      background-color: #f44;
    }
  }
}
.details-share {
  width: 100%;
  display: flex;
  height: 7rem;
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  .iweixin {
    flex: 1;
    text-align: center;
    padding-top: 0.5rem;
    i {
      font-size: 3rem;
      color: #80d640;
    }
    p {
      font-size: 1.4rem;
    }
  }
  .ihaibao {
    flex: 1;
    text-align: center;
    padding-top: 0.5rem;
    i {
      font-size: 3rem;
      color: #80d640;
    }
    p {
      font-size: 1.4rem;
    }
  }
}
</style>