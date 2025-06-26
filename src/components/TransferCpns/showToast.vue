<template>
    <div class="transfer-container-showtoast">
        <div class="transfer-container-showtoast-header">
            <div class="transfer-container-showtoast-title">Transfer Reminder</div>
            <div class="transfer-container-showtoast-content">Elaine has sent you 100USDT,please review soon.</div>
        </div>
        <div class="transfer-container-showtoast-bottom">
            <button class="transfer-container-showtoast-close">Close</button>
            <button class="transfer-container-showtoast-revieworok">Review</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue'

</script>
<style scoped>
.transfer-container-showtoast {
  width: 300px;
  height: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-160px, -120px);
  background-color: #fff;
  border-radius: 8px;
  padding: 10px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url('../../assets/image/money-bag.svg');
  background-repeat: no-repeat;
  background-size: 80% 80%;
  background-position: 90% 50%;
}
.transfer-container-showtoast-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
}
.transfer-container-showtoast-content {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
  white-space: pre-wrap;
  word-break: break-word;
}
.transfer-container-showtoast-bottom {
  display: flex;
  justify-content: right;
}
.transfer-container-showtoast-close {
  width: 100px;
  height: 35px;
  margin-right: 15px;
  border: 0;
  border-radius: 8px;
}
.transfer-container-showtoast-revieworok {
  width: 100px;
  height: 35px;
  border: 0;
  background-color: #1989fa;
  color: #fff;
  border-radius: 8px;
}
</style>