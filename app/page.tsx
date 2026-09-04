import {
  ArrowUpRight,
  GitBranch,
  MapPin,
  Terminal,
} from 'lucide-react';

const navItems = [
  ['01', 'Inicio', '#inicio'],
  ['02', 'Proyectos', '#proyectos'],
  ['03', 'Stack', '#stack'],
  ['04', 'Contacto', '#contacto'],
];

const projects = [
  {
    name: 'Horus',
    eyebrow: 'Sistema de asistencia',
    description:
      'Plataforma para administrar personal, turnos, solicitudes del empleado, licenciamiento propio y arquitectura segura.',
    stack: ['HTML', 'Arquitectura segura', 'RRHH'],
    href: 'https://github.com/ThianR/Horus',
    year: '2026',
  },
  {
    name: 'Portico',
    eyebrow: 'Middleware SIFEN',
    description:
      'Monolito modular en Spring Boot y Java para facturacion electronica en Paraguay: XML, firma digital, KUDE y comunicacion API.',
    stack: ['Java', 'Spring Boot', 'SIFEN'],
    href: 'https://github.com/ThianR/Portico',
    year: '2026',
  },
  {
    name: 'BikerSquad',
    eyebrow: 'Comunicacion P2P',
    description:
      'Walkie-talkie local en Flutter para motociclistas y ciclistas, con emparejamiento QR, AES-256, Opus, VAD y AEC.',
    stack: ['Flutter', 'Dart', 'P2P audio'],
    href: 'https://github.com/ThianR/BikerSquad',
    year: '2026',
  },
  {
    name: 'MunicipaLink',
    eyebrow: 'Participacion ciudadana',
    description:
      'Plataforma web para reportar incidencias urbanas con geolocalizacion, seguimiento en tiempo real y gamificacion.',
    stack: ['Web', 'PLpgSQL', 'Civic tech'],
    href: 'https://github.com/ThianR/MunicipaLink',
    live: 'https://municipalink.vercel.app',
    year: '2026',
  },
  {
    name: 'ViyuFlow',
    eyebrow: 'Finanzas personales',
    description:
      'App movil offline-first para ingresos, presupuestos y gastos en multiples divisas, con registro por voz.',
    stack: ['Dart', 'Mobile', 'Offline-first'],
    href: 'https://github.com/ThianR/ViyuFlow',
    year: '2026',
  },
  {
    name: 'TokenCal',
    eyebrow: 'Herramienta dev/IA',
    description:
      'Visualizador local de contexto para analizar tokens, arquitectura, deuda tecnica y costos de ingesta.',
    stack: ['TypeScript', 'IA tooling', 'Analisis'],
    href: 'https://github.com/ThianR/TokenCal',
    year: '2026',
  },
];

