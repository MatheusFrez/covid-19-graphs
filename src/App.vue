<template>
  <div id="app">
    <router-view/>
    <footer class="footer mt-auto py-3 bg-primary text-white">
      <i class="fas fa-coffee"></i>
      <h1>Made with ☕️ and ❤️ by <a href="https://github.com/MatheusFrez" style="color: grey;" target="_blank">Matheus Frez</a></h1>
    </footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
