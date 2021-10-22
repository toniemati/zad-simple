<template>
  <div class="currencyConverter">
    <h1>Currency converter</h1>

    <form 
      @submit.prevent="convert"
      v-if="filteredCurrencies.length"
    >
      <div class="currencyConveter__formInputs">
        <select 
          v-model="currency"
          @input="resetPln"
        >
          <option disabled value="default">Select currency</option>
          <option 
            v-for="currency in filteredCurrencies" 
            :key="currency.id" 
            :value="currency"
          >
            {{ currency.name.toUpperCase() }} ({{ currency.value }})
          </option>
        </select>

        <input 
          type="number" 
          v-model="value"
          placeholder="Value (eg. 9,99)"
          step="0.01"
          @input="resetPln"
        />
      </div>

      <div class="currencyConveter__output" v-if="pln">
        <div class="currencyConveter__output--currency">
          <span class="currencyConveter__output--value">{{ value }}</span>
          <span class="currencyConveter__output--text">{{ currency.name.toUpperCase() }}</span>
        </div>

        <div>=></div>
        
        <div class="currencyConveter__output--currency">
          <span class="currencyConveter__output--value">{{ pln }}</span>
          <span class="currencyConveter__output--text">PLN</span>
        </div>
      </div>

      <div class="currencyConverter__info" v-if="errors.length">
        <p 
          v-for="error, idx in errors" 
          :key="idx"
        >
          {{ error }}
        </p>
      </div>

      <button type="submit">Convert</button>
    </form>

    <div class="currencyConverter__info" v-else>
      <h3>Fill data in 'add currency' page to convert something.</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CurrencyConverter',
  data: () => {
    return {
      currency: 'default',
      value: null,
      pln: null,
      errors: [],
    }
  },
  computed: mapGetters(['filteredCurrencies']),
  methods: {
    convert() {
      this.errors = [];
      this.pln = null;

      //* if no currency selected push error
      if (!this.currency)
        this.errors.push('Please select currency you want to convert.');

      //* if no value entered push error
      if (!this.value)
        this.errors.push('Please enter a value you want to convert.');

      //* setting pln value if no errors
      if (!this.errors.length)
        this.pln = (this.currency.value * this.value).toFixed(2); //* 2 decimal points
    },
    resetPln() {
      this.pln = null;
    }
  }
}
</script>

<style scoped>
.currencyConverter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2rem;

  margin: 2rem 0;
}

h1 {
  text-align: center;
  font-size: 3rem;
  color: #3fb984;
}

form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 20px 2px lightslategray;
}

.currencyConveter__formInputs {
  display: flex;
  gap: 2rem;
  width: 100%;
}

select,
input {
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  text-align: center;
  width: 50%;
  border: none;
  border-bottom: 1px solid #31475E;
  border-radius: 0;
  background: none;
  overflow: hidden;
}

.currencyConverter__info {
  text-align: center;
}

button {
  padding: 1rem 2rem;
  border: none;
  background-color: #31475E;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  letter-spacing: 2px;
  transition: background-color 0.2s ease-in-out;
}

button:hover {
  background-color: #597ea7;
}

p {
  font-size: 0.9rem;
  color: red;
  font-weight: bold;
}

.currencyConveter__output--currency {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
}

.currencyConverter__output {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  font-size: 2rem;
  font-weight: bold;
}

.currencyConveter__output--value {
  color: #31475E;
}

.currencyConveter__output--text {
  color: #3fb984;
}

</style>