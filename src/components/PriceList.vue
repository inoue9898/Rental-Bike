<template>
	<h1>ご利用料金</h1>
	<div class="table-container">
	<table>
		<thead>
			<tr>
				<th>排気量</th>
				<th>1~3時間</th>
				<th>3~6時間</th>
				<th>6~9時間</th>
				<th>9~12時間</th>
				<th>1日</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>50~250cc</td>
				<td>2000円</td>
				<td>3500円</td>
				<td>5000円</td>
				<td>6500円</td>
				<td>15,000円</td>
			</tr>
			<tr>
				<td>250~400cc</td>
				<td>3000円</td>
				<td>4500円</td>
				<td>6000円</td>
				<td>7500円</td>
				<td>16,000円</td>
			</tr>
			<tr>
				<td>400~大型</td>
				<td>4000円</td>
				<td>5500円</td>
				<td>7000円</td>
				<td>8500円</td>
				<td>17,000円</td>
			</tr>
		</tbody>
	</table>
	</div>
	<h2>*ご案内*</h2>
	<p>もし時間を延長される場合はお電話かwebからお申し込みください。お申し込みの確認が取れずに延長、延滞がありましたら30分ごとに￥1000円を加算いたしますのでご注意ください。<br>
		万が一バイクの整備不良で故障、動かなくなった、怪我をした等ありましたらご連絡ください。なお事故、怪我につきましては一才責任を負うことができませんのでご注意ください。<br>
		事故、転倒で傷が発生した場合、低度であれば請求いたしませんが、弊社の判断で必要であれば6割ほど負担していただきます。
	</p>
	
	<RouterView></RouterView>
</template>
<style scoped>
h1 {
	color: yellowgreen;
	text-align: center;
}
table {
	display: flexbox;
	text-align: center;
}
th, td {
	padding: 20px 80px;
	text-align: center;
}
.table-container {
	display: flex;
  justify-content: center; /* テーブル全体をセンターに配置 */
  margin-top: 20px;
}
h2 {
	color: brown;
	text-align: center;
	font-size: 40px;
}

p {
	text-align: center;
}
</style>