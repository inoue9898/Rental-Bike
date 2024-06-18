<template>
	  <h1>予約</h1>
  <div class="reservation-table">
    <h2>予約表</h2>
    <table>
      <thead>
        <tr>
          <th>日付</th>
          <th>名前</th>
					<th>バイク名</th>
          <th>時間</th>
          <th>アクション</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="reservation in reservations" :key="reservation.id">
          <td>{{ reservation.date }}</td>
          <td>{{ reservation.name }}</td>
					<td>{{ reservation.bike }}</td>
          <td>{{ reservation.time }}</td>
          <td>
            <button @click="removeReservation(reservation.id)">削除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="form">
      <h2>新しい予約を追加</h2>
      <input v-model="newReservation.date" type="date" placeholder="日付">
      <input v-model="newReservation.name" type="text" placeholder="名前">
			<input v-model="newReservation.bike" type="text" placeholder="バイク名">
      <input v-model="newReservation.time" type="time" placeholder="時間">
      <button @click="addReservation">追加</button>
    </div>
		<div class="text">
			<p>注）時間を入力する際は、料金表でご希望料金の最大時間の入力お願いいたします。<br>例）1~3時間なら、03:00。  3~6時間なら、06:00。<br>1日ご利用の方は、00:00と入力お願いいたします。</p>
		</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const reservations = ref([
  { id: 1, date: '2024-06-18', name: '山田 太郎', bike: 'ハーレーダビットソン', time: '10:00' },
  { id: 2, date: '2024-06-19', name: '鈴木 次郎', bike: 'YZF-R1',time: '14:00' },
]);

const newReservation = ref({
  date: '',
  name: '',
	bike: '',
  time: '',
});

const addReservation = () => {
  const newId = reservations.value.length + 1;
  reservations.value.push({ id: newId, ...newReservation.value });
  newReservation.value.date = '';
  newReservation.value.name = '';
	newReservation.value.bike = '';
  newReservation.value.time = '';
};

const removeReservation = (id) => {
  reservations.value = reservations.value.filter(reservation => reservation.id !== id);
};
</script>

<style scoped>
h1 {
  text-align: center;
  padding: 1rem 2rem;
  color: #fff;
  background-image: -webkit-gradient(linear, left top, right top, from(#fa709a), to(#fee140));
  background-image: -webkit-linear-gradient(left, #fa709a 0%, #fee140 100%);
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);  
  margin: 0 80px;
	margin-bottom: 40px;
  }

.reservation-table {
  max-width: 900px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #eee;
}

.form {
  display: flex;
  flex-direction: column;
}

input {
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 8px 16px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #0056b3;
}
</style>
