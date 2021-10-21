<template>
  <div class="currencyConverter">
    <h1>Currency converter</h1>

    <form @submit.prevent="convert">
      <input type="number" v-model="value" />

      <select v-model="currency">
        <option v-for="currency in allCurrencies" :key="currency.name" :value="currency">
          {{ currency.name.toUpperCase() }}
        </option>
      </select>

      <button type="submit">Convert</button>
    </form>

    <div class="output" v-if="pln">
      <div class="outputCurrency">
        <span class="outputValue">{{ value }}</span>
        <span class="outputText">{{ currency.name.toUpperCase() }}</span>
      </div>
      <div>=></div>
      <div class="outputCurrency">
        <span class="outputValue">{{ pln }}</span>
        <span class="outputText">PLN</span>
      </div>
    </div>

    <div v-if="errors.length">
      <p v-for="error, i in errors" :key="i">
        {{ error }}
      </p>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CurrencyConverter',
  data: () => {
    return {
      currency: null,
      value: null,
      pln: null,
      errors: []
    }
  },
  computed: mapGetters(['allCurrencies']),
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

p {
  font-size: 0.9rem;
  color: red;
  font-weight: bold;
}

.outputCurrency {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
}

.output {
  display: flex;
  flex-direction: row;
  gap: 1rem;

  font-size: 2rem;
  font-weight: bold;
}

.outputValue {
  color: #31475E;
}

.outputText {
  color: #3fb984;
}

</style>