<!--  -->
<template>
  <div class="seckill">
    <div class="seckill-top">
      <img
        src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978468241.png?imageView2/2/format/webp"
        alt=""
      />
      <p><span>{{lihours | lingtiam}}</span>:<span>{{liminutes | lingtiam}}</span>:<span>{{liseconds | lingtiam}}</span></p>
    </div>
    <div class="seckill-mot">
      <ul>
        <li v-for="(list, index) in listDatas" :key="index" ref="list" @click="changeli(index)" :class="{activeli:flag==index}">
          <p class="timep">{{ list }}:00</p>
          <p class="textp">{{ mas | newmsg(index) }}</p>
        </li>
      </ul>
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
      time: null,
      mas: "抢购中",
      index: "0",
      listDatas: [8, 10, 16, 24],
      flag:0,
      lihours:null,
      liminutes:null,
      liseconds:null
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    seckilltime() {
      this.time = setInterval(() => {
        let newtime = new Date();//现在的时间
        let years = newtime.getFullYear();//现在的年
        let months=newtime.getMonth()+1;//现在的月
        let days =newtime.getDate()//现在的日期
        let customTiem=years+"-"+months+"-"+days+" "+this.listDatas[1]+":00:00"//根据现在时间写的固定时间值
        let oldtime = new Date(customTiem)//固定时间
        let chatime =oldtime-newtime;//时间差
        this.lihours=Math.floor(chatime/1000/60/60);//现在时间离固定时间的小时数
        chatime-=this.lihours*1000*60*60;
        this.liminutes=Math.floor(chatime/1000/60);//现在时间离固定时间的分钟数
        chatime-=this.liminutes*1000*60;
        this.liseconds=Math.floor(chatime/1000);//现在时间离固定时间的秒数
      }, 1000);
    },
    pushLi() {
      let newtime = new Date();//现在的时间
      if (this.listDatas[1] <= newtime.getHours()) {
        this.listDatas.push(this.listDatas[0]);
        this.listDatas.shift(this.listDatas[0]);
        this.pushLi();
      }
    },
    changeli(index) {
      this.flag=index;
    },
  },
  filters: {
    newmsg: (value, index) => {
      return index != 0 ? (value = "即将开始") : value;
    },
    lingtiam:(value)=>{
      return value < 10?(value = "0"+value):value
    }
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.seckilltime();
    this.pushLi();
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {
    clearInterval(this.time)
  }, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.seckill {
  margin: 1rem auto;
  background-color: white;
  height: 20rem;
  width: 95%;
  .seckill-top {
    width: calc(100%-2rem);
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    img {
      width: 33%;
    }
    p{
      display: flex;
        span{
          display: block;
          margin: 0 1rem;
          width: 2rem;
          height: 2rem;
          background-color: red;
          color: white;
          text-align: center;
          line-height: 2rem;
        }
    }
  }
  .seckill-mot {
    width: 100%;
    ul {
      display: flex;
      width: 100%;
      justify-content: space-around;
      li {
        width: 20%;
        text-align: center;
        height: 4.5rem;
        .timep {
          font-size: 1.6rem;
          font-weight: 700;
        }
      }
      .activeli{
        color: red;
        border-bottom:0.2rem solid red;
      }
    }
  }
}
</style>
