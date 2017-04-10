<template lang="pug">
  .column: .box.has-text-centered(
    :class='boxClass', @click='rotate', @contextmenu='toggle')
      transition(name='toggle',
        @after-enter='apply(true)', @enter-cancelled='apply(true)',
        @after-leave='apply(false)', @leave-cancelled='apply(false)')
        .ripple(v-show='cell.closed')
      transition-group(name='number', tag='div').content
        .num(v-for='(num, i) in cell.values', :key='num') {{ num }}
</template>

<script>
  export default {
    props: ['cell'],

    data: () => ({
      status: { applied: false }
    }),

    computed: {
      boxClass () {
        return Object.keys(this.status).filter(k => this.status[k]).join(' ')
      }
    },

    created () { this.apply(this.cell.closed) },

    methods: {
      toggle () { this.cell.toggle() },
      rotate () { if (!this.cell.closed) this.cell.rotate() },
      apply (closed) { this.status.applied = closed }
    }
  }
</script>

<style lang="sass">
  $open: #44AFC3
  $closed: #FE6E6E

  @keyframes open
    from
      opacity: 0%
      transform: scale(0)
      background-color: $closed
    to
      opacity: 100%
      transform: scale(3)
      background-color: $open

  @keyframes close
    from
      opacity: 0%
      transform: scale(0)
      background-color: $open
    to
      opacity: 100%
      transform: scale(3)
      background-color: $closed

  @keyframes shake
    10%, 90%
      transform: rotate(-1deg)
    20%, 80%
      transform: rotate(2deg)
    30%, 50%, 70%
      transform: rotate(-4deg)
    40%, 60%
      transform: rotate(4deg)

  .toggle
    &-enter-active
      animation: close 0.3s ease-in-out
    &-leave-active
      animation: open 0.3s ease-in-out

  .number-move
    transition: transform 0.3s ease

  .column
    max-width: 160px

    .box
      padding: 0px
      overflow: hidden
      position: relative
      border: 5px solid #fff
      background-color: $open

      &.applied
        background-color: $closed

        &:hover
          transform: rotate(0)
          animation: shake 0.8s both

      .ripple
        z-index: 1
        width: 100%
        height: 100%
        position: absolute
        border-radius: 50%

      .content
        z-index: 2
        position: relative
        padding: 16px 4px

        .num
          color: white
          font-size: 25px
          font-weight: bold
          display: inline-block
          vertical-align: baseline

          &:first-of-type
            font-size: 40px

          &:first-of-type + .num
            margin-left: 10px
</style>
