<template>
  <div class="
    w-[300px]
    h-[200px]
    top-[50%]
    left-[50%]
    translate-x-[-50%]
    translate-y-[-50%]
    bg-[#fff]
    rounded-[8px]
    p-[10px]
    absolute
    flex
    flex-col
    justify-between
    bg-[url('@/assets/image/money-bag.svg')]
    bg-no-repeat
    bg-[length:80%_80%]
    bg-[position:90%_50%]
  "
  >
    <div class="">
      <div class="
          text-[20px]
          font-semibold
          mb-[15px]
        ">Transfer Reminder</div>
      <div class="
        text-[18px]
        font-medium
        mb-[15px]
        whitespace-pre-wrap
        break-words
      ">Elaine has sent you 100USDT,please review soon.</div>
    </div>
    <div class="
      flex
      justify-end
    ">
      <button class="
        w-[100px]
        h-[35px]
        mr-[15px]
        border-0
        rounded-[8px]
      ">Close</button>
      <button class="
        w-[100px]
        h-[35px]
        border-0
        bg-[#1989fa]
        text-[#fff]
        rounded-[8px]
      ">Review</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue'

</script>
<style scoped>




</style>