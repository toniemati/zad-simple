<template>
  <div class="addCurrency">
    <h1>Adding new currency</h1>

    <form @submit.prevent="formSubmitted">
      <button type="submit">submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddCurrency',
  methods: {
    formSubmitted: () => {
      console.log('form submitted');
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
</style>