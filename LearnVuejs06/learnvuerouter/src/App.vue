<template>
  <div id="app">
    <!--    <router-link to="/home" tag="button" replace>首页</router-link>-->
    <!--    <router-link to="/about" tag="button" replace>关于</router-link>-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!--    <router-link v-bind:to="'/user/'+userId">用户</router-link>-->
    <!--    <router-link to="/profile">档案</router-link>-->
    <!--    <router-link :to="{path: '/profile', query: {name: 'cxr', age: 18, height: 1.88}}">档案</router-link>-->
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

<!--    exclude里面的name不能加空格-->
    <keep-alive exclude="Profile,user">
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'cuicui'
    }
  },
  methods: {
    userClick() {
      this.$router.push('/user/' + this.userId)
    },
    profileClick() {
      this.$router.push({
        path: '/profile',
        query: {
          name: 'cxr',
          age: 18,
          height: 1.88
        }
      })
    }
  }
}
</script>

<style>
.active {
  color: red;
}
</style>
