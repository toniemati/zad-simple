const state = {
  currencies: [
    {
      name: 'usd',
      value: 3.96
    },
    {
      name: 'eur',
      value: 4.60
    },
    {
      name: 'gbp',
      value: 5.46
    }
  ]
};

const getters = {
  allCurrencies: (state) => {
    return state.currencies
  }
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
}