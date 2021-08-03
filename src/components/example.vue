<template>
  <div class="main">
    <div class="f1">
      <div class="blo ff">r</div>
      <div class="blo">a</div>
      <div class="blo">n</div>
      <div class="blo">d</div>
    </div>
    <div class="f2">
      <div class="blo" @click="btn()">r</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    btn() {
      this.$router.push({ name: "HelloWorld", query:{val:'这个是路由传过来的值'} });
    },
  },

  created() {

  },
  mounted() {

  },
};
</script>
<style scoped>
.main {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 500px;
  background-color: antiquewhite;
  /* display: flex; */
}
.f1 {
  display: flex;
  height: 100%;
  justify-content: space-around;
}
.ff:hover {
  position: relative;
  animation: myblo 2s linear 1 forwards;
}
.f2 {
  display: flex;
  width: 100%;
  bottom: 0;
  justify-content: center;
}
@keyframes myblo {
  0% {
    left: 0;
    top: 0;
  }
  50% {
    background: blue;
    left: 0;
    top: 300px;
  }
  100% {
    background: green;
    top: 300px;
    left: 38%;
  }
}
@-webkit-keyframes myblo {
  0% {
    left: 0;
    top: 0;
  }
  50% {
    background: blue;
    left: 0;
    top: 300px;
  }
  100% {
    background: green;
    top: 300px;
    left: 500px;
  }
}
.blo {
  width: 100px;
  height: 100px;
  text-align: center;
  background-color: pink;
}
</style>