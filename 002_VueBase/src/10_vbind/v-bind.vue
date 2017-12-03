<template>
<div id="app-6">
  <button  v-bind:disabled="isButtonDisabled">Button</button>
</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
       isButtonDisabled: 'false'
    }
    
  }
}
</script>