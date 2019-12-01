<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data: () => ({
    show: true
  }),
  methods: {
    test () {
      console.log(12)
    }
  }
}
</script>
<style>
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>
