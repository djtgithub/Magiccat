import Cookies from 'js-cookie';
//主要用来管理项目中的一些全局状态值
const app = {
	state:{
        loading:Cookies.get('Loading'),
        header:Cookies.get('Header'),
        tabbar:Cookies.get('Tabbar')
	},

	//状态值的改变方法，操作值
	//提交mutiadtions是更改vuex状态的唯一方法
	mutations:{
		SET_LOADING:(state,loading)=>{
			state.loading=loading; //loading
		},
		SET_HEADER:(state,header)=>{
			state.header=header; //header
		},
		SET_TABBAR:(state,tabbar)=>{
			state.tabbar=tabbar; //tabbar
		}
	},actions:{
		SET_LOADING:({commit},loading)=>{
			commit('SET_LOADING',loading)
		},
		SET_HEADER:({commit},header)=>{
			commit('SET_HEADER',loading)
		},
		SET_TABBAR:({commit},tabbar)=>{
			commit('SET_TABBAR',loading)
		}
	}
}


export default app;