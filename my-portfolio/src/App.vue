<template>
  <div id="app">
    <header>
      <h1>Welcome to My Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <section id="about">
        <h2>About Me</h2>
        <p>Brief introduction about yourself.</p>
      </section>
      <Skills />
      <section id="projects">
        <h2>Projects</h2>
        <p>Details about your projects.</p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>How to get in touch with you.</p>
      </section>
    </main>
    <footer>
      <p>&copy; 2023 Your Name</p>
    </footer>
  </div>
</template>

<script>
import Skills from './components/Skills.vue'

export default {
  name: 'App',
  components: {
    Skills
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
