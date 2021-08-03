import Home from '@/components/Home';
import index from '@/components/index';
import HelloWorld from '@/components/HelloWorld';
import example from '@/components/example';


export default [
	{
		path: '/',
	//	name: 'index',
		redirect:'/Home',
		children:[
			{
				path: '/Home',
				name: 'Home',
				component: Home,
			},
			{
				path: '/HelloWorld',
				name: 'HelloWorld',
				component: HelloWorld,
			},
			{
				path: '/example',
				name: 'example',
				component: example,
			},
		],
		component: index,
	},

]
