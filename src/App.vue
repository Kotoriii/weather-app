<template>
  <main>
    <div class="container">
      <Weather />
    </div>
  </main>
</template>

<script>
import Weather from './views/Weather.vue'

export default {
  components: { Weather }
}
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100%;
  max-height: 1080px;
  max-width: 1920px;
}
</style>
