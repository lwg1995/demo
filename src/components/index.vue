<template>
	<div class="main">
		<div class="head">
			<div class="header">
				<ul>
					<li>首页</li>
					<li>案例</li>
					<li>介绍</li>
					<li>联系</li>
				</ul>
			</div>
		</div>
		<div class="nav">
		</div>
		<div class="info">介绍信息</div>
		<div class="nav2">
			<ul>
				<li>1</li>
				<li>2</li>
				<li>3</li>
			</ul>
		</div>
		<div class="nav3">一行图组轮播</div>
		<div class="foot">底部介绍信息及联系方式</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		},
		created() {

		}

	}
</script>

<style scoped>
	.main {
		width: 100%;

	}
	.head,
	.nav,
	.info,
	.nav2,
	.nav3,
	.foot {
		width: 100%;
		margin: 0 auto;
	}

	.head {
		height: 100px;
		line-height: 80px;
		font-size: 30px;
		font-family: "microsoft yahei";
		text-align: center;
		background-color: #0074D9;
	}
	.header{
		width:50%;
		height: 100%;
		margin:auto;
	}
	.header ul{
		width:80%;
		height: 100%;
		margin: 0 auto;
	}
	.header ul li{
		float: left;
		list-style-type: none;
		text-align: center;
		width: 24%;
		height: 100%;
	}
	.header ul li:hover{
		background-color: burlywood;
	}
	.nav {
		height:500px;
		/* background-color: paleturquoise; */
	}

	.info {
		height: 240px;
		line-height: 240px;
		background-color: pink;
	}

	.nav2 {
		height: 240px;
		padding: 20px 0;
		background-color: white;
	}

	.nav2 ul {
		margin-left: 30%;
	}

	.nav2 ul li {
		list-style-type: none;
		float: left;
		width: 240px;
		height: 240px;
		line-height: 240px;
		margin-right: 50px;
		border-radius: 50%;
		background-color: darkgray;
	}

	.nav3 {
		height: 350px;
		background-color: orange;
	}

	.foot {
		height: 500px;
		background-color: #000000;
	}
</style>
