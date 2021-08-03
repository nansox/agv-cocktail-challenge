import { DrinkBeerItem } from "./state-drinks";

function getFetchHeaders() {
  return {};
}

function mapDrinkListFromApi(unmappedlist: any[]): DrinkBeerItem[] {
  return unmappedlist.map((drinkItem: any) => {
    const mappedItem: DrinkBeerItem = {
      image_url: drinkItem.image_url,
      name: drinkItem.name,
      description: drinkItem.description,
      food_pairing: drinkItem.food_pairing.join(", "),
      drink_vol: drinkItem.abv,
    };
    return mappedItem;
  });
}

export default {
  obtainDrinks: (context: any) => {
    const page = 1;
    const per_page = 10;
    const url = `${process.env.VUE_APP_PUNK_API}/beers?page=${page}&per_page=${per_page}`;

    return fetch(url, {
      method: "GET",
      headers: getFetchHeaders(),
    })
      .then((response) => response.json())
      .then((data: any) => {
        context.commit("setDrinkList", mapDrinkListFromApi(data));
      });
  },
};
