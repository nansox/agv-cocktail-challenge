import { createStore } from "vuex";

import ActHotelDeals from "./hotel-deals/act-hotel-deals";
import GetHotelDeals from "./hotel-deals/get-hotel-deals";
import MutHotelDeals from "./hotel-deals/mut-hotel-deals";
import StateHotelDeals from "./hotel-deals/state-hotel-deals";


import ActDrinks from "./drinks/act-drinks";
import GetDrinks from "./drinks/get-drinks";
import MutDrinks from "./drinks/mut-drinks";
import StateDrinks from "./drinks/state-drinks";

const HotelDeals = {
  actions: ActHotelDeals,
  getters: GetHotelDeals,
  mutations: MutHotelDeals,
  state: StateHotelDeals
}

const Drinks = {
  actions: ActDrinks,
  getters: GetDrinks,
  mutations: MutDrinks,
  state: StateDrinks
}

export default createStore({ modules: { HotelDeals, Drinks } });
