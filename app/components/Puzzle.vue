<template lang="pug">
  #puzzle.container
    h1.title LEVEL {{ puzzle.level }}-{{ puzzle.stage }}
    h2.subtitle {{ puzzle.size }} × {{ puzzle.size }}

    .columns(v-for='row in puzzle.data')
      cell(v-for='(cell, index) in row', :cell='cell', :key='index')
</template>

<script>
  import Cell from './Cell.vue'

  export default {
    props: ['puzzle'],
    components: { Cell }

  }
</script>

<style scoped>

</style>
