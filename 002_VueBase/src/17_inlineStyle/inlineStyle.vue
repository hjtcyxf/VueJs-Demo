<template>
<div>
  <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">111</div>

  <div v-bind:style="styleObject">222</div>
</div>
</template>

<script>
import Vue from 'vue'

Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
})

export default {
  name: 'app',
  data () {
    return {
          activeColor: 'red',
          fontSize: 30,
          styleObject: {
		    color: 'red',
		    fontSize: '13px'
		  }
    }
    
  }
}
</script>