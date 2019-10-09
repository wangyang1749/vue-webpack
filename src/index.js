import Vue from "vue"
import App from "./app.vue"



// import 'muse-ui/lib/styles/base.less';
// import 'muse-ui/lib/styles/theme.less';
// import {BottomNav, Button, Select } from 'muse-ui';
// Vue.use(Button);
// Vue.use(Select);
// Vue.use(BottomNav);

import router from'./route.js'
import axios from './http.js'

import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import './assets/styles/material-icons.css'
Vue.use(MuseUI);

Vue.prototype.$axios=axios;




// import './assets/styles/test.css'
// import './assets/images/01.png'
// import './assets/styles/test.stylus.styl'

const root = document.createElement("div");
document.body.appendChild(root);

new Vue({
    render:(h)=>h(App),
    router:router
}).$mount(root)
