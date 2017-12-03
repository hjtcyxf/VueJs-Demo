<template v-if="ok">
<div>
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>

  <div v-if="Math.random() > 0.5">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>

<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>

</div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
          ok: true,
          type:"C"
    }
    
  }
}
</script>