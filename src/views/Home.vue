<template>
  <main class="home">
    <home-header :items="navItems" />
    <router-view />
  </main>
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
  padding: 0
  display: flex
  flex-direction: column
  align-self: stretch
  height: 100%
  background-color: #FAFAFA
  overflow: hidden
  .home-header
    margin-bottom: 1px

  @media (min-width: 768px)
    padding: 0 40px
</style>
