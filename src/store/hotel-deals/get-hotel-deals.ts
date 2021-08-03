import { HotelDealItem, HotelDealsState } from "./state-hotel-deals";

export default {
  hotelDealsList: (state: HotelDealsState): HotelDealItem[] => state.hotelDeals,
};
