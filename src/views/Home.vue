<template>
  <div class="home">
    <home-header :items="navItems" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import HomeHeader, {
  HomeHeaderNavigationItem,
} from "@/components/home-header.vue";

export default defineComponent({
  name: "Home",
  data(): {
    navItems: HomeHeaderNavigationItem[];
  } {
    return {
      navItems: [
        {
          label: "Tab 1",
          path: "tab_1",
        },
        {
          label: "Tab 3",
          path: "tab_3",
        },
      ],
    };
  },
  components: { HomeHeader },
});
</script>
<style lang="sass" scoped>
.home
  padding: 0 $lateral-padding-home-view
  display: flex
  flex-direction: column
  align-self: stretch
  height: 100%
  background-color: $background-home-view
</style>

