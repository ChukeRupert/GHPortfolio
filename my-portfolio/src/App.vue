<template>
  <div :class="{'dark-mode': isDarkMode}" id="app">
    <header :class="{'dark-mode': isDarkMode}">
      <h1>Charles (Chuke) Rupert</h1>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/projects">Projects</router-link></li>
        </ul>
      </nav>
      <button id="dark-mode-toggle" @click="toggleDarkMode">Toggle Dark Mode</button>
    </header>
    <router-view :isDarkMode="isDarkMode"></router-view>
    <footer :class="{'dark-mode': isDarkMode}">
      <section id="contact">
        <h2>Contact</h2>
        <p>Email: charles.n.rupert@gmail.com | <i class="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/charlesrupert">LinkedIn</a></p>
      </section>
      <p>&copy; 2024 Your Name</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isDarkMode: true
    }
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

header {
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
}

nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  display: inline;
  margin: 0 1rem;
}

nav ul li a {
  color: white;
  text-decoration: none;
}

main {
  padding: 2rem;
}

section {
  margin-bottom: 2rem;
}

footer {
  background-color: #333;
  color: white;
  text-align: center;
  padding: 1rem;
}

footer #contact {
  margin-top: 1rem;
}

footer #contact h2 {
  margin: 0;
  font-size: 1.5rem;
}

footer #contact p {
  margin: 0.5rem 0 0;
}

/* Dark mode styles */
.dark-mode {
  background-color: #333;
  color: white;
}

header.dark-mode, footer.dark-mode {
  background-color: #1e1e1e;
}

nav ul li a.dark-mode {
  color: #e0e0e0;
}
</style>
