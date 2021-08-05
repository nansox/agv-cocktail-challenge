import { mount } from '@cypress/vue'
import App from '@/App.vue'

import router from '@/router/index.ts';
import store from '@/store/index.ts';
import i18n from '@/i18n.ts';


describe('HomeView', () => {
  it('renders a message', () => {

    cy.viewport(1000, 800)

    mount(App, {
      global: {
        plugins: [store, router, i18n]
      }
    })

    cy.get('.home-header').contains('Tab 1').click();
    cy.get('.hotel-deal-card-list_ul').find('.hotel-deal-card-list_li').should('have.length', 5)

    cy.get('.home-header').contains('Tab 3').click();
    cy.get('.beers-list').find('li').should('have.length', 10)
  })
})
