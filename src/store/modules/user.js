import Cookies from 'js-cookie';
//主要用来管理项目中的一些全局状态值
const user = {
	state:{
        token:Cookies.get('Token'),
        login:Cookies.get('Login'),
        gid:Cookies.get('gid')
	},

	//状态值的改变方法，操作值
	//提交mutiadtions是更改vuex状态的唯一方法
	//
	//
	//
	mutations:{
		SET_TOKEN:(state,token)=>{
			state.token=token; //loading
		},
		SET_LOGIN:(state,login)=>{
			state.login=login; //header
		},
		SET_GID:(state,gid)=>{
			state.gid=gid; //header
		}
		
	},actions:{
		SET_TOKEN:({commit},loading)=>{
			commit('SET_TOKEN',token)
		},
		SET_LOGIN:({commit},header)=>{
			commit('SET_LOGIN',login)
		},
		SET_GID:({commit},gid)=>{
			commit('SET_GID',gid)
		}
	}
}


export default user;