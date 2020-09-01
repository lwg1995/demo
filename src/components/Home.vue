<template>
	<div>
		<div class="nav">
			<el-carousel :interval="3000" arrow="always" height="500px">
				<el-carousel-item v-for="(item,index) in list" :key="index">
					<img style="width:100%;height:100%;" :src="item.url">
				</el-carousel-item>
			</el-carousel>
		</div>
		<div class="info">
			<ul>
				<li>
					<h1>飓风教育</h1>
				</li>
				<li>
					<h2>xxxxxx</h2>
				</li>
				<li>
					<h3>xxxxxxx</h3>
				</li>
			</ul>
		</div>
		<div class="nav2">
			<ul>
				<li><img src="../assets/s1.jpg" alt=""></li>
				<li><img src="../assets/s2.jpg" alt=""></li>
				<li><img src="../assets/s3.jpg" alt=""></li>
			</ul>
		</div>
		<div class="nav3">一行图组轮播</div>
		<div class="foot">底部介绍信息及联系方式</div>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		props: {
		},
		data(){
			return {
				msg: String,
				list: [
					{
						url:require('../assets/banner1.jpg')
					},
					{
						url:require('../assets/banner2.jpg')
					}
				]
			}
		},
		methods:{
			
		},
		created() {
			
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.nav,
	.info,
	.nav2,
	.nav3,
	.foot {
		width: 100%;
		margin: 0 auto;
	}

	.nav {
		height: 500px;
	}
	
	.info {
		height: 200px;
		padding-top: 20px;
	}
	.info ul{
		margin-left: 45%;
	}
	.info ul li{
		letter-spacing: 1em;
		list-style-type: none;
		margin-top:20px;
	}
	
	.nav2 {
		height: 240px;
		padding: 20px 0;
		background-color: white;
	}
	
	.nav2 ul {
		margin-left: 25%;
	}
	
	.nav2 ul li{
		list-style-type: none;
		float: left;
		width: 20%;
		height: 240px;
		margin-right: 50px;
		background-color: darkgray;
	}
	.nav2 ul li img{
		width: 100%;
		height: 240px;
		border-radius: 50%;
	}
	
	.nav3 {
		height: 350px;
		background-color: orange;
	}
	
	.foot {
		height: 500px;
		background-color: #000000;
	}
	
	.nav .el-carousel__container {
		position: relative;
		height: 500px !important;
	
	}
	
	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}
	
	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
</style>
