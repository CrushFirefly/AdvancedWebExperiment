<template>
    <div>
        <h2 class="title">注册页面</h2>
        <div class="username">
            <span class="a">*用户名</span>
            <input  type="text" v-model="user.username" placeholder="用户名" >
        </div>
        <div class="password">
            <span class="a">*密码</span>
            <input type="password" v-model="user.password" placeholder="密码">
        </div>
        <div class="button">
            <button @click="register">注册</button>
            <button @click="reset">重置</button>
            <button>
                <RouterLink  to="/Login">返回</RouterLink>
            </button>
        </div>
    </div>  
</template>

<script lang="ts" setup name="Register">
    import { reactive } from "vue"
    import { RouterLink,useRouter } from "vue-router";
    import { type UserInter } from "@/types"
    import axios from "axios";
    import "@/assets/css/Login&Register.css"
    import { ElMessage } from "element-plus";

    let user = reactive<UserInter>({id:"",username:"",password:""})
    const router = useRouter()
    function register(){
        axios.post("http://localhost:8080/register",{
            username: user.username,
            password: user.password
        })
        .then(function(response){
            if(response.data.code==1){
                ElMessage({
                    message: "注册成功",
                    type: "success",
                })
            }else{
                ElMessage({
                    message: response.data.msg,
                    type: "error",
                })
            }
        })
    }
    function reset(){
        user.username="";
        user.password="";
    }
</script>