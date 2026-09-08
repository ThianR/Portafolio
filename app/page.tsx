'use client';

import type { CSSProperties } from 'react';
import { useEffect, useState } from 'react';
import { ArrowUp, ArrowUpRight, Code2, Download, GitBranch } from 'lucide-react';

const navItems = [
  ['ABOUT', '#about'],
  ['EXPERIENCE', '#experience'],
  ['PROJECTS', '#projects'],
  ['CV', '#cv'],
];

const cvHref = '/CV_Cristhian_Rolon.docx';

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
    href: 'mailto:gabrielrolonth@gmail.com',
    Icon: MailIcon,
  },
];

const experience = [
  {
    period: '2019 - PRESENTE',
    role: 'Analista de Sistemas-Desarrollador FullStack',
    company: 'Grupo Inventiva S.A.C.I',
    description:
      'Participo en el desarrollo e implementacion de soluciones Java, nuevas versiones del ERP web de la empresa y proyectos para clientes con trato directo con usuarios, equipos tecnicos y directivos.',
    stack: ['Java', 'ERP Web', 'DBA', 'Implementacion'],
  },
  {
    period: '2022',
    role: 'Responsable de desarrollo e implementacion',
    company: 'SID - Sistema Integrado DIMABEL',
    description:
      'Lidere el desarrollo e implementacion del sistema SID. La puesta en marcha fue exitosa y acompano un cambio institucional de alto impacto: DIMABEL paso a convertirse en DIGEMABEL, Direccion General de Material Belico.',
    stack: ['Java', 'Sistemas publicos', 'Implementacion', 'Usuarios clave'],
  },
  {
    period: '2024',
    role: 'Reconocimiento institucional',
    company: 'DIGEMABEL',
    description:
      'Recibi un reconocimiento por parte del director de DIGEMABEL por el trabajo realizado y el impacto del sistema implementado.',
    stack: ['Reconocimiento', 'Impacto institucional'],
  },
  {
    period: '2017 - 2019',
    role: 'Desarrollador Oracle Forms e iReport',
    company: 'Grupo Inventiva S.A.C.I',
    description:
      'Inicie mi carrera desarrollando y manteniendo soluciones con Oracle Forms e iReport, trabajando sobre procesos empresariales y reportes operativos antes de incorporarme al equipo Java.',
    stack: ['Oracle Forms', 'iReport', 'Reportes', 'Procesos'],
  },
];

const projects = [
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
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });
  const [showProfileDock, setShowProfileDock] = useState(false);

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
                Thian Rolon
              </h1>
            </a>
            <h2 className="mt-3 text-lg font-semibold leading-tight text-slate-200 sm:text-xl">
              Analista de Sistemas-Desarrollador FullStack
            </h2>
            <p className="mt-4 max-w-xs text-lg leading-7 text-slate-400">
              Construyo e implemento sistemas empresariales con impacto real.
            </p>
            <a
              href={cvHref}
              download="CV_Cristhian_Rolon.docx"
              className="resume-link mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-slate-200 transition hover:text-sky-300"
            >
              Descargar CV
              <Download size={16} />
            </a>

            <nav className="mt-16 hidden lg:block" aria-label="Principal">
              <ul>
                {navItems.map(([label, href]) => (
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
                      <span>{label}</span>
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
                About
              </h2>
            </div>
            <div className="space-y-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 lg:text-base lg:leading-7">
              <p>
                Hola, soy Cristhian Rolon (conocido en mis proyectos como
                Thian). Soy Licenciado en Analisis de Sistemas Informaticos y
                desde 2017 formo parte de{' '}
                <a
                  href="https://py.linkedin.com/company/inventivapy"
                  className="font-medium text-slate-200 transition hover:text-sky-300"
                >
                  Grupo Inventiva S.A.C.I.
                </a>{' '}
                Mi carrera ha sido de evolucion constante: comence trabajando
                con Oracle Forms e iReport hasta consolidarme como Analista de
                Sistemas, Desarrollador Java y DBA.
              </p>
              <p>
                Mi experiencia abarca el ciclo completo del software. Al
                integrarme al equipo Java, participe en la creacion de la
                primera version web del ERP de la empresa. Desde entonces, he
                trabajado en multiples implementaciones donde combino el
                desarrollo eficiente, el diseno de bases de datos y la
                comunicacion directa con usuarios y directivos.
              </p>
              <p>
                En 2022 estuve a cargo del desarrollo e implementacion del
                Sistema Integrado DIMABEL (SID). La implementacion fue exitosa y
                tuvo un impacto institucional importante; llevandome a recibir
                un reconocimiento oficial por parte del director de DIGEMABEL en
                2024.
              </p>
              <p>
                Me motiva investigar y generar soluciones originales a problemas
                reales, algo que reflejo en los{' '}
                <a
                  href="https://github.com/ThianR?tab=repositories"
                  className="font-medium text-slate-200 transition hover:text-sky-300"
                >
                  repositorios de proyectos personales de mi perfil
                </a>
                . Cuando no estoy escribiendo codigo, disfruto desconectar
                haciendo rodadas con mi familia y amigos.
              </p>
            </div>
          </section>

          <div className="section-divider" aria-hidden="true" />

          <section
            id="experience"
            className="reveal-on-scroll mt-28 scroll-mt-24"
          >
            <div className="sticky top-0 z-10 -mx-6 mb-4 bg-background/85 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:hidden">
              <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-200">
                Experience
              </h2>
            </div>
            <div className="space-y-4">
              {experience.map((item) => (
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
                Projects
              </h2>
            </div>
            <div className="space-y-4">
              {projects.map((project) => (
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
                            aria-label={`Abrir demo de ${project.name}`}
                            className="project-link transition hover:text-sky-300"
                          >
                            <ArrowUpRight size={18} />
                          </a>
                        ) : null}
                        <a
                          href={project.href}
                          aria-label={`Abrir repositorio de ${project.name}`}
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
                Resume
              </p>
              <div>
                <h3 className="text-lg font-semibold leading-snug text-slate-100">
                  Curriculum Vitae
                  <span className="text-slate-500"> · </span>
                  <span className="text-slate-300">Cristhian Rolon</span>
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-400">
                  Version descargable de mi perfil profesional como Analista de
                  Sistemas-Desarrollador FullStack, con experiencia Java, bases
                  de datos e implementacion de sistemas empresariales.
                </p>
                <a
                  href={cvHref}
                  download="CV_Cristhian_Rolon.docx"
                  className="resume-download mt-6 inline-flex items-center gap-3 rounded border border-slate-700/80 px-4 py-3 text-sm font-bold uppercase tracking-[0.14em] text-slate-200 transition hover:border-sky-300/50 hover:text-sky-300"
                >
                  Descargar CV
                  <Download size={17} />
                </a>
              </div>
            </article>
          </section>

          <footer className="mt-28 max-w-md pb-20 text-sm leading-6 text-slate-500">
            Disenado y construido por Thian Rolon. Inspirado en portafolios
            oscuros, editoriales y orientados a proyectos. El codigo vive en la
            rama main del repositorio.
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
            Thian Rolon
          </p>
          <p className="truncate text-xs text-slate-400">
            Analista de Sistemas-Desarrollador FullStack
          </p>
        </a>
        <div className="ml-auto flex items-center gap-3">
          {socialLinks.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-slate-400 transition hover:text-sky-300"
            >
              <Icon />
            </a>
          ))}
          <a
            href="#intro"
            aria-label="Volver al inicio"
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
