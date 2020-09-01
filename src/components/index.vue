<template>
	
	<div class="main">
		<div class="head">
			<div class="header">
				<ul>
					<li @click="current('Home')">首页</li>
					<li @click="current('HelloWorld')">介绍</li>
					<li>案例</li>
					<li>合作</li>
					<li>联系</li>
				</ul>
			</div>
		</div>
		<div>
			<component v-bind:is="path"></component>
			
		</div>
		
	</div>
</template>

<script>
import Home from './Home.vue';
import HelloWorld from './HelloWorld.vue';
	export default {
		components:{
			Home,
			HelloWorld
		},
		data() {
			return {
				path:'Home'
			}
		},

		methods: {
			current(path){
				this.path = path
				this.$router.push('/${path}')
				
			},
		},
		created() {

		},
		
	}
</script>

<style scope>
	
	#im {
		position: absolute;
		width: 66px;
	}

	.main {
		width: 100%;
	}

	.head{
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
		background-color: #4184D9;
		color: white;
		border-radius: 10px;
	}
</style>
