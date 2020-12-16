<!--  -->
<template>
  <div class="islogin">
    <div class="islogin-content">
      <div class="btn" @click="toLogin(0)">短信登录</div>
      <div class="btn" @click="toLogin(1)">账号登录</div>
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
    return {};
  },
  methods: {
    toLogin(index) {
      //   console.log(index);
      this.$router.push("/login?id=" + index);
    },
  },
};
</script>
<style lang="less">
.islogin {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .islogin-content {
    width: 90%;
    height: 4.4rem;
    background: #fff;
    display: flex;
    .btn {
      font-size: 1.4rem;
      line-height: 4.4rem;
      text-align: center;
      color: #fff;
      flex: 1;
      &:first-child {
        background: chocolate;
      }
      &:last-child {
        background: paleturquoise;
      }
    }
  }
}
</style>