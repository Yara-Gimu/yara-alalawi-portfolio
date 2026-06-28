import { useEffect, useState, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Brain,
  Cloud,
  Database,
  ExternalLink,
  Gamepad2,
  Github,
  Hammer,
  Layers3,
  Linkedin,
  Mail,
  MoveRight,
  MoonStar,
  Shield,
  Sparkles,
  TerminalSquare,
  SunMedium,
  Waves,
  Workflow,
} from 'lucide-react';

type TechGroup = {
  title: string;
  icon: typeof Cloud;
  items: string[];
};

type ArsenalProject = {
  icon: typeof Cloud;
  title: string;
  description: string;
  href: string;
  imageSrc?: string;
  imageAlt?: string;
};

type CaseStudy = {
  badge: string;
  title: string;
  problem: string;
  architecture: string;
  impact: string;
  visualTitle: string;
  visualSubtitle: string;
  visualAccent: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  reverse?: boolean;
};

const navItems = [
  { label: 'Case Studies', href: '#cases' },
  { label: 'Technical Arsenal', href: '#arsenal' },
  { label: 'Tech Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' },
];

const caseStudies: CaseStudy[] = [
  {
    badge: 'Enterprise Cloud & AI',
    title: 'GreenVision: AI-Powered Environmental Monitoring System',
    problem:
      'Invasive plants threaten local ecosystems, costing field teams significant time and budget through manual, unguided scouting across vast landscapes.',
    architecture:
      'Engineered a cloud-native asynchronous RESTful API using FastAPI, Python, and Supabase (PostgreSQL). Integrated multimodal AI (Gemini 2.0 Flash Vision) with an on-the-fly image compression pipeline to minimize bandwidth costs.',
    impact:
      'Eliminated random scouting by guiding environmental teams directly to targets. Qualified as a Top 40 startup in StartSmart Saudi, directly supporting the Saudi Green Initiative and Vision 2030.',
    visualTitle: 'Architecture Diagram Placeholder',
    visualSubtitle: 'FastAPI · Supabase · Gemini Vision · Async Processing',
    visualAccent: 'from-amber-100 via-orange-50 to-slate-50',
    imageSrc: '/images/cases/greenvision-architecture.png',
    imageAlt: 'GreenVision architecture diagram',
    href: 'https://green-vision.vercel.app/',
  },
  {
    badge: 'System Architecture & Interactive Media',
    title: 'Mirrors of Time: Interactive VR Heritage Experience',
    problem:
      'Traditional educational methods fail to engage younger audiences with crucial cultural heritage, leading to limited awareness of ancient scripts like the Thamudic language.',
    architecture:
      "Architected core gameplay loops, stealth-based evasion systems, and a complex 'Time Freeze' mechanic using Unity and C#. Managed a multidisciplinary team via Trello and GitHub for version control.",
    impact:
      'Delivered a standalone, highly optimized VR experience that won 1st Place in the MCIT Game by CODE national program and secured official studio incubation.',
    visualTitle: 'Gameplay / VR Capture Placeholder',
    visualSubtitle: 'Unity 3D · C# · OOP · Production Tooling',
    visualAccent: 'from-stone-100 via-amber-50 to-slate-50',
    imageSrc: '/images/cases/mirrors-of-time-gameplay.png',
    imageAlt: 'Mirrors of Time gameplay capture',
    href: 'https://www.youtube.com/watch?si=NMRThQomBVnXDJkl&v=dUBPhcU9S68&feature=youtu.be',
    reverse: true,
  },
];

