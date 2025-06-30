<template>
  <!-- transfer-container -->
  <div class="flex flex-col">
    <!-- 标题 transfer-title -->
    <div class="fontSize-[23px] font-normal mx-[10px] mt-[10px] mb-[0px]">Convert</div>
    <!-- 转换窗口 transfer-window -->
    <div class="m-[10px] h-[300px] rounded-[20px] bg-[#1989fa] flex flex-col justify-between">
      <!-- 选择货币&显示金额 transfer-front -->
      <!-- [&>*]: -->
      <div class="p-[15px]
        transfer-front
      ">
        <!-- 选择框 -->
        <select name="Money" v-model="from" @change="handleSubmit()">
          <option value="USD">USD</option>
        </select>
        <input type="text" placeholder="Amount" v-model="amount" @input="handleSubmit()">
      </div>

      <!-- transfer-middle -->
      <div class="flex flex-col justify-center py-[0px] px-[15px] -mt-[40px]">
        <!-- 有个判断需alert -->
        <!-- transfer-middle-alert -->
        <!-- mt-6 bg-black text-white p-1 -->
        <div v-if="showAlert" class="
          mt-[25px]
          bg-[#000]
          text-[#fff]
          p-[5px]
          rounded-tl-['10px']
          before:content-['*']
          before:text-['red']
          before:pr-[3px]
        ">Insufficient funds.</div>
        <div v-if="showLimitAlert" class="transfer-middle-alert">Amount exceeds limit.</div>
        <!-- 显示available -->
        <div class="text-[#fff]">
          <p>Available:</p>
          <p>{{ available }}</p>
        </div>
        <!-- 交换上下文 transfer-div -->
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
      <div class="p-[15px]
        transfer-behind
      ">
        <!-- 选择框 -->
        <select name="Money" @change="handleSubmit()" v-model="to">
          <option value="USD">USD</option>
          <option value="CNY">CNY</option>
          <option value="HKD">HKD</option>
          <option value="EUR">EUR</option>
          <option value="JPY">JPY</option>
          <option value="MOP">MOP</option>
        </select>
        <input type="text" placeholder="Amount" v-model="result">
      </div>
    </div>

    <!-- 确认按钮 bottombut -->
    <div class="text-center fixed w-full bottom-[15px]">
      <!-- bottombut-inner -->
      <van-button 
        class="rounded-2xl w-10/12 shadow-[0_5px_5px_1px_#cbcbcb]" 
        type="primary" 
        @click="confirmShowPop">Comfrim
      </van-button>
    </div>

    <!-- 展示弹出层 -->
    <showPopup v-model="showPopupData" :showobj="showobj"></showPopup>

    <!-- 蒙版alert transfer-container-alert-->
    <div class="bg-[#1989fa]-[0.6] w-full absolute h-full" v-if="false">
      <!-- 显示错误 | 正确提示 transfer-container-alert-container -->
      <template v-if="false">
        <div class="bg-black p-1.5 text-white mt-20 ml-20">
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
import { ref, reactive, onMounted, computed } from 'vue'
import showToast from './TransferCpns/showToast.vue'
import showPopup from './TransferCpns/showPopup.vue'
import { useCurrencyStore } from "../store/currency"
import { useShowPopupStore } from "../store/showPopup";


let showPopupData = ref(false)
let showobj = reactive({
  "show": true,
  "img": "../../assets/image/fadai.svg",
  "title": "Convert Failed!",
  "text": "Incorrect trade password.",
  "but": "Try Again"
})

let amount = ref(1)
let from = ref("USD")
let to = ref("CNY")
let result = ref(6.45)
let available = ref(100.0121)
let amountLimit = ref(1)

const currencyStore = useCurrencyStore()
const showStore = useShowPopupStore()


const showAlert = computed(()=> {
  return amount.value > available.value
})
const showLimitAlert = computed(() => {
  return amount.value < amountLimit.value
})

const handleSubmit = async () => {
  try {
    const conversion = await currencyStore.convert(
      from.value, 
      to.value, 
      amount.value
    )
    result.value = conversion.result
  } finally { }
}

const confirmShowPop = async () => {
  try {
    const showList = await showStore.showPopupList()
    showobj = showList.filter(item => item.show === true)[0]
    showPopupData.value = showList.filter(item => item.show === true)[0].show
    return showList
  } finally { }
}


const transferBut = () => {
  // console.log("66666666");
  // [from.value, to.value] = [to.value, from.value]
  // console.log(from.value, to.value);
  alert("暂不支持转换功能~")
  
  // [amount.value, result.value] = [result.value, amount.value]
}





// 按确认展示提示
function showTip() {
  // showAlert.value = !showAlert.value
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