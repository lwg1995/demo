export default[
	{
		path:'/',
		name:'index',
		component:()=>import('@/components/index')
	},
	{
	    path: '/:collection',
	    name: 'index',
	    component: () => import('@/components/index')
	},
	{
	    path: '/:collection/:p',
	    name: 'index',   
	    component: () => import('@/components/index')
	}
]
