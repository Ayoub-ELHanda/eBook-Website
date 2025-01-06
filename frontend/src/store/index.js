import { createStore } from 'vuex'

import { productGetters, manufacturerGetters } from './getters'
import { productMutations, cartMutations, manufacturerMutations } from './mutations'
import { productActions, manufacturerActions } from './actions'

const store = createStore({
  strict: true,
  state: {
    cart: [],
    product: {},
    products: [],
    manufacturers: []
  },
  mutations: Object.assign({}, productMutations, cartMutations, manufacturerMutations),
  getters: Object.assign({}, productGetters, manufacturerGetters),
  actions: Object.assign({}, productActions, manufacturerActions)
})

export default store
