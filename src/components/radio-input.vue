<template>
  <div
    class="radio-input"
    :class="{ ['radio-input_checked']: value === radioValue }"
  >
    <div class="radio-input_check">
      <div class="radio-input_check_internal"></div>
    </div>
    <input
      type="radio"
      class="radio-input_input"
      v-model="vModelRadio"
      :value="radioValue"
      :name="name"
      :ref="`radio-input_input_${componentID}`"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "radio-input",
  props: ["value", "radioValue", "name"],
  computed: {
    vModelRadio: {
      get(this) {
        return this.value;
      },
      set(nVal: any) {
        this.$emit("input", nVal);
      },
    },
  },
  methods: {
    click(this: any) {
      this.$refs[`radio-input_input_${this.componentID}`].click();
    },
  },
});
</script>
<style lang="sass" scoped>
.radio-input
    margin: 0 19px
    position: relative
    height: 16px
    width: 16px
    display: flex
    .radio-input_input
        opacity: 0
    .radio-input_check
        background-color: $white
        position: absolute
        border: 1px solid #8B9199
        box-sizing: border-box
        border-radius: 100px
        top: 0
        right: 0
        left: 0
        bottom: 0
        @include flex-center

        .radio-input_check_internal
            height: 10px
            width: 10px
            border-radius: 100px
    &_checked
        .radio-input_check
            border: 1px solid #6DC138

            .radio-input_check_internal
                background-color: #6DC138
</style>
