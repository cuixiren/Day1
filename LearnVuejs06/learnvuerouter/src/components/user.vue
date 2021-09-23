<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户的相关信息</p>
    <h2>{{userId}}</h2>
  </div>
</template>

<script>
export default {
  name: "user",
  computed: {
    userId() {
      //$route:当前的活跃路由  $router: new出来的router对象（全局路由器） 注意区分
      return this.$route.params.userId
    }
  }
}
</script>

<style scoped>

</style>
