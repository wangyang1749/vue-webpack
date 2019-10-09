import axios from 'axios'
import 'muse-ui-loading/dist/muse-ui-loading.css'; // load css

import Loading from 'muse-ui-loading';



let loading;
function startLoading(){
    console.log("start");
    loading= Loading()

}
function endLoading(){
    loading.close()
    console.log("end");
}
//请求拦截
axios.interceptors.request.use(config=>{
    startLoading();
    return config;
},error=>{
    return Promise.reject(error);
})
//响应拦截
axios.interceptors.response.use(response=>{
    endLoading();
    return response;
},error=>{
    //错误提醒
})


export default axios;