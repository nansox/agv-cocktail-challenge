<template>
  <scrollable class="hotel-deal-card-list">
    <ul class="hotel-deal-card-list_ul">
      <li
        class="hotel-deal-card-list_li"
        v-for="(dealItem, index) in items"
        :key="`hotel-deal-card-list_li_${index}`"
      >
        <hotel-deal-card
          :item="dealItem"
          :value="dealTitleSelected"
          @selected="(value) => (dealTitleSelected = value)"
        />
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
  data() {
    return {
      dealTitleSelected: "",
    };
  },
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
      margin: 8px
      height: 490px
      width: 225px
      display: flex
      align-self: stretch

      @media(min-width: 1600px)
        width: 280px

      @media (max-width: 470px)
        width: 95%
        margin: 8px 0
        height: fit-content
</style>
