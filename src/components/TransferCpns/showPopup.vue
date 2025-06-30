<template>
  <div>
    <van-popup
      v-model:show="showModel"
      class="popup-containter"
    >
      <div class="popup-containter-inner">
        <div class="popup-containter-inner-header">
          <img class="popup-containter-inner-img" :src="image">
          <span class="popup-containter-inner-title">{{ title }}</span>
          <span class="popup-containter-inner-text">{{ text }}</span>
        </div>
        <div 
          class="popup-containter-but"
          @click="hidePopup"
        >{{ but }}</div>
      </div>
    </van-popup>

  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted, computed } from 'vue'

const props = defineProps({
  showobj: {
    type: Object,
  }
})
const { img, title, text, but } = props.showobj


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