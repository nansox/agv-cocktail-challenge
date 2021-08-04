import { flushPromises, mount } from "@vue/test-utils";
import HomeView from "@/views/Home.vue";

import { createRouter, createWebHistory } from 'vue-router'

const mockRouterRoutes = [
  {
    path: '/',
    component: {
      template: '<div id="empty">empty</div>',
    }
  },
  {
    path: '/view1',
    component: {
      template: '<div id="view1">view1</div>',
    }
  },
  {
    path: '/view2',
    component: {
      template: '<div id="view2">view2</div>'
    }
  }
]


describe("HomeView", () => {
  it("Router Navigation", async (done) => {

    const router = createRouter({
      history: createWebHistory(),
      routes: mockRouterRoutes
    })

    const wrapper = mount(HomeView, {
      global: {
        plugins: [router],
        mocks: {
          navItems: [
            {
              label: "LabelView1",
              path: "view1",
            },
            {
              label: "LabelView2",
              path: "view2",
            },
          ]
        }
      }
    });

    router.push('/');
    await router.isReady();
    expect(wrapper.find('#empty').text()).toEqual('empty');

    router.push('/view1');
    await flushPromises();
    expect(wrapper.find('#view1').text()).toEqual('view1');

    router.push('/view2');
    await flushPromises();
    expect(wrapper.find('#view2').text()).toEqual('view2');

    done();
  });
});
