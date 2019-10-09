import Vue from "vue"
import Admin from "./markdown/main.vue"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

const root = document.createElement("div");
document.body.appendChild(root);

new Vue({
    render:(h)=>h(Admin),
   
}).$mount(root)
