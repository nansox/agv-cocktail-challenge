<template>
  <div class="beer-card">
    <figure class="beer-card_figure">
      <img class="beer-card_figure_img" :src="item.image_url" />
    </figure>
    <div class="beer-card_info">
      <strong>
        <h3>{{ item.name }}</h3>
      </strong>
      <p>{{ item.description }}</p>
      <h4>{{ item.food_pairing }}</h4>
    </div>
    <beer-vol-target :vol="item.drink_vol" />
  </div>
</template>

<script lang="ts">
import { DrinkBeerItem } from "@/store/drinks/state-drinks";
import { defineComponent } from "vue";

import BeerVolTarget from "@/components/beer-vol-target.vue";

export default defineComponent({
  name: "beer-card",
  props: {
    item: {
      type: Object as () => DrinkBeerItem,
    },
  },
  components: { BeerVolTarget },
});
</script>
<style lang="sass" scoped>
.beer-card
  min-height: 180px
  width: 100%
  border: 1px solid #DEE1E8
  box-sizing: border-box
  display: flex
  align-items: center

  .beer-card_figure
    @include flex-center
    flex-shrink: 0
    height: 150px
    width: 150px
    .beer-card_figure_img
      height: 100%

  .beer-card_info
    flex-grow: 1
    display: flex
    flex-direction: column

    p
      margin-top: 0
      max-width: 80%
    h4
      margin-top: auto

  .beer-vol-target
    flex-shrink: 0
    padding-left: 8px
    display: flex
    align-items: center

  @media (max-width: 650px)
    flex-direction: column

    .beer-card_info
      align-items: center

      h4
        max-width: 80%

    .beer-vol-target
      margin-bottom: 8px
      padding: 0
      justify-content: center

  @media (min-width: 651px)
    .beer-card_info
      height: 100%
    .beer-vol-target
      margin-top: 28px
      align-self: flex-start
</style>
