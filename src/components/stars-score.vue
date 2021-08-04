<template>
  <ul class="stars-score">
    <li
      v-for="index in maxScore"
      :key="`stars-score_${componentID}_li_${index}`"
      :class="{ ['unmarked-star']: index > score }"
    >
      <IconStar />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import IconStar from "@/components/icons/IconStar.vue";

export default defineComponent({
  name: "stars-score",
  components: { IconStar },
  props: ["score", "maxScore"],
});
</script>
<style lang="sass" scoped>
.stars-score
  height: 13px
  display: flex
  list-style: none
  padding: 0 3%
  li
    display: flex
    margin: 0 2.5px

    &.unmarked-star > svg
      opacity: 0
</style>