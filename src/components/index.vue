<template>
  <div class="main">
	  <div>
		  <!-- 顶部导航栏 -->
		  <HeadNav />
	  </div>
	  <div>
		  <!-- 页面子路由（内容不定） -->
		  <router-view />
	  </div>
    
  </div>
</template>

<script>
import HeadNav from "@/components/HeadNav";

export default {
  components: {
    HeadNav,
  },
  data() {
    return {};
  },

  methods: {},
  mounted() {},
  created() {},
};
</script>

<style scope>
#im {
  position: absolute;
  width: 66px;
}

#im {
  position: absolute;
  width: 66px;
}

.main {
  width: 100%;
}

.head {
  width: 100%;
  margin: 0 auto;
  display: inline-flex;
  overflow: hidden;
}
.head {
  height: 90px;
  line-height: 90px;
  font-size: 30px;
  font-family: "microsoft yahei";
  text-align: center;
}

.header {
  width: 51%;
  height: 100%;
  margin: auto;
}

.header ul {
  width: 80%;
  height: 100%;
  margin: 0 auto;
}

.header ul li {
  float: left;
  list-style-type: none;
  width: 20%;
  height: 100%;
  transition: 0.2s ease;
}

.header ul li:hover {
  background-color: #4184d9;
  color: white;
  border-radius: 10px;
}
</style>
