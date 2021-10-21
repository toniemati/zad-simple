<template>
  <div id="nav">
    <router-link to="/add">Add currency</router-link>
    <router-link to="/table">Currency table</router-link>
    <router-link to="/convert">Exchange converter</router-link>
  </div>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: hsl(0, 0%, 95%);
}

#app {
  font-family: Lato, sans-serif;
}

#nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  padding: 1rem;
  background-color: #31475E;
}

#nav a {
  text-decoration: none;

  padding: 0.5rem 1rem;
  color: #eee;
  font-weight: bold;
  text-align: center;


  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;
}

#nav a.router-link-exact-active {
  background-color: #3FB984;
  color: #31475E;
}
</style>
