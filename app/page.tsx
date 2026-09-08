'use client';

import type { CSSProperties } from 'react';
import { useEffect, useState } from 'react';
import { ArrowUp, ArrowUpRight, Code2, Download, GitBranch } from 'lucide-react';

const navItems = [
  ['about', '#about'],
  ['experience', '#experience'],
  ['projects', '#projects'],
  ['cv', '#cv'],
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const cvHref = `${basePath}/CV_Cristhian_Rolon.docx`;
type Language = 'es' | 'en';

const translations = {
  es: {
    nav: {
      about: 'ABOUT',
      experience: 'EXPERIENCE',
      projects: 'PROJECTS',
      cv: 'CV',
    },
    hero: {
      title: 'Thian Rolon',
      role: 'Analista de Sistemas-Desarrollador FullStack',
      summary: 'Construyo e implemento sistemas empresariales con impacto real.',
      download: 'Descargar CV',
    },
    about: [
      <>
        Hola, soy Cristhian Rolon (conocido en mis proyectos como Thian). Soy
        Licenciado en Analisis de Sistemas Informaticos y desde 2017 formo parte
        de{' '}
        <a
          href="https://py.linkedin.com/company/inventivapy"
          className="font-medium text-slate-200 transition hover:text-sky-300"
        >
          Grupo Inventiva S.A.C.I.
        </a>{' '}
        Mi carrera ha sido de evolucion constante: comence trabajando con Oracle
        Forms e iReport hasta consolidarme como Analista de Sistemas,
        Desarrollador Java y DBA.
      </>,
      'Mi experiencia abarca el ciclo completo del software. Al integrarme al equipo Java, participe en la creacion de la primera version web del ERP de la empresa. Desde entonces, he trabajado en multiples implementaciones donde combino el desarrollo eficiente, el diseno de bases de datos y la comunicacion directa con usuarios y directivos.',
      'Entre 2022 y 2025 estuve a cargo del desarrollo, implementacion y soporte del Sistema Integrado DIMABEL (SID). La implementacion fue exitosa y tuvo un impacto institucional importante; llevandome a recibir un reconocimiento oficial por parte del director de DIGEMABEL en 2024.',
      <>
        Me motiva investigar y generar soluciones originales a problemas reales,
        algo que reflejo en los{' '}
        <a
          href="https://github.com/ThianR?tab=repositories"
          className="font-medium text-slate-200 transition hover:text-sky-300"
        >
          repositorios de proyectos personales de mi perfil
        </a>
        . Cuando no estoy escribiendo codigo, disfruto desconectar haciendo
        rodadas con mi familia y amigos.
      </>,
    ],
    experience: [
      {
        period: '2024 - PRESENTE',
        role: 'Responsable tecnico de proyecto',
        company: 'Grupo Inventiva S.A.C.I',
        description:
          'Actuo como responsable tecnico en proyectos web full stack, cubriendo relevamiento, analisis, diseno, programacion, integracion, despliegue, mantenimiento, soporte y capacitacion, con trato directo con usuarios, equipos tecnicos y directivos.',
        stack: ['Full stack', 'Java', 'Oracle', 'Soporte'],
      },
      {
        period: '2022 - 2024',
        role: 'Desarrollador senior / Referente tecnico',
        company: 'Grupo Inventiva S.A.C.I',
        description:
          'Actue como referente tecnico en optimizacion, mantenimiento evolutivo, integracion y despliegue de aplicaciones empresariales, resolviendo problemas complejos en ambientes de produccion junto a equipos funcionales y de soporte.',
        stack: ['Java', 'Produccion', 'Integracion', 'Despliegue'],
      },
      {
        period: '2020 - 2022',
        role: 'Analista desarrollador',
        company: 'Grupo Inventiva S.A.C.I',
        description:
          'Analice requerimientos funcionales y disene soluciones adaptadas a procesos empresariales, manteniendo componentes Oracle PL/SQL como consultas, procedimientos, funciones, triggers, paquetes y cursores.',
        stack: ['Analisis', 'Oracle PL/SQL', 'Procesos', 'Base de datos'],
      },
      {
        period: '2018 - 2020',
        role: 'Desarrollador Java/Oracle',
        company: 'Grupo Inventiva S.A.C.I',
        description:
          'Desarrolle y mantuve aplicaciones web full stack con Java, Spring Boot, APIs REST, JSF, PrimeFaces y arquitectura MVC, desplegando soluciones en Tomcat, GlassFish, Nginx y servidores Linux.',
        stack: ['Java', 'Spring Boot', 'JSF', 'Linux'],
      },
      {
        period: '2017 - 2018',
        role: 'Desarrollador inicial',
        company: 'Grupo Inventiva S.A.C.I',
        description:
          'Participe en la implementacion y mantenimiento de sistemas empresariales, adquiriendo conocimiento profundo de la logica de negocio y colaborando con control de versiones y construccion de proyectos.',
        stack: ['Oracle Forms', 'iReport', 'Git', 'Maven'],
      },
      {
        period: '2022 - 2025',
        role: 'Proyecto destacado: SID / DIGEMABEL',
        company: 'Sistema Integrado DIMABEL',
        description:
          'Fui responsable tecnico en el relevamiento, analisis, diseno, programacion, integracion, despliegue, mantenimiento, soporte y capacitacion del sistema SID, acompanando la transicion institucional de DIMABEL a DIGEMABEL y recibiendo reconocimiento oficial en 2024.',
        stack: ['Java', 'Spring Boot', 'REST', 'Oracle 19c'],
      },
    ],
    projects: [
      {
        name: 'Horus',
        description:
          'Sistema de asistencia para administrar empleados, estructura organizacional, turnos fijos y flexibles, solicitudes del empleado y licenciamiento propio.',
        stack: ['HTML', 'RRHH', 'Seguridad'],
        href: 'https://github.com/ThianR/Horus',
      },
      {
        name: 'Portico',
        description:
          'Middleware modular en Spring Boot y Java para integracion con SIFEN: XML, firma digital, KUDE y comunicacion API para facturacion electronica.',
        stack: ['Java', 'Spring Boot', 'SIFEN'],
        href: 'https://github.com/ThianR/Portico',
      },
      {
        name: 'BikerSquad',
        description:
          'Walkie-talkie P2P en Flutter para grupos de motociclismo y ciclismo, con Wi-Fi local, QR, AES-256, Opus, VAD y AEC.',
        stack: ['Flutter', 'Dart', 'Audio P2P'],
        href: 'https://github.com/ThianR/BikerSquad',
      },
      {
        name: 'MunicipaLink',
        description:
          'Plataforma de participacion ciudadana para reportar incidencias urbanas con geolocalizacion, seguimiento y gamificacion.',
        stack: ['Web', 'PLpgSQL', 'Civic tech'],
        href: 'https://github.com/ThianR/MunicipaLink',
        live: 'https://municipalink.vercel.app',
      },
      {
        name: 'ViyuFlow',
        description:
          'App movil offline-first de finanzas personales para ingresos, presupuestos, gastos, multiples divisas y registro por voz.',
        stack: ['Dart', 'Mobile', 'Offline-first'],
        href: 'https://github.com/ThianR/ViyuFlow',
      },
      {
        name: 'TokenCal',
        description:
          'Visualizador local de contexto para desarrolladores y agentes de IA: tokens, profundidad de arquitectura, deuda tecnica y costos.',
        stack: ['TypeScript', 'IA tooling', 'Analisis'],
        href: 'https://github.com/ThianR/TokenCal',
      },
    ],
    cv: {
      label: 'Resume',
      title: 'Curriculum Vitae',
      owner: 'Cristhian Rolon',
      description:
        'Version descargable de mi perfil profesional como Analista de Sistemas-Desarrollador FullStack, con experiencia Java, bases de datos e implementacion de sistemas empresariales.',
      download: 'Descargar CV',
    },
    footer:
      'Disenado y construido por Thian Rolon. Inspirado en portafolios oscuros, editoriales y orientados a proyectos. El codigo vive en la rama main del repositorio.',
    labels: {
      openDemo: 'Abrir demo de',
      openRepo: 'Abrir repositorio de',
      backTop: 'Volver al inicio',
      language: 'Cambiar idioma',
    },
  },
  en: {
    nav: {
      about: 'ABOUT',
      experience: 'EXPERIENCE',
      projects: 'PROJECTS',
      cv: 'CV',
    },
    hero: {
      title: 'Thian Rolon',
      role: 'Systems Analyst-FullStack Developer',
      summary: 'I build and implement business systems with real-world impact.',
      download: 'Download CV',
    },
    about: [
      <>
        Hi, I am Cristhian Rolon (known in my projects as Thian). I hold a
        degree in Computer Systems Analysis and since 2017 I have been part of{' '}
        <a
          href="https://py.linkedin.com/company/inventivapy"
          className="font-medium text-slate-200 transition hover:text-sky-300"
        >
          Grupo Inventiva S.A.C.I.
        </a>{' '}
        My career has been a constant evolution: I started working with Oracle
        Forms and iReport and grew into a Systems Analyst, Java Developer and
        DBA.
      </>,
      'My experience covers the full software lifecycle. After joining the Java team, I participated in building the first web version of the company ERP. Since then, I have worked on multiple implementations combining efficient development, database design and direct communication with users and executives.',
      'From 2022 to 2025 I was responsible for the development, implementation and support of SID, the Integrated DIMABEL System. The implementation was successful and had meaningful institutional impact, which led me to receive official recognition from the director of DIGEMABEL in 2024.',
      <>
        I am motivated by research and by creating original solutions to real
        problems, something reflected in the{' '}
        <a
          href="https://github.com/ThianR?tab=repositories"
          className="font-medium text-slate-200 transition hover:text-sky-300"
        >
          personal project repositories on my profile
        </a>
        . When I am not writing code, I enjoy disconnecting on rides with my
        family and friends.
      </>,
    ],
    experience: [
      {
        period: '2024 - PRESENT',
        role: 'Technical project lead',
        company: 'Grupo Inventiva S.A.C.I',
        description:
          'I act as technical lead for full stack web projects, covering discovery, analysis, design, development, integration, deployment, maintenance, support and training while working directly with users, technical teams and executives.',
        stack: ['Full stack', 'Java', 'Oracle', 'Support'],
      },
      {
        period: '2022 - 2024',
        role: 'Senior developer / Technical reference',
        company: 'Grupo Inventiva S.A.C.I',
        description:
          'I worked as a technical reference for optimization, evolutionary maintenance, integration and deployment of business applications, solving complex production issues with functional and support teams.',
        stack: ['Java', 'Production', 'Integration', 'Deployment'],
      },
      {
        period: '2020 - 2022',
        role: 'Systems analyst developer',
        company: 'Grupo Inventiva S.A.C.I',
        description:
          'I analyzed functional requirements and designed software solutions for business processes, maintaining Oracle PL/SQL components such as queries, procedures, functions, triggers, packages and cursors.',
        stack: ['Analysis', 'Oracle PL/SQL', 'Processes', 'Database'],
      },
      {
        period: '2018 - 2020',
        role: 'Java/Oracle Developer',
        company: 'Grupo Inventiva S.A.C.I',
        description:
          'I developed and maintained full stack web applications with Java, Spring Boot, REST APIs, JSF, PrimeFaces and MVC architecture, deploying solutions on Tomcat, GlassFish, Nginx and Linux servers.',
        stack: ['Java', 'Spring Boot', 'JSF', 'Linux'],
      },
      {
        period: '2017 - 2018',
        role: 'Initial developer',
        company: 'Grupo Inventiva S.A.C.I',
        description:
          'I participated in the implementation and maintenance of business systems, building deep understanding of business logic and collaborating with version control and project build tools.',
        stack: ['Oracle Forms', 'iReport', 'Git', 'Maven'],
      },
      {
        period: '2022 - 2025',
        role: 'Featured project: SID / DIGEMABEL',
        company: 'Integrated DIMABEL System',
        description:
          'I was the technical lead for discovery, analysis, design, development, integration, deployment, maintenance, support and training of SID, supporting the institutional transition from DIMABEL to DIGEMABEL and receiving official recognition in 2024.',
        stack: ['Java', 'Spring Boot', 'REST', 'Oracle 19c'],
      },
    ],
    projects: [
      {
        name: 'Horus',
        description:
          'Attendance system for managing employees, organizational structure, fixed and flexible shifts, employee requests and proprietary licensing.',
        stack: ['HTML', 'HR', 'Security'],
        href: 'https://github.com/ThianR/Horus',
      },
      {
        name: 'Portico',
        description:
          'Modular Spring Boot and Java middleware for SIFEN integration: XML, digital signature, KUDE and API communication for electronic invoicing.',
        stack: ['Java', 'Spring Boot', 'SIFEN'],
        href: 'https://github.com/ThianR/Portico',
      },
      {
        name: 'BikerSquad',
        description:
          'P2P walkie-talkie in Flutter for motorcycle and cycling groups, with local Wi-Fi, QR, AES-256, Opus, VAD and AEC.',
        stack: ['Flutter', 'Dart', 'P2P audio'],
        href: 'https://github.com/ThianR/BikerSquad',
      },
      {
        name: 'MunicipaLink',
        description:
          'Citizen participation platform for reporting urban issues with geolocation, tracking and gamification.',
        stack: ['Web', 'PLpgSQL', 'Civic tech'],
        href: 'https://github.com/ThianR/MunicipaLink',
        live: 'https://municipalink.vercel.app',
      },
      {
        name: 'ViyuFlow',
        description:
          'Offline-first mobile personal finance app for income, budgets, expenses, multiple currencies and voice-based records.',
        stack: ['Dart', 'Mobile', 'Offline-first'],
        href: 'https://github.com/ThianR/ViyuFlow',
      },
      {
        name: 'TokenCal',
        description:
          'Local context visualizer for developers and AI agents: tokens, architecture depth, technical debt and costs.',
        stack: ['TypeScript', 'AI tooling', 'Analysis'],
        href: 'https://github.com/ThianR/TokenCal',
      },
    ],
    cv: {
      label: 'Resume',
      title: 'Curriculum Vitae',
      owner: 'Cristhian Rolon',
      description:
        'Downloadable version of my professional profile as a Systems Analyst-FullStack Developer, with Java, database and business systems implementation experience.',
      download: 'Download CV',
    },
    footer:
      'Designed and built by Thian Rolon. Inspired by dark, editorial and project-focused portfolios. The code lives on the repository main branch.',
    labels: {
      openDemo: 'Open demo for',
      openRepo: 'Open repository for',
      backTop: 'Back to top',
      language: 'Change language',
    },
  },
};

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/thianrolon/',
    Icon: LinkedInIcon,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/ThianR',
    Icon: GitHubIcon,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/thiansrolon/',
    Icon: InstagramIcon,
  },
  {
    label: 'Gmail',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=gabrielrolonth@gmail.com',
    Icon: MailIcon,
  },
];

