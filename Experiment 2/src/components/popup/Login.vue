<template>
    <div>
        <h2 class="title">登录页面</h2>
        <div class="username">
            <span class="a">*用户名</span>
            <input  type="text" v-model="user.username" placeholder="用户名" >
        </div>
        <div class="password">
            <span class="a">*密码</span>
            <input type="password" v-model="user.password" placeholder="密码">
        </div>
        <div class="button">
            <button @click="login">登录</button>
            <button @click="reset">重置</button>
            <button>
                <RouterLink  to="/Register">注册</RouterLink>
            </button>
        </div>
        
        
    </div>
</template>

<script lang="ts" setup name="Login">
    import { reactive,onMounted } from "vue"
    import { RouterLink } from "vue-router";
    import { type UserInter } from "@/types"
    import axios from "axios";
    import "@/assets/css/Login&Register.css";
    import { ElMessage } from "element-plus";


    let user = reactive<UserInter>({id:"",username:"",password:""})
    
    function login(){
        axios.post("http://localhost:8080/login",{
            username: user.username,
            password: user.password
        })
        .then(function(response){
            if(response.data.code==1){
                ElMessage({
                    message: "登录成功",
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
