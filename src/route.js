import Vue from "vue"
import VueRouter from "vue-router";
import MusicHome from "./music/home.vue"
import TODO from "./todo/todo_app.vue"
import My from "./music/my.vue"
import List from "./music/list.vue"
import markdowm_main from "./markdown/main.vue"
Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:"/",
            name:"home",
            component:MusicHome
        },{
            path:"/todo",
            name:"todo",
            component:TODO
        },{
            path:"/my",
            name:"my",
            component:My
        },{
            path:"/list",
            name:"list",
            component:List
        },{
            path:"/markdown",
            name:"markdown",
            component:markdowm_main
        }
    ]
})