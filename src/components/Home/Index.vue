<template>
  <v-container>
    <Home-Desktop class="desktop"></Home-Desktop>
    <Home-Mobile class="mobile"></Home-Mobile>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {
    HomeDesktop: import('./Home-Desktop.vue'),
    HomeMobile: import('./Home-Mobile.vue')
  }
}
</script>

<style scoped>
.mobile {
  display: none;
}

@media (max-width: 450px) {
  .mobile {
    display: block;
  }
  .desktop {
    display: none;
  }
}
</style>
