<template>
	<div class="main">
		<!-- 顶部导航栏 -->
		<div class="head">
			<div class="header">
				<ul>
					<li v-for="(item,index) of menuList" :key="index" @click="current(item.pathName)">{{item.name}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
        name:'HeadNav',
		data() {
			return {
				path:'Home',
				menuList:[{
					name:'首页',
					pathName:'Home'
				},{
					name:'介绍',
					pathName:'HelloWorld'
				},{
					name:'案例',
					pathName:'Example'
				},{
					name:'合作',
					pathName:'' 
				},{
					name:'联系',
					pathName:''
				}]
			}
		},

		methods: {
			current(path){
				this.path = path
                if(this.path!==''){
                     this.$router.push('/'+ path);
                }else{
                    this.$router.push('/Home');
                }
				
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
