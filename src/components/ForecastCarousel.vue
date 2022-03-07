<template>
  <VueAgile
    v-if="hasItems"
    :dots="false"
    :nav-buttons="false"
    infinite
  >
    <CarouselItem
      v-for="item in items"
      :data="item"
    />
  </VueAgile>
</template>

<script>
import { VueAgile } from 'vue-agile'
import { watch, ref, toRefs } from 'vue'
import CarouselItem from './Carouseltem.vue'

export default {
  components: {
    VueAgile,
    CarouselItem
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  setup: (props) => {
    const { items } = toRefs(props)
    const hasItems = ref(false)

    watch(items, (items) => { if (items.length) hasItems.value = true }, { immediate: true })

    return { hasItems }
  }
}
</script>
