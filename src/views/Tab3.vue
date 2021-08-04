<template>
  <scrollable class="tab-3">
    <header class="tab-3_header">
      <strong
        ><h1>{{ $t("tab2.drinks") }}</h1></strong
      >
    </header>
    <div class="tab-3_content">
      <strong
        ><h1>{{ $t("tab2.beers") }}</h1></strong
      >
      <beers-list :items="drinksList" />
    </div>
  </scrollable>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

import Scrollable from "@/layouts/scrollable.vue";
import BeersList from "@/components/beers-list.vue";

export default defineComponent({
  name: "Tab 3",
  components: { Scrollable, BeersList },
  computed: {
    ...mapGetters(["drinksList"]),
  },
  mounted() {
    this.$store.dispatch("obtainDrinks");
  },
});
</script>
<style lang="sass" scoped>
.tab-3
  flex-grow: 1
  display: flex
  flex-direction: column

  .tab-3_header
    height: 15%
    display: flex
    align-items: center
    flex-shrink: 0

    @media (max-width: 768px)
      margin-left: 3%

  .tab-3_content
    background-color: $white
    flex-grow: 1
    padding: 20px
    border: 1px solid #DEE1E8
    box-sizing: border-box
</style>