<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const year = new Date().getFullYear()
let ctx: gsap.Context | undefined

useSeoMeta({
  title: 'Clifford Ray — Software Engineer',
  description: 'Software engineer in Kenya building backend systems, web applications and useful digital products.',
  ogTitle: 'Clifford Ray — Software Engineer',
  ogDescription: 'Backend development, full-stack engineering and system design.'
})

const skills = [
  { title: 'Backend', description: 'I build backend applications and APIs, working with application architecture, authentication, data access and business logic.', tags: ['C#', '.NET 8', 'ASP.NET Core', 'EF Core', 'Dapper', 'REST', 'GraphQL'] },
  { title: 'Frontend', description: 'I build responsive web experiences and connect interfaces to backend services using modern frontend tools.', tags: ['React', 'Vue', 'Nuxt', 'TypeScript', 'Tailwind CSS'] },
  { title: 'Data & architecture', description: 'I work with relational databases and think through modular systems, multi-tenancy, access control and maintainable boundaries.', tags: ['SQL Server', 'PostgreSQL', 'System design', 'Multi-tenancy'] },
  { title: 'Delivery & DevOps', description: 'I work with source control, containerised development and deployment workflows for web applications.', tags: ['Git', 'Docker', 'CI/CD', 'Vercel', 'Railway', 'Render'] }
]
const projects = [
  { name: 'TaskFlow PMS', kind: 'PROJECT MANAGEMENT PLATFORM', description: 'A team-focused project management platform covering workspaces, projects, boards, tasks, collaboration and role-based access.', stack: '.NET 8 · React · SQL Server · GraphQL', state: 'In development', art: 'taskflow' },
  { name: 'Griot', kind: 'AI-ASSISTED PROJECT MANAGEMENT', description: 'An AI-assisted project management platform exploring contextual workflows, multi-tenancy and auditable platform operations.', stack: '.NET 8 · PostgreSQL · React · AI integration', state: 'In development', art: 'griot' },
  { name: 'ChamaFlow', kind: 'MOBILE APPLICATION', description: 'A chama contribution and member-tracking application built around Firebase authentication and Firestore data.', stack: 'Java · Android · Firebase · Firestore', state: 'Personal project', art: 'chama' },
  { name: 'Sababisha Solutions', kind: 'PROFESSIONAL EXPERIENCE', description: 'Currently working at Sababisha Solutions Limited, contributing to software and platform development.', stack: '.NET · SQL Server · Web applications', state: 'Professional experience', art: 'sababisha' }
]
const technologies = [
  { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Nuxt', 'Tailwind CSS'] },
  { title: 'Backend', items: ['C#', '.NET', 'ASP.NET Core', 'Node.js', 'Python', 'REST APIs', 'GraphQL'] },
  { title: 'Data & tools', items: ['SQL Server', 'PostgreSQL', 'MySQL', 'Firebase', 'Git', 'Docker', 'CI/CD'] }
]
onMounted(() => {
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
  <div class="portfolio-page">
    <div class="portfolio-shell">
      <div class="layout-grid">
        <aside class="side-rail">
          <a href="#home" class="side-logo" aria-label="Clifford Ray home">CR</a>
          <div class="side-line"></div>
          <a href="https://github.com/cliffray7" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
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
            </div>
          </nav>

          <main id="home">
            <section class="hero-section">
              <div class="hero-copy">
                <div class="callout">It's me</div>
                <h1 aria-label="Clifford Ray"><span v-for="(letter, i) in 'CLIFFORD'" :key="'a'+i" class="hero-letter">{{ letter }}</span><br><span v-for="(letter, i) in 'RAY'" :key="'b'+i" class="hero-letter">{{ letter }}</span><span class="name-dot">.</span></h1>
                <p class="hero-role">SOFTWARE ENGINEER</p>
                <p class="hero-description">I’m Clifford Ray, a software engineer from Kenya. I build backend systems, web applications and practical digital products, with a growing focus on system design and DevOps.</p>
                <a class="talk-link" href="https://github.com/cliffray7" target="_blank" rel="noreferrer"><span class="talk-circle"><span>LET'S<br>S TALK</span></span><span class="talk-caption">LET'S CONNECT <b>↗</b></span></a>
              </div>
              <div class="hero-visual" aria-label="Clifford Ray monogram illustration">
                <div class="visual-orbit orbit-one"></div><div class="visual-orbit orbit-two"></div>
                <div class="visual-card"><span class="visual-small">BUILDING WITH PURPOSE</span><strong>CR</strong><span class="visual-bottom">BACKEND · FULL-STACK<br>KENYA / 2026</span></div>
                <span class="visual-spark spark-one">✳</span><span class="visual-spark spark-two">✳</span>
              </div>
            </section>

            <section id="skills" class="content-section skills-section" data-reveal>
              <div class="section-intro"><h2>my top skills</h2><p>what i do</p><div class="section-rule"></div></div>
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
                  <div class="about-portrait"><span class="portrait-mark">CR</span><span class="portrait-caption">CLIFFORD RAY · SOFTWARE ENGINEER</span></div>
                  <div class="about-facts">
                    <div><span class="fact-icon">⌘</span><p>Building <b>backend systems</b> and web applications</p></div>
                    <div><span class="fact-icon">◈</span><p>Exploring <b>system design</b> and scalable architecture</p></div>
                    <div><span class="fact-icon">⌁</span><p>Working with <b>DevOps and delivery workflows</b></p></div>
                    <div><span class="fact-icon">◎</span><p>Currently at <b>Sababisha Solutions Limited</b></p></div>
                  </div>
                </div>
                <div class="about-readme">
                  <div class="readme-heading">README</div>
                  <div class="section-rule"></div>
                  <p>I’m a software engineer focused on building useful, maintainable software. My work spans backend development, web applications, database-backed systems and product workflows.</p>
                  <p>I enjoy understanding how systems fit together — from API contracts and data models to user interfaces, access control and deployment. I’m continuing to deepen my skills in system design and DevOps through hands-on product work.</p>
                  <p>My approach is practical: understand the problem, make the architecture clear, build in small steps and keep the software understandable as it grows.</p>
                </div>
              </div>
            </section>

            <section id="work" class="content-section work-section" data-reveal>
              <div class="section-intro"><h2>my works</h2><p>a few of my current and past projects</p><div class="section-rule"></div></div>
              <h3 class="subheading">Web & software applications</h3>
              <div class="project-grid">
                <article v-for="(project, index) in projects" :key="project.name" class="project-card">
                  <div class="project-art" :class="'art-' + project.art">
                    <span class="project-number">0{{ index + 1 }}</span>
                    <div v-if="project.art === 'taskflow'" class="mini-board"><i></i><i></i><i></i><i></i><i></i><i></i></div>
                    <div v-else-if="project.art === 'griot'" class="griot-symbol">G<span>✳</span></div>
                    <div v-else-if="project.art === 'chama'" class="chama-symbol">C<span>+</span></div>
                    <div v-else class="sab-symbol">S<span>PLATFORM WORK</span></div>
                    <span class="project-kind">{{ project.kind }}</span>
                  </div>
                  <div class="project-info"><span class="project-state">{{ project.state }}</span><h4>{{ project.name }}</h4><p>{{ project.description }}</p><span class="project-stack">{{ project.stack }}</span></div>
                </article>
              </div>
              <div class="resume-callout"><p><b>I cook with these ingredients →</b><span>Languages, frameworks, databases and delivery tools I use in my work.</span></p><a href="#stack" class="coral-button">VIEW MY TECH STACK <span>↗</span></a></div>
            </section>

            <section id="stack" class="content-section tech-section" data-reveal>
              <div class="section-intro"><h2>tech i use</h2><p>tools in my toolbox</p><div class="section-rule"></div></div>
              <div v-for="group in technologies" :key="group.title" class="tech-panel"><p class="tech-description">These are some of the technologies I work with across {{ group.title.toLowerCase() }} development.</p><h3>{{ group.title }}</h3><div class="tech-list"><span v-for="item in group.items" :key="item">{{ item }}</span></div></div>
            </section>

            <section id="contact" class="contact-section" data-reveal>
              <h2>keep in touch</h2><p>Kenya</p><a class="contact-github" href="https://github.com/cliffray7" target="_blank" rel="noreferrer">github.com/cliffray7 <span>↗</span></a>
              <div class="social-links"><a href="https://github.com/cliffray7" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a></div>
            </section>
          </main>
          <footer class="site-footer"><span>CR</span><div><a href="#work">works</a><a href="#about">about</a><a href="#stack">tech stack</a></div><p>© {{ year }} clifford ray. all rights reserved</p></footer>
        </div>
      </div>
    </div>
    <div class="colour-stripe"><i></i><i></i><i></i><i></i></div>
  </div>
</template>
