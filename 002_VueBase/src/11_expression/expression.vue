<template>
<div>
{{ number + 1 }} <br/>
{{ ok ? 'YES' : 'NO' }} <br/>
{{ message.split('').reverse().join('') }} <br/>
<div v-bind:id="'list-' + id"></div>
</div>
</template>


<script>
export default {
  name: 'app',
  data () {
    return {
       number: 2,
       ok:true,
       message:'I am old huang!',
       id:"A123"
    }
    
  }
}
</script>