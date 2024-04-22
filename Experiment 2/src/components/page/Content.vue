<template>
    <div class="content">
        <img src="..\..\assets\image\img-lab@2x.png" class="img" alt="">
        <p class="feature">高级Web编程实验室</p>
        <p class="illustrate">每人拥有自己完全独立的编程实验室，内置所有基础软件及学习素材。打开浏览器，即刻开始编程！</p>
        <div class="LearnMore">
            <a @click="Learning1">了解详情</a>
        </div>
    </div>
    <div class="content">
        <img src="..\..\assets\image\img-screens@2x.png" class="img" alt="">
        <p class="feature">双屏学习</p>
        <p class="illustrate">双屏学习，小屏视频互动，大屏实际操作，学习无障碍。打开浏览器，即刻开始编程</p>
        <div class="LearnMore">
            <a @click="Learning2">了解详情</a>
        </div>
    </div>
</template>

<script setup name="Content">
function Learning1(){
    alert("每人拥有自己完全独立的编程实验室，内置所有基础软件及学习素材。打开浏览器，即刻开始编程！")
    return false
}
function Learning2(){
    alert("双屏学习，小屏视频互动，大屏实际操作，学习无障碍。打开浏览器，即刻开始编程！")
    return false
}
</script>