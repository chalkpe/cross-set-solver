<template lang="pug">
  .column
    .box.has-text-centered(:class='cell.state', @click='rotate', @contextmenu.prevent='toggle')
      .background
      .content
        span(v-for='number in cell.values') {{ number }}
</template>

<script>
  export default {
    props: ['cell'],

    methods: {
      rotate () {
        if (this.cell.fixed) return
        this.cell.rotate()
      },

      toggle () {
        this.cell.toggle()
      }
    }
  }
</script>

<style scoped lang="sass">
  .column
    max-width: 160px

  .box
    padding: 0px
    overflow: hidden
    position: relative

    border: 5px solid #fff
    background-color: #44AFC3
    transition: all 0.4s ease-in-out

    .content
      z-index: 2
      position: relative
      padding: 16px 4px

      span
        color: white
        font-size: 25px
        font-weight: bold

        &:first-of-type
          font-size: 40px

        &:first-of-type + span
          margin-left: 10px

    .background
      width: 100%
      height: 100%

      z-index: 1
      position: absolute

      opacity: 0
      transform: scale(0)
      background-color: #FE6E6E
      transition: all 0.15s ease-in-out

    &.fixed .background
      opacity: 1
      transform: scale(1)
</style>
