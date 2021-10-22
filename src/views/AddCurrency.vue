<template>
  <div class="addCurrency">
    <h1>Adding new currency</h1>

    <form @submit.prevent="formSubmitted">
      <div class="formInputs">
        <select 
          v-model="currency"
          placeholder="currency..."
        >
          <option disabled value="default">Select currency</option>
          <option 
            v-for="currency in allCurrencies" 
            :key="currency.id" 
            :value="currency.name"
          >
            {{ currency.name.toUpperCase() }}
          </option>
        </select>

        <input 
          type="number" 
          v-model="value" 
          placeholder="Value (eg. 9,99)"
          step="0.01"
        />
      </div>

      <button type="submit">Submit</button>
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
      currency: 'default',
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
      if (this.currency === 'default' || !this.currency)
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

        this.currency = 'default';
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

form {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 20px 2px lightslategray;
}

.formInputs {
  display: flex;
  gap: 2rem;
  width: 100%;
}

select,
input {
  padding: 0.5rem 0.75rem;
  text-align: center;
  width: 50%;
  border: none;
  border-bottom: 1px solid #31475E;
  border-radius: 0;
  background: none;
  overflow: hidden;
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

p.message {
  color: green;
}
</style>