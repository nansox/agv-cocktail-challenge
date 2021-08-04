import { shallowMount, mount, VueWrapper } from "@vue/test-utils";
import Tab1View from "@/views/Tab1.vue";

import { createStore } from 'vuex';

import ActHotelDeals from "@/store/hotel-deals/act-hotel-deals";
import MutHotelDeals from "@/store/hotel-deals/mut-hotel-deals";
import GetHotelDeals from "@/store/hotel-deals/get-hotel-deals";

const hotelDealsMock = [
  {
    title: "hotelDeal1_title",
    features: ["hotelDeal1_feature1", "hotelDeal1_feature2"],
  },
  {
    title: "hotelDeal2_title",
    features: ["hotelDeal2_feature1", "hotelDeal2_feature2"],
  },
];

const mockState: any = {
  hotelName: "hotelNameTest",
  hotelAssessment: 4,
  hotelDeals: hotelDealsMock
};

const localStore = { actions: ActHotelDeals, mutations: MutHotelDeals, getters: GetHotelDeals, state: mockState };


describe("Tab1View", () => {
  it("render", () => {

    const store = createStore(localStore);

    const wrapper = mount(Tab1View, {
      global: {
        plugins: [store],
        mocks: {
          $t: () => { },
          componentID: 'id'
        }
      },

    });

    // hotel name
    expect(wrapper.find('section').find('header').find('h1').text()).toEqual(mockState.hotelName);

    // hotel stars
    expect(wrapper.find('section').find('header').find('ul').findAll('li').length).toEqual(5);
    expect(wrapper.find('section').find('header').find('ul').findAll('.unmarked-star').length).toEqual(5 - mockState.hotelAssessment);

    // deals features 
    wrapper.findAll('.hotel-deal-card').forEach((card: any, index: number) => {
      card.findAll('.hotel-deal-card_ul_li').forEach((cardListItem: any, subIndex: number) => {
        expect(cardListItem.text()).toEqual(hotelDealsMock[index].features[subIndex]);
      })
      expect(card.find('.hotel-deal-card_header').text()).toEqual(hotelDealsMock[index].title);
    })
  });
});
