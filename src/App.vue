<script setup lang="ts">
import Transfer from './components/Transfer.vue';
import { Login } from "./api/user";

const clickLogin = async () => {
  const res = await Login({username: 'admin', password: '123456'})
  if(!res.token) return
  console.log(res, "登录成功~");
}

</script>

<template>
  <Transfer></Transfer>
  <button @click="clickLogin">点击登录</button>
</template>


<style scoped>

</style>
