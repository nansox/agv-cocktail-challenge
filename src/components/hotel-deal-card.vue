<template>
  <div
    class="hotel-deal-card"
    :class="
      internalVModel === item.title
        ? 'hotel-deal-card-selected'
        : 'hotel-deal-card-unselected'
    "
    @click="selectThisCard"
  >
    <header class="hotel-deal-card_header">
      <strong class="hotel-deal-card_header"
        ><h3>{{ item.title }}</h3></strong
      >
    </header>
    <hr class="hotel-deal-card_header_line" />
    <ul class="hotel-deal-card_ul">
      <li
        class="hotel-deal-card_ul_li"
        v-for="feature in item.features"
        :key="`hotel-deal-card_ul_li_${feature}`"
      >
        <span>{{ feature }}</span>
      </li>
    </ul>
    <footer class="hotel-deal-card_footer">
      <radio-input
        :value="internalVModel"
        @input="(val) => (internalVModel = val)"
        :radioValue="item.title"
        name="hotel-deal-card_footer_radio_input"
        :ref="`hotel-deal-card_footer_radio_input_${componentID}`"
      />
      <h3>{{ $t("tab1.hoteldealcard.radiotext") }}</h3>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { HotelDealItem } from "../store/hotel-deals/state-hotel-deals";
import RadioInput from "@/components/radio-input.vue";

export default defineComponent({
  name: "hotel-deal-card",
  data() {
    return {
      internalVModel: "",
    };
  },
  props: {
    item: {
      type: Object as () => HotelDealItem,
    },
    value: {},
  },
  components: { RadioInput },
  watch: {
    value(nVal: any) {
      this.internalVModel = nVal;
    },
    internalVModel(nVal: any) {
      this.$emit("selected", nVal);
    },
  },
  methods: {
    selectThisCard() {
      const radioButton: any =
        this.$refs[
          `hotel-deal-card_footer_radio_input_${(this as any).componentID}`
        ];
      radioButton.click();
    },
  },
});
</script>
<style lang="sass" scoped>
.hotel-deal-card
  border: 1px solid #C9E3F9
  border-radius: 2px
  padding: 10px
  display: flex
  flex-direction: column
  background-color: $white
  flex-grow: 1

  .hotel-deal-card_header
    text-align: center
    height: 40px

  .hotel-deal-card_header_line
    width: 72px
    height: 1px
    background-color: #C9E3F9
    border: 0
    margin-bottom: 10px
    flex-shrink: 0

  .hotel-deal-card_ul
    padding-left: 17px
    list-style: disc

  .hotel-deal-card_footer
    height: 46px
    margin: 8px
    margin-top: auto
    display: flex
    align-items: center
    background-color: #F9F9FB
    border: 1px solid transparent

  &.hotel-deal-card-selected
    border: 1px solid #326C96
    & > footer
      border: 1px solid #326C96
      & > h3
        color: #033970
  &.hotel-deal-card-unselected
    & > footer > h3
      color: #616469
</style>