const technicalArsenal: ArsenalProject[] = [
  {
    icon: Database,
    title: 'Mufakkirat Saudiya',
    description:
      'Serverless Academic Archive built with Cloudflare Workers and Appwrite for secure, real-time data ingestion.',
    imageSrc: '/images/projects/mufakkirat-saudiya.png',
    imageAlt: 'Mufakkirat Saudiya project screenshot',
    href: 'https://mufakkirat-saudiya.pages.dev/',
  },
  {
    icon: Shield,
    title: 'Cyber Detective',
    description:
      'Web-Based Digital Forensics Sim featuring a custom JavaScript engine to detect data leaks. Deployed via GitHub Actions CI/CD.',
    imageSrc: '/images/projects/cybersecurity-game.png',
    imageAlt: 'Cyber Detective gameplay screenshot',
    href: 'https://cyber-detective-cybersecurity-scenario.pages.dev/',
  },
  {
    icon: Brain,
    title: "Sahar Al-Ab'ad",
    description:
      'AI-Driven Hologram & Chatbot (Raawi.ai). Architected a scalable backend using Docker, Render, and Gemini 2.5.',
    imageSrc: '/images/projects/sahar-al-abad.png',
    imageAlt: 'Sahar Al-Abad project screenshot',
    href: 'https://rawi-jyhz.onrender.com/',
  },
  {
    icon: Cloud,
    title: 'AWS Enterprise Infrastructure',
    description:
      'Designed fault-tolerant deployments utilizing secured VPCs, EC2, RDS, and Serverless REST APIs with API Gateway & DynamoDB.',
    imageSrc: '/images/projects/aws-enterprise.png',
    imageAlt: 'AWS enterprise infrastructure diagram',
    href: 'https://github.com/Yara-Gimu/Serverless-REST-API',
  },
  {
    icon: Brain,
    title: 'Zubdat Al-Mubara',
    description:
      'AI-powered smart sports summary platform that processes football match videos and generates concise highlight reels using Whisper, Flask, Docker, and Hugging Face Spaces.',
    imageSrc: '/images/projects/zubdat-al-mubara.png',
    imageAlt: 'Zubdat Al-Mubara project screenshot',
    href: 'https://huggingface.co/spaces/yuributterfly/Zubdat-Al-Mubara',
  },
];

const techStacks: TechGroup[] = [
  {
    title: 'Cloud & DevOps',
    icon: Workflow,
    items: ['AWS (EC2, RDS, Lambda, S3)', 'Docker', 'CI/CD', 'Cloudflare', 'Supabase'],
  },
  {
    title: 'Backend & AI',
    icon: Brain,
    items: ['Python (FastAPI, Flask)', 'PostgreSQL', 'MySQL', 'Gemini API', 'Prompt Engineering'],
  },
  {
    title: 'Interactive & Systems',
    icon: Layers3,
    items: ['Unity 3D', 'C#', 'Object-Oriented Programming (OOP)', 'System Architecture'],
  },
];

const footerLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yara-alalawi999', icon: Linkedin },
  { label: 'GitHub', href: 'https://github.com/Yara-Gimu', icon: Github },
  { label: 'Itch.io', href: 'https://yara-gimu.itch.io/', icon: Gamepad2 },
  { label: 'Email', href: 'mailto:Yaraalalawi30@gmail.com', icon: Mail },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 28 }}
      whileInView={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reducedMotion ? 0 : 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="max-w-3xl">
      <span className="section-kicker">{eyebrow}</span>
      <h2 className="section-heading">{title}</h2>
      {description ? <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">{description}</p> : null}
    </div>
  );
}

