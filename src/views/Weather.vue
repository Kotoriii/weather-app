<template>
  <ForecastCarousel :items="forecastList" />
</template>

<script>
// Due to CORS proxy, don't need the first part of URL
const URL_PATH= '/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22/'

import { ref, onMounted } from 'vue'
import axios from 'axios'
import ForecastCarousel from '@/components/ForecastCarousel.vue'

export default {
  components: { ForecastCarousel },
  setup() {
    const loading = ref(false)

    const selectedForecast = ref(null)
    const forecastList = ref([])

    onMounted(() => {
      fetchData()
    })

    const fetchData = () => {
      loading.value = true

      axios.get(URL_PATH)
        .then((response) => {
          forecastList.value = response.list
        })
        .catch((error) => {
          console.log(error);
        })

      loading.value = false
    }

    return { forecastList }
  },
}
</script>
