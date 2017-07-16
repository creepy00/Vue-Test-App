<template>
	<div class="todolist">
		<h1>Simple todolist example</h1>
		<router-link to="/">Home</router-link>

		<div class="todolist">
			<h2>Todo List:</h2>
			<ul class="list">
				<li v-for="(todo, index) in todolist">
					<span :class="{completed: todo.completed}">{{index+1}}. {{todo.name}}</span>
					<button v-if="!todo.completed" @click="completeTodoList(index)">Complete</button>
					<button @click="removeTodoList(index)">Remove</button>
				</li>
			</ul>

			<input type="text" v-model="newItem" />
			<button @click="addTodoList">Add New Item</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'todolist',
		data: function () {
			return {
				todolist: [
					{
						'name': 'Buy milk',
						'completed': false
					},
					{
						'name': 'Walk the dog',
						'completed': true
					}
				],
				newItem: ""
			}
		},
		methods: {
			addTodoList: function () {
				if (this.newItem) {
					this.todolist.push({
						'name': this.newItem,
						'completed': false
					});

					this.newItem = "";
				}
			},

			completeTodoList: function (index) {
				this.todolist[index].completed = true;
			},

			removeTodoList: function (removeIndex) {
				this.todolist = this.todolist.filter(function(el, index) {
					return index !== removeIndex;
				});
			}
		}
	};
</script>

<style scoped>
	li span.completed {
		text-decoration: line-through;
	}
</style>