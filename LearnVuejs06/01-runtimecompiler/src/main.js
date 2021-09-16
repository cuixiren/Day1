// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

const cpn = Vue.component('cpn',{
  template: '<div>我是cpn组件</div>',
  data() {
    return {
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  render: function (createElement){
    // 1.使用方式一：
    return createElement('标签','相关数据对象（可以不传）',['内容数组'])
    // 1.1.render函数基本使用
    return createElement('div', {class: 'box'}, ['helloworld'])
    // 1.2.嵌套render函数
    return createElement('h2', {class: 'box'}, ['helloworld',createElement('button',['按钮'])])

    // 2.使用方式二：传入组件对象
    return createElement(cpn)
    return createElement(App)
  }
})

// runtime-compiler(v1)
//   template -> ast -> render -> vdom -> UI
// runtime-only(v2)(1.性能更高 2.下面的代码量更少)
//   render -> vdom -> UI
// 那么.vue文件中的template是由谁处理的了?
//   是由vue-template-compiler
//   render -> vdom -> UI
