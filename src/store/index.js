import { createStore } from 'vuex'
import currencies from './modules/currencies'

export default createStore({
  modules: {
    currencies
  }
})
