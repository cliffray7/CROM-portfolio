<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const year = new Date().getFullYear()
const isDark = ref(false)
function toggleTheme() {
  isDark.value = !isDark.value
  localStorage.setItem('clifford-portfolio-theme', isDark.value ? 'dark' : 'light')
}
let ctx: gsap.Context | undefined

useSeoMeta({
  title: 'Clifford Ray — Software Engineer',
  description: 'Software engineer in Kenya building backend systems, web applications and useful digital products.',
  ogTitle: 'Clifford Ray — Software Engineer',
  ogDescription: 'Backend development, full-stack engineering and system design.'
})

const skills = [
  { title: 'Frontend development', description: 'Building responsive interfaces and integrating them with application APIs.', tags: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS'] },
  { title: 'Backend development', description: 'Developing application services, REST APIs, authentication and data-driven features.', tags: ['C#', 'ASP.NET Core', 'REST APIs', 'API design'] },
  { title: 'System design', description: 'Applying practical architecture concepts to keep applications modular, secure and maintainable.', tags: ['Modular architecture', 'Monoliths & microservices', 'Multi-tenancy', 'Scalability'] },
  { title: 'DevOps & delivery', description: 'Working with development environments, source control, deployment and delivery automation.', tags: ['Docker', 'GitHub Actions', 'CI/CD', 'Linux', 'Nginx', 'Azure'] }
]
const projects = [
  { name: 'TaskFlow PMS', kind: 'PROJECT MANAGEMENT PLATFORM', description: 'A project and task management platform with workspaces, projects, boards, task workflows, collaboration and role-based access.', stack: '.NET 8 · ASP.NET Core · React · SQL Server · GraphQL', state: 'Active development', image: '/images/taskflow-pms-editorial-artwork.svg', imageAlt: 'Abstract connected pathways created for TaskFlow PMS; editorial artwork, not a product screenshot.' },
  { name: 'Griot', kind: 'AI-ASSISTED PROJECT MANAGEMENT', description: 'An AI-assisted project management platform focused on contextual workflows, tenant separation and auditable platform operations.', stack: '.NET 8 · PostgreSQL · AI integration', state: 'Active development', image: '/images/griot-editorial-artwork.svg', imageAlt: 'Abstract layered arcs created for Griot; editorial artwork, not a product screenshot.' },
  { name: 'SABABISHA-PMS', kind: 'BUSINESS MANAGEMENT PLATFORM', description: 'Business software work involving API development, database-backed workflows, administration and platform operations.', stack: 'C# · ASP.NET Core · SQL Server · EF Core', state: 'Professional project work', image: '/images/sababisha-pms-editorial-artwork.svg', imageAlt: 'Abstract geometric forms created for SABABISHA-PMS; editorial artwork, not a product screenshot.' }
]
const technologies = [
  { title: 'Frontend', items: ['JavaScript', 'TypeScript', 'React', 'Tailwind CSS'] },
  { title: 'Backend & APIs', items: ['C#', 'ASP.NET Core', '.NET', 'REST APIs', 'API design'] },
  { title: 'Databases', items: ['SQL Server', 'PostgreSQL', 'MySQL', 'Firebase'] },
  { title: 'Architecture & DevOps', items: ['Modular architecture', 'Monoliths', 'Microservices concepts', 'Docker', 'GitHub Actions', 'Linux', 'Nginx', 'CI/CD'] },
  { title: 'Cloud & deployment', items: ['Azure', 'Vercel', 'Render', 'Railway'] }
]
onMounted(() => {
  // Prevent browser from animating scroll restoration on refresh
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
  window.scrollTo(0, 0)
  isDark.value = localStorage.getItem('clifford-portfolio-theme') === 'dark'
  // Smooth scroll for anchor nav links (since we removed CSS scroll-behavior)
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector((link as HTMLAnchorElement).getAttribute('href')!)
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }) }
    })
  })
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  gsap.registerPlugin(ScrollTrigger)
  ctx = gsap.context(() => {
    gsap.from('.hero-letter', { y: 36, opacity: 0, stagger: 0.045, duration: .7, ease: 'back.out(1.5)' })
    gsap.from('.hero-role, .hero-description, .talk-link', { y: 28, opacity: 0, duration: .7, stagger: .15, delay: .6 })
    gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
      gsap.from(el, { y: 35, opacity: 0, duration: .75, scrollTrigger: { trigger: el, start: 'top 86%', once: true } })
    })
  })
})
onBeforeUnmount(() => ctx?.revert())
</script>

