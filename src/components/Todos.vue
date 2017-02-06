<template>
    <div class="todos">
        <h1>{{ title }}</h1>
        <form @submit="submitForm">
            Add a thing to do: <input type="text" v-model="text">
        </form>
        <ul>
            <li v-for="todo in todos">
                <input type="checkbox" class="toggle" v-model="todo.completed">
                <span :class="{completed: todo.completed}">
                    <label @dblclick="deleteTodo(todo)">
                        {{ todo.text }}
                    </label>
                </span>
            </li>
        </ul>
    </div>


</template>

<script>
    export default {
        name: 'todos',

        data() {
            return {
                title: 'Todos',
                text: '',
                todos: [
                    {
                        text: 'My Todo One',
                        completed: false
                    },
                    {
                        text: 'My Todo Two',
                        completed: false
                    },
                    {
                        text: 'My Todo Three',
                        completed: false
                    }
                ]
            }
        },

        methods: {
            submitForm(e) {
                this.todos.push({
                    text: this.text,
                    completed: false
                });
                e.preventDefault();
            },
            deleteTodo(todo) {
                this.todos.splice(this.todos.indexOf(todo), 1);
            }
        }
    }
</script>

<style scoped>
ul {
    list-style: none;
    padding: 0;
}

li {
    border-bottom: 1px solid  #ccc;
    padding: 10px 0;
}

.completed {
    text-decoration: line-through;
    font-style: italic;
}
</style>
