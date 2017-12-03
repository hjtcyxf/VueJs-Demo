<template>
<div id="app-6">
  <p>Using mustaches: {{ rawHtml }}</p>
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>
</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
       rawHtml: '<span style="color:red">This should be red。</span>'
    }
    
  }
}
</script>