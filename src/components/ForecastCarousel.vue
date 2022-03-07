<template>
  <VueAgile
    v-if="hasItems"
    :dots="false"
    :nav-buttons="false"
    :slides-to-show="8"
  >
    <CarouselItem
      v-for="(item, index) in items"
      :key="index"
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

    // The carousel can only load when the dynamic slides (data) are ready
    const hasItems = ref(false)

    watch(items, (items) => { if (items.length) hasItems.value = true }, { immediate: true })

    return { hasItems }
  }
}
</script>
