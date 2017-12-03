<template>
  <div id="app-7">
    <ol>
    <!--
      现在我们为每个 todo-item 提供 todo 对象
      todo 对象是变量，即其内容可以是动态的。
      我们也需要为每个组件提供一个“key”，晚些时候我们会做个解释。
    -->
    <todo-item
    v-for="item in groceryList"
    v-bind:todo="item"
    v-bind:key="item.id">
  </todo-item>
</ol>
<hr/>
<div id="todo-list-example">
  <input
  v-model="newTodoText"
  v-on:keyup.enter="addNewTodo"
  placeholder="Add a todo"
  >
  <ul>
    <li
    is="todo-item-1"
    v-for="(todo, index) in todos"
    v-bind:key="todo.id"
    v-bind:title="todo.title"
    v-on:remove="todos.splice(index, 1)"
    ></li>
  </ul>
</div>
</div>
</template>

<script>
import Vue from 'vue';



  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  });

  Vue.component('todo-item-1', {
    template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">X</button>\
    </li>\
    ',
    props: ['title']
  });

  export default {
    name: 'app',
    data () {
      return {
        groceryList: [
        { id: 0, text: '蔬菜' },
        { id: 1, text: '奶酪' },
        { id: 2, text: '随便其他什么人吃的东西' }
        ],
        newTodoText: '',
        todos: [
        {
          id: 1,
          title: 'Do the dishes',
        },
        {
          id: 2,
          title: 'Take out the trash',
        },
        {
          id: 3,
          title: 'Mow the lawn'
        }
        ],
        nextTodoId: 4
      }
    },
    methods: {
      addNewTodo: function () {
        debugger;
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText
        })
        this.newTodoText = ''
      }
    }
  }



</script>