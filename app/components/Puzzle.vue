<template lang="pug">
  #puzzle.container
    h1.title LEVEL {{ puzzle.level }}-{{ puzzle.stage }}
    h2.subtitle {{ puzzle.size }} X {{ puzzle.size }}

    .columns(v-for='row in puzzle.data')
      .column(v-for='cell in row')
        cell(:cell='cell')
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
