<template>
  <div class="addCurrency">
    <h1>Adding new currency</h1>

    <form @submit.prevent="formSubmitted">
      <div class="addCurrency__formInputs">
        <select 
          v-model="currency"
        >
          <option disabled value="default">Select currency</option>
          <option 
            v-for="currency in emptyCurrencies" 
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

      <div v-if="message || errors.length" class="addCurrency__infoBox">
        <div v-if="message">
          <p class="addCurrency__message">{{ message }}</p>
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

      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AddCurrency',
  computed: mapGetters(['emptyCurrencies']),
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
  width: 95vw;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 20px 2px lightslategray;
}

.addCurrency__formInputs {
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

.addCurrency__infoBox {
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

p.addCurrency__message {
  color: green;
}
</style>