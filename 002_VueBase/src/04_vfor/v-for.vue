<template>
  <div id="app-4">
    <ol>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ol>
    <hr/>
    <ul id="example-2">
      <li v-for="(item, index) in items">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
      </li>
    </ul>
    <hr/>
    <ul id="v-for-object" class="demo">
      <li v-for="value in object">
        {{ value }}
      </li>
    </ul>
    <hr/>
    <div v-for="(value, key) in object">
      {{ key }}: {{ value }}
    </div>
    <hr/>
    <div v-for="(value, key, index) in object">
  {{ index }}. {{ key }}: {{ value }}
</div>
<hr/>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
       todos: [
       { text: '学习 JavaScript' },
       { text: '学习 Vue' },
       { text: '整个牛项目' }
       ],
       parentMessage: 'Parent',
       items: [
       { message: 'Foo' },
       { message: 'Bar' }
       ],
       object: {
        firstName: 'John',
        lastName: 'Doe',
        age: 30
      }
    }
  }
}
</script>