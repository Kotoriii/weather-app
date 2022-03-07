<template>
  <figure class="carousel-item">
    <time>{{ time }}</time>
  </figure>
</template>

<script>
import { computed } from 'vue'

export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup: (props) => {
    const time = computed(() => props.data.dt)

    return { time }
  },
}
</script>

<style>
.carousel-item {
  height: 30vh;
  padding: 2rem;
}
</style>
