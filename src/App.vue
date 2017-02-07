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
import redditapp from './components/redditapp'
import firebaseapp from './components/firebaseapp'
import colorpicker from './components/colorpicker'

export default {
  name: 'app',
  components: {
    Test, Users, yesNo, Todos, redditapp, firebaseapp, colorpicker
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
.menu {
    padding: 0;
}
.menu li {
    list-style: none;
    display: inline-block;
    margin: 0 10px 0 0;
    padding: 5px 10px;
    border: 1px solid lightgray;
}
</style>
