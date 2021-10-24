<template>
  <div class="currencyTable">
    <h1>Available currencies table</h1>

    <table>
      <tr>
        <th>Currency</th>
        <th>Exchange rate</th>
      </tr>

      <template v-if="filteredCurrencies.length">
        <tr 
          v-for="currency in filteredCurrencies" 
          :key="currency.id"
        >
          <td>{{ currency.name }}</td>
          <td>{{ currency.value }}</td>
        </tr>
      </template>

      <tr v-else>
        <th colspan="2">Fill data in 'add currency' page</th>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CurrencyTable',
  computed: mapGetters(['filteredCurrencies']),
}
</script>

<style scoped>
.currencyTable {
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

table {
  width: 95vw;
  max-width: 500px;
  border-collapse: collapse;
  box-shadow: 0 0 20px 2px lightslategray;

  text-align: center;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
}

tr {
  transition: all 0.2s ease-in-out;
  color: #31475E;
}

/* first tr */
tr:first-child {
  font-size: 1.25rem;
  background-color: #31475E;
  color: hsl(0, 0%, 95%);
}

/* even tr except first */
tr:nth-child(2n + 2) {
  background-color: #3fb98433;
}

/* each tr except first */
tr:nth-child(n + 2):hover {
  background-color: #3FB984;
  color: white;
  font-weight: bold;
}

td {
  text-transform: uppercase;
}

th,
td {
  padding: 1rem 2rem;
}

</style>