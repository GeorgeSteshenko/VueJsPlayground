// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueFire from 'vuefire'

import App from './App'

import Users from './components/Users'
import Test from './components/Test'
import yesNo from './components/yesno'
import Todos from './components/Todos'
import redditapp from './components/redditapp'
import firebaseapp from './components/firebaseapp'
import colorpicker from './components/colorpicker'
import weather from './components/weather'
import monsterslayer from './components/monsterslayer'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueFire)

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {path: '/', component: Users},
        {path: '/test', component: Test},
        {path: '/yes-no', component: yesNo},
        {path: '/todos', component: Todos},
        {path: '/redditapp', component: redditapp},
        {path: '/firebaseapp', component: firebaseapp},
        {path: '/colorpicker', component: colorpicker},
        {path: '/weather', component: weather},
        {path: '/monsterslayer', component: monsterslayer}
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
                <li><router-link to="/firebaseapp">Firebase App</router-link></li>
                <li><router-link to="/colorpicker">Color Picker App</router-link></li>
                <li><router-link to="/weather">Weather Forecast</router-link></li>
                <li><router-link to="/monsterslayer">Monster Slayer</router-link></li>
            </ul>
            <router-view></router-view>
        </div>
    `
}).$mount('#app')