export default function Home() {
  const [language, setLanguage] = useState<Language>('es');
  const [activeSection, setActiveSection] = useState('about');
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });
  const [showProfileDock, setShowProfileDock] = useState(false);
  const t = translations[language];

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem('portfolio-language');

    if (savedLanguage === 'en' || savedLanguage === 'es') {
      setLanguage(savedLanguage);
    }
  }, []);

  const updateLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage);
    window.localStorage.setItem('portfolio-language', nextLanguage);
  };

  useEffect(() => {
    const sectionIds = ['about', 'experience', 'projects', 'cv'];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const revealTargets = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    );

    revealTargets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const intro = document.getElementById('intro');
    if (!intro) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setShowProfileDock(!entry.isIntersecting),
      { rootMargin: '-96px 0px 0px 0px', threshold: 0.05 },
    );

    observer.observe(intro);

    return () => observer.disconnect();
  }, []);

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-background text-foreground"
      onMouseMove={(event) =>
        setSpotlight({ x: event.clientX, y: event.clientY })
      }
      style={
        {
          '--spotlight-x': `${spotlight.x}px`,
          '--spotlight-y': `${spotlight.y}px`,
        } as CSSProperties
      }
    >
      <div className="pointer-events-none fixed inset-0 z-0 hidden spotlight-glow lg:block" />
      <div
        className="language-switch fixed right-4 top-4 z-50 inline-flex rounded-full border border-slate-700/80 bg-slate-900/75 p-1 text-xs font-bold uppercase tracking-[0.12em] text-slate-400 backdrop-blur"
        aria-label={t.labels.language}
      >
        {(['es', 'en'] as const).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => updateLanguage(option)}
            className={`rounded-full px-3 py-2 transition ${
              language === option
                ? 'bg-slate-200 text-slate-950'
                : 'hover:text-sky-300'
            }`}
            aria-pressed={language === option}
          >
            {option}
          </button>
        ))}
      </div>
      <div
        data-shell
        className="portfolio-shell relative z-10 mx-auto grid min-h-screen grid-cols-1 px-6 py-12 md:px-12 lg:px-0 lg:py-0"
      >
        <header
          id="intro"
          data-left
          className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-24"
        >
          <div>
            <a href="#about" className="inline-block">
              <h1 className="text-4xl font-bold leading-[1.1] tracking-normal text-slate-100 sm:text-5xl">
                {t.hero.title}
              </h1>
            </a>
            <h2 className="mt-3 text-lg font-semibold leading-tight text-slate-200 sm:text-xl">
              {t.hero.role}
            </h2>
            <p className="mt-4 max-w-xs text-lg leading-7 text-slate-400">
              {t.hero.summary}
            </p>
            <a
              href={cvHref}
              download="CV_Cristhian_Rolon.docx"
              className="resume-link mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-slate-200 transition hover:text-sky-300"
            >
              {t.hero.download}
              <Download size={16} />
            </a>

            <nav className="mt-16 hidden lg:block" aria-label="Principal">
              <ul>
                {navItems.map(([id, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className={`group flex h-10 items-center text-xs font-bold uppercase tracking-[0.16em] transition ${
                        activeSection === href.slice(1)
                          ? 'text-slate-200'
                          : 'text-slate-500 hover:text-slate-200'
                      }`}
                    >
                      <span
                        className={`mr-4 h-px transition-all ${
                          activeSection === href.slice(1)
                            ? 'w-16 bg-slate-200'
                            : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'
                        }`}
                      />
                      <span>{t.nav[id as keyof typeof t.nav]}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="mt-10 flex items-center gap-5 lg:mt-0">
            {socialLinks.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="social-link grid h-8 w-8 place-items-center text-slate-400 transition hover:text-sky-300 lg:h-6 lg:w-6"
              >
                <Icon />
              </a>
            ))}
          </div>
        </header>

        <div data-content className="portfolio-content pt-16 lg:py-24">
          <section
            id="about"
            className="reveal-on-scroll scroll-mt-24 lg:min-h-[542px]"
          >
            <div className="sticky top-0 z-10 -mx-6 mb-4 bg-background/85 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:hidden">
              <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-200">
                {t.nav.about}
              </h2>
            </div>
            <div className="space-y-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 lg:text-base lg:leading-7">
              {t.about.map((paragraph, index) => (
                <p key={`${language}-about-${index}`}>{paragraph}</p>
              ))}
            </div>
          </section>

          <div className="section-divider" aria-hidden="true" />

          <section
            id="experience"
            className="reveal-on-scroll mt-28 scroll-mt-24"
          >
            <div className="sticky top-0 z-10 -mx-6 mb-4 bg-background/85 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:hidden">
              <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-200">
                {t.nav.experience}
              </h2>
            </div>
            <div className="space-y-4">
              {t.experience.map((item) => (
                <article
                  key={`${item.period}-${item.role}`}
                  className="portfolio-row group grid gap-4 rounded-md p-0 transition sm:grid-cols-[9rem_1fr] sm:gap-8 lg:-mx-6 lg:p-6"
                >
                  <p className="pt-1 font-mono text-sm font-semibold uppercase tracking-wide text-slate-500">
                    {item.period}
                  </p>
                  <div>
                    <h3 className="text-lg font-semibold leading-snug text-slate-100">
                      {item.role}
                      <span className="text-slate-500"> · </span>
                      <span className="text-slate-300">{item.company}</span>
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-400">
                      {item.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {item.stack.map((tag) => (
                        <li
                          key={tag}
                          className="tech-pill rounded-full bg-sky-400/10 px-3 py-1 text-sm font-medium text-sky-300"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <div className="section-divider" aria-hidden="true" />

          <section
            id="projects"
            className="reveal-on-scroll mt-28 scroll-mt-24"
          >
            <div className="sticky top-0 z-10 -mx-6 mb-4 bg-background/85 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:hidden">
              <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-200">
                {t.nav.projects}
              </h2>
            </div>
            <div className="space-y-4">
              {t.projects.map((project) => (
                <article
                  key={project.name}
                  className="portfolio-row group grid gap-5 rounded-md transition sm:grid-cols-[9rem_1fr] sm:gap-8 lg:-mx-6 lg:p-6"
                >
                  <div className="project-thumb hidden h-20 rounded border border-slate-700/80 bg-slate-800/70 p-3 sm:flex">
                    <Code2 className="mt-auto text-slate-500 transition group-hover:text-sky-300" />
                  </div>
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold leading-snug text-slate-100 transition group-hover:text-sky-300">
                        {project.name}
                      </h3>
                      <div className="flex gap-3 pt-1 text-slate-400">
                        {project.live ? (
                          <a
                            href={project.live}
                            aria-label={`${t.labels.openDemo} ${project.name}`}
                            className="project-link transition hover:text-sky-300"
                          >
                            <ArrowUpRight size={18} />
                          </a>
                        ) : null}
                        <a
                          href={project.href}
                          aria-label={`${t.labels.openRepo} ${project.name}`}
                          className="project-link transition hover:text-sky-300"
                        >
                          <GitBranch size={18} />
                        </a>
                      </div>
                    </div>
                    <p className="mt-3 text-base leading-7 text-slate-400">
                      {project.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((tag) => (
                        <li
                          key={tag}
                          className="tech-pill rounded-full bg-sky-400/10 px-3 py-1 text-sm font-medium text-sky-300"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <div className="section-divider" aria-hidden="true" />

          <section id="cv" className="reveal-on-scroll mt-28 scroll-mt-24">
            <div className="sticky top-0 z-10 -mx-6 mb-4 bg-background/85 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:hidden">
              <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-200">
                CV
              </h2>
            </div>
            <article className="portfolio-row group grid gap-4 rounded-md p-0 transition sm:grid-cols-[9rem_1fr] sm:gap-8 lg:-mx-6 lg:p-6">
              <p className="pt-1 font-mono text-sm font-semibold uppercase tracking-wide text-slate-500">
                {t.cv.label}
              </p>
              <div>
                <h3 className="text-lg font-semibold leading-snug text-slate-100">
                  {t.cv.title}
                  <span className="text-slate-500"> · </span>
                  <span className="text-slate-300">{t.cv.owner}</span>
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-400">
                  {t.cv.description}
                </p>
                <a
                  href={cvHref}
                  download="CV_Cristhian_Rolon.docx"
                  className="resume-download mt-6 inline-flex items-center gap-3 rounded border border-slate-700/80 px-4 py-3 text-sm font-bold uppercase tracking-[0.14em] text-slate-200 transition hover:border-sky-300/50 hover:text-sky-300"
                >
                  {t.cv.download}
                  <Download size={17} />
                </a>
              </div>
            </article>
          </section>

          <footer className="mt-28 max-w-md pb-20 text-sm leading-6 text-slate-500">
            {t.footer}
          </footer>
        </div>
      </div>

      <div
        className={`profile-dock fixed left-4 right-4 top-4 z-40 lg:hidden ${
          showProfileDock ? 'is-visible' : ''
        }`}
      >
        <a href="#intro" className="min-w-0">
          <p className="truncate text-sm font-bold leading-tight text-slate-100">
            {t.hero.title}
          </p>
          <p className="truncate text-xs text-slate-400">
            {t.hero.role}
          </p>
        </a>
        <div className="ml-auto flex items-center gap-3">
          {socialLinks.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 transition hover:text-sky-300"
            >
              <Icon />
            </a>
          ))}
          <a
            href="#intro"
            aria-label={t.labels.backTop}
            className="grid h-8 w-8 place-items-center rounded-full border border-slate-700/80 bg-slate-900/80 text-slate-300 transition hover:-translate-y-0.5 hover:border-sky-300/50 hover:text-sky-300"
          >
            <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </main>
  );
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.19-3.37-1.19-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.9 1.52 2.35 1.08 2.92.82.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.6 9.6 0 0 1 12 6.98c.85 0 1.7.11 2.5.34 1.9-1.3 2.74-1.03 2.74-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M4.98 3.5a2.5 2.5 0 1 1-.02 5 2.5 2.5 0 0 1 .02-5ZM3 9.75h4v10.76H3V9.75Zm6.25 0h3.83v1.47h.05c.53-.96 1.84-1.78 3.78-1.78 4.04 0 4.79 2.43 4.79 5.6v5.47h-4v-4.85c0-1.16-.02-2.65-1.77-2.65-1.78 0-2.05 1.27-2.05 2.57v4.93h-4V9.75Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
