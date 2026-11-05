<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

useSeoMeta({
  title: 'Clifford Ray — Backend & Full-stack Engineer',
  description: 'I build dependable backend systems, thoughtful digital products, and clear technical experiences.',
  ogTitle: 'Clifford Ray — Backend & Full-stack Engineer',
  ogDescription: 'Backend engineering, system design, and product development.',
  twitterCard: 'summary_large_image'
})

const menuOpen = ref(false)
const year = new Date().getFullYear()
let animationContext: gsap.Context | undefined

const capabilities = [
  { number: '01', title: 'Backend engineering', description: 'API design, service boundaries, authentication, data access, and dependable application logic.', tools: ['ASP.NET Core', 'Node.js', 'Python', 'PHP'] },
  { number: '02', title: 'System design', description: 'Thinking through modular architecture, multi-tenancy, integration contracts, and operational trade-offs.', tools: ['Microservices', 'REST', 'GraphQL', 'SQL'] },
  { number: '03', title: 'Product development', description: 'Building usable interfaces and connecting frontend experiences to reliable backend services.', tools: ['React', 'Vue', 'TypeScript', 'Flutter'] },
  { number: '04', title: 'DevOps & delivery', description: 'Containerized development, deployment workflows, environment configuration, and practical release quality.', tools: ['Docker', 'Git', 'CI/CD', 'Cloud deployment'] }
]

const projects = [
  { index: '01', category: 'PROJECT MANAGEMENT PLATFORM', name: 'TaskFlow PMS', description: 'A team-focused project management platform with workspaces, projects, boards, tasks, collaboration, and role-based access.', stack: ['.NET 8', 'React', 'SQL Server', 'GraphQL'], status: 'IN DEVELOPMENT', visual: 'taskflow' },
  { index: '02', category: 'AI-ASSISTED PRODUCTIVITY', name: 'Griot', description: 'An AI-assisted project management direction exploring contextual workflows, multi-tenancy, and auditable platform operations.', stack: ['.NET', 'PostgreSQL', 'React', 'AI integration'], status: 'IN DEVELOPMENT', visual: 'griot' },
  { index: '03', category: 'PLATFORM ENGINEERING', name: 'SABABISHA-PMS', description: 'Professional experience contributing to business software and platform engineering at Sababisha Solutions Limited.', stack: ['.NET', 'SQL Server', 'API design', 'Web applications'], status: 'PROFESSIONAL EXPERIENCE', visual: 'sababisha' }
]

function closeMenu() { menuOpen.value = false }

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  gsap.registerPlugin(ScrollTrigger)
  animationContext = gsap.context(() => {
    gsap.from('.hero-copy > *', { y: 22, opacity: 0, duration: 0.75, stagger: 0.09, ease: 'power2.out' })
    gsap.from('.topology-panel', { y: 24, opacity: 0, duration: 0.9, delay: 0.18, ease: 'power2.out' })
    gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
      gsap.from(element, { y: 28, opacity: 0, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } })
    })
  })
})
onBeforeUnmount(() => animationContext?.revert())
</script>

