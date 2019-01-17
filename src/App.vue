<template>
  <v-app>
    <div id="app">
      <router-view/>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato');
#app {
  /* --blue: #36CAC5;
  --orange: #F86C26;
  --white: #FCFDF7; */
  /* --blue: #268789; */
  --blue: #268D89;
  /* white */
  --peach: #F49A7C;
  --orange: #FD6741;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.application--wrap {
  background-color: #FFF;
}
button {
  outline: none;
}
</style>
