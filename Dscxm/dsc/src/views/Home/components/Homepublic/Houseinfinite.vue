<!--  -->
<template>
  <div class="houseinfinite">
    <ul>
      <li v-for="(list, index) in datas" :key="index">
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
</template>
<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import debounce from "lodash.debounce"
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    num: Number,
  },
  data() {
    //这里存放数据
    return {
      url: "/catalog/goodslist",
      params: {
        cat_id: this.num,
        brand: "",
        warehouse_id: 0,
        area_id: 0,
        min: "",
        max: "",
        filter_attr: "",
        ext: "",
        goods_num: "",
        size: 10,
        page: 1,
        sort: "goods_id",
        order: "desc",
        self: 0,
      },
      type: "post",
    };
  },
  //监听属性 类似于data概念
  computed: {
    datas() {
      return this.$store.state.houseinfiniteDatas;
    },
  },
  //监控data中的数据变化
  watch: {
    num:function(a,b){
      console.log(a,b);
    }
  },
  //方法集合
  methods: {
    getdatas() {
      let obj = {
        url: this.url,
        params: {
          cat_id: this.params.cat_id,
          brand: this.params.brand,
          warehouse_id: this.params.warehouse_id,
          area_id: this.params.area_id,
          min: this.params.min,
          max: this.params.max,
          filter_attr: this.params.filter_attr,
          ext: this.params.ext,
          goods_num: this.params.goods_num,
          size: this.params.size,
          page: this.params.page,
          sort: this.params.sort,
          order: this.params.order,
          self: this.params.self,
        },
        type: this.type,
      };
      this.$store.dispatch("actchengeHouseinfiniteDatas", obj);
    },
    Hfscroll:debounce(function(){
      this.$nextTick(() => {
        let ofHeight = document.querySelectorAll(".houseinfinite")[0].offsetHeight;
        let top = window.screen.height
        let scrollTop = window.pageYOffset
        if(ofHeight-top<=scrollTop){
            this.params.page+=1
            this.getdatas();
        }
      });
    },500),
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getdatas();
    window.addEventListener("scroll", this.Hfscroll);
  },
  beforeUpdate() {
  }, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {
    window.removeEventListener("scroll", this.Hfscroll);
    this.$store.state.houseinfiniteDatas=[]
  }, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.houseinfinite {
  width: 95%;
  margin: 0 auto ;
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
</style>