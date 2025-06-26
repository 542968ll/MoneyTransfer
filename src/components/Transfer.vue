<template>
  <div class="transfer-container">
    <!-- 标题 -->
    <div class="transfer-title">Convert</div>
    <!-- 转换窗口 -->
    <div class="transfer-window">
      <!-- 选择货币&显示金额 -->
      <div>
        <!-- 选择框 -->
        <>
      </div>

      <!-- 显示available -->
      <div>available</div>

      <!-- 交换上下文 -->
      <div>交换</div>

      <!-- 选择货币&显示金额 -->
      <div>

      </div>
    </div>
    <!-- 确认按钮 -->
    <div class="bottombut">
      <van-button class="bottombut-inner" type="primary" size="large">Comfrim</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue'

</script>
<style scoped>
.transfer-container {
  margin: 10px;
  display: flex;
  flex-direction: column;
}
.transfer-window {
  height: 300px;
  border: 1px solid;
  flex: 1;
}
.bottombut {
  text-align: center;
}
.bottombut-inner {
  border-radius: 20px;
  width: 80%;
}
</style>