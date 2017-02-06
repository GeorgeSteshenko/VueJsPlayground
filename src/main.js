// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import vueResource from 'vue-resource'
import App from './App'
import Users from './components/Users'
import Test from './components/Test'
import yesNo from './components/yesno'
import Todos from './components/Todos'
import redditapp from './components/redditapp'

Vue.use(vueResource)
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {path: '/', component: Users},
        {path: '/test', component: Test},
        {path: '/yes-no', component: yesNo},
        {path: '/todos', component: Todos},
        {path: '/redditapp', component: redditapp}
    ]
})

/* eslint-disable no-new */
new Vue({
    router,
    template: `
        <div id="app">
            <ul class="menu">
                <li><router-link to="/">Users</router-link></li>
                <li><router-link to="/test">Test</router-link></li>
                <li><router-link to="/yes-no">Yes/No</router-link></li>
                <li><router-link to="/todos">Todos</router-link></li>
                <li><router-link to="/redditapp">Reddit App</router-link></li>
            </ul>
            <router-view></router-view>
        </div>
    `
}).$mount('#app')
