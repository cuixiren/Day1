<template>
<div>
  <h2>我是cpn标题</h2>
  <p>我是cpn内容hh</p>
  <p>{{ name }}</p>
</div>
</template>

<script>
export default {
  name: "Cpn",
  data() {
    return {
      name: 'wye',
      message: 'hello'
    }
  }
}
</script>

<style scoped>

</style>
