import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

// 路由跳转前
router.beforeEach((to, from, next) => {
    // 获取session存储中的属性值
    let isLogin = sessionStorage.getItem("isLogin");

    // 注销
    if (to.path == '/logout') {
        sessionStorage.clear();
        next({path: '/login'});
    }else if (to.path == '/login') {
        if (isLogin != null) {
            next({path: '/main'});
        }
    }else if (isLogin == null) {
        next({path: '/login'});
    }
    next();
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
