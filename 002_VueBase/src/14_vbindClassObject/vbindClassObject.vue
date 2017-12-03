<template>
  <div id="demo">
    <!-- 属性绑定 -->
    <div class="static"
     v-bind:class="{ active: isActive, 'text-danger': hasError }">
     </div>

     <!-- 对象绑定 -->
     <div v-bind:class="classObject"></div>

     <!-- 计算属性绑定 -->
     <div v-bind:class="computedclassObject"></div>

  </div>
</template>


<script>
export default {
  name: 'app',
  data () {
    return {
        isActive: true,
        hasError: false,
        error: null,
        classObject: {
          active: true,
          'text-danger': false
      }
    }
    
  },
  computed:{
  	computedclassObject: function () {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
}
</script>