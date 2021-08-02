
<template>
  <div class="tab_1">
    <h1>{{ dealsList }}</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Tab 1",
  computed: {
    dealsList() {
      return this.$store.getters.hotelDealsList;
    },
  },
});
</script>
