<template>
  <div id="app">
    <!-- <el-button @click="show = !show">Click Me</el-button>
    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">.el-fade-in-linear</div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="show" class="transition-box">.el-fade-in</div>
      </transition>
    </div>-->
    <router-link to="/test">test</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data: () => ({
    show: true
  }),
  methods: {
  },
  created () {
  }
}
</script>
<style>
</style>
