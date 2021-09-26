<template>
  <div>
    <h2>我是首页标题</h2>
    <p>我是首页内容</p>
<!--    这里to属性的链接必须进行手动拼接-->
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      path: '/home/news'
    }
  },
  created() {
    console.log('创建首页组件');
    // this.$router.push('/home/news')
    // document.title='首页'
  },
  destroyed() {
    console.log('销毁首页组件');
  },
  //只有使用keep-alive标签时这两个函数才会被执行
  activated() {
    this.$router.push(this.path)
  },
  // deactivated() {
  //   this.path = this.$route.path //这里赋值的是下一个路由组件的path
  // },
  beforeRouteLeave(to,from,next) {
    console.log(this.$route.path);
    this.path = this.$route.path; //将path改为当前路由组件的标签（记录离开时的路径）
    next()
  }
}
</script>

<style scoped>
</style>
