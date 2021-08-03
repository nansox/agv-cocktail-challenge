<template>
  <div
    class="hotel-deal-card"
    :class="{ ['hotel-deal-card-selected']: internalVModel }"
  >
    <header class="hotel-deal-card_header">
      <strong class="hotel-deal-card_header"
        ><h3>{{ item.title }}</h3></strong
      >
    </header>
    <hr class="hotel-deal-card_header_line" />
    <ul class="hotel-deal-card_ul">
      <li
        class="hotel-deal-card_ul_li"
        v-for="feature in item.features"
        :key="`hotel-deal-card_ul_li_${feature}`"
      >
        <span>{{ feature }}</span>
      </li>
    </ul>
    <div>
      <input type="radio" />
      <h3>Elegir régimen</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { HotelDealItem } from "../store/hotel-deals/state-hotel-deals";

export default defineComponent({
  name: "hotel-deal-card",
  data() {
    return {
      internalVModel: false,
    };
  },
  props: {
    item: {
      type: Object as () => HotelDealItem,
    },
  },
});
</script>
<style lang="sass" scoped>
.hotel-deal-card
  border: 1px solid #C9E3F9
  border-radius: 2px
  padding: $hotel-deal-card-padding
  display: flex
  flex-direction: column
  background-color: $white
  flex-grow: 1

  &.hotel-deal-card-selected
    border: 1px solid #326C96

    .hotel-deal-card_header
      text-align: center
      height: 40px

    .hotel-deal-card_header_line
      width: 72px
      height: 1px
      background-color: $hotel-deal-card-header-line-color
      border: 0
      margin-bottom: 16px

    .hotel-deal-card_ul
      padding-left: 20px
      list-style: disc
      .hotel-deal-card_ul_li
</style>
