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
  name: "home"
}
</script>

<style scoped>

</style>
