<template>
  <div class="tab_3">
    <h1>tab_3</h1>
    {{ drinksList }}
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
export default defineComponent({
  name: "Tab 3",
  computed: {
    ...mapGetters(["drinksList"]),
  },
  mounted() {
    this.$store.dispatch("obtainDrinks");
  },
});
</script>