<template>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="container-shell header-inner">
      <a class="brand" href="#home" aria-label="Clifford Ray home" @click="closeMenu"><span class="brand-mark">CR</span><span>CLIFFORD RAY</span></a>
      <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-controls="primary-navigation" :aria-label="menuOpen ? 'Close navigation menu' : 'Open navigation menu'" @click="menuOpen = !menuOpen"><span></span><span></span></button>
      <nav id="primary-navigation" class="main-nav" :class="{ 'is-open': menuOpen }" aria-label="Main navigation">
        <a href="#capabilities" @click="closeMenu">Capabilities</a><a href="#work" @click="closeMenu">Selected work</a><a href="#approach" @click="closeMenu">Approach</a><a href="#contact" @click="closeMenu">Contact</a>
      </nav>
      <a class="header-status" href="https://github.com/cliffray7" target="_blank" rel="noopener noreferrer"><span></span> OPEN TO ENGINEERING</a>
    </div>
  </header>

  <main id="main">
    <section id="home" class="hero container-shell">
      <div class="hero-copy">
        <p class="eyebrow">Backend systems · Product engineering</p><p class="hero-kicker">SOFTWARE ENGINEER / KENYA</p>
        <h1>Making complex systems <span>feel simple.</span></h1>
        <p class="hero-intro">I’m Clifford Ray — a backend and full-stack engineer interested in dependable platforms, thoughtful system design, and software that solves real problems.</p>
        <div class="hero-actions"><a class="button-primary" href="#work">Explore selected work <span aria-hidden="true">↘</span></a><a class="button-quiet" href="https://github.com/cliffray7" target="_blank" rel="noopener noreferrer">GitHub profile <span aria-hidden="true">↗</span></a></div>
        <div class="hero-meta"><span>Backend engineering</span><i></i><span>System design</span><i></i><span>DevOps</span></div>
      </div>
      <div class="topology-panel" aria-label="Illustrative distributed system topology">
        <div class="topology-topline"><span>SYSTEM MAP / CONCEPT</span><span><i></i> ILLUSTRATIVE VIEW</span></div>
        <svg class="topology" viewBox="0 0 600 420" role="img" aria-labelledby="topology-title topology-desc">
          <title id="topology-title">Example service topology</title><desc id="topology-desc">A client connects through an API gateway to application, authentication, cache, and database services.</desc>
          <defs><linearGradient id="route" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#d89b57" stop-opacity=".75" /><stop offset="1" stop-color="#d89b57" stop-opacity=".12" /></linearGradient><radialGradient id="nodeGlow"><stop stop-color="#e9b46f" stop-opacity=".24" /><stop offset="1" stop-color="#e9b46f" stop-opacity="0" /></radialGradient></defs>
          <g class="grid-lines"><path d="M0 70H600M0 140H600M0 210H600M0 280H600M0 350H600" /><path d="M70 0V420M170 0V420M270 0V420M370 0V420M470 0V420M570 0V420" /></g>
          <g fill="none" stroke="url(#route)" stroke-width="1.5"><path d="M104 205 220 205 302 121 416 121" /><path d="M220 205 302 289 416 289" /><path d="M302 121 416 205 506 205" /><path d="M416 121 506 205 416 289" /></g>
          <g class="node" transform="translate(104 205)"><circle class="halo" r="46" /><circle class="ring" r="25" /><circle class="core" r="6" /><text y="52">CLIENT</text></g>
          <g class="node gateway" transform="translate(220 205)"><circle class="halo" r="50" /><circle class="ring" r="29" /><circle class="core" r="8" /><text y="57">API GATEWAY</text></g>
          <g class="node" transform="translate(302 121)"><circle class="halo" r="43" /><circle class="ring" r="24" /><circle class="core" r="6" /><text y="49">APP SERVICE</text></g>
          <g class="node cache" transform="translate(302 289)"><circle class="halo" r="42" /><circle class="ring" r="23" /><circle class="core" r="6" /><text y="49">CACHE</text></g>
          <g class="node" transform="translate(416 121)"><circle class="halo" r="40" /><circle class="ring" r="21" /><circle class="core" r="6" /><text y="46">AUTH</text></g>
          <g class="node" transform="translate(416 289)"><circle class="halo" r="42" /><circle class="ring" r="23" /><circle class="core" r="6" /><text y="49">DATABASE</text></g>
          <g class="node edge" transform="translate(506 205)"><circle class="halo" r="37" /><circle class="ring" r="20" /><circle class="core" r="5" /><text y="44">EDGE</text></g>
          <g class="map-caption"><text x="28" y="34">SERVICE TOPOLOGY / 01</text><text x="28" y="390">MODULAR · SECURE · OBSERVABLE</text></g>
        </svg>
        <div class="topology-footer"><span><b></b> Conceptual architecture</span><span>Not production telemetry</span></div>
      </div>
      <div class="hero-footnote"><span>01 / 04</span><span>SCROLL TO EXPLORE</span><span></span></div>
    </section>

    <section id="capabilities" class="section-block container-shell">
      <div class="section-heading" data-reveal><div><p class="eyebrow">What I work on</p><h2 class="section-title">Engineering across the stack<span class="accent">.</span></h2></div><p class="section-aside">A practical mix of architecture, implementation, and delivery.</p></div>
      <div class="capability-grid">
        <article v-for="item in capabilities" :key="item.number" class="capability-card surface-card" data-reveal><span class="capability-number">{{ item.number }}</span><h3>{{ item.title }}</h3><p>{{ item.description }}</p><div class="tag-list"><span v-for="tool in item.tools" :key="tool">{{ tool }}</span></div></article>
      </div>
    </section>

    <section id="work" class="section-block container-shell">
      <div class="section-heading" data-reveal><div><p class="eyebrow">Selected work</p><h2 class="section-title">Products and platforms<span class="accent">.</span></h2></div><p class="section-aside">A selection of engineering work and products in progress.</p></div>
      <div class="project-grid">
        <article v-for="project in projects" :key="project.index" class="project-card surface-card" data-reveal>
          <div class="project-art" :class="'art-' + project.visual" aria-hidden="true">
            <span class="art-index">{{ project.index }}</span>
            <div v-if="project.visual === 'taskflow'" class="taskflow-art"><div class="art-board"><span></span><span></span><span></span></div><div class="art-board"><span></span><span></span></div><div class="art-board"><span></span><span></span><span></span></div></div>
            <div v-else-if="project.visual === 'griot'" class="griot-art"><span>G</span><i></i><i></i><i></i></div>
            <div v-else class="sababisha-art"><span>CORE</span><i></i><i></i><i></i></div>
            <span class="art-caption">{{ project.category }}</span>
          </div>
          <div class="project-content"><div class="project-status">{{ project.status }}</div><h3>{{ project.name }}</h3><p>{{ project.description }}</p><div class="tag-list"><span v-for="tool in project.stack" :key="tool">{{ tool }}</span></div></div>
        </article>
      </div>
    </section>

    <section id="approach" class="approach-section">
      <div class="container-shell approach-inner">
        <div data-reveal><p class="eyebrow">How I work</p><h2 class="section-title">Good engineering is felt in the details<span class="accent">.</span></h2><p class="approach-copy">I care about the parts people rely on but rarely see: thoughtful boundaries, clear interfaces, useful feedback, and systems that stay understandable as they grow.</p><p class="experience-note"><span></span> Currently working at Sababisha Solutions Limited</p></div>
        <div class="principles" data-reveal>
          <article><span>01</span><div><h3>Make the shape clear</h3><p>Design services and interfaces with responsibilities people can explain.</p></div><b>↗</b></article>
          <article><span>02</span><div><h3>Build for real workflows</h3><p>Start with the work someone needs to get done, then remove friction.</p></div><b>⌁</b></article>
          <article><span>03</span><div><h3>Leave room to grow</h3><p>Favor reliable foundations that can evolve without a rewrite.</p></div><b>◎</b></article>
        </div>
      </div>
    </section>

    <section id="contact" class="contact-section container-shell" data-reveal><div class="contact-panel"><div><p class="eyebrow">Have a system to make simpler?</p><h2>Let’s build something <span>dependable.</span></h2></div><a class="button-primary" href="https://github.com/cliffray7" target="_blank" rel="noopener noreferrer">Connect on GitHub <span aria-hidden="true">↗</span></a><span class="contact-index">CR / {{ year }}</span></div></section>
  </main>

  <footer class="container-shell site-footer"><a class="brand" href="#home"><span class="brand-mark">CR</span><span>CLIFFORD RAY</span></a><span>Thoughtful systems. Useful software.</span><a href="https://github.com/cliffray7" target="_blank" rel="noopener noreferrer">GITHUB ↗</a><span>© {{ year }} Clifford Ray</span></footer>
