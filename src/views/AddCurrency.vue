<template>
  <div class="addCurrency">
    <h1>Adding new currency</h1>

    <form @submit.prevent="formSubmitted">
      <select v-model="currency">
        <option 
          v-for="currency in allCurrencies" 
          :key="currency.id" 
          :value="currency.name"
        >
          {{ currency.name.toUpperCase() }}
        </option>
      </select>

      <input type="number" v-model="value" />

      <button type="submit">submit</button>
    </form>

    <div v-if="message">
      <p class="message">{{ message }}</p>
    </div>

    <div v-if="errors.length">
      <p 
        v-for="error, idx in errors" 
        :key="idx"
      >
        {{ error }}
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AddCurrency',
  computed: mapGetters(['allCurrencies']),
  data: () => {
    return {
      currency: null,
      value: null,
      errors: [],
      message: null
    }
  },
  methods: {
    ...mapActions(['addCurrency']),
    formSubmitted() {
      this.errors = [];
      this.message = null;

      //* if no currency push error
      if (!this.currency)
        this.errors.push('Currency is required.');
      
      //* if no value push error
      if (!this.value)
        this.errors.push('Value is required.');

      //* if no error add to vuex
      if (!this.errors.length) {
        const currency = {
          name: this.currency,
          value: this.value
        }
  
        this.addCurrency(currency);
        this.message = 'Successfully added new currency.';

        this.currency = null;
        this.value = null;
      }
    }
  }
}
</script>

<style scoped>
.addCurrency {
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

p.message {
  color: green;
}
</style>