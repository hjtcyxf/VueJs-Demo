<template>
<div id="app-5">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">逆转消息</button>
</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
       message: 'Hello Vue.js!'
    }
    
  },
  methods:{
      reverseMessage(){
        this.message = this.message.split('').reverse().join('')
      }
    }
}
</script>