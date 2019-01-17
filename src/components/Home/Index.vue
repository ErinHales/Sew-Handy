<template>
  <div>
    <home-desktop class="desktop"></home-desktop>
    <home-mobile class="mobile"></home-mobile>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    HomeDesktop: () => import(/* webpackChunkName: 'Home-Desktop' */ './Home-Desktop.vue'),
    HomeMobile: () => import(/* webpackChunkName: 'Home-Mobile' */ './Home-Mobile.vue')
  }
}
</script>

<style scoped>
.mobile {
  display: none;
}
@media (max-width: 450px) {
  .desktop {
    display: none;
  }
  .mobile {
    display: block;
  }
}
</style>
