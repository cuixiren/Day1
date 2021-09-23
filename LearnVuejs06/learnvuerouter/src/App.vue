<template>
  <div id="app">
<!--    <router-link to="/home" tag="button" replace>首页</router-link>-->
<!--    <router-link to="/about" tag="button" replace>关于</router-link>-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link v-bind:to="'/user/'+userId">用户</router-link>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'cuicui'
    }
  }
}
</script>

<style>
.active {
  color: red;
}
</style>