function CaseVisual({ title, subtitle, accent, reverse, imageSrc, imageAlt }: { title: string; subtitle: string; accent: string; reverse?: boolean; imageSrc: string; imageAlt: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br ${accent} p-4 shadow-soft sm:p-6`}>
      <div className="absolute inset-0 bg-heritage-grid bg-[length:28px_28px] opacity-40" />
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/70 backdrop-blur-sm">
        <div className="relative h-full w-full">
          <img src={imageSrc} alt={imageAlt} className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.02),rgba(15,23,42,0.38))]" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
            <div className="flex items-end justify-between gap-4">
              <div className="max-w-md">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80">{reverse ? 'Gameplay Capture' : 'Architecture Visual'}</p>
                <h3 className="mt-2 text-2xl font-display text-white sm:text-3xl">{title}</h3>
                <p className="mt-2 max-w-lg text-sm leading-6 text-white/80">{subtitle}</p>
              </div>
              <div className="hidden rounded-2xl border border-white/20 bg-white/10 p-3 text-white shadow-sm backdrop-blur sm:block">
                <Sparkles className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const reducedMotion = useReducedMotion();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    const storedTheme = window.localStorage.getItem('portfolio-theme');

    if (storedTheme) {
      return storedTheme === 'dark';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    window.localStorage.setItem('portfolio-theme', isDarkMode ? 'dark' : 'light');
    document.documentElement.style.colorScheme = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? 'dark-theme relative overflow-hidden bg-slate-950 text-slate-100' : 'relative overflow-hidden bg-sand text-ink'}>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[46rem] bg-hero-glow opacity-90" />
      <div className="pointer-events-none absolute left-0 top-28 h-80 w-80 rounded-full bg-terracotta/5 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-[48rem] h-96 w-96 rounded-full bg-amber-100/50 blur-3xl" />

      <header className={isDarkMode ? 'sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-xl' : 'sticky top-0 z-50 border-b border-slate-200/70 bg-sand/80 backdrop-blur-xl'}>
        <div className="container-shell flex h-16 items-center justify-between py-4">
          <button
            type="button"
            onClick={() => scrollToId('hero')}
            className="group inline-flex items-center gap-3 text-left"
            aria-label="Scroll to top"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-terracotta/15 bg-white shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5">
              <Cloud className="h-5 w-5 text-terracotta" />
            </span>
            <span>
              <span className="block text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Portfolio</span>
              <span className="block font-display text-base text-ink">Yara Al-alawi</span>
            </span>
          </button>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => scrollToId(item.href.slice(1))}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-white hover:text-terracotta"
              >
                {item.label}
              </button>
            ))}

            <button
              type="button"
              onClick={() => setIsDarkMode((current) => !current)}
              className={`ml-2 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                isDarkMode
                  ? 'border-slate-700 bg-slate-900 text-slate-100 hover:border-terracotta/40 hover:text-terracotta'
                  : 'border-slate-300 bg-white text-slate-700 hover:border-terracotta/40 hover:text-terracotta'
              }`}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <SunMedium className="h-4 w-4" /> : <MoonStar className="h-4 w-4" />}
              {isDarkMode ? 'Light' : 'Dark'}
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero" className="relative pt-8 sm:pt-12 lg:pt-16">
          <div className="container-shell grid items-center gap-14 py-12 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
            <Reveal className="relative z-10">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-terracotta/15 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-terracotta" />
                  Yara Al-alawi
                </div>

                <h1 className="mt-8 max-w-4xl text-4xl font-display leading-[1] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                  Architecting Scalable Cloud Systems & Intelligent Solutions
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                  Cloud Software Engineer specializing in AWS, AI integrations, and high-performance interactive environments. Building the infrastructure of tomorrow, today.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <motion.button
                    type="button"
                    whileHover={reducedMotion ? undefined : { y: -2 }}
                    whileTap={reducedMotion ? undefined : { scale: 0.98 }}
                    onClick={() => scrollToId('cases')}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-4 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(180,83,9,0.18)] transition-colors hover:bg-[#9A4508]"
                  >
                    View Case Studies
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>

                  <a
                    href="/resume.txt"
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-semibold text-ink transition-colors hover:border-terracotta/30 hover:text-terracotta"
                  >
                    Download Resume
                    <MoveRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
                  {[
                    { label: 'Cloud-native delivery', value: 'AWS, FastAPI, Supabase' },
                    { label: 'AI-enabled systems', value: 'Gemini Vision, Prompt Engineering' },
                    { label: 'Interactive engineering', value: 'Unity, C#, systems loops' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl border border-slate-200/70 bg-white/90 p-4 shadow-sm">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{item.label}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-700">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="relative">
              <div className="relative mx-auto w-full max-w-xl">
                <div className="absolute -left-6 top-10 h-20 w-20 rounded-3xl border border-terracotta/10 bg-white/80 shadow-sm backdrop-blur" />
                <div className="absolute -right-2 bottom-6 h-24 w-24 rounded-[2rem] border border-slate-200/80 bg-white/90 shadow-sm backdrop-blur" />

                <motion.div
                  animate={reducedMotion ? undefined : { y: [0, -8, 0], rotate: [0, 0.5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="glass-card relative overflow-hidden p-5 sm:p-7"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(180,83,9,0.06),transparent_40%,rgba(15,23,42,0.02))]" />
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white">
                    <img src="/images/hero/yara-hero.jpg" alt="Yara Al-alawi portrait" className="h-full w-full object-cover object-center" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.02),rgba(15,23,42,0.42))]" />

                    <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80">Systems-first mindset</p>
                          <p className="mt-2 text-sm text-white/80">Minimal, resilient, and recruiter-friendly.</p>
                        </div>
                        <div className="rounded-2xl bg-white/15 p-3 text-white backdrop-blur">
                          <TerminalSquare className="h-6 w-6" />
                        </div>
                      </div>

                      <div className="grid gap-3">
                        {[
                          { title: 'Cloud', icon: Cloud, detail: 'AWS infra, serverless APIs, and observability-minded delivery.' },
                          { title: 'AI', icon: Brain, detail: 'Vision models, prompt engineering, and practical orchestration.' },
                          { title: 'Systems', icon: Hammer, detail: 'Gameplay loops, state machines, and enterprise architecture.' },
                        ].map((item, index) => (
                          <div
                            key={item.title}
                            className="rounded-2xl border border-white/20 bg-white/90 p-4 shadow-sm backdrop-blur"
                          >
                            <div className="flex items-start gap-4">
                              <div className="rounded-2xl bg-terracotta/10 p-3 text-terracotta">
                                <item.icon className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-white">{item.title}</p>
                                <p className="mt-1 text-sm leading-6 text-white/80">{item.detail}</p>
                              </div>
                            </div>
                            <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/20">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: reducedMotion ? '100%' : `${72 - index * 8}%` }}
                                transition={{ duration: 1, delay: 0.3 + index * 0.15 }}
                                className="h-full rounded-full bg-terracotta"
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-3 gap-3 text-center">
                        {[
                          ['Top 40', 'StartSmart Saudi'],
                          ['1st Place', 'MCIT Game by CODE'],
                          ['Enterprise', 'Cloud-ready systems'],
                        ].map(([value, label]) => (
                          <div key={label} className="rounded-2xl border border-white/20 bg-white/90 px-3 py-4 backdrop-blur">
                            <p className="text-lg font-display text-ink">{value}</p>
                            <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">{label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="cases" className="py-20 sm:py-28 lg:py-32">
          <div className="container-shell space-y-14 sm:space-y-20 lg:space-y-24">
            <Reveal>
              <SectionHeader
                eyebrow="Engineering Impact"
                title="Case studies that demonstrate scale, precision, and delivery"
                description="Each project is framed as a business outcome, not just a stack list. The layout keeps the emphasis on system thinking, clear impact, and a premium visual hierarchy."
              />
            </Reveal>

            {caseStudies.map((study, index) => (
              <Reveal key={study.title} delay={index * 0.08}>
                <a
                  href={study.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block rounded-[2.25rem] outline-none transition-transform duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-terracotta/60"
                  aria-label={`Open ${study.title}`}
                >
                  <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                    <div className={study.reverse ? 'lg:order-2' : 'lg:order-1'}>
                      <div className="flex items-center gap-3">
                        <span className="section-kicker !mb-0">{study.badge}</span>
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-terracotta opacity-0 transition-opacity group-hover:opacity-100">
                          Open project <ExternalLink className="h-4 w-4" />
                        </span>
                      </div>
                      <h3 className="text-2xl font-display leading-tight text-ink sm:text-3xl lg:text-4xl">
                        {study.title}
                      </h3>

                      <div className="mt-8 space-y-6 text-slate-600">
                        <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">The Problem</p>
                          <p className="mt-3 leading-8">{study.problem}</p>
                        </div>

                        <div className="rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm">
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">The Architecture</p>
                          <p className="mt-3 leading-8">{study.architecture}</p>
                        </div>

                        <div className="rounded-2xl border border-terracotta/10 bg-terracotta/5 p-5 shadow-sm">
                          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">The Impact</p>
                          <p className="mt-3 leading-8 text-slate-700">{study.impact}</p>
                        </div>
                      </div>
                    </div>

                    <div className={study.reverse ? 'lg:order-1' : 'lg:order-2'}>
                      <CaseVisual
                        title={study.visualTitle}
                        subtitle={study.visualSubtitle}
                        accent={study.visualAccent}
                        reverse={study.reverse}
                        imageSrc={study.imageSrc}
                        imageAlt={study.imageAlt}
                      />
                    </div>
                  </article>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="arsenal" className={isDarkMode ? 'border-y border-slate-800/70 bg-slate-950 py-20 sm:py-28 lg:py-32' : 'border-y border-slate-200/70 bg-white py-20 sm:py-28 lg:py-32'}>
          <div className="container-shell">
            <Reveal>
              <SectionHeader
                eyebrow="Technical Arsenal"
                title="Quick wins and supporting systems that round out the portfolio"
                description="These smaller projects show breadth without diluting the premium narrative. The grid stays clean, highly legible, and easy to scan."
              />
            </Reveal>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:gap-6">
              {technicalArsenal.map((project, index) => (
                <Reveal key={project.title} delay={index * 0.08}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group block h-full rounded-[1.5rem] outline-none transition-transform duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-terracotta/60"
                    aria-label={`Open ${project.title}`}
                  >
                    <article className="glass-card h-full p-6 transition-shadow duration-300 group-hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                        {project.imageSrc ? (
                          <div className="mb-5 overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-50">
                            <img src={project.imageSrc} alt={project.imageAlt ?? project.title} className="h-52 w-full object-contain object-center p-2 transition-transform duration-500 group-hover:scale-[1.03]" />
                          </div>
                        ) : (
                          <div className="mb-5 overflow-hidden rounded-2xl border border-slate-200/70 bg-gradient-to-br from-terracotta/10 via-white to-slate-50 p-6">
                            <div className="flex h-52 flex-col justify-between rounded-[1.25rem] border border-white/70 bg-white/60 p-5 backdrop-blur-sm">
                              <div className="flex items-center justify-between gap-4">
                                <div>
                                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-terracotta">AI Video Intelligence</p>
                                  <h4 className="mt-2 text-2xl font-display text-ink">{project.title}</h4>
                                </div>
                                <div className="rounded-2xl bg-terracotta/10 p-3 text-terracotta">
                                  <project.icon className="h-6 w-6" />
                                </div>
                              </div>
                              <div className="grid gap-3 sm:grid-cols-2">
                                <div className="rounded-2xl border border-slate-200/70 bg-white/90 p-4">
                                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Stack</p>
                                  <p className="mt-2 text-sm leading-6 text-slate-700">Whisper · Flask · Docker · Hugging Face</p>
                                </div>
                                <div className="rounded-2xl border border-slate-200/70 bg-white/90 p-4">
                                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Output</p>
                                  <p className="mt-2 text-sm leading-6 text-slate-700">Highlight reels from match videos</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      <div className="flex items-start justify-between gap-4">
                        <div className="rounded-2xl border border-terracotta/10 bg-terracotta/5 p-3 text-terracotta transition-colors group-hover:bg-terracotta/10">
                          <project.icon className="h-6 w-6" />
                        </div>
                        <ExternalLink className="h-4 w-4 text-slate-400 transition-colors group-hover:text-terracotta" />
                      </div>

                      <h3 className="mt-6 text-2xl font-display text-ink">{project.title}</h3>
                      <p className="mt-3 max-w-xl leading-8 text-slate-600">{project.description}</p>

                      <div className="mt-6 h-px w-full bg-gradient-to-r from-terracotta/0 via-terracotta/40 to-terracotta/0" />
                    </article>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="stack" className="py-20 sm:py-28 lg:py-32">
          <div className="container-shell">
            <Reveal>
              <SectionHeader
                eyebrow="Core Technologies"
                title="Recruiter-friendly tech stack, grouped for fast scanning"
                description="The categories are organized to communicate breadth and depth immediately while staying visually restrained."
              />
            </Reveal>

            <div className="mt-12 grid gap-6 xl:grid-cols-3">
              {techStacks.map((group, index) => (
                <Reveal key={group.title} delay={index * 0.08}>
                  <article className="glass-card h-full p-6 sm:p-7">
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl border border-terracotta/10 bg-terracotta/5 p-3 text-terracotta">
                        <group.icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-2xl font-display text-ink">{group.title}</h3>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-terracotta/30 hover:bg-terracotta/5 hover:text-terracotta"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className={isDarkMode ? 'border-t border-slate-800/70 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100' : 'border-t border-terracotta/15 bg-gradient-to-br from-[#fffaf4] via-[#f7efe6] to-[#fff7ed] text-ink'}>
        <div className="container-shell py-16 sm:py-20 lg:py-24">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <p className={isDarkMode ? 'section-kicker !mx-auto !border-white/10 !bg-white/5 !text-white/80' : 'section-kicker !mx-auto !border-terracotta/15 !bg-white !text-terracotta'}>Contact</p>
              <h2 className="mt-5 text-3xl font-display leading-tight sm:text-4xl lg:text-5xl">Let&apos;s build resilient systems together.</h2>
              <p className={isDarkMode ? 'mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg' : 'mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg'}>
                Open to enterprise consulting, platform architecture, and cloud-native products that need a clear technical narrative and precise execution.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-3">
                {footerLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    className={isDarkMode ? 'inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:border-terracotta/40 hover:bg-white/10 hover:text-white' : 'inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:border-terracotta/40 hover:text-terracotta'}
                  >
                    <link.icon className="h-4 w-4" />
                    {link.label}
                  </a>
                ))}
              </div>

              <div className={isDarkMode ? 'mt-12 border-t border-white/10 pt-8 text-sm text-slate-400' : 'mt-12 border-t border-slate-200 pt-8 text-sm text-slate-500'}>
                <p>Premium portfolio for Yara Al-alawi, Cloud Software Engineer &amp; Systems Architect.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </footer>
    </div>
  );
}

export default App;