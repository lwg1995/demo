export default[
	{
		path:'/',
		name:'index',
		component:()=>import('@/components/index.vue')
	},
	{
		path:'/HelloWorld',
		name:'HelloWorld',
		component:()=>import('@/components/HelloWorld.vue')
	}
]
