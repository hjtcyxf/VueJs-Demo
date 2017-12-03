<template >
<div v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</div>
<div v-else>
   <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</div>
</template>


<script>

export default {
  name: 'app',
  data () {
    return {
          loginType:"username"
    }
    
  },
  mounted:function(){
    
  }

}
</script>