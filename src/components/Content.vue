<template>
  <div class="container">
    <div class="container-hello">早安</div>
    <div class="container-but">
        <div>开立账户</div>
        <div>登入</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRefs, onMounted } from 'vue'

</script>
<style scoped>
.container {
    height: 80px;
    background-color: rgb(246, 246, 246);
}
.container-hello {
    margin: 10px;
    color: rgb(103, 103, 103);
}
.container-but {
    display: flex;
    justify-content:space-around;
}

.container-but div {
    width: 120px;
    border: 1px solid;
    border-radius: 20px;
    text-align: center;
    padding: 7px;
}
.container-but div:nth-child(1) {
    border: 1px solid rgb(215, 215, 215);
    color: rgb(196, 51, 84);
    background-color: white;
}
.container-but div:nth-child(2) {
    border: 1px solid;
    color: white;
    background-color: rgb(196, 51, 84);
}
</style>