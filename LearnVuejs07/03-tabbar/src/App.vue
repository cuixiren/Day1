<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="green">
        <img slot="item-icon" src="./assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="purple">
        <img slot="item-icon" src="./assets/img/tabbar/cart.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/cart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="cyan">
        <img slot="item-icon" src="./assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar'
import TabBarItem from './components/tabbar/TabBarItem'

export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
