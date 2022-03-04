<template>
  <Flicking>
    <div>1</div>
    <div>2</div>
  </Flicking>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css";

export default {
  components: {
    Flicking
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
