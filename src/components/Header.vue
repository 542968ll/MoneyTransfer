<template>
    <div class="header-title">
        <!-- 标题块 -->
        <div class="header-title-container">
            <div class="header-title-contain-title">
                <img src="" alt="">
                <div>
                    <div>阿雷的银行</div>
                    <div>BANK OF ALEI</div>
                </div>
            </div>

            <div class="contain-but">
                <img src="../assets/image/kefu.svg" alt="">
                <img src="../assets/image/shouji.svg" alt="">
                <img src="../assets/image/chouti.svg" alt="">
            </div>
        </div>
        <!-- 标题内容通知 -->
        <div 
            class="container-message"
            :class="item.scale === 1 ? 'top-message' : ''"
            v-for="item in containerMessage" 
            :style="{
                top: item.top, 
                opacity: item.opacity,
                transform: `scale(${item.scale})`
            }">
            <span>{{ item.content }}<span>x</span></span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue'
const containerMessage = reactive([
    {
        content: "有关2025年第二季防骗信息",
        top: '90px',
        opacity: 1.0,
        scale: 1,
    }, {
        content: "有关2024年第二季防骗信息",
        top: '100px',
        opacity: 0.6,
        scale: 0.9
    }, {
        content: "有关2023年第二季防骗信息",
        top: '110px',
        opacity: 0.3,
        scale: 0.8
    }
])

</script>
<style scoped>
.header-title {
    padding: 25px;
    height: 450px;
    display: flex;
    flex-direction: column;
    background-image: url(../assets/image/bgc2.png);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 0 0 20px 20px;
}
.header-title-container {
    display: flex;
    flex-direction: row;
}
.header-title-container .header-title-contain-title {
    flex: 1;
}
.contain-but {
    display: flex;
    justify-content: center;
    align-items: center;
}
.contain-but img {
    margin-right: 5px;
    width: 25px;
    height: 25px;
}
.container-message {
    position: absolute;
    height: 25px;
    padding: 10px;
    border-radius: 10px;
    text-align: left;
    background-color: #f5f5f5;
    margin-top: 15px;
    font-size: 12px;
    width: 80%;
}
.top-message {

}
</style>