const stack = [
  'Java',
  'Spring Boot',
  'Flutter',
  'Dart',
  'TypeScript',
  'PostgreSQL',
  'APIs',
  'Arquitectura modular',
  'Offline-first',
  'Automatizacion',
  'UX de producto',
  'Integraciones Paraguay',
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <aside className="fixed bottom-0 left-8 z-20 hidden flex-col items-center gap-6 lg:flex">
        <a
          href="https://github.com/ThianR"
          aria-label="GitHub de ThianR"
          className="text-muted-foreground transition hover:-translate-y-1 hover:text-primary"
        >
          <GitBranch size={21} />
        </a>
        <span className="h-28 w-px bg-border" />
      </aside>

      <aside className="fixed bottom-0 right-8 z-20 hidden flex-col items-center gap-6 lg:flex">
        <a
          href="https://github.com/ThianR/Portafolio"
          className="vertical-link text-sm text-muted-foreground transition hover:-translate-y-1 hover:text-primary"
        >
          Portafolio en GitHub
        </a>
        <span className="h-28 w-px bg-border" />
      </aside>

      <header className="sticky top-0 z-30 border-b border-border/70 bg-background/82 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#inicio" className="group flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center border border-primary/35 bg-primary/10 font-mono text-sm font-semibold text-primary">
              TR
            </span>
            <span className="hidden text-sm font-semibold tracking-wide text-foreground sm:block">
              Cristhian R.
            </span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navItems.slice(1).map(([number, label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm text-muted-foreground transition hover:text-primary"
              >
                <span className="mr-2 font-mono text-xs text-primary">
                  {number}.
                </span>
                {label}
              </a>
            ))}
          </div>
          <a
            href="https://github.com/ThianR"
            className="inline-flex items-center gap-2 border border-primary/45 px-4 py-2 text-sm font-medium text-primary transition hover:-translate-y-0.5 hover:bg-primary/10"
          >
            GitHub
            <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <section
        id="inicio"
        className="mx-auto grid min-h-[calc(100vh-82px)] max-w-6xl place-items-center px-6 py-20 lg:px-8"
      >
        <div className="w-full">
          <p className="mb-6 font-mono text-sm text-primary">
            Hola, soy Cristhian Rolon.
          </p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
            Construyo sistemas web, apps moviles e integraciones que convierten
            procesos complejos en productos claros.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
            Desarrollo soluciones con foco en arquitectura, automatizacion y
            experiencia de uso: desde facturacion electronica y control de
            asistencia hasta plataformas civicas, finanzas personales y
            herramientas para IA.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary/85"
            >
              Ver proyectos
              <ArrowUpRight size={17} />
            </a>
            <a
              href="https://github.com/ThianR"
              className="inline-flex items-center gap-2 border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-primary/45 hover:text-primary"
            >
              <GitBranch size={17} />
              github.com/ThianR
            </a>
          </div>
          <div className="mt-16 grid max-w-3xl grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
            {[
              ['6+', 'proyectos publicos'],
              ['2026', 'repos activos'],
              ['PY', 'software para contexto local'],
            ].map(([value, label]) => (
              <div key={label} className="bg-card px-5 py-5">
                <p className="font-mono text-2xl text-primary">{value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proyectos" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
          <div>
            <p className="font-mono text-sm text-primary">01. Proyectos</p>
            <h2 className="mt-3 text-3xl font-semibold">Trabajo destacado</h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground">
              Una seleccion de repos publicos tomada desde GitHub, organizada
              por impacto de producto y claridad tecnica.
            </p>
          </div>
          <div className="divide-y divide-border">
            {projects.map((project, index) => (
              <article
                key={project.name}
                className="group grid gap-6 py-8 transition first:pt-0 hover:bg-accent/25 sm:grid-cols-[86px_1fr]"
              >
                <div className="font-mono text-sm text-muted-foreground">
                  {String(index + 1).padStart(2, '0')} / {project.year}
                </div>
                <div>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-sm text-primary">
                        {project.eyebrow}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold text-foreground transition group-hover:text-primary">
                        {project.name}
                      </h3>
                    </div>
                    <div className="flex gap-3">
                      {project.live ? (
                        <a
                          href={project.live}
                          aria-label={`Abrir demo de ${project.name}`}
                          className="text-muted-foreground transition hover:text-primary"
                        >
                          <ArrowUpRight size={20} />
                        </a>
                      ) : null}
                      <a
                        href={project.href}
                        aria-label={`Abrir repositorio de ${project.name}`}
                        className="text-muted-foreground transition hover:text-primary"
                      >
                        <GitBranch size={20} />
                      </a>
                    </div>
                  </div>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                    {project.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <li
                        key={item}
                        className="border border-primary/20 bg-primary/7 px-3 py-1 font-mono text-xs text-primary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="border-y border-border bg-card/45">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 lg:grid-cols-[260px_1fr] lg:px-8">
          <div>
            <p className="font-mono text-sm text-primary">02. Stack</p>
            <h2 className="mt-3 text-3xl font-semibold">Herramientas</h2>
          </div>
          <div>
            <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
              Trabajo cerca del problema: elijo tecnologias por estabilidad,
              mantenibilidad y velocidad para llegar a una version usable.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {stack.map((item) => (
                <div
                  key={item}
                  className="border border-border bg-background px-4 py-3 text-sm text-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="mx-auto max-w-6xl px-6 py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="font-mono text-sm text-primary">03. Contacto</p>
          <h2 className="mt-3 text-4xl font-semibold">Hablemos de producto.</h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Si estas construyendo una plataforma, modernizando procesos o
            necesitas conectar sistemas que hoy viven separados, puedo ayudarte
            a convertir esa idea en una version funcional.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/ThianR"
              className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary/85"
            >
              <GitBranch size={17} />
              Contactarme por GitHub
            </a>
            <a
              href="https://github.com/ThianR"
              className="inline-flex items-center gap-2 border border-border px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-primary/45 hover:text-primary"
            >
              <Terminal size={17} />
              Ver GitHub
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col gap-4 border-t border-border px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <span>Disenado y construido por Cristhian Rolon.</span>
        <span className="inline-flex items-center gap-2">
          <MapPin size={15} />
          Paraguay
        </span>
      </footer>
    </main>
  );
}
