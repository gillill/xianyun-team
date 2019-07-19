import {Message} from "element-ui";

 // 当前nuxt的对象
export default ({ $axios, redirect }) => {

     // 拦截axios的错误请求
    $axios.onError(err => {
        // console.log(err.response.data);
        const {message, statusCode} = err.response.data;

         if(statusCode === 401 && statusCode === 403) {
             redirect('/user/login')
         }   

         if(statusCode === 400){
            // 错误警告
            Message.warning(message)
        }
    })
}