
<template>
  <div class="tab-1">
    <!-- <h1>{{ dealsList }}</h1> -->
    <hotel-deal-card-list :items="dealsList" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import HotelDealCardList from "@/components/hotel-deal-card-list.vue";

export default defineComponent({
  name: "Tab 1",
  computed: {
    dealsList() {
      return this.$store.getters.hotelDealsList;
    },
  },
  components: { HotelDealCardList },
});
</script>
<style lang="sass" scoped>
.tab-1
  flex-grow: 1
  display: flex
</style>