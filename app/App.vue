<template lang="pug">
  #app
    section.section: .container
      h1.title LEVEL {{ level }}-{{ stage }}
      h2.subtitle {{ size }} X {{ size }}

      .columns(v-for='cells in data')
        .column(v-for='values in cells')
          cell(:values='values')
</template>

<script>
  import 'bulma'
  import sample from './assets/sample'

  import Cell from './components/Cell.vue'

  export default {
    data: () => sample,
    components: { Cell }
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

  section {
    flex: 1 0 auto;
    background: linear-gradient(0deg, #E7E3B4, #E9E6DD, #EBC4B2);
  }
</style>
