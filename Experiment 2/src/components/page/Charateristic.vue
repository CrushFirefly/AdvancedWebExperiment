<template>
    <div class="characteristic">

        <p class="characteristic_title">课程特色</p>
        <div class="characteristic_content clearfix">
            <img src="../../assets/image/png-icon (1).png" class="png leftfix" alt="">
            <div class="text">
                <p class="p1">丰富的教学服务</p>
                <p class="p2">特色教学服务功能，各种配套教学服务，在线学习从未如此轻松。</p>
                <a @click="Learning1">马上学习</a>
            </div>
        </div>

        <div class="characteristic_content clearfix">
            <img src="../../assets/image/png-icon (2).png" class="png leftfix" alt="">
            <div class="text">
                <p class="p1">多元的学习方式</p>
                <p class="p2">知识提炼、答疑解惑、实时互动、开发有特色的教学服务方式。</p>
                <a  @click="Learning2">马上学习 ></a>
            </div>
        </div>

        <div class="characteristic_content clearfix">
            <img src="../../assets/image/png-icon (3).png" class="png leftfix" alt="">
            <div class="text">
                <p class="p1">高品质的学习体验</p>
                <p class="p2">多屏合一，随时学习，随时在线，学习记录一目了然，知识充电不再受限。</p>
                <a @click="Learning3">马上学习 ></a>
            </div>
        </div>

    </div>
</template>

<script setup name="Characteristic">
function Learning1(){
    alert("丰富的教学服务");
    return false
}
function Learning2(){
    alert("多元的学习方式");
    return false
}
function Learning3(){
    alert("高品质的学习体验");
    return false
}
</script>