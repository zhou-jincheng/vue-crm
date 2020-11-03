import Vue from 'vue'

// 引入mintUI中组件
import {Header} from 'mint-ui'


// 注册组件
Vue.component(Header.name, Header)

// 引入MUI样式
import './lib/mui/css/mui.min.css'

import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app)
})