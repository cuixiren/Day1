// 1.使用commonjs规范
const math = require('./mathUtils')

console.log(math.add(20, 30));

console.log(math.mul(20, 30));

// 2.使用es6模块化规范
import {name, age, height} from "./info";

console.log(name, age, height)

//5. 使用vue进行开发
import Vue from 'vue'
import App from './vue/App.vue'

new Vue({
  el: '#app',
  //会将默认div替换掉
  template: `<App></App>`,
  data: {
  },
  components: {
    App
  }
})