</template>

<style scoped>
.site-header{height:76px;position:sticky;top:0;z-index:20;border-bottom:1px solid #ffffff12;background:#090b0def;backdrop-filter:blur(16px)}.header-inner{height:100%;display:flex;align-items:center;justify-content:space-between}
.brand{display:inline-flex;align-items:center;gap:10px;font:500 10px var(--font-mono);letter-spacing:.13em}.brand-mark{width:28px;height:28px;display:grid;place-items:center;border:1px solid #55504a;color:var(--accent-light);font:500 9px var(--font-mono)}
.main-nav{display:flex;gap:34px;color:#a9adaf;font-size:11px}.main-nav a,.site-footer a{transition:color .2s}.main-nav a:hover,.site-footer a:hover{color:var(--accent-light)}.header-status{display:flex;align-items:center;gap:8px;color:#c5c6c3;font:8px var(--font-mono);letter-spacing:.06em}.header-status span{width:6px;height:6px;border-radius:50%;background:#91bd8e}.menu-toggle{display:none}
.hero{min-height:660px;padding-top:84px;padding-bottom:65px;position:relative;display:grid;grid-template-columns:1fr 1.02fr;gap:6%;align-items:center}.hero-copy{padding-bottom:36px}.hero-kicker{margin:25px 0 0;color:#7d8586;font:9px var(--font-mono);letter-spacing:.14em}.hero h1{max-width:550px;margin:16px 0 20px;font-size:clamp(48px,5.3vw,72px);line-height:1.06;letter-spacing:-.065em;font-weight:600}.hero h1 span{color:var(--accent-light)}.hero-intro{max-width:455px;color:#a0a4a5;font-size:14px;line-height:1.9}.hero-actions{display:flex;align-items:center;gap:25px;margin-top:30px}.hero-meta{display:flex;align-items:center;gap:12px;margin-top:48px;color:#70777a;font:8px var(--font-mono);letter-spacing:.06em;text-transform:uppercase}.hero-meta i{width:17px;height:1px;background:#41464a}
.topology-panel{position:relative;min-height:440px;border:1px solid #292e31;background:radial-gradient(ellipse at 52% 47%,#1c1d1a 0%,#111416 50%,#0d1012 100%);box-shadow:0 28px 80px #0005;overflow:hidden}.topology-topline,.topology-footer{height:42px;padding:0 16px;display:flex;align-items:center;justify-content:space-between;color:#858b8d;font:8px var(--font-mono);letter-spacing:.08em}.topology-topline{border-bottom:1px solid #252a2d}.topology-topline span:last-child{display:flex;align-items:center;gap:7px;color:#a4b19c}.topology-topline i{width:5px;height:5px;border-radius:50%;background:#91bd8e}.topology{display:block;width:100%;height:auto;min-height:350px}.grid-lines{stroke:#687073;stroke-opacity:.1;stroke-width:.7}.node .halo{fill:url(#nodeGlow)}.node .ring{fill:#121619;stroke:#9c784e;stroke-opacity:.8;stroke-width:1}.node .core{fill:var(--accent-light)}.node.gateway .ring{stroke:#f0bd7c;stroke-width:1.4}.node.cache .ring{stroke:#7ea19c}.node.edge .ring{stroke:#7185a2}.node text{fill:#b3b3ad;text-anchor:middle;font:8px var(--font-mono);letter-spacing:.08em}.map-caption{fill:#727a7c;font:7px var(--font-mono);letter-spacing:.1em}.topology-footer{border-top:1px solid #252a2d;letter-spacing:0}.topology-footer b{display:inline-block;width:5px;height:5px;margin-right:5px;border-radius:50%;background:#91bd8e}.hero-footnote{position:absolute;left:0;right:0;bottom:18px;display:flex;align-items:center;gap:18px;color:#60676b;font:8px var(--font-mono);letter-spacing:.13em}.hero-footnote span:last-child{height:1px;flex:1;background:#24292c}
.section-block{padding:105px 0;border-top:1px solid #202528}.section-heading{display:flex;align-items:end;justify-content:space-between;margin-bottom:34px}.section-aside{max-width:240px;margin-bottom:4px;color:#858b8d;font-size:11px}.capability-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.capability-card{min-height:250px;padding:22px 20px;display:flex;flex-direction:column;align-items:flex-start}.capability-number{color:var(--accent);font:9px var(--font-mono)}.capability-card h3{margin:24px 0 9px;font-size:15px;letter-spacing:-.025em}.capability-card p,.project-content p{color:#92989a;font-size:10px;line-height:1.8}.tag-list{display:flex;flex-wrap:wrap;gap:5px;margin-top:auto;padding-top:13px}.tag-list span{padding:4px 7px;border:1px solid #2e3436;color:#acb0ad;font:7px var(--font-mono)}
.project-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.project-card{min-width:0;transition:transform .25s,border-color .25s}.project-card:hover{transform:translateY(-3px);border-color:#555044}.project-art{height:220px;position:relative;display:grid;place-items:center;overflow:hidden}.art-index{position:absolute;top:14px;right:15px;color:#858b8d;font:8px var(--font-mono)}.art-caption{position:absolute;left:15px;bottom:13px;color:#9a9d9a;font:7px var(--font-mono);letter-spacing:.1em}.art-taskflow{background:radial-gradient(circle at 50% 50%,#383025 0,#1d1b18 44%,#121416 100%)}.taskflow-art{display:flex;gap:8px;align-items:center;transform:perspective(500px) rotateY(-12deg)}.art-board{width:52px;min-height:91px;padding:8px 6px;display:flex;flex-direction:column;gap:7px;border:1px solid #8b7356;background:#171a1a;box-shadow:0 8px 24px #0005}.art-board:nth-child(2){transform:translateY(-12px)}.art-board span{height:12px;border:1px solid #554b3c;background:#28251f}.art-board span:first-child{background:#b88955}.art-griot{background:radial-gradient(circle at 50% 50%,#1c3030 0,#151c1e 52%,#111416 100%)}.griot-art{position:relative;width:125px;height:125px;display:grid;place-items:center;border:1px solid #668b81;border-radius:50%;background:#152322}.griot-art span{font-size:52px;font-weight:600;color:#d2dfd3}.griot-art i{position:absolute;width:8px;height:8px;border-radius:50%;background:#d7aa70}.griot-art i:nth-child(2){top:8px;left:28px}.griot-art i:nth-child(3){right:4px;top:53px}.griot-art i:nth-child(4){bottom:12px;left:35px}.art-sababisha{background:radial-gradient(circle at 50% 50%,#2d3037 0,#171b20 56%,#111416 100%)}.sababisha-art{width:110px;height:110px;position:relative;display:grid;place-items:center;border:1px solid #7e8e9b;color:#d4d8d9;font:9px var(--font-mono);letter-spacing:.1em}.sababisha-art:before{content:'';position:absolute;inset:12px;border:1px solid #7e8e9b55;transform:rotate(45deg)}.sababisha-art i{position:absolute;width:5px;height:5px;border-radius:50%;background:var(--accent-light)}.sababisha-art i:nth-child(2){top:-3px;left:50%}.sababisha-art i:nth-child(3){right:-3px;top:50%}.sababisha-art i:nth-child(4){bottom:-3px;left:50%}.project-content{min-height:240px;padding:20px;display:flex;flex-direction:column;align-items:flex-start}.project-status{color:#b9a17f;font:7px var(--font-mono);letter-spacing:.09em}.project-content h3{margin:13px 0 8px;font-size:19px;letter-spacing:-.04em}.project-content p{margin-bottom:12px}
.approach-section{padding:95px 0;border-top:1px solid #202528;background:#0b0e10}.approach-inner{display:grid;grid-template-columns:.9fr 1.1fr;gap:12%;align-items:start}.approach-inner .section-title{max-width:440px;font-size:clamp(30px,3.2vw,40px)}.approach-copy{max-width:430px;margin-top:20px;color:#969c9d;font-size:12px;line-height:1.9}.experience-note{display:flex;align-items:center;gap:9px;margin-top:26px;color:#b4b9b4;font-size:10px}.experience-note span{width:6px;height:6px;border-radius:50%;background:#91bd8e}.principles article{display:grid;grid-template-columns:42px 1fr 25px;gap:13px;padding:18px 0;border-bottom:1px solid #252a2d}.principles article:first-child{border-top:1px solid #252a2d}.principles article>span{padding-top:3px;color:var(--accent);font:9px var(--font-mono)}.principles h3{margin:0 0 3px;font-size:13px;font-weight:600}.principles p{margin:0;color:#858c8e;font-size:10px}.principles b{color:#797f7f;text-align:right;font-size:16px;font-weight:400}
.contact-section{padding-bottom:85px}.contact-panel{min-height:220px;padding:42px 48px;position:relative;display:flex;align-items:center;justify-content:space-between;gap:30px;border:1px solid #332e25;background:radial-gradient(ellipse at 77% 0%,#382a1938,transparent 50%),#101213}.contact-panel h2{max-width:580px;margin:15px 0 0;font-size:clamp(30px,4vw,45px);line-height:1.12;letter-spacing:-.055em;font-weight:600}.contact-panel h2 span{color:var(--accent-light)}.contact-index{position:absolute;right:14px;bottom:10px;color:#626866;font:7px var(--font-mono);letter-spacing:.1em}.site-footer{min-height:76px;border-top:1px solid #202528;display:flex;align-items:center;justify-content:space-between;color:#71787a;font:8px var(--font-mono);letter-spacing:.06em}
@media(max-width:900px){.hero{grid-template-columns:1fr 1fr;gap:4%}.hero h1{font-size:clamp(42px,6vw,58px)}.topology-panel{min-height:370px}.topology{min-height:290px}.capability-grid{grid-template-columns:repeat(2,1fr)}.project-grid{grid-template-columns:1fr 1fr}.project-card:last-child{grid-column:1/-1;display:grid;grid-template-columns:1fr 1fr}.project-card:last-child .project-art{height:auto;min-height:220px}.project-card:last-child .project-content{min-height:0}}
@media(max-width:640px){html{scroll-padding-top:72px}.container-shell{width:calc(100% - 36px)}.site-header{height:66px}.header-status{display:none}.menu-toggle{display:block;border:0;background:none;padding:8px;cursor:pointer}.menu-toggle span{display:block;width:19px;height:1px;background:#ddd;margin:5px}.main-nav{display:none;position:absolute;top:65px;left:0;right:0;padding:17px 20px 22px;background:#0c0f11;border-bottom:1px solid #252a2e;flex-direction:column;gap:17px}.main-nav.is-open{display:flex}.hero{display:flex;flex-direction:column;align-items:stretch;gap:30px;padding-top:58px;padding-bottom:62px}.hero-copy{padding-bottom:0}.hero h1{font-size:clamp(45px,12vw,64px)}.hero-intro{font-size:13px}.hero-meta{margin-top:32px;flex-wrap:wrap}.topology-panel{min-height:0}.topology{min-height:0}.hero-footnote{bottom:17px}.section-block{padding:70px 0}.section-heading{display:block;margin-bottom:24px}.section-aside{margin:12px 0 0}.capability-grid{grid-template-columns:1fr 1fr;gap:8px}.capability-card{min-height:240px;padding:16px 13px}.capability-card h3{font-size:13px}.capability-card p{font-size:9px}.tag-list span{font-size:6px;padding:3px 5px}.project-grid{grid-template-columns:1fr}.project-card:last-child{grid-column:auto;display:block}.project-card:last-child .project-art{height:220px}.project-card:last-child .project-content{min-height:240px}.approach-section{padding:68px 0}.approach-inner{grid-template-columns:1fr;gap:30px}.contact-panel{min-height:0;padding:30px 23px 48px;display:block}.contact-panel h2{font-size:35px}.contact-panel .button-primary{margin-top:23px}.site-footer{min-height:90px;flex-wrap:wrap;gap:12px;padding-block:17px}.site-footer>span:nth-child(2){display:none}}
@media(max-width:380px){.capability-grid{grid-template-columns:1fr}.capability-card{min-height:190px}.hero-actions{gap:15px}.button-primary{padding-inline:12px}}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{scroll-behavior:auto!important;animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}}
</style>
