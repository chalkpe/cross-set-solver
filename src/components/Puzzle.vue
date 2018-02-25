<template lang="pug">
  .container
    h1.title(@click='puzzle.solve()') Level {{ puzzle.name }}
    h2.subtitle {{ puzzle.size }} × {{ puzzle.size }}
      span(v-show='puzzle.done') : Puzzle solved!

    #puzzle(:done='puzzle.done')
      .columns.is-mobile(v-for='row in puzzle.row')
        .column(v-for='(cell, i) in row.cells')
          cell(:cell='cell', :key='i')
        .indicator.right
          .circle(:active='row.done()')

      .columns.is-mobile
        .column(v-for='column in puzzle.column')
          .indicator: .circle(:active='column.done()')
        .indicator.right: .circle.hidden(active)
</template>

<script>
import Cell from './Cell.vue'

export default {
  props: ['puzzle'],
  components: { Cell }

}
</script>

<style scoped lang="sass">
  @keyframes shake
    10%, 90%
      transform: translateX(-1px)
    20%, 80%
      transform: translateX(2px)
    30%, 50%, 70%
      transform: translateX(-4px)
    40%, 60%
      transform: translateX(4px)

  .title, .subtitle
    color: #777777
    text-transform: uppercase

  #puzzle
    &[done]
      .column
        animation: shake 1s infinite

    .column
      max-width: 160px

    .indicator
      display: flex
      align-items: center
      justify-content: center

      &.right
        margin: 0.75rem

      .circle
        width: 1.5rem
        height: 1.5rem
        border-radius: 50%
        border: 0.2rem solid white
        background-color: #808080
        transition: all 0.7s ease

        &[active]
          opacity: 0
</style>
