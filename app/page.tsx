'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, Code2, GitBranch } from 'lucide-react';

const navItems = [
  ['ABOUT', '#about'],
  ['EXPERIENCE', '#experience'],
  ['PROJECTS', '#projects'],
];

const socialLinks = [
  ['GH', 'GitHub', 'https://github.com/ThianR'],
  ['PF', 'Portafolio', 'https://github.com/ThianR/Portafolio'],
  ['ML', 'MunicipaLink', 'https://municipalink.vercel.app'],
  ['PY', 'Paraguay', '#contact'],
];

const experience = [
  {
    period: '2026 - PRESENTE',
    role: 'Desarrollador de productos digitales',
    company: 'Proyectos propios',
    description:
      'Construyo sistemas web, aplicaciones moviles e integraciones para resolver procesos reales: asistencia, facturacion electronica, participacion ciudadana, finanzas personales y herramientas para IA.',
    stack: ['Arquitectura', 'APIs', 'Producto'],
  },
  {
    period: '2026',
    role: 'Integraciones para Paraguay',
    company: 'SIFEN, RRHH y plataformas operativas',
    description:
      'Trabajo con dominios donde importan la trazabilidad, la seguridad y la claridad del flujo: generacion de documentos, comunicacion con servicios externos y paneles faciles de operar.',
    stack: ['Java', 'Spring Boot', 'PostgreSQL'],
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

const tools = [
  'Java',
  'Spring Boot',
  'Flutter',
  'Dart',
  'TypeScript',
  'PostgreSQL',
  'APIs REST',
  'Offline-first',
  'Arquitectura modular',
  'Automatizacion',
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sectionIds = ['about', 'experience', 'projects'];
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

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div
        data-shell
        className="portfolio-shell mx-auto grid min-h-screen grid-cols-1 px-6 py-12 md:px-12 lg:px-0 lg:py-0"
      >
        <header
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
              Desarrollador Full Stack
            </h2>
            <p className="mt-4 max-w-xs text-lg leading-7 text-slate-400">
              Construyo productos digitales claros para problemas reales.
            </p>

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
            {socialLinks.map(([initials, label, href]) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="grid h-6 w-6 place-items-center rounded-sm bg-slate-400/80 font-mono text-[10px] font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-sky-300 sm:h-8 sm:w-8 sm:text-xs lg:h-6 lg:w-6"
              >
                {initials}
              </a>
            ))}
          </div>
        </header>

        <div data-content className="portfolio-content pt-16 lg:py-24">
          <section id="about" className="scroll-mt-24 lg:min-h-[542px]">
            <div className="sticky top-0 z-10 -mx-6 mb-4 bg-background/85 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:hidden">
              <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-200">
                About
              </h2>
            </div>
            <div className="space-y-5 text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 lg:text-base lg:leading-7">
              <p>
                Hola, soy Cristhian Rolon, aunque en mis proyectos vas a verme
                como Thian Rolon. Me gusta construir productos que conectan
                arquitectura solida con interfaces faciles de entender. Disfruto
                trabajar en esa zona donde una idea tecnica se vuelve una
                herramienta que alguien puede usar sin friccion.
              </p>
              <p>
                Actualmente desarrollo proyectos propios alrededor de
                automatizacion, plataformas operativas, integraciones locales y
                aplicaciones moviles. Mis repos publicos muestran ese recorrido:
                desde un sistema de asistencia hasta middleware para SIFEN,
                civic tech, finanzas personales y herramientas para agentes de
                IA.
              </p>
              <p>
                Trabajo con Java, Spring Boot, Flutter, Dart, TypeScript y
                PostgreSQL. Me interesa que el software sea mantenible, seguro y
                lo bastante claro como para que el producto pueda crecer sin
                volverse pesado.
              </p>
            </div>
          </section>

          <section id="experience" className="mt-28 scroll-mt-24">
            <div className="sticky top-0 z-10 -mx-6 mb-4 bg-background/85 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:hidden">
              <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-200">
                Experience
              </h2>
            </div>
            <div className="space-y-4">
              {experience.map((item) => (
                <article
                  key={`${item.period}-${item.role}`}
                  className="group grid gap-4 rounded-md p-0 transition sm:grid-cols-[9rem_1fr] sm:gap-8 lg:-mx-6 lg:p-6 lg:hover:bg-slate-800/45"
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
                          className="rounded-full bg-sky-400/10 px-3 py-1 text-sm font-medium text-sky-300"
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

          <section id="projects" className="mt-28 scroll-mt-24">
            <div className="sticky top-0 z-10 -mx-6 mb-4 bg-background/85 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:hidden">
              <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-200">
                Projects
              </h2>
            </div>
            <div className="space-y-4">
              {projects.map((project) => (
                <article
                  key={project.name}
                  className="group grid gap-5 rounded-md transition sm:grid-cols-[9rem_1fr] sm:gap-8 lg:-mx-6 lg:p-6 lg:hover:bg-slate-800/45"
                >
                  <div className="hidden h-20 rounded border border-slate-700/80 bg-slate-800/70 p-3 sm:flex">
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
                            className="transition hover:text-sky-300"
                          >
                            <ArrowUpRight size={18} />
                          </a>
                        ) : null}
                        <a
                          href={project.href}
                          aria-label={`Abrir repositorio de ${project.name}`}
                          className="transition hover:text-sky-300"
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
                          className="rounded-full bg-sky-400/10 px-3 py-1 text-sm font-medium text-sky-300"
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

          <footer className="mt-28 max-w-md pb-20 text-sm leading-6 text-slate-500">
            Disenado y construido por Thian Rolon. Inspirado en portafolios
            oscuros, editoriales y orientados a proyectos. El codigo vive en la
            rama main del repositorio.
          </footer>
        </div>
      </div>
    </main>
  );
}
