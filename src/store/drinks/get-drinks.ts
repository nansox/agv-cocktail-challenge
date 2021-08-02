import { DrinkBeerItem, DrinksState } from "./state-drinks";

export default {
    drinksList: (state: DrinksState): DrinkBeerItem[] => state.drinks
}