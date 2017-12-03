<template>
<div id="app-6">
  <span v-once>这个将不会改变: {{ msg }}</span>
</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
       msg: '真滴吗!'
    }
    
  }
}
</script>