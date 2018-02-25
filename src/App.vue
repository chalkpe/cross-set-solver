<template lang="pug">
  #app.unselectable(@contextmenu.prevent=''): section.section
    #select.container: span.select: select(v-model='selected')
      option(v-for='(sample, i) in samples', :value='i') {{ sample.name }}
    puzzle(:puzzle='samples[selected]')
</template>

<script>
import samples from './assets/samples'
import Puzzle from './components/Puzzle.vue'

export default {
  components: { Puzzle },
  data: () => ({ samples, selected: 0 })
}
</script>

<style lang="sass">
  @import '~bulma'

  #app
    display: flex
    min-height: 100vh
    flex-direction: column
    background: linear-gradient(0deg, #E7E3B4, #E9E6DD, #EBC4B2)

    &.unselectable
      -webkit-user-select: none
      -moz-user-select: none
      -ms-user-select: none
      user-select: none

    section
      flex: 1 0 auto
      background: none

  #select
    margin-bottom: 1.5rem
</style>
