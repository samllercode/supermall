<template>
  <div id="app">
   <MainTabar></MainTabar>
    <router-view></router-view>
  </div>
</template>

<script>
import MainTabar from 'components/content/mainTabbar/MainTabar'

export default {
  name: 'App',
  components: {
    MainTabar,
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
