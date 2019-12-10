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
      // console.log(12)
    }
  }
}
</script>
<style>
</style>
