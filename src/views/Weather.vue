<template />

<script>
const URL_PATH= '/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22/'

import { ref, onMounted } from 'vue'
import axios from 'axios'

export default {
  setup() {
    const loading = ref(false)

    const fetchData = () => {
      axios.get(URL_PATH)
        .then((response) => {
          // handle success
          console.log(response);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
    }

    onMounted(() => {
      fetchData()
    })
  },
}
</script>
