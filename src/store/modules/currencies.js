const state = {
  currencies: [
    {
      id: '11',
      name: 'usd',
      value: null
    },
    {
      id: '22',
      name: 'eur',
      value: null
    },
    {
      id: '33',
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

  //* return currencies
  emptyCurrencies: (state) => state.currencies.filter((curr) => !curr.value),

};

const actions = {
  //* commiting mutation to add currency
  addCurrency: ({ commit }, currency) => commit('addCurrency', currency),

};

const mutations = {
  //* adding currency
  // addCurrency: (state, currency) => {
  //   state.currencies = state.currencies.map((curr) => {
  //     if (curr.name === currency.name)
  //       curr.value = currency.value;

  //     return curr;
  //   })
  // },

  //* Normally I would ask but now I made 2 functions, first changing values, second pushing
  //* just uncomment first and comment second

  addCurrency: (state, currency) => {
    //* kinda random id during production
    const id = '_' + Math.random().toString(32).substr(2, 9);
    state.currencies.push({ ...currency, id });
    console.log(state.currencies);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}