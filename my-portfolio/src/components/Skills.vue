<template>
  <section id="skills">
    <h2>Skills</h2>
    <h3>Programming Languages & Frameworks</h3>
    <ul>
      <li>Python</li>
      <li>C++</li>
      <li>C</li>
      <li>JavaScript/TypeScript</li>
      <li>HTML5</li>
      <li>Java</li>
      <li>CSS</li>
      <li>XML</li>
      <li>Matlab</li>
      <li>Visual Basic</li>
    </ul>
    <h3>Embedded Systems</h3>
    <ul>
      <li>Embedded C</li>
      <li>Legacy Artifact Analysis</li>
      <li>Linux</li>
      <li>Firmware/drivers</li>
      <li>Tools: Visual Studio, Code Composer</li>
    </ul>
    <h3>Web Development / Websites</h3>
    <ul>
      <li>Express</li>
      <li>Angular</li>
      <li>Vue.js</li>
      <li>Node</li>
      <li>jQuery</li>
      <li>React</li>
    </ul>
    <h3>Databases</h3>
    <ul>
      <li>NoSQL</li>
      <li>MongoDB</li>
      <li>SQL</li>
      <li>MySQL</li>
      <li>Oracle SQL</li>
    </ul>
    <h3>Cloud Technologies & Tools</h3>
    <ul>
      <li>Amazon Web Services (AWS)</li>
      <li>git</li>
      <li>gitlab</li>
      <li>Kubernetes</li>
      <li>Docker</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Skills-Section'
}
</script>

<style scoped>
/* Mobile styles */
@media (max-width: 767px) {
    #skills {
        padding: 20px;
    }

    h2 {
        font-size: 24px;
        text-align: center;
    }

    h3 {
        font-size: 20px;
        margin-top: 20px;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        font-size: 16px;
        margin: 5px 0;
    }
}

/* Desktop styles */
@media (min-width: 768px) {
    #skills {
        padding: 40px;
    }

    h2 {
        font-size: 32px;
    }

    h3 {
        font-size: 24px;
        margin-top: 30px;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
    }

    li {
        font-size: 18px;
        margin: 10px 20px;
    }
}
</style>