<template>
  <div class="portfolio-page" :class="{ 'theme-dark': isDark }">
    <div class="portfolio-shell">
      <div class="layout-grid">
        <aside class="side-rail">
          <a href="#home" class="side-logo" aria-label="Clifford Ray home">CR</a>
          <div class="side-line"></div>
          <a href="https://github.com/cliffray7" target="_blank" rel="noreferrer" aria-label="GitHub" class="side-icon-link">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/clifford-madialo-21569a389" target="_blank" rel="noreferrer" aria-label="LinkedIn" class="side-icon-link">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z"/></svg>
          </a>
          <span class="side-vertical">SOFTWARE ENGINEER · KENYA</span>
        </aside>

        <div class="main-column">
          <nav class="top-nav" aria-label="Main navigation">
            <a class="nav-email" href="https://github.com/cliffray7" target="_blank" rel="noreferrer">github.com/cliffray7 <span>↗</span></a>
            <div class="nav-links">
              <a href="#work">works</a>
              <a href="#about">about</a>
              <a href="#stack">tech stack</a>
              <a href="#contact">contact</a>
              <button class="theme-toggle" type="button" @click="toggleTheme" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"><span>{{ isDark ? '☀' : '☾' }}</span>{{ isDark ? 'LIGHT' : 'DARK' }}</button>
            </div>
          </nav>

          <main id="home">
            <section class="hero-section">
              <div class="hero-copy">
                <div class="callout">It's me</div>
                <h1 aria-label="Clifford Ray"><span v-for="(letter, i) in 'CLIFFORD'" :key="'a'+i" class="hero-letter">{{ letter }}</span><br><span v-for="(letter, i) in 'RAY'" :key="'b'+i" class="hero-letter">{{ letter }}</span><span class="name-dot">.</span></h1>
                <p class="hero-role">SOFTWARE DEVELOPER</p>
                <p class="hero-description">I’m Clifford Ray, a Software Developer at Sababisha Solutions Limited. I work across frontend and backend development, build API-driven applications, and apply system design and DevOps practices to deliver maintainable software.</p>
                <a class="talk-link" href="mailto:cliffordray61@gmail.com"><span class="talk-circle"><span>LET'S<br>TALK</span></span><span class="talk-caption">LET'S CONNECT <b>↗</b></span></a>
              </div>
              <div class="hero-visual">
                <div class="hero-avatar">
                  <img class="hero-illustration" src="/images/image.png" alt="Illustrated portrait of Clifford Ray." width="940" height="1674" fetchpriority="high">
                </div>
              </div>
            </section>

            <section id="skills" class="content-section skills-section" data-reveal>
              <div class="section-intro"><h2>My Top Skills</h2><p>what i do</p><div class="section-rule"></div></div>
              <div class="skills-panel">
                <div class="skills-copy">
                  <article v-for="skill in skills" :key="skill.title" class="skill-item">
                    <h3>{{ skill.title }}</h3><p>{{ skill.description }}</p>
                    <div class="skill-tags"><span v-for="tag in skill.tags" :key="tag">{{ tag }}</span></div>
                  </article>
                  <a href="#work" class="coral-button">SEE MY WORKS <span>↗</span></a>
                </div>
                <div class="skills-illustration" aria-hidden="true">
                  <div class="illustration-window"><div class="window-top"><i></i><i></i><i></i><span>developer.toolkit</span></div><div class="code-lines"><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b></div><div class="floating-chip chip-a">API</div><div class="floating-chip chip-b">DB</div><div class="floating-chip chip-c">UI</div></div>
                  <div class="illustration-circle"></div>
                </div>
              </div>
            </section>

            <section id="about" class="about-section" data-reveal>
              <div class="about-card">
                <div class="about-top">
                  <div class="about-portrait"><span class="portrait-mark">CR</span><span class="portrait-caption">CLIFFORD RAY · SOFTWARE DEVELOPER</span></div>
                  <div class="about-facts">
                    <div><span class="fact-icon">⌘</span><p>Working across <b>frontend and backend development</b></p></div>
                    <div><span class="fact-icon">◈</span><p>Applying <b>system design</b> and modular architecture</p></div>
                    <div><span class="fact-icon">⌁</span><p>Using <b>DevOps and CI/CD</b> workflows</p></div>
                    <div><span class="fact-icon">◎</span><p>Software Developer at <b>Sababisha Solutions Limited</b></p></div>
                  </div>
                </div>
                <div class="about-readme">
                  <div class="readme-heading">README</div>
                  <div class="section-rule"></div>
                  <p>I’m a Software Developer at Sababisha Solutions Limited, working across frontend and backend development. My experience includes building web applications, developing REST APIs, integrating databases and implementing product workflows.</p>
                  <p>I’m interested in how systems fit together: API contracts, data models, authentication and authorization, modular architecture, deployment and operational reliability. I apply system design concepts across monolithic and microservice-based architectures.</p>
                  <p>My toolkit includes C#, ASP.NET Core, React, JavaScript, TypeScript, SQL Server, PostgreSQL, MySQL and Firebase, alongside Docker, GitHub Actions, Linux, Nginx and cloud deployment platforms.</p>
                </div>
              </div>
            </section>

            <section id="work" class="content-section work-section" data-reveal>
              <div class="section-intro"><h2>My Works</h2><p>selected projects and professional work</p><div class="section-rule"></div></div>
              <h3 class="subheading">Web & software applications</h3>
              <div class="project-grid">
                <article v-for="(project, index) in projects" :key="project.name" class="project-card">
                  <div class="project-art">
                    <img class="project-art-image" :src="project.image" :alt="project.imageAlt" width="1200" height="760" loading="lazy" decoding="async">
                    <span class="project-art-note">ORIGINAL ARTWORK · NOT PRODUCT UI</span>
                    <span class="project-number">0{{ index + 1 }}</span>
                    <span class="project-kind">{{ project.kind }}</span>
                  </div>
                  <div class="project-info"><span class="project-state">{{ project.state }}</span><h4>{{ project.name }}</h4><p>{{ project.description }}</p><span class="project-stack">{{ project.stack }}</span></div>
                </article>
              </div>
              <div class="resume-callout"><p><b>How I build software →</b><span>Languages, frameworks, databases and delivery tools I use in my work.</span></p><a href="#stack" class="coral-button">VIEW MY TECH STACK <span>↗</span></a></div>
            </section>

            <section id="stack" class="content-section tech-section" data-reveal>
              <div class="section-intro"><h2>Tech I Use</h2><p>tools in my toolbox</p><div class="section-rule"></div></div>
              <div v-for="group in technologies" :key="group.title" class="tech-panel"><p class="tech-description">These are some of the technologies I work with across {{ group.title.toLowerCase() }} development.</p><h3>{{ group.title }}</h3><div class="tech-list"><span v-for="item in group.items" :key="item">{{ item }}</span></div></div>
            </section>

            <section id="contact" class="contact-section" data-reveal>
              <h2>Keep in Touch</h2>
              <p>Kenya &middot; Available for opportunities</p>
              <a class="contact-email" href="mailto:cliffordray61@gmail.com">cliffordray61@gmail.com <span>&#8599;</span></a>
              <div class="social-links">
                <a href="https://github.com/cliffray7" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <span class="social-icon">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                  </span>GitHub
                </a>
                <a href="https://www.linkedin.com/in/clifford-madialo-21569a389" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <span class="social-icon">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z"/></svg>
                  </span>LinkedIn
                </a>
                <a href="https://wa.me/+254707068460" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                  <span class="social-icon">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.55c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.71 4.3 3.8.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z"/></svg>
                  </span>WhatsApp
                </a>
                <a href="https://www.instagram.com/_its.o_kember_" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <span class="social-icon">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                  </span>Instagram
                </a>
              </div>
            </section>
          </main>
          <footer class="site-footer"><span>CR</span><div><a href="#work">works</a><a href="#about">about</a><a href="#stack">tech stack</a></div><p>© {{ year }} Clifford Ray. All rights reserved</p></footer>
        </div>
      </div>
    </div>
    <div class="colour-stripe"><i></i><i></i><i></i><i></i></div>
  </div>
</template>
