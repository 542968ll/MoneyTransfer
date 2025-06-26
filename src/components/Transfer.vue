<template>
  <div class="transfer-container">
    <!-- 标题 -->
    <div class="transfer-title">Convert</div>
    <!-- 转换窗口 -->
    <div class="transfer-window">
      <!-- 选择货币&显示金额 -->
      <div class="transfer-front">
        <!-- 选择框 -->
        <select name="Money" id="">
          <option value="BTC">BTC</option>
          <option value="BTC">BTC</option>
          <option value="BTC">BTC</option>
          <option value="BTC">BTC</option>
          <option value="BTC">BTC</option>
        </select>
        <input type="text" placeholder="Amount">
      </div>

      <div class="transfer-middle">
        <!-- 有个判断需alert -->
        <div v-if="showAlert" class="transfer-middle-alert">Insufficient funds.</div>
        <!-- 显示available -->
        <div class="transfer-available">
          <p>Available:</p>
          <p>100.0121</p>
        </div>
        <!-- 交换上下文 -->
        <div class="transfer-div">
          <img src="../assets/image/upArrow.svg" alt="">
          <img src="../assets/image/downArrow.svg" alt="">
        </div>
      </div>

      <!-- 选择货币&显示金额 -->
      <div class="transfer-behind">
        <!-- 选择框 -->
        <select name="Money" id="">
          <option value="ETH">ETH</option>
          <option value="ETH">ETH</option>
          <option value="ETH">ETH</option>
          <option value="ETH">ETH</option>
          <option value="ETH">ETH</option>
        </select>
        <input type="text" placeholder="Amount">
      </div>
    </div>

    <!-- 确认按钮 -->
    <div class="bottombut">
      <van-button 
        class="bottombut-inner" 
        type="primary" 
        size="large"
        @click="showPopup"
      >Comfrim</van-button>
    </div>

    <!-- <van-cell title="展示弹出层" is-link @click="showPopup" /> -->
    <van-popup 
      v-model:show="show" 
      :style="{ padding: '64px' }"
      class="popup-containter"
    >内容</van-popup>

    <!-- 蒙版alert -->
    <div class="transfer-container-alert" v-if="false">
      <!-- 显示错误 | 正确提示 -->
      <template v-if="false">
        <div class="transfer-container-alert-container">
          <span class="iconfont right">&#xe8e4;</span>
          <span>Modified successfully.</span>
        </div>
        <div class="transfer-container-alert-container">
          <span class="iconfont fault">&#xe8e7;</span>
          <span>Modified failed.</span>
        </div>
      </template>
      <!-- 显示弹窗 -->
      <show-toast></show-toast>
    </div>

  </div>

</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue'
import showToast from './TransferCpns/showToast.vue'
let showAlert = ref(false)
let show = ref(false)

// 按确认展示提示
function showTip() {
  // showAlert.value = !showAlert.value
}

function showPopup() {
  show.value = true
}


</script>
<style scoped>
.transfer-container {
  display: flex;
  flex-direction: column;
}
/* 蒙层 */
.transfer-container-alert {
  background-color: rgba(225, 225, 225, 0.7);
  width: 100%;
  position: absolute;
  height: 100%;
}
.transfer-container-alert-container {
  background-color: #000;
  padding: 5px;
  color: #fff;
  margin-top: 80px;
  margin-left: 80px;
  border-radius: 10px 0 0 10px;
}
.transfer-container-alert-container .right {
  color: #3dc55d;
  margin-right: 8px;
}
.transfer-container-alert-container .fault {
  color: #f00;
  margin-right: 8px;
}

/* 非蒙层 */
.transfer-title {
  font-size: 23px;
  font-weight: 455;
  margin: 10px 10px 0 10px;
}
.transfer-window {
  margin: 10px;
  height: 300px;
  border-radius: 20px;
  background-color: #1989fa;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.transfer-front, .transfer-behind {
  padding: 15px;
}
.transfer-front select, .transfer-behind select {
  width: 140px;
  height: 40px;
  margin-right: 10px;
  border-radius: 10px;
}
.transfer-front input, .transfer-behind input {
  width: 170px;
  height: 40px;
  border-radius: 10px;
  border: 0;
}
.transfer-front input::placeholder, .transfer-behind input::placeholder {
  padding-left:3px;
}
.transfer-front input:focus, .transfer-behind input:focus {
  /* border-color: #1989fa; */
  /* border: 1px solid #1989fa; */
}
.transfer-middle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15px;
  margin-top: -40px;
}
.transfer-middle-alert {
  margin-top: 25px;
  background-color: #000;
  color: #fff;
  padding: 5px;
  border-radius: 10px 0 0 10px;
}
.transfer-middle-alert::before {
  content: '*';
  color: red;
  padding-right: 3px;
}
.transfer-available {
  color: #fff;
}
.transfer-div {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(110px);
  box-shadow: 0 5px 5px 1px #1166cb;
}
.transfer-div img { 
  width: 40px;
  height: 40px;
}
.transfer-div img:nth-child(1) {
  margin-right: -10px;
}
.transfer-div img:nth-child(2) {
  margin-left: -10px;
}
.bottombut {
  text-align: center;
  bottom: 15px;
  position: fixed;
  width: 100%;
}
.bottombut-inner {
  border-radius: 20px;
  width: 80%;
  box-shadow: 0 5px 5px 1px #cbcbcb;
}

.popup-containter {
  bottom: 0;
  text-align: center;
  /* top: 0; */
  width: auto;
  transform: translateY(0);
}
.van-overflow-hidden {
  overflow: visible !important;
}
</style>