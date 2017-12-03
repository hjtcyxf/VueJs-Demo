<template>
  <div id="demo">
    <div v-bind:class="[activeClass, errorClass]"></div>

    <div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>

    <div v-bind:class="[{ active: isActive }, errorClass]"></div>

  </div>
</template>


<script>
export default {
  name: 'app',
  data () {
    return {
        isActive: false,
        activeClass: 'active',
        errorClass: 'text-danger'
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