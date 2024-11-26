<template>
    <div>
      <main>
        <section id="resume-summary">
          <h2>Resume Summary</h2>
          <p>Charles Rupert is a results-driven software and web developer with expertise in full-stack development, 
            cloud technologies, and database management. He has successfully delivered scalable and efficient solutions 
            using a wide range of tools, including React, Docker, AWS, and MySQL. Charles has led impactful projects such 
            as redeploying an Angular website with AWS serverless architecture to improve scalability and reduce costs and 
            implementing secure game logic for an interactive chess learning platform. With a Bachelor’s in Computer Science 
            (June 2024), strong communication skills, and a history of cross-functional collaboration, he consistently brings 
            innovative problem-solving and attention to detail to his work, making him a valuable asset to any engineering team.</p>
        </section>
        <section id="skills">
          <h2>Tech Stack</h2>
          <Skills :is-dark-mode="isDarkMode" />
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
    },
    props: {
        isDarkMode: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style>
/* Add styles here */
body {
    transition: background-color 0.3s, color 0.3s;
    background-color: #ffffff;
    color: #000000;
}

body.dark-mode {
    background-color: #000000;
    color: #ffffff;
}

#resume-summary, #skills {
    padding: 20px;
}

h2 {
    font-size: 24px;
    margin-bottom: 10px;
}

p {
    font-size: 16px;
}
</style>