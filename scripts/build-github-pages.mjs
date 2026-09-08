import { mkdir, copyFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const outDir = path.join(root, 'out');
const basePath = '/Portafolio';
const cvFile = 'CV_Cristhian_Rolon.docx';
const icons = {
  linkedin:
    '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 1 1-.02 5 2.5 2.5 0 0 1 .02-5ZM3 9.75h4v10.76H3V9.75Zm6.25 0h3.83v1.47h.05c.53-.96 1.84-1.78 3.78-1.78 4.04 0 4.79 2.43 4.79 5.6v5.47h-4v-4.85c0-1.16-.02-2.65-1.77-2.65-1.78 0-2.05 1.27-2.05 2.57v4.93h-4V9.75Z"/></svg>',
  github:
    '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.19-3.37-1.19-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.9 1.52 2.35 1.08 2.92.82.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.6 9.6 0 0 1 12 6.98c.85 0 1.7.11 2.5.34 1.9-1.3 2.74-1.03 2.74-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>',
  instagram:
    '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
  mail:
    '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
};

const data = {
  es: {
    nav: ['ABOUT', 'EXPERIENCE', 'PROJECTS', 'CV'],
    role: 'Analista de Sistemas-Desarrollador FullStack',
    summary: 'Construyo e implemento sistemas empresariales con impacto real.',
    download: 'Descargar CV',
    about: [
      `Hola, soy Cristhian Rolon (conocido en mis proyectos como Thian). Soy Licenciado en Analisis de Sistemas Informaticos y desde 2017 formo parte de <a href="https://py.linkedin.com/company/inventivapy">Grupo Inventiva S.A.C.I.</a> Mi carrera ha sido de evolucion constante: comence trabajando con Oracle Forms e iReport hasta consolidarme como Analista de Sistemas, Desarrollador Java y DBA.`,
      'Mi experiencia abarca el ciclo completo del software. Al integrarme al equipo Java, participe en la creacion de la primera version web del ERP de la empresa. Desde entonces, he trabajado en multiples implementaciones donde combino el desarrollo eficiente, el diseno de bases de datos y la comunicacion directa con usuarios y directivos.',
      'En 2022 estuve a cargo del desarrollo e implementacion del Sistema Integrado DIMABEL (SID). La implementacion fue exitosa y tuvo un impacto institucional importante; llevandome a recibir un reconocimiento oficial por parte del director de DIGEMABEL en 2024.',
      `Me motiva investigar y generar soluciones originales a problemas reales, algo que reflejo en los <a href="https://github.com/ThianR?tab=repositories">repositorios de proyectos personales de mi perfil</a>. Cuando no estoy escribiendo codigo, disfruto desconectar haciendo rodadas con mi familia y amigos.`,
    ],
    experience: [
      ['2019 - PRESENTE', 'Analista de Sistemas-Desarrollador FullStack', 'Grupo Inventiva S.A.C.I', 'Participo en el desarrollo e implementacion de soluciones Java, nuevas versiones del ERP web de la empresa y proyectos para clientes con trato directo con usuarios, equipos tecnicos y directivos.', ['Java', 'ERP Web', 'DBA', 'Implementacion']],
      ['2022', 'Responsable de desarrollo e implementacion', 'SID - Sistema Integrado DIMABEL', 'Lidere el desarrollo e implementacion del sistema SID. La puesta en marcha fue exitosa y acompano un cambio institucional de alto impacto: DIMABEL paso a convertirse en DIGEMABEL, Direccion General de Material Belico.', ['Java', 'Sistemas publicos', 'Implementacion', 'Usuarios clave']],
      ['2024', 'Reconocimiento institucional', 'DIGEMABEL', 'Recibi un reconocimiento por parte del director de DIGEMABEL por el trabajo realizado y el impacto del sistema implementado.', ['Reconocimiento', 'Impacto institucional']],
      ['2017 - 2019', 'Desarrollador Oracle Forms e iReport', 'Grupo Inventiva S.A.C.I', 'Inicie mi carrera desarrollando y manteniendo soluciones con Oracle Forms e iReport, trabajando sobre procesos empresariales y reportes operativos antes de incorporarme al equipo Java.', ['Oracle Forms', 'iReport', 'Reportes', 'Procesos']],
    ],
    cv: {
      eyebrow: 'Resume',
      title: 'Curriculum Vitae',
      description: 'Version descargable de mi perfil profesional como Analista de Sistemas-Desarrollador FullStack, con experiencia Java, bases de datos e implementacion de sistemas empresariales.',
    },
    footer: 'Disenado y construido por Thian Rolon. Inspirado en portafolios oscuros, editoriales y orientados a proyectos. El codigo vive en la rama main del repositorio.',
    labels: ['Abrir demo de', 'Abrir repositorio de', 'Volver al inicio'],
  },
  en: {
    nav: ['ABOUT', 'EXPERIENCE', 'PROJECTS', 'CV'],
    role: 'Systems Analyst-FullStack Developer',
    summary: 'I build and implement business systems with real-world impact.',
    download: 'Download CV',
    about: [
      `Hi, I am Cristhian Rolon (known in my projects as Thian). I hold a degree in Computer Systems Analysis and since 2017 I have been part of <a href="https://py.linkedin.com/company/inventivapy">Grupo Inventiva S.A.C.I.</a> My career has been a constant evolution: I started working with Oracle Forms and iReport and grew into a Systems Analyst, Java Developer and DBA.`,
      'My experience covers the full software lifecycle. After joining the Java team, I participated in building the first web version of the company ERP. Since then, I have worked on multiple implementations combining efficient development, database design and direct communication with users and executives.',
      'In 2022 I was responsible for the development and implementation of SID, the Integrated DIMABEL System. The implementation was successful and had meaningful institutional impact, which led me to receive official recognition from the director of DIGEMABEL in 2024.',
      `I am motivated by research and by creating original solutions to real problems, something reflected in the <a href="https://github.com/ThianR?tab=repositories">personal project repositories on my profile</a>. When I am not writing code, I enjoy disconnecting on rides with my family and friends.`,
    ],
    experience: [
      ['2019 - PRESENT', 'Systems Analyst-FullStack Developer', 'Grupo Inventiva S.A.C.I', 'I work on Java solutions, new versions of the company ERP web platform and client projects, collaborating directly with users, technical teams and executives.', ['Java', 'ERP Web', 'DBA', 'Implementation']],
      ['2022', 'Development and implementation lead', 'SID - Integrated DIMABEL System', 'I led the development and implementation of SID. The launch was successful and supported a high-impact institutional change: DIMABEL became DIGEMABEL, the General Directorate of War Material.', ['Java', 'Public systems', 'Implementation', 'Key users']],
      ['2024', 'Institutional recognition', 'DIGEMABEL', 'I received recognition from the director of DIGEMABEL for the work delivered and the impact of the implemented system.', ['Recognition', 'Institutional impact']],
      ['2017 - 2019', 'Oracle Forms and iReport Developer', 'Grupo Inventiva S.A.C.I', 'I began my career developing and maintaining Oracle Forms and iReport solutions, working on business processes and operational reports before joining the Java team.', ['Oracle Forms', 'iReport', 'Reports', 'Processes']],
    ],
    cv: {
      eyebrow: 'Resume',
      title: 'Curriculum Vitae',
      description: 'Downloadable version of my professional profile as a Systems Analyst-FullStack Developer, with Java, database and business systems implementation experience.',
    },
    footer: 'Designed and built by Thian Rolon. Inspired by dark, editorial and project-focused portfolios. The code lives on the repository main branch.',
    labels: ['Open demo for', 'Open repository for', 'Back to top'],
  },
};

const projects = {
  es: [
    ['Horus', 'Sistema de asistencia para administrar empleados, estructura organizacional, turnos fijos y flexibles, solicitudes del empleado y licenciamiento propio.', ['HTML', 'RRHH', 'Seguridad'], 'https://github.com/ThianR/Horus'],
    ['Portico', 'Middleware modular en Spring Boot y Java para integracion con SIFEN: XML, firma digital, KUDE y comunicacion API para facturacion electronica.', ['Java', 'Spring Boot', 'SIFEN'], 'https://github.com/ThianR/Portico'],
    ['BikerSquad', 'Walkie-talkie P2P en Flutter para grupos de motociclismo y ciclismo, con Wi-Fi local, QR, AES-256, Opus, VAD y AEC.', ['Flutter', 'Dart', 'Audio P2P'], 'https://github.com/ThianR/BikerSquad'],
    ['MunicipaLink', 'Plataforma de participacion ciudadana para reportar incidencias urbanas con geolocalizacion, seguimiento y gamificacion.', ['Web', 'PLpgSQL', 'Civic tech'], 'https://github.com/ThianR/MunicipaLink', 'https://municipalink.vercel.app'],
    ['ViyuFlow', 'App movil offline-first de finanzas personales para ingresos, presupuestos, gastos, multiples divisas y registro por voz.', ['Dart', 'Mobile', 'Offline-first'], 'https://github.com/ThianR/ViyuFlow'],
    ['TokenCal', 'Visualizador local de contexto para desarrolladores y agentes de IA: tokens, profundidad de arquitectura, deuda tecnica y costos.', ['TypeScript', 'IA tooling', 'Analisis'], 'https://github.com/ThianR/TokenCal'],
  ],
  en: [
    ['Horus', 'Attendance system for managing employees, organizational structure, fixed and flexible shifts, employee requests and proprietary licensing.', ['HTML', 'HR', 'Security'], 'https://github.com/ThianR/Horus'],
    ['Portico', 'Modular Spring Boot and Java middleware for SIFEN integration: XML, digital signature, KUDE and API communication for electronic invoicing.', ['Java', 'Spring Boot', 'SIFEN'], 'https://github.com/ThianR/Portico'],
    ['BikerSquad', 'P2P walkie-talkie in Flutter for motorcycle and cycling groups, with local Wi-Fi, QR, AES-256, Opus, VAD and AEC.', ['Flutter', 'Dart', 'P2P audio'], 'https://github.com/ThianR/BikerSquad'],
    ['MunicipaLink', 'Citizen participation platform for reporting urban issues with geolocation, tracking and gamification.', ['Web', 'PLpgSQL', 'Civic tech'], 'https://github.com/ThianR/MunicipaLink', 'https://municipalink.vercel.app'],
    ['ViyuFlow', 'Offline-first mobile personal finance app for income, budgets, expenses, multiple currencies and voice-based records.', ['Dart', 'Mobile', 'Offline-first'], 'https://github.com/ThianR/ViyuFlow'],
    ['TokenCal', 'Local context visualizer for developers and AI agents: tokens, architecture depth, technical debt and costs.', ['TypeScript', 'AI tooling', 'Analysis'], 'https://github.com/ThianR/TokenCal'],
  ],
};

function tags(items) {
  return items.map((item) => `<li class="tech-pill">${item}</li>`).join('');
}

function experienceRows(lang) {
  return data[lang].experience
    .map(([period, role, company, description, stack]) => `
      <article class="portfolio-row">
        <p class="period">${period}</p>
        <div>
          <h3>${role}<span> · </span><strong>${company}</strong></h3>
          <p>${description}</p>
          <ul>${tags(stack)}</ul>
        </div>
      </article>`)
    .join('');
}

function projectRows(lang) {
  return projects[lang]
    .map(([name, description, stack, href, live]) => `
      <article class="portfolio-row project-row">
        <div class="project-thumb" aria-hidden="true">{} </div>
        <div>
          <div class="project-head">
            <h3>${name}</h3>
            <div>
              ${live ? `<a href="${live}" aria-label="${data[lang].labels[0]} ${name}">↗</a>` : ''}
              <a href="${href}" aria-label="${data[lang].labels[1]} ${name}">⑂</a>
            </div>
          </div>
          <p>${description}</p>
          <ul>${tags(stack)}</ul>
        </div>
      </article>`)
    .join('');
}

function languageLayer(lang) {
  const t = data[lang];
  return `
    <template id="content-${lang}">
      <span data-slot="role">${t.role}</span>
      <span data-slot="summary">${t.summary}</span>
      <span data-slot="download">${t.download}</span>
      <span data-slot="aboutNav">${t.nav[0]}</span>
      <span data-slot="experienceNav">${t.nav[1]}</span>
      <span data-slot="projectsNav">${t.nav[2]}</span>
      <span data-slot="cvNav">${t.nav[3]}</span>
      <div data-slot="about">${t.about.map((item) => `<p>${item}</p>`).join('')}</div>
      <div data-slot="experience">${experienceRows(lang)}</div>
      <div data-slot="projects">${projectRows(lang)}</div>
      <span data-slot="cvEyebrow">${t.cv.eyebrow}</span>
      <span data-slot="cvTitle">${t.cv.title}</span>
      <span data-slot="cvDescription">${t.cv.description}</span>
      <span data-slot="footer">${t.footer}</span>
      <span data-slot="backTop">${t.labels[2]}</span>
    </template>`;
}

const html = `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Thian Rolon | Portafolio</title>
  <meta name="description" content="Portafolio profesional bilingue de Cristhian Rolon, conocido como Thian Rolon.">
  <link rel="icon" href="${basePath}/favicon.svg">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root{--bg:#0f172a;--fg:#d7e0f2;--muted:#94a3b8;--soft:#64748b;--line:#334155;--sky:#7dd3fc;--panel:rgba(15,23,42,.78)}
    *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--bg);color:var(--fg);font-family:Inter,Arial,sans-serif}::selection{background:rgba(125,211,252,.25)}
    body:before{content:"";position:fixed;inset:0;pointer-events:none;background:radial-gradient(620px circle at var(--x,50%) var(--y,20%),rgba(125,161,217,.13),rgba(56,189,248,.05) 34%,transparent 68%)}
    a{color:#e2e8f0;text-decoration:none;transition:color .18s ease,transform .18s ease}a:hover{color:var(--sky)}
    .language-switch{position:fixed;right:1rem;top:1rem;z-index:50;display:inline-flex;border:1px solid rgba(51,65,85,.8);border-radius:999px;background:rgba(15,23,42,.75);padding:.25rem;box-shadow:0 18px 60px rgba(2,6,23,.24);backdrop-filter:blur(18px)}
    .language-switch button{border:0;border-radius:999px;background:transparent;color:var(--muted);padding:.55rem .75rem;font-size:.75rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;cursor:pointer}.language-switch button.active{background:#e2e8f0;color:#020617}.language-switch button:not(.active):hover{color:var(--sky)}
    .shell{position:relative;z-index:1;display:grid;grid-template-columns:1fr;max-width:1200px;min-height:100vh;margin:0 auto;padding:3rem 1.5rem}.intro{padding-top:1rem}.intro h1{margin:0;color:#f1f5f9;font-size:clamp(2.4rem,7vw,3.1rem);line-height:1.1}.intro h2{margin:.75rem 0 0;color:#e2e8f0;font-size:1.25rem}.intro p{max-width:20rem;margin:1rem 0 0;color:var(--muted);font-size:1.1rem;line-height:1.65}
    .resume-link{display:inline-flex;align-items:center;gap:.5rem;margin-top:2rem;font-size:.85rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase}.resume-link:hover svg,.resume-download:hover svg{transform:translateY(2px)}svg{width:1.25rem;height:1.25rem;transition:transform .18s ease}.socials svg:not([fill="none"]),.dock-actions svg:not([fill="none"]){fill:currentColor}
    nav{display:none;margin-top:4rem}nav a{display:flex;height:2.5rem;align-items:center;color:var(--soft);font-size:.75rem;font-weight:800;letter-spacing:.16em;text-transform:uppercase}nav span:first-child{width:2rem;height:1px;margin-right:1rem;background:#475569;transition:all .18s ease}nav a.active,nav a:hover{color:#e2e8f0}nav a.active span:first-child,nav a:hover span:first-child{width:4rem;background:#e2e8f0}
    .socials{display:flex;gap:1.25rem;margin-top:3rem}.socials a{display:grid;width:2rem;height:2rem;place-items:center;color:var(--muted)}.socials a:hover{transform:translateY(-4px);filter:drop-shadow(0 0 18px rgba(125,161,217,.25))}
    main.content{padding-top:4rem}.mobile-title{position:sticky;top:0;z-index:10;margin:0 -1.5rem 1rem;padding:1.25rem 1.5rem;background:rgba(15,23,42,.86);backdrop-filter:blur(18px)}.mobile-title h2{margin:0;color:#e2e8f0;font-size:.85rem;letter-spacing:.18em}
    section{scroll-margin-top:6rem}.about p,.portfolio-row p{color:var(--muted);font-size:1rem;line-height:1.75}.about p{margin:0 0 1.25rem}.about a{font-weight:600}
    .section-divider{height:1px;margin:7rem 0 0;background:linear-gradient(90deg,transparent,rgba(148,163,184,.18) 14%,rgba(125,161,217,.45) 50%,rgba(148,163,184,.14) 86%,transparent);animation:dividerGlow linear both;animation-timeline:view();animation-range:entry 0% cover 45%}
    .block{margin-top:7rem}.rows{display:grid;gap:1rem}.portfolio-row{position:relative;display:grid;gap:1rem;border-radius:.375rem;transition:transform .22s ease;padding:0}.portfolio-row:before{content:"";position:absolute;inset:0;z-index:-1;border-radius:.375rem;background:linear-gradient(120deg,rgba(30,41,59,.58),transparent),radial-gradient(circle at 18% 0%,rgba(125,161,217,.14),transparent 38%);opacity:0;transition:opacity .22s ease}.portfolio-row:hover{transform:translateY(-2px)}.portfolio-row:hover:before{opacity:1}
    .period{margin:0;padding-top:.2rem;color:var(--soft)!important;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.85rem!important;font-weight:800;letter-spacing:.07em;text-transform:uppercase}.portfolio-row h3{margin:0;color:#f1f5f9;font-size:1.1rem;line-height:1.4}.portfolio-row h3 span{color:#64748b}.portfolio-row h3 strong{color:#cbd5e1}.portfolio-row ul{display:flex;flex-wrap:wrap;gap:.5rem;margin:1rem 0 0;padding:0;list-style:none}.tech-pill{border-radius:999px;background:rgba(56,189,248,.1);color:#7dd3fc;padding:.32rem .75rem;font-size:.85rem;font-weight:700}.portfolio-row:hover .tech-pill{background:rgba(14,165,233,.16);color:#bae6fd}
    .project-row{gap:1.25rem}.project-thumb{display:none;height:5rem;border:1px solid rgba(51,65,85,.8);border-radius:.25rem;background:rgba(30,41,59,.7);padding:.75rem;color:#64748b;font-family:ui-monospace,monospace}.project-head{display:flex;align-items:flex-start;justify-content:space-between;gap:1rem}.project-head div{display:flex;gap:.8rem;color:var(--muted)}
    .resume-download{display:inline-flex;align-items:center;gap:.75rem;margin-top:1.5rem;border:1px solid rgba(51,65,85,.8);border-radius:.25rem;padding:.8rem 1rem;font-size:.85rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase}.resume-download:hover{border-color:rgba(125,211,252,.5);box-shadow:0 0 28px rgba(125,161,217,.16);transform:translateY(-2px)}
    footer{max-width:28rem;margin-top:7rem;padding-bottom:5rem;color:#64748b;font-size:.9rem;line-height:1.7}.dock{position:fixed;left:1rem;right:1rem;top:1rem;z-index:40;display:flex;align-items:center;gap:1rem;border:1px solid rgba(51,65,85,.72);border-radius:.75rem;background:var(--panel);box-shadow:0 18px 60px rgba(2,6,23,.28);padding:.75rem .9rem;opacity:0;pointer-events:none;transform:translateY(-14px);backdrop-filter:blur(18px);transition:opacity .22s ease,transform .22s ease}.dock.visible{opacity:1;pointer-events:auto;transform:translateY(0)}.dock p{margin:0}.dock-title{font-size:.88rem;font-weight:800;color:#f1f5f9}.dock-role{max-width:16rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--muted);font-size:.75rem}.dock-actions{display:flex;align-items:center;gap:.75rem;margin-left:auto}.top-button{display:grid;width:2rem;height:2rem;place-items:center;border:1px solid rgba(51,65,85,.8);border-radius:999px;background:rgba(15,23,42,.8)}
    @keyframes dividerGlow{from{opacity:0;transform:scaleX(.25)}to{opacity:1;transform:scaleX(1)}}
    @media (min-width:640px){.portfolio-row{grid-template-columns:9rem 1fr;gap:2rem}.project-thumb{display:flex}}
    @media (min-width:1024px){.shell{grid-template-columns:560px 608px;column-gap:32px;padding:0}.intro{position:sticky;top:0;display:flex;height:100vh;flex-direction:column;justify-content:space-between;padding:6rem 0}.content{padding:6rem 0}nav{display:block}.mobile-title{display:none}.socials{margin-top:0}.dock{display:none}.portfolio-row{margin-left:-1.5rem;margin-right:-1.5rem;padding:1.5rem}}
  </style>
</head>
<body>
  <div class="language-switch" aria-label="Cambiar idioma">
    <button type="button" data-language-button="es" class="active">es</button>
    <button type="button" data-language-button="en">en</button>
  </div>
  <div class="shell">
    <header id="intro" class="intro">
      <div>
        <a href="#about"><h1>Thian Rolon</h1></a>
        <h2 data-text="role">${data.es.role}</h2>
        <p data-text="summary">${data.es.summary}</p>
        <a class="resume-link" href="${basePath}/${cvFile}" download="${cvFile}"><span data-text="download">${data.es.download}</span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg></a>
        <nav aria-label="Principal">
          <a href="#about" class="nav-link active"><span></span><span data-text="aboutNav">ABOUT</span></a>
          <a href="#experience" class="nav-link"><span></span><span data-text="experienceNav">EXPERIENCE</span></a>
          <a href="#projects" class="nav-link"><span></span><span data-text="projectsNav">PROJECTS</span></a>
          <a href="#cv" class="nav-link"><span></span><span data-text="cvNav">CV</span></a>
        </nav>
      </div>
      <div class="socials">
        <a href="https://www.linkedin.com/in/thianrolon/" aria-label="LinkedIn">${icons.linkedin}</a>
        <a href="https://github.com/ThianR" aria-label="GitHub">${icons.github}</a>
        <a href="https://www.instagram.com/thiansrolon/" aria-label="Instagram">${icons.instagram}</a>
        <a href="mailto:gabrielrolonth@gmail.com" aria-label="Gmail">${icons.mail}</a>
      </div>
    </header>
    <main class="content">
      <section id="about" class="about">
        <div class="mobile-title"><h2 data-text="aboutNav">ABOUT</h2></div>
        <div data-html="about">${data.es.about.map((item) => `<p>${item}</p>`).join('')}</div>
      </section>
      <div class="section-divider" aria-hidden="true"></div>
      <section id="experience" class="block">
        <div class="mobile-title"><h2 data-text="experienceNav">EXPERIENCE</h2></div>
        <div class="rows" data-html="experience">${experienceRows('es')}</div>
      </section>
      <div class="section-divider" aria-hidden="true"></div>
      <section id="projects" class="block">
        <div class="mobile-title"><h2 data-text="projectsNav">PROJECTS</h2></div>
        <div class="rows" data-html="projects">${projectRows('es')}</div>
      </section>
      <div class="section-divider" aria-hidden="true"></div>
      <section id="cv" class="block">
        <div class="mobile-title"><h2 data-text="cvNav">CV</h2></div>
        <article class="portfolio-row">
          <p class="period" data-text="cvEyebrow">${data.es.cv.eyebrow}</p>
          <div>
            <h3><span data-text="cvTitle">${data.es.cv.title}</span><span> · </span><strong>Cristhian Rolon</strong></h3>
            <p data-text="cvDescription">${data.es.cv.description}</p>
            <a class="resume-download" href="${basePath}/${cvFile}" download="${cvFile}"><span data-text="download">${data.es.download}</span><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg></a>
          </div>
        </article>
      </section>
      <footer data-text="footer">${data.es.footer}</footer>
    </main>
  </div>
  <div class="dock" id="dock">
    <a href="#intro">
      <p class="dock-title">Thian Rolon</p>
      <p class="dock-role" data-text="role">${data.es.role}</p>
    </a>
    <div class="dock-actions">
      <a href="https://www.linkedin.com/in/thianrolon/" aria-label="LinkedIn">${icons.linkedin}</a>
      <a href="https://github.com/ThianR" aria-label="GitHub">${icons.github}</a>
      <a href="https://www.instagram.com/thiansrolon/" aria-label="Instagram">${icons.instagram}</a>
      <a href="mailto:gabrielrolonth@gmail.com" aria-label="Gmail">${icons.mail}</a>
      <a class="top-button" href="#intro" aria-label="${data.es.labels[2]}">↑</a>
    </div>
  </div>
  ${languageLayer('es')}
  ${languageLayer('en')}
  <script>
    const sections = ['about', 'experience', 'projects', 'cv'];
    const buttons = document.querySelectorAll('[data-language-button]');
    const textTargets = document.querySelectorAll('[data-text]');
    const htmlTargets = document.querySelectorAll('[data-html]');
    const navLinks = document.querySelectorAll('.nav-link');
    const dock = document.getElementById('dock');

    function setLanguage(lang) {
      const template = document.getElementById('content-' + lang);
      const source = template.content;
      document.documentElement.lang = lang;
      localStorage.setItem('portfolio-language', lang);
      buttons.forEach((button) => button.classList.toggle('active', button.dataset.languageButton === lang));
      textTargets.forEach((target) => {
        const value = source.querySelector('[data-slot="' + target.dataset.text + '"]');
        if (value) target.textContent = value.textContent;
      });
      htmlTargets.forEach((target) => {
        const value = source.querySelector('[data-slot="' + target.dataset.html + '"]');
        if (value) target.innerHTML = value.innerHTML;
      });
    }

    buttons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.languageButton)));
    setLanguage(localStorage.getItem('portfolio-language') || 'es');
    document.addEventListener('pointermove', (event) => {
      document.body.style.setProperty('--x', event.clientX + 'px');
      document.body.style.setProperty('--y', event.clientY + 'px');
    });
    new IntersectionObserver(([entry]) => dock.classList.toggle('visible', !entry.isIntersecting), { rootMargin: '-96px 0px 0px 0px', threshold: 0.05 }).observe(document.getElementById('intro'));
    new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === '#' + visible.target.id));
    }, { rootMargin: '-35% 0px -45% 0px', threshold: [0.1, 0.25, 0.5, 0.75] }).observe(document.getElementById('about'));
    sections.slice(1).forEach((id) => {
      const section = document.getElementById(id);
      if (section) new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id));
        });
      }, { rootMargin: '-35% 0px -45% 0px', threshold: [0.1, 0.25, 0.5, 0.75] }).observe(section);
    });
  </script>
</body>
</html>`;

await mkdir(outDir, { recursive: true });
await writeFile(path.join(outDir, 'index.html'), html);
await writeFile(path.join(outDir, '404.html'), html);
await writeFile(path.join(outDir, '.nojekyll'), '');

for (const file of [cvFile, 'favicon.svg']) {
  const source = path.join(root, 'public', file);
  if (existsSync(source)) {
    await copyFile(source, path.join(outDir, file));
  }
}
