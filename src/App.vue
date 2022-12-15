<template>
  <div id="app">
    <HeaderComponent />
    <nav v-if="$store.getters.login">
      <router-link to="/">Home</router-link> |
      <router-link to="/add">Add person</router-link>
    </nav>
    <router-view class="main" />
    <Footer />
  </div>
</template>

<script>
import HeaderComponent from './components/header/Header.vue';
import Footer from './components/footer/Footer.vue';

export default {
  components: {
    HeaderComponent,
    Footer
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

nav {
  padding: 30px;
}

.main {
  flex: 1
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
