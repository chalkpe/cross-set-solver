<template lang="pug">
  #app.unselectable(@contextmenu.prevent='')
    section.section: puzzle(:puzzle='puzzle')
</template>

<script>
  import 'bulma'
  import sample from './assets/sample'

  import Puzzle from './src/Puzzle'
  import PuzzleComp from './components/Puzzle.vue'

  export default {
    components: { Puzzle: PuzzleComp },
    data: () => {
      const i = Math.floor(Math.random() * sample.length)
      return { puzzle: new Puzzle(sample[i]) }
    }
  }
</script>

<style scoped>
  .title, .subtitle {
    color: #777777;
  }

  #app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  .unselectable {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  section {
    flex: 1 0 auto;
    background: linear-gradient(0deg, #E7E3B4, #E9E6DD, #EBC4B2);
  }
</style>
