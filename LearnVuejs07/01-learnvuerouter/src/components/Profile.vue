<template>
  <div>
    <h2>我是Profile组件</h2>
    <h2>{{$route.query}}</h2>
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.height}}</h2>
  </div>
</template>

<script>
export default {
  name: "Profile",
  created() {
    console.log('创建Profile组件');
  },
  destroyed() {
    console.log('销毁Profile组件');
  }
}
</script>

<style scoped>

</style>
