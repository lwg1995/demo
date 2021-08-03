<template>
  <div id="app" class="container">
      <!-- 主入口 -->
      <router-view></router-view>
   
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.container {
  margin: 0;
  padding: 0;
  width: 100%;
}
</style>
