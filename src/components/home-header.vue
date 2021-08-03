<template>
  <nav>
    <ul>
      <li
        @click="
          () => {
            navigateTo(navItem);
          }
        "
        v-for="navItem in items"
        :key="`home-header_item_${navItem.path}`"
        :class="{ 'home-header_item_selected': navItem === itemSelected }"
      >
        {{ navItem.label }}
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export interface HomeHeaderNavigationItem {
  label: string;
  path: string;
}

export default defineComponent({
  name: "home-header",
  data(): {
    itemSelected: any;
  } {
    return {
      itemSelected: undefined,
    };
  },
  props: {
    items: {
      type: Object as () => HomeHeaderNavigationItem[],
      required: true,
    },
  },
  methods: {
    navigateTo(navItem: HomeHeaderNavigationItem) {
      this.$router.push(`/home/${navItem.path}`);
    },
  },
  watch: {
    $route({ path }) {
      this.itemSelected = this.items.find((el: HomeHeaderNavigationItem) =>
        path.includes(el.path)
      );
    },
  },
  mounted() {
    this.itemSelected = this.items.find((el: HomeHeaderNavigationItem) =>
      this.$route.path.includes(el.path)
    );
  },
});
</script>
<style lang="sass" scoped>
nav
  filter: drop-shadow(0px 1px 2px rgba(80, 92, 119, 0.2))
  background-color: $white
  height: $home-header-height
  max-height: $home-header-height
  flex-shrink: 0
  ul
    height: 100%
    display: flex
    justify-content: flex-end
    align-items: center
    list-style-type: none
    padding: 0
    margin: 0
    li
      @include flex-center
      white-space: nowrap
      width: 120px
      text-align: center
      height: 100%
      cursor: pointer

      &.home-header_item_selected
        color: $primary
        border-bottom: 2px solid $primary
</style> 