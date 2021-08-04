<template>
  <ul class="beers-list">
    <li
      v-for="beerItem in items"
      :key="`beers-list_${componentID}_${beerItem.name}`"
    >
      <beer-card :item="beerItem" />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { DrinkBeerItem } from "@/store/drinks/state-drinks";
import BeerCard from "@/components/beer-card.vue";

export default defineComponent({
  name: "beers-list",
  components: { BeerCard },
  props: {
    items: {
      type: Object as () => DrinkBeerItem[],
    },
  },
});
</script>
<style lang="sass" scoped>
.beers-list
  list-style: none
  display: flex
  flex-direction: column
  align-items: stretch
  margin: 0
  padding: 0
  li
    display: flex
    margin: 16px 0
</style>
