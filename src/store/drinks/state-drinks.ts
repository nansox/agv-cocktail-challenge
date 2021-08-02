export interface DrinkBeerItem {
    image_url: string,
    name: string,
    description: string,
    food_pairing: string,
    drink_vol: number
}

export interface DrinksState {
    drinks: DrinkBeerItem[]
}

export default {
    drinks: []
}