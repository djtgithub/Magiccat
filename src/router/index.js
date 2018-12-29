import Vue from 'vue';
import Router from 'vue-router';
import Jishi from '@/pages/jishi/jishi';
import Fanyu from '@/pages/fanyu/fanyu';
import Wo from '@/pages/wo/wo';
import Tabbar from '@/components/common/tabBar';
import Header from '@/components/common/header';
import Detail from '@/pages/detail/detail';
import error from '@/pages/error/error';
import Home from '@/pages/home/home';
import Register from '@/pages/register/register';
import Forgetpwd from '@/pages/forgetpassword/forgetpassword';
import Login from '@/pages/login/login';
import Yindao from '@/pages/yindao/yindao';
import Message from '@/pages/message/message';
import Search from '@/pages/search/search';
import Address from '@/pages/address/address';

Vue.use(Router);
//  requireLogin:true  判断是否需要登录的权限


import store from '../store'
Vue.prototype.store = store;

const router = new Router({
	routes: [{
			path: '/',
			component: Home,
			meta: {
				keepAlive: true
			},
			children: [{
					path: '/',
					component: Jishi,
					redirect: '/jishi',
					meta: {
						index: 0,
						keepAlive: true,
						requireLogin: true
					},
				},
				{
					path: 'jishi',
					component: Jishi,
					meta: {
						index: 0,
						keepAlive: true,
						requireLogin: true
					},
				},
				{
					path: 'fanyu',
					component: Fanyu,
					meta: {
						index: 1,
						keepAlive: true,
						requireLogin: true
					},
				},
				{
					path: 'wo',
					component: Wo,
					meta: {
						index: 2,
						keepAlive: true,
						requireLogin: true
					},
				}

			]
		}, {
			path: '/yindao',
			name: 'Yindao',
			component: Yindao,
		},
		{
			path: '/register',
			name: 'Register',
			component: Register
		},
		{
			path: '/forgetpassword',
			name: 'Forgetpwd',
			component: Forgetpwd
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
		},
		{
			path: '/search',
			name: 'Search',
			component: Search,
			meta: {
				keepAlive: true
			},
		},
		{
			path:'/address',
			name:'Address',
			component: Address
		},
		{
			path: '/home',
			name: 'Home',
			component: Home,
			redirect: '/jishi',
			requireLogin: true
		}, {
			path: '/Header',
			name: 'Header',
			component: Header
		}, {
			path: '/jishi',
			name: 'Jishi',
			component: Jishi,
			requireLogin: true
		}, {
			path: '/fanyu',
			name: 'Fanyu',
			component: Fanyu,
			requireLogin: true
		}, {
			path: '/wo',
			name: 'Wo',
			component: Wo,
			requireLogin: true
		}, {
			path: '/message',
			name: 'Message',
			component: Message,
			meta: {
				header: true
			},
			requireLogin: true
		}, {
			path: '/detail',
			name: 'Detail',
			component: Detail,
			requireLogin: true
		}, {
			path: '*', // 404路由
			component: error, //重定向

		}

	],
	linkActiveClass: 'is-active'
})



router.beforeEach((to, from, next) => {
	// console.log(to.meta)
	let isLogin = String(store.state.user.login); // 是否登录
	// alert(JSON.stringify(to.meta.requireLogin))
	if (to.meta.requireLogin) {
		//如果需要跳转 ，往下走（1）
		if (isLogin === 'true') { //判断是否登录过，如果有登陆过，说明有token,或者token未过期，可以跳过登录（2）
			if (to.path === '/login') { //判断下一个路由是否为要验证的路由（3）
				next('/Home'); // 如果是直接跳到首页，
			} else { //如果该路由不需要验证，那么直接往后走
				next();
			}
		} else {
			console.log('没有登录'); //如果没有登陆过，或者token 过期， 那么跳转到登录页
			next('/login');
		}
	} else { //不需要跳转，直接往下走
		next();
	}
})





export default router;
