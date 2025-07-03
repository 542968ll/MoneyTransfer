<template>
  <div class="flex flex-col">
    <!-- 标题 -->
    <div class="fontSize-[23px] font-normal mx-[10px] mt-[10px] mb-[0px]">Convert</div>
    <!-- 转换窗口 -->
    <div class="m-[10px] h-[300px] rounded-[20px] bg-[#1989fa] flex flex-col justify-between">
      <!-- 选择货币&显示金额 -->
      <div class="p-[15px]">
        <!-- 选择框 -->
        <select 
          name="Money" 
          v-model="from"
          class="
            w-[140px]
            h-[40px]
            mr-[10px]
            rounded-[10px] 
          "
        >
          <option v-for="option in currencies" 
            :value="option.value"
            :key="option.value"
            >{{ option.value }}
          </option>
        </select>
        <input type="number" placeholder="Amount" 
          v-model="amount"
          @input="handleSubmit()"
          class="
            w-[170px]
            h-[40px]
            rounded-[10px]
            border-0
          "
        >
      </div>
      <div class="flex flex-col justify-center py-[0px] px-[15px] -mt-[40px]">
        <!-- 有个判断需alert -->
        <div v-if="showAlert" class="
          mt-[25px]
          bg-[#000]
          text-[#fff]
          p-[5px]
          rounded-l-[10px]
          before:content-['*']
          before:text-[#f00]
          before:pr-[3px]
        ">Insufficient funds.</div>
        <div v-if="showLimitAlert" class="
            mt-[25px]
            bg-[#000]
            text-[#fff]
            p-[5px]
            rounded-l-[10px]
            before:content-['*']
            before:text-[#f00]
            before:pr-[3px]
          ">Amount exceeds limit.</div>
        <!-- 显示available -->
        <div class="text-[#fff]">
          <p>Available:</p>
          <p>{{ available }}</p>
        </div>
        <!-- 交换上下文 -->
        <div class="
          w-[100px]
          h-[100px]
          rounded-[50%]
          bg-[#fff]
          flex
          justify-center
          items-center
          translate-x-[110px]
          boxShadow-3xl
        " @click="transferBut">
          <img src="../assets/image/upArrow.svg" alt="" class="w-[40px] h-[40px] -mr-[10px]">
          <img src="../assets/image/downArrow.svg" alt="" class="w-[40px] h-[40px] -ml-[10px]">
        </div>
      </div>
      <!-- 选择货币&显示金额 -->
      <div class="p-[15px]">
        <!-- 选择框 -->
        <select name="Money" @change="handleSubmit()" v-model="to" class="
            w-[140px]          
            h-[40px]
            mr-[10px]
            rounded-[10px] 
          ">
          <option v-for="option in currencies" :value="option.value">{{ option.value }}</option>
        </select>
        <input type="number" placeholder="Amount" v-model="result"
          class="
            w-[170px]
            h-[40px]
            rounded-[10px]
            border-0
          "
        >
      </div>
    </div>
    <!-- 确认按钮 -->
    <div class="text-center fixed w-full bottom-[15px]">
      <van-button class="rounded-2xl w-10/12 shadow-[0_5px_5px_1px_#cbcbcb]" type="primary"
        @click="confirmLogin">Comfrim
      </van-button>
    </div>
    <!-- 展示弹出层 -->
    <showPopup v-if="showPopupData" v-model="showPopupData" :showobj="showobj"></showPopup>
    <!-- 蒙版alert  -->
    <div v-if="false" class="
        bg-[rgba(255,255,255,0.6)]  
        w-full 
        absolute 
        h-full">
      <!-- 显示错误 | 正确提示 transfer-container-alert-container -->
      <template v-if="false">
        <div class="
            bg-black 
            p-[5px] 
            text-[#fff] 
            mt-[80px] 
            ml-[20px]
          ">
          <span class="
            iconfont right
            text-[#3dc55d]
            mr-[8px]
            ">&#xe8e4;</span>
          <span>Modified successfully.</span>
        </div>
        <div class="
            bg-black
            p-[5px]
            text-white
            mt-[80px]
            ml-[80px]
            rounded-l-[10px]                                    
          ">
          <span class="iconfont
            text-[#f00]
            mr-[8px]
          ">&#xe8e7;</span>
          <span>Modified failed.</span>
        </div>
      </template>
      <!-- 显示弹窗 -->
      <show-toast></show-toast>
    </div>

  </div>

</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import showToast from './TransferCpns/showToast.vue'
import showPopup from './TransferCpns/showPopup.vue'
import { useShowPopupStore } from "../store/showPopup";
import { convertFun } from '../utils/convert'
import { fetchCurrencies, getExchangeRate } from "../api/currency";
import { Login } from "../api/user"
import type { showPop } from '../types/showPopup';
import type { CurrencySymbol } from "../types/currency";


const showPopupData = ref<boolean>(false)
// 类型断言，一开始赋值空，最后确定它肯定属于showPop类型
const showobj = ref<showPop>({} as showPop)

const amount = ref<number>(1)
const from = ref<string>("USD")
const to = ref<string>("CNY")

const result = ref<number>(6.45)
const available = ref<number>(100.0121)
const amountLimit = ref<number>(1)

const currencies = ref<CurrencySymbol[]>([])

const showStore = useShowPopupStore()

const showAlert = computed<boolean>(() => {
  return amount.value > available.value
})
const showLimitAlert = computed<boolean>(() => {
  return amount.value < amountLimit.value
})


onMounted(async () => {
  try{
    const res2 = await fetchCurrencies()
    currencies.value = res2
    from.value = currencies.value[0]?.value
  } catch (err) {
    
  }
})


const handleSubmit = async () => {
  // 获得来自from汇率，进行转换
  const res = await getExchangeRate('USD', to.value)
  if(res.code === 200 && !showAlert.value && !showLimitAlert.value) {
    try {
      const response = await showStore.showPopupList() || []
      showobj.value = response[0]
      showPopupData.value = showobj.value.show
    } finally { }
  }
  const convertResult = convertFun(from.value, to.value, amount.value, res.data.mockExchangeRates[0])  

  result.value = convertResult.result
}


const confirmLogin = async () => {
  if(showAlert.value || showLimitAlert.value) return
  console.log("点击登录~");
  // 发起登录请求
  
}

const transferBut = () => {
  [from.value, to.value] = [to.value, from.value];
  [amount.value, result.value] = [result.value, amount.value];
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

.transfer-front,
.transfer-behind {
  padding: 15px;
}

.transfer-front select,
.transfer-behind select {
  width: 140px;
  height: 40px;
  margin-right: 10px;
  border-radius: 10px;
}

.transfer-front input,
.transfer-behind input {
  width: 170px;
  height: 40px;
  border-radius: 10px;
  border: 0;
}

.transfer-front input::placeholder,
.transfer-behind input::placeholder {
  padding-left: 3px;
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
  width: auto;
  transform: translateY(0);
  box-shadow: 0 5px 5px 1px #cbcbcb;
  padding: 0;
}

.popup-containter-inner {
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-containter-inner-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.popup-containter-inner-img {
  width: 94px;
  height: 94px;
}

.popup-containter-but {
  bottom: 25px;
  position: fixed;
  width: 65%;
  padding: 10px;
  border-radius: 10px;
  background-color: #1989fa;
  color: #fff;
  box-shadow: 0 5px 5px 1px #d6d6d6;
}

.popup-containter-inner-title {
  font-size: 25px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.van-overlay {
  background: rgba(0, 0, 0, 0);
}
</style>