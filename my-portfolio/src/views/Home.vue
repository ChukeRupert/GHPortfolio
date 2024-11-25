<template>
    <div>
      <main>
        <section id="resume-summary">
          <h2>Resume Summary</h2>
          <p>Brief summary of your resume, including key highlights and achievements.</p>
        </section>
        <section id="skills">
          <h2>Skills</h2>
          <Skills />
        </section>
      </main>
    </div>
  </template>
  
  <script>
  import Skills from '../components/Skills.vue'
  
  export default {
    name: 'Home-Page',
    components: {
      Skills
    }
  }
  </script>
  
  <style>
  /* Add styles here */
  </style>