<template>
  <div id="app">
    <users></users>

    <!-- <test></test> -->
  </div>
</template>

<script>
import Test from './components/test'
import Users from './components/users'
import yesNo from './components/yesno'
import Todos from './components/Todos'

export default {
  name: 'app',
  components: {
    Test, Users, yesNo, Todos
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px;
}
.menu li {
    list-style: none;
    display: inline-block;
    margin: 0 10px 0 0;
}
</style>
