<template>
  <div>
    <Sidebar></Sidebar>
    <div class="towel">
      <h1>Hello</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Desktop',
  components: {
    Sidebar: () => import(/* webpackChunkName: 'Home-Desktop' */ '../../Layout/Sidebar.vue')
  }
}
</script>

<style scoped>
.towel {
  width: calc(100% - 300px);
  height: 100vh;
  margin-left: 300px;
  z-index: -1;
  background-color:#2daca7;
  background-image: radial-gradient(white 15%, transparent 16%),
  radial-gradient(white 15%, transparent 16%);
  background-size: 60px 60px;
  background-position: 0 0, 30px 30px;
  background-repeat: repeat;
}
</style>
