<template>
  <router-view />
</template>
<script>
export default {
  mounted() {
    this.$router.push("/home/tab_1");
  },
};
</script>
<style lang="sass">
html, body, #app
  width: 100%
  height: 100%
  margin: 0
</style>
