<template>
	<div class="box">
		<div class="box-child">
			1
		</div>
		<div class="box-child2">
			2
		</div>
		<div class="box-child3">
			3
		</div>
	</div>
</template>
<script>
	export default {
		name: 'HelloWorld',
		props: {
			msg: String
		},
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	* {
		margin: 0;
		padding: 0;
	}

	.box {
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
		order: <1>;
	}

	.box-child2 {
		width: 300px;
		height: 200px;
		background-color: #A9A9A9;
		margin: 10px;
		order: <3>;
	}

	.box-child3 {
		width: 100px;
		height: 200px;
		background-color: #A9A9A9;
		margin: 10px;
		order: <2>;
	}
</style>
