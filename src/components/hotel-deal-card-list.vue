<template>
  <scrollable class="hotel-deal-card-list">
    <ul class="hotel-deal-card-list_ul">
      <li
        class="hotel-deal-card-list_li"
        v-for="(dealItem, index) in items"
        :key="`hotel-deal-card-list_li_${index}`"
      >
        <hotel-deal-card :item="dealItem" />
      </li>
    </ul>
  </scrollable>
</template>
<script lang="ts">
import { HotelDealItem } from "@/store/hotel-deals/state-hotel-deals";
import { defineComponent } from "vue";

import HotelDealCard from "@/components/hotel-deal-card.vue";
import Scrollable from "@/layouts/scrollable.vue";

export default defineComponent({
  name: "hotel-deal-card-list",
  props: {
    items: {
      type: Object as () => HotelDealItem[],
    },
  },
  components: { HotelDealCard, Scrollable },
});
</script>
<style lang="sass" scoped>
.hotel-deal-card-list
    width: 100%
    flex-grow: 1

    .hotel-deal-card-list_ul
        margin: 0
        padding: 0
        display: flex
        flex-wrap: wrap
        list-style-type: none
        justify-content: space-around

        .hotel-deal-card-list_li
            margin: 8px .3%
            height: $hotel-deal-card-height
            width: $hotel-deal-card-width
            display: flex
            align-self: stretch
</style>
