<template>
  <div class="scrollable">
    <div class="scrollable_container">
      <div class="scrollable_content"><slot /></div>
    </div>
  </div>
</template>
<style lang="sass" scoped>
.scrollable
    position: relative
    .scrollable_container
        position: absolute
        top: 0
        bottom: 0
        left: 0
        right: 0
        overflow: auto
        display: flex
        .scrollable_content
            height: 100%
            width: 100%
</style>
