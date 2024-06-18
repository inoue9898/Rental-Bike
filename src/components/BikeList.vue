<script setup>
import { ref } from 'vue'
const bikes = ref([
  { name: 'ハーレーダビットソン', engine: '883cc' },
  { name: 'YZF-R3', engine: '320cc' },
  { name: 'YZF-R1', engine: '999cc' },
  { name: 'YZF-R7', engine: '688cc' },
  { name: 'YZF-R6', engine: '599cc' },
  { name: 'YZF-R25', engine: '249cc' },
  { name: 'レブル', engine: '249cc' },
  { name: 'CBR1000RR', engine: '999cc' },
  { name: 'CB750 FOUR', engine: '750cc' },
  { name: 'CB1000 スーパーフォア', engine: '999cc' },
  { name: 'Z900RS', engine: '948cc' },
  { name: 'Ninja 250', engine: '249cc' },
  { name: 'Ninja 400', engine: '399cc' },
  { name: 'エストレイヤ', engine: '249cc' },
  { name: 'ドラッグスター', engine: '399cc' }
])
</script>
<template>
  <div class="main">
    <h3>主なレンタルバイク一覧(他にご希望があればご連絡ください)</h3>
    <table>
      <thead>
        <tr>
          <th>バイク名</th>
          <th>排気量</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bike in bikes" :key="bike">
          <td>{{ bike.name }}</td>
          <td>{{ bike.engine }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped>
ol {
  display: flex;
  justify-content: center;
  list-style: none;
  text-align: right;
}

li {
  width: 100px;
  height: 50px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 14px;
  background-color: rgb(227, 240, 244);
  border-radius: 8px;
  position: relative;
  text-align: center;
}

li:hover {
  opacity: 0.4;
}

div {
  margin-left: 800px;
}

.main {
  margin: 0px 80px;
}
table {
  margin: 0px;
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  text-align: left;
  padding: 8px;
}

th {
  background-color: #78d0ea;
  border-bottom: 2px solid #ddd;
}

h3 {
  border-bottom: double 5px #ffc778;
}

h1 {
  color: #505050; /*文字色*/
  padding: 0.5em; /*文字周りの余白*/
  display: inline-block; /*おまじない*/
  line-height: 1.3; /*行高*/
  background: #dbebf8; /*背景色*/
  vertical-align: middle;
  border-radius: 25px 0px 0px 25px; /*左側の角を丸く*/
}

h1:before {
  content: '●';
  color: white;
  margin-right: 8px;
}
</style>
