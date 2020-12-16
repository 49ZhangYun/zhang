<!--  -->
<template>
  <div class="goodsSwiper">
    <mt-swipe :auto="0">
      <mt-swipe-item v-for="(item,index) in arr" :key="index">
        <ul>
          <li v-for="(i, index) in item" :key="index">
            <img :src="i.src" alt="" />
            <p>{{ i.p }}</p>
          </li>
        </ul>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import Swiper from "swiper";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      arr: [
        [
          {
            src:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png?imageView2/2/format/webp",
            p: "潮流服饰",
          },
          {
            src:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png?imageView2/2/format/webp",
            p: "潮流服饰",
          },
          {
            src:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png?imageView2/2/format/webp",
            p: "潮流服饰",
          },
          {
            src:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png?imageView2/2/format/webp",
            p: "潮流服饰",
          },
          {
            src:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png?imageView2/2/format/webp",
            p: "潮流服饰",
          },
          {
            src:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png?imageView2/2/format/webp",
            p: "潮流服饰",
          },
          {
            src:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png?imageView2/2/format/webp",
            p: "潮流服饰",
          },
          {
            src:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png?imageView2/2/format/webp",
            p: "潮流服饰",
          },
          {
            src:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png?imageView2/2/format/webp",
            p: "潮流服饰",
          },
          {
            src:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png?imageView2/2/format/webp",
            p: "潮流服饰",
          },
        ],
        [
          {
            src:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/4z9ufpdgpicgA74Imt0RSSImqbgEj6YFu00MNxaX.png?imageView2/2/format/webp",
            p: "萌宠",
          },
          {
            src:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/4z9ufpdgpicgA74Imt0RSSImqbgEj6YFu00MNxaX.png?imageView2/2/format/webp",
            p: "萌宠",
          },
          {
            src:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/4z9ufpdgpicgA74Imt0RSSImqbgEj6YFu00MNxaX.png?imageView2/2/format/webp",
            p: "萌宠",
          },
          {
            src:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/4z9ufpdgpicgA74Imt0RSSImqbgEj6YFu00MNxaX.png?imageView2/2/format/webp",
            p: "萌宠",
          },
          {
            src:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/4z9ufpdgpicgA74Imt0RSSImqbgEj6YFu00MNxaX.png?imageView2/2/format/webp",
            p: "萌宠",
          },
          {
            src:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/4z9ufpdgpicgA74Imt0RSSImqbgEj6YFu00MNxaX.png?imageView2/2/format/webp",
            p: "萌宠",
          },
          {
            src:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/4z9ufpdgpicgA74Imt0RSSImqbgEj6YFu00MNxaX.png?imageView2/2/format/webp",
            p: "萌宠",
          },
          {
            src:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/4z9ufpdgpicgA74Imt0RSSImqbgEj6YFu00MNxaX.png?imageView2/2/format/webp",
            p: "萌宠",
          },
          {
            src:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/4z9ufpdgpicgA74Imt0RSSImqbgEj6YFu00MNxaX.png?imageView2/2/format/webp",
            p: "萌宠",
          },
          {
            src:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/4z9ufpdgpicgA74Imt0RSSImqbgEj6YFu00MNxaX.png?imageView2/2/format/webp",
            p: "萌宠",
          },
        ],
        [
          {
            src:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/HKzNalAyacXbxTLKPibR0jC7qnP6JHsEGl9JCviv.png?imageView2/2/format/webp",
            p: "酒水饮料",
          },
          {
            src:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/HKzNalAyacXbxTLKPibR0jC7qnP6JHsEGl9JCviv.png?imageView2/2/format/webp",
            p: "酒水饮料",
          },
          {
            src:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/HKzNalAyacXbxTLKPibR0jC7qnP6JHsEGl9JCviv.png?imageView2/2/format/webp",
            p: "酒水饮料",
          },
          {
            src:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/HKzNalAyacXbxTLKPibR0jC7qnP6JHsEGl9JCviv.png?imageView2/2/format/webp",
            p: "酒水饮料",
          },
          {
            src:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/HKzNalAyacXbxTLKPibR0jC7qnP6JHsEGl9JCviv.png?imageView2/2/format/webp",
            p: "酒水饮料",
          },
          {
            src:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/HKzNalAyacXbxTLKPibR0jC7qnP6JHsEGl9JCviv.png?imageView2/2/format/webp",
            p: "酒水饮料",
          },
          {
            src:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/HKzNalAyacXbxTLKPibR0jC7qnP6JHsEGl9JCviv.png?imageView2/2/format/webp",
            p: "酒水饮料",
          },
          {
            src:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/HKzNalAyacXbxTLKPibR0jC7qnP6JHsEGl9JCviv.png?imageView2/2/format/webp",
            p: "酒水饮料",
          },
          {
            src:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/HKzNalAyacXbxTLKPibR0jC7qnP6JHsEGl9JCviv.png?imageView2/2/format/webp",
            p: "酒水饮料",
          },
          {
            src:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/HKzNalAyacXbxTLKPibR0jC7qnP6JHsEGl9JCviv.png?imageView2/2/format/webp",
            p: "酒水饮料",
          },
        ],
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
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
.goodsSwiper {
  height: 23rem;
  width: 95%;
  margin: 1rem auto;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
  background-color: white;
  .mint-swipe {
    height: 23rem;
    border-bottom: 1px solid rgb(213, 212, 212);
    .mint-swipe-item {
      width: 100%;
      height: 23rem;
      ul {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        height: 20rem;
        li {
          width: 20%;
          height: 10rem;
          img {
            width: 100%;
          }
          p{
            text-align: center;
          }
        }
      }
    }
    .mint-swipe-indicators {
      top: 20rem;
      .mint-swipe-indicator {
        width: 1.5rem;
        height: 0.4rem;
        border-radius: 0%;
        margin: 0;
        background: linear-gradient(-88deg, #ff4f2d, #f91f27);
      }
      .is-active {
        border-radius: 0.2rem;
        opacity: 1;
      }
    }
  }
}
</style>