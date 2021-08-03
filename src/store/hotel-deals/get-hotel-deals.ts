import { HotelDealItem, HotelDealsState } from "./state-hotel-deals";

export default {
  hotelDealsList: (state: HotelDealsState): HotelDealItem[] => state.hotelDeals,
  hotelName: (state: HotelDealsState): string => state.hotelName,
  hotelAssessment: (state: HotelDealsState): number => state.hotelAssessment,
};
