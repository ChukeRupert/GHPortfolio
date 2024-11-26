<template>
  <div id = 'skills' :class="{'dark-mode': isDarkMode}">
    <div :class="['skill-card', { 'dark-mode': isDarkMode }]">
      <h3>Programming Languages & Frameworks</h3>
      <ul>
        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" alt="C Logo" width="20" height="20"> C / C++</li>
        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python Logo" width="20" height="20"> Python</li>
        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java Logo" width="20" height="20"> Java</li>
        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript Logo" width="20" height="20"> JavaScript/TypeScript</li>
        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5 Logo" width="20" height="20"> HTML5</li>
        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3 Logo" width="20" height="20"> CSS</li>
      </ul>
    </div>
    <div :class="['skill-card', { 'dark-mode': isDarkMode }]">
      <h3>Embedded Systems</h3>
      <ul>
        <li>Embedded C</li>
        <li>Legacy Artifact Analysis</li>
        <li>Firmware/drivers</li>
      </ul>
    </div>
    <div :class="['skill-card', { 'dark-mode': isDarkMode }]">
      <h3>Web Development / Websites</h3>
      <ul>
        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express Logo" width="20" height="20"> Express</li>
        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" alt="Angular Logo" width="20" height="20"> Angular</li>
        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" alt="Vue.js Logo" width="20" height="20"> Vue.js</li>
        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg" alt="Nuxt Logo" width="20" height="20"> Nuxt</li>
        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node Logo" width="20" height="20"> Node</li>
        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg" alt="jQuery Logo" width="20" height="20"> jQuery</li>
        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="React Logo" width="20" height="20"> React</li>
      </ul>
    </div>
    <div :class="['skill-card', { 'dark-mode': isDarkMode }]">
      <h3>Databases</h3>
      <ul>
        <li> NoSQL</li>
        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt="MongoDB Logo" width="20" height="20"> MongoDB</li>
        <li> SQL</li>
        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL Logo" width="20" height="20"> MySQL</li>
        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" alt="Oracle SQL Logo" width="20" height="20"> Oracle SQL</li>
            </ul>
    </div>
    <div :class="['skill-card', { 'dark-mode': isDarkMode }]">
      <h3>Cloud Technologies & Tools</h3>
      <ul>
        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS Logo" width="20" height="20"> Amazon Web Services (AWS)</li>
        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="git Logo" width="20" height="20"> git</li>
        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" alt="gitlab Logo" width="20" height="20"> gitlab</li>
        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes Logo" width="20" height="20"> Kubernetes</li>
        <li><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker Logo" width="20" height="20"> Docker</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills-Section',
  props: {
    isDarkMode: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
#skills {
  display: grid;
  color: black;
  background-color: #fff;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.skill-card {
  border: 1px solid #ccc;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.skill-card h3 {
  margin-top: 0;
}

.skill-card ul {
  list-style: none;
  padding: 0;
}

.skill-card ul li {
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skill-card ul li img {
  margin-right: 0.5rem;
}

#skills.dark-mode {
  background-color: #333;
  border-color: #444;
  color: #fff;
}
.skill-card.dark-mode  {
  background-color: #444;
  border-color: #555;
  color: #fff;
}

.skill-card h3.dark-mode  {
  color: #fff;
}

.skill-card ul li.dark-mode  {
  color: #fff;
}

</style>