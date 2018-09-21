<template>
  <div id="app">
    <h2>组件</h2>
  </div>
</template>

<script>
export default {
  name: 'my-component',
  data () {
    return {
    }
  }
}
</script>

<style{{#sass}} lang="scss"{{/sass}}>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}
</style>
