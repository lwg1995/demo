<template>
	<div class="main">
		<div class="head">导航</div>
		<div class="nav">轮播图</div>
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
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			
		},
		created(){
			
		}
		   
	}  
</script>
		
<style scoped>
	.main{
		width:100%;
	}
	.head,.nav,.info,.nav2,.nav3,.foot{
		width:100%;
		margin: 0 auto;
		
	}
	.head{
		height:80px;
		line-height: 80px;
		text-align: center;
		background-color: #0074D9;
	}
	.nav{
		height: 500px;
		background-color: paleturquoise;
	}
	.info{
		height:240px;
		line-height: 240px;
		background-color: pink;
	}
	.nav2{
		height: 240px;
		padding: 20px 0;
		background-color: white;
	}
	.nav2 ul{
		
		margin-left: 30%;
	} 
  	.nav2 ul li{
		list-style-type: none;
		float: left;
		width:240px;
		height: 240px;
		line-height: 240px;
		margin-right: 50px;
		border-radius: 50%;
		background-color:dimgrey;
	}
	.nav3{
		height: 350px;
		background-color: orange;
	}
	.foot{
		height: 500px;
		background-color: #000000;
	}
</style>
