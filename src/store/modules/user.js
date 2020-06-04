const user = {
    // 数据存储
    state: sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
        // 定义一个user对象
        user: {
            username: ''
        }
    },

    // 计算属性
    getters:
        {
            getUser(state) {
                return state.user;
            }
        }
    ,

    // 更改state中的数据，缺点是同步执行
    mutations: {
        updateUser(state, user) {
            state.user = user;
        }
    }
    ,

    // 定义触发mutations里函数的方法，可以异步执行mutations里的函数
    actions: {
        asyncUpdateUser(context, user) {
            context.commit('updateUser', user);
        }
    },
};

export default user;