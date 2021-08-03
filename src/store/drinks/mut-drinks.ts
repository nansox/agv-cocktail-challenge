import { DrinkBeerItem, DrinksState } from "./state-drinks";

export default {
  setDrinkList(state: DrinksState, drinkList: DrinkBeerItem[]) {
    state.drinks = drinkList;
  },
};
