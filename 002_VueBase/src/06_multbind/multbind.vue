<template>
<div id="app-6">
  <p>{{ message }}</p>
  <input v-model="message">
</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
       message: 'Hello Vue!'
    }
    
  }
}
</script>