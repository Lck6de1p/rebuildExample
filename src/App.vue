<template>
	<div id="app">
		<button @click="_statement">click</button>
	</div>
</template>

<script>
import {ref, onMounted, computed} from '@vue/composition-api'
import {statement} from '@/func/statement'
export default {
	name: 'App',
	setup() {
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
		function _statement() {
			console.log(statement(invoice.value, plays.value))
		}
		return {
			plays, 
			invoice,
			_statement
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
