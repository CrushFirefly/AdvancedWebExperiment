<template>
    <div class="top">
        <div class="top_globalBar clearfix">
            <img class="logo leftfix" src="../../assets/icon/logo-white.svg" alt="logo">
            <div class="button_Login rightfix">
                <RouterLink replace to="/Login"> 
                    <a @click="popup" class="a">登录</a>
                </RouterLink>
                <RouterLink replace to="/Register"> 
                    <a @click="popup" class="a">注册</a>
                </RouterLink>
            </div>
        </div>
        <div class="top_title">
            <p class="top_title_1">云端编程，浏览器里边学边练</p>
            <p class="top_title_2">软件定义一切，网络连接时空，学习软件技术，创造未来世界。</p>
        </div>
        <div class="button_Learning">
            <a @click="Learning">马上学习</a>
        </div>
    </div>
    <el-dialog v-model="dialogVisible">
        <RouterView></RouterView>
    </el-dialog>
</template>

<script setup name="Top">
    import { ref } from "vue"
    import { RouterLink } from "vue-router";


    let dialogVisible = ref ( false )
    function popup(){
        dialogVisible.value=true;
        return false;
    }

    function Learning() {
        alert("欢迎来到云编程!")
        return false
    }  
</script>
