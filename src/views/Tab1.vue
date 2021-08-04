<template>
  <section class="tab-1">
    <header class="tab-1_header">
      <h1>
        {{ $t("tab1.hotel") }} <b>{{ hotelName }}</b>
      </h1>
      <stars-score :score="hotelAssessment" :maxScore="5" />
    </header>
    <hotel-deal-card-list :items="hotelDealsList" />
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import HotelDealCardList from "@/components/hotel-deal-card-list.vue";
import { mapGetters } from "vuex";

import StarsScore from "@/components/stars-score.vue";

export default defineComponent({
  name: "Tab 1",
  computed: {
    ...mapGetters(["hotelDealsList", "hotelName", "hotelAssessment"]),
  },
  components: { HotelDealCardList, StarsScore },
});
</script>
<style lang="sass" scoped>
.tab-1
  flex-grow: 1
  display: flex
  flex-direction: column
  .tab-1_header
    min-height: 100px
    @include flex-center
    text-align: center
    flex-wrap: wrap
</style>
