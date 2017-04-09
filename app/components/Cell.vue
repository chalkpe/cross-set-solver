<template lang="pug">
  .box.has-text-centered(:class='cell.state', @click='rotate', @contextmenu.prevent='toggle')
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

<style scoped>
  .box {
    padding: 16px 4px;
    border: 5px solid #fff;
    background-color: #44AFC3;
  }

  .box.fixed {
    background-color: #FE6E6E;
  }

  span {
    color: white;
    font-size: 25px;
    font-weight: bold;
  }

  span:first-child {
    font-size: 40px;
    margin-right: 10px;
  }
</style>
