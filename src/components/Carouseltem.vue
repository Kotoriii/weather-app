<template>
  <figure class="carousel-item">
    <time class="time">{{ time }}</time>
    <img :src="cloudy" />
  </figure>
</template>

<script>
import { computed } from 'vue'
import dayjs from '../day.js'
import cloudy from '../assets/cloudy.svg'

export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  setup: (props) => {
    const time = computed(() => dayjs(props.data.dt_txt).format('HH:mm'))

    return { cloudy, time }
  },
}
</script>

<style scoped>
.carousel-item {
  height: 30vh;
  padding: 2rem;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.time {
  font-size: 4rem;
  color: #A8AABD;
}
</style>
