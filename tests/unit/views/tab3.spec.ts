import { shallowMount, mount, VueWrapper, flushPromises } from "@vue/test-utils";
import Tab3View from "@/views/Tab3.vue";

import { createStore } from 'vuex';

import ActDrinks from "@/store/drinks/act-drinks";
import MutDrinks from "@/store/drinks/mut-drinks";
import GetDrinks from "@/store/drinks/get-drinks";
import StateDrinks from "@/store/drinks/state-drinks";


const localStore = { actions: ActDrinks, mutations: MutDrinks, getters: GetDrinks, state: StateDrinks };

const mockBeers = [
    {
        image_url: 'image_url_1',
        name: 'name_1',
        description: 'description_1',
        food_pairing: ['food_pairing_1'],
        abv: 'drink_vol_1',
    },

    {
        image_url: 'image_url_2',
        name: 'name_2',
        description: 'description_2',
        food_pairing: ['food_pairing_2'],
        abv: 'drink_vol_2',
    }
]

const mapDrinkFromApi = (drinkItem: any) => ({
    image_url: drinkItem.image_url,
    name: drinkItem.name,
    description: drinkItem.description,
    food_pairing: drinkItem.food_pairing.join(", "),
    drink_vol: drinkItem.abv,
})

describe("Tab3View", () => {
    it("render", async () => {

        const store = createStore(localStore);

        process.env.VUE_APP_PUNK_API = '/beersApi'

        //@ts-ignore
        global.fetch = jest.fn((path: string, data: any) =>
            Promise.resolve({
                json: () => Promise.resolve(mockBeers),
            })
        )

        const wrapper = mount(Tab3View, {
            global: {
                plugins: [store],
                mocks: {
                    $t: () => 'translation',
                    componentID: 'id'
                }
            },

        });

        await flushPromises();

        // store list
        expect(store.state.drinks).toEqual(mockBeers.map(mapDrinkFromApi));

        // translations
        expect(wrapper.find('.tab-3_header').find('h1').text()).toEqual('translation')
        expect(wrapper.find('.tab-3_content').find('h1').text()).toEqual('translation')

        // list representation
        wrapper.find('.tab-3_content').findAll('.beer-card').forEach((beerCard: any, index: number) => {
            expect(beerCard.find('.beer-card_figure_img').element.getAttribute('src')).toEqual(mockBeers[index].image_url)

            const beerCardInfo = beerCard.find('.beer-card_info');
            expect(beerCardInfo.find('h3').text()).toEqual(mockBeers[index].name);
            expect(beerCardInfo.find('p').text()).toEqual(mockBeers[index].description);
            expect(beerCardInfo.find('h4').text()).toEqual(mockBeers[index].food_pairing.join(", "));

            expect(beerCard.find('.beer-vol-target').text()).toEqual(mockBeers[index].abv);
        })


    });
});
