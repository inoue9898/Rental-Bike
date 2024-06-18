<script setup>
import { ref } from 'vue'
const title = ref('バイクレンタルサイト')
const items = ref([
  { title: '会社概要', path: '/company' },
  { title: '利用料金とご案内', path: '/price' },
  { title: '予約/予約方法', path: '/reservation' },
  { title: '使用時注意事項', path: '/caution' },
  { title: 'topへ', path: '/' }
])
</script>

<template>
  <div class="main">
    <div class="header">
      <h1>{{ title }}</h1>
      <ol>
        <li v-for="item in items" :key="item.title">
          <router-link :to="item.path">{{ item.title }}</router-link>
        </li>
      </ol>
    </div>
    <RouterLink to="company"></RouterLink>
    <RouterLink to="price"></RouterLink>
    <RouterLink to="reservation"></RouterLink>
    <RouterLink to="caution"></RouterLink>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.main {
  margin: 0;
  padding: 0;
}

.header {
  display: flex;
  align-items: center;
  text-align: right;
}

h1 {
  color: #505050; /*文字色*/
  padding: 0.5em; /*文字周りの余白*/
  display: inline-block; /*おまじない*/
  line-height: 1.3; /*行高*/
  background: #dbebf8; /*背景色*/
  vertical-align: middle;
  border-radius: 25px 0px 0px 25px; /*左側の角を丸く*/
  margin-left: 80px;
  margin-right: 20px; /* liとの間隔を空ける */
}

h1:before {
  content: '●';
  color: white;
  margin-right: 8px;
}

ol {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
}

li {
  margin-left: 20px;
  background-color: rgb(247, 208, 247);
  border-radius: 25px;
  padding: 20px;
}
</style>
