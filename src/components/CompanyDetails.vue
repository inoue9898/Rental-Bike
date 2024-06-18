<script setup>
import { ref } from 'vue'
const company = ref('会社概要')
const explanations = ref([
  {
    profile:
      '株式会社イノウエモーターズは、2024年6月設立いたしました。お客様からご要望のあるバイクは、弊社が取り寄せます! 実際に見たり、またがったり、音を聞いてみたり、社外マフラーつけてみたりしてから購入をしたい。もしくは購入は都合が悪く購入できないけど乗ってみたい。といったご要望もお答えいたします。気になった方は是非一度ご来店ください。'
  }
])
</script>
<template>
  <diV>
    <h1>{{ company }}</h1>
    <p v-for="explanation in explanations" :key="explanation">{{ explanation.profile }}</p>
  </diV>
  <h2>連絡先</h2>
  <p>090-1111-2222</p>
  <RouterView></RouterView>
</template>
<style scoped>
h1 {
  text-align: center;
  font-size: 70px;
  font-style: oblique;
  font-family: 'ヒラギノ明朝 Pro W3', 'Hiragino Mincho Pro', 'Hiragino Mincho ProN', 'HGS明朝E', 'ＭＳ Ｐ明朝', serif;
  position: relative;
  padding: 1.5rem 2rem;
  -webkit-box-shadow: 0 2px 14px rgba(0, 0, 0, .1);
  box-shadow: 0 2px 14px rgba(0, 0, 0, .1);
}
h1:before,
h1:after {
  position: absolute;
  left: 0;
  width: 100%;
  height: 4px;
  content: '';
  background-image: -webkit-linear-gradient(315deg, #704308 0%, #ffce08 40%, #e1ce08 60%, #704308 100%);
  background-image: linear-gradient(135deg, #704308 0%, #ffce08 40%, #e1ce08 60%, #704308 100%);
}

h1:before {
  top: 0;
}

h1:after {
  bottom: 0;
}
p {
  margin: 0 80px;
}
h2 {
  margin-left: 80px;
  color: cadetblue;
}
</style>
