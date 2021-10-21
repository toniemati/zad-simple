const state = {
  currencies: [
    {
      id: 1,
      name: 'usd',
      value: null
    },
    {
      id: 2,
      name: 'eur',
      value: null
    },
    {
      id: 3,
      name: 'gbp',
      value: null
    }
  ]
};

const getters = {
  //* return all currencies
  allCurrencies: (state) =>state.currencies,

  //* return currencies with value
  filteredCurrencies: (state) => state.currencies.filter((curr) => curr.value),

};

const actions = {
  //* commiting mutation to add currency
  addCurrency: ({ commit }, currency) => commit('addCurrency', currency),

};

const mutations = {
  //* adding currency
  addCurrency: (state, currency) => {
    state.currencies = state.currencies.map((curr) => {
      if (curr.name === currency.name)
        curr.value = currency.value;

      return curr;
    })
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}