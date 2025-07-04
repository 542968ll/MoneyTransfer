<template>
  <div>
    <van-popup
      v-model:show="showModel"
      class="
        bottom-[0px]
        text-center
        !w-full
        !transform
        !translate-y-0
        shadow-[0_5px_5px_1px_rgba(203,203,203,1.00)]
        p-0
      "
    >
      <div class="
        flex
        justify-center
        items-center
      ">
        <div class="
          flex
          justify-center
          items-center
          flex-col
          mt-[20px]
        ">
          <img class="
            w-[94px]
            h-[94px]
          " :src="image">
          <span class="
            text-[25px]
            mt-[10px]
            mb-[10px]
          ">{{ title }}</span>
          <span class="
            text-[18px]
          "
          >{{ text }}</span>
        </div>
        <div 
          class="
            bottom-[25px]
            fixed
            w-[65%]
            p-[10px]
            rounded-[10px]
            bg-[#1989fa]
            text-[#fff]
            shadow-[0_5px_5px_1px_rgba(214,214,214,1.00)]
          "
          @click="hidePopup"
        >{{ but }}</div>
      </div>
    </van-popup>

  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  showobj: {
    type: Object,
    default: {}
  }
})
const { img, title, text, but } = props.showobj 
console.log("props", props);

console.log(img, title, text, but, '56565656')

const image = new URL(img, import.meta.url).href



const showModel = defineModel<boolean>()


function hidePopup() {
  showModel.value = false
}

</script>
<style scoped>
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