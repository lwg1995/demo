<template>
  <div>
	   <router-view />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Index from './components/index.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
	Index
  }
}
</script>

<style>
	*{margin: 0;padding: 0;}
</style>
