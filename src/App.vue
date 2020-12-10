<template>
	<div id="app">
		<button @click="_statement">statement</button>
		<button @click="_htmlStatement">htmlStatement</button>

		<p>{{result}}</p>
		<div v-html="htmlText"></div>
	</div>
</template>

<script>
import {ref, onMounted, computed} from '@vue/composition-api'
import {
	statement, 
	htmlStatement
} from '@/func/statement'
export default {
	name: 'App',
	setup() {
		// 假数据
		const plays = ref({
			"hamlet": {name: "Hamlet", type: "tragedy"},
			"as-like": {name: "As You Like It", type: "comedy"},
			"othello": {name: "Othello", type: "tragedy"}
		})
		const invoice = ref({
			customer: "BigCo",
			performances: [
				{
					playID: 'hamlet',
					audience: 55,
				},
				{
					playID: 'as-like',
					audience: 35,
				},
				{
					playID: 'othello',
					audience: 40,
				}
			]
		})
		const result = ref('')
		function _statement() {
			result.value = statement(invoice.value, plays.value)
		}
		const htmlText = ref('')
		function _htmlStatement() {
			htmlText.value = htmlStatement(invoice.value, plays.value)
		}
		return {
			plays, 
			invoice,
			_statement,
			result,
			_htmlStatement,
			htmlText
		}
	},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
