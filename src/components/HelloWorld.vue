<template>
  <div>
    <p>Hello World</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  created() {
    this.initData()
  },
  methods: {
    initData() {
      //test 测试
      const reqTime = Math.floor(new Date().getTime() / 1000);
      this.$axios({
        method: "post",
        url: "/info",
        data: {
          //get这里应为params
          //请求参数
          signature: this.common.makeSignature({}, reqTime),
          reqTime: reqTime,
        },
        //withCredentials:true, //局部携带cookie
        headers: {}, //如果需要添加请求头可在这写
      })
        .then((res) => {
          //res是返回结果
          //你的下一步操作 例:
        })
        .catch((err) => {
          //请求失败就会捕获报错信息
          //err.response可拿到服务器返回的报错数据
        });
    },

  },
};
$(function () {
  $("p").click(function () {
    alert("Welcome to zhengzhou");
  });
});
</script>
<style scoped>
</style>