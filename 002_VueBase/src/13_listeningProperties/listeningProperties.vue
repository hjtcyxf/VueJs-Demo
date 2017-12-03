<template>
<div id="demo">{{ fullName }}</div>
</template>


<script>
export default {
  name: 'app',
  data () {
    return {
        firstName: 'Foo',
        lastName: 'Bar'
    }
    
  },
  computed:{
  	// 计算属性的 getter
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
}
</script>