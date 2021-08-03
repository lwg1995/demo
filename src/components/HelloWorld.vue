<template>
	<div class="box">
		<cinput @child="father" :ipt="pp"></cinput>
      <div class="left">

		  <p>这是子组件传过来的值:{{chid}}</p>
	  </div>
      <!-- <div class="center"></div> -->
      <!-- <div class="right"></div> -->
  </div>
</template>
<script>
import Cinput from './Cinput.vue';

	export default {
		name: 'HelloWorld',
		props: [],
		components:{
			Cinput:Cinput
		},
		data() {
			return {
				pp:{
					p1:'父组件的值1',
					p2:'父组件的值2',
				},
				chid:'',
				val:this.$route.query.val
			}
		},
		methods: {
			father(data){
				this.chid = data
			}
		},
		created() {
			
		},
		mounted(){
			console.log(this.$route.query.val);
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	.box {
      display: flex;
      height: 200px;
    }
    .left {
      flex:1;
      background-color: pink;
	  padding:30px ;
    }
    .center {
      flex: 0 0 600px;
      background-color: yellow;
    }
    .right {
      flex:1;
      background-color: skyblue;
    }

	/* .box {
		width: 100%;
		background-color: pink;
		display: flex;
		flex-wrap: wrap;
	}

	.box-child {
		width: 200px;
		height: 200px;
		background-color: #A9A9A9;
		margin: 10px;
		
	}

	.box-child2 {
		width: 300px;
		height: 200px;
		background-color: #A9A9A9;
		margin: 10px;
		
	}

	.box-child3 {
		width: 100px;
		height: 200px;
		background-color: #A9A9A9;
		margin: 10px;
		
	} */
</style>
