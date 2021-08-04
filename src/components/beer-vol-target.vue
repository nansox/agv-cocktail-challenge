<template>
  <div class="beer-vol-target" :class="colorByVol">{{ vol }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "beer-vol-target",
  props: ["vol"],
  computed: {
    colorByVol() {
      if (this.vol <= 5) {
        return "yellow";
      } else if (this.vol > 5 && this.vol < 10) {
        return "orange";
      } else if (this.vol >= 10) {
        return "red";
      }
      return "";
    },
  },
});
</script>
<style lang="sass" scoped>
.beer-vol-target
    width: 86px
    height: 32px
    font-family: 'Roboto Slab'
    font-weight: 700
    font-size: 18px
    line-height: 24px

    &.yellow
        background-color: $yellow
    &.orange
        background-color: $orange
    &.red
        background-color: $red
</style>
