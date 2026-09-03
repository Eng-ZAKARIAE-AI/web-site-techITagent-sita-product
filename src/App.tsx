import { useEffect, useState } from 'react'
import { FeedbackForm } from './db-feedback'

type IconProps = { size?: number }

const IconBolt = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8z" />
  </svg>
)

const IconShield = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const IconLayers = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2 2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
)

const IconChat = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
)

const IconChart = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 3v18h18" />
    <path d="M7 14l4-4 4 4 5-6" />
  </svg>
)

const IconPlug = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 2v6" />
    <path d="M15 2v6" />
    <path d="M6 8h12v4a6 6 0 0 1-12 0z" />
    <path d="M12 18v4" />
  </svg>
)

const IconArrow = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)

const IconGithub = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5 3.3 9.3 7.9 10.8.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.7.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.8C23.5 5.7 18.3.5 12 .5z" />
  </svg>
)

const IconSun = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m4.93 19.07 1.41-1.41" />
    <path d="m17.66 6.34 1.41-1.41" />
  </svg>
)

const IconMoon = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

const features = [
  {
    icon: <IconChat size={18} />,
    title: 'Natural Language Queries',
    body: 'Ask questions in plain English or French. The agent understands operational context and returns clear, contextual answers.',
  },
  {
    icon: <IconLayers size={18} />,
    title: '6 Specialized Tools',
    body: 'Hosts, problems, metrics, resource usage, anomalies and history — exposed as composable tool calls to the LLM.',
  },
  {
    icon: <IconPlug size={18} />,
    title: 'Multi-LLM Orchestration',
    body: 'Switch between OpenAI, Groq, Gemini and Cohere. Automatic fallback to a Mock Mode keeps the service always available.',
  },
  {
    icon: <IconChart size={18} />,
    title: 'Anomaly Detection',
    body: 'A Scikit-Learn pipeline analyzes historical metrics to flag abnormal behavior and enrich responses.',
  },
  {
    icon: <IconShield size={18} />,
    title: 'Read-Only Zabbix Access',
    body: 'The agent queries the Zabbix MySQL database in read-only mode. Your monitoring data is never modified.',
  },
  {
    icon: <IconBolt size={18} />,
    title: 'Streaming Responses',
    body: 'Tokens stream in real time to the UI for sub-2s perceived latency, with transparent Chain-of-Thought reasoning.',
  },
]

const steps = [
  {
    title: 'Ask in natural language',
    body: 'Type a question about your infrastructure: "Which server has the highest CPU load in the last 24 hours?"',
  },
  {
    title: 'Agent plans tool calls',
    body: 'The LLM interprets intent, chooses the right tools and orchestrates their execution against your Zabbix database.',
  },
  {
    title: 'Data is fetched & correlated',
    body: 'Tools query hosts, problems and metrics in read-only mode. Anomaly detection enriches the context.',
  },
  {
    title: 'Streaming, contextual answer',
    body: 'You receive an explained response, streamed token-by-token, with the reasoning steps visible along the way.',
  },
]

type Theme = 'light' | 'dark'

const THEME_KEY = 'techit-theme'

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  const stored = window.localStorage.getItem(THEME_KEY) as Theme | null
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    hosts: '<50',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus('error')
      return
    }
    setStatus('sending')
    // Simulated async submit — wire this to your API endpoint.
    window.setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', company: '', hosts: '<50', message: '' })
    }, 900)
  }

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    window.localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <>
      <header className="nav" style={scrolled ? { boxShadow: 'var(--shadow-sm)' } : undefined}>
        <div className="container nav-inner">
          <a href="/" className="brand" aria-label="TechIT Agent home">
            <img src="/favicon1.svg" alt="TechIT Agent" width="50" height="50" />
            <span>TechIT Agent</span>
          </a>
          <nav className="nav-links" aria-label="Primary">
            <a href="/#features">Features</a>
            <a href="/#how">How it works</a>
            <a href="/#architecture">Architecture</a>
            <a href="/#contact">Contact</a>
          </nav>
          <div className="nav-actions">
            <a href="/#cta" className="btn btn-primary btn-sm">
              Get started <IconArrow />
            </a>
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <IconSun /> : <IconMoon />}
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="top">
        <div className="container hero-inner">
          <div>

            <h1>
              Turn Zabbix alerts into <span className="accent">clear answers.</span>
            </h1>
            <p className="hero-sub">
              TechIT Agent is an intelligent monitoring assistant that connects to your Zabbix database, understands your
              infrastructure in natural language, and explains what's happening — before alert fatigue sets in.
            </p>
            <div className="hero-actions">
              <a href="/#contact" className="btn btn-primary">
                Start free trial <IconArrow />
              </a>
              <a href="/#how" className="btn btn-ghost">
                See how it works
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="num">6</div>
                <div className="lbl">Specialized tools</div>
              </div>
              <div className="stat">
                <div className="num">4+</div>
                <div className="lbl">LLM providers</div>
              </div>
              <div className="stat">
                <div className="num">&lt;2s</div>
                <div className="lbl">Streaming latency</div>
              </div>
              <div className="stat">
                <div className="num">99.5%</div>
                <div className="lbl">Target uptime</div>
              </div>
            </div>
          </div>

          <div className="terminal" role="img" aria-label="Example interaction with the TechIT Agent">
            <div className="terminal-bar">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span className="title">techit-agent — chat</span>
            </div>
            <div className="terminal-body">
              <div>
                <span className="t-tag">USER</span>
                <span className="t-user">Which server has the highest CPU load today?</span>
              </div>
              <div style={{ marginTop: 14 }}>
                <span className="t-tag">AGENT</span>
                <span className="t-agent">Reasoning…</span>
              </div>
              <div style={{ marginTop: 6 }} className="t-agent">
                <span className="t-tag">TOOL</span>
                <span>get_top_hosts(metric="cpu", range="24h")</span>
              </div>
              <div style={{ marginTop: 6 }} className="t-agent">
                <span className="t-tag">TOOL</span>
                <span>detect_anomalies(window="1h")</span>
              </div>
              <div style={{ marginTop: 14 }}>
                <span className="t-tag">ANSWER</span>
                <span className="t-user">
                  db-prod-03 is at <strong>94%</strong> CPU — anomaly detected on its
                  workload since 09:12. Likely cause: a stuck cron on the batch pipeline
                  <span className="t-cursor" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section section-alt" id="features">
        <div className="container">
          <div className="section-head">
            <h2>Built for production monitoring</h2>
            <p>
              Everything you need to make sense of your infrastructure — from raw metrics to clear, justified
              recommendations.
            </p>
          </div>
          <div className="features-grid">
            {features.map((f) => (
              <article key={f.title} className="feature">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section" id="how">
        <div className="container">
          <div className="section-head">
            <h2>From question to answer in seconds</h2>
            <p>A four-step pipeline that combines LLM reasoning with deterministic, read-only data access.</p>
          </div>
          <div className="steps">
            {steps.map((s, i) => (
              <div key={s.title} className="step">
                <div className="idx">STEP {String(i + 1).padStart(2, '0')}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="section section-alt" id="architecture">
        <div className="container">
          <div className="section-head">
            <h2>Modular, resilient architecture</h2>
            <p>
              Each layer can be swapped or extended without touching the agent's core — add new tools or LLM
              providers in isolation.
            </p>
          </div>
          <div className="arch">
            <div className="arch-card">
              <h3>Stack layers</h3>
              <div className="layer">
                <span className="tag">UI</span>
                <span className="lbl">React 19 · Streamlit · CLI</span>
              </div>
              <div className="layer">
                <span className="tag">API</span>
                <span className="lbl">FastAPI · token streaming</span>
              </div>
              <div className="layer">
                <span className="tag">Agent</span>
                <span className="lbl">Multi-LLM orchestrator</span>
              </div>
              <div className="layer">
                <span className="tag">Tools</span>
                <span className="lbl">6 specialized Zabbix tools</span>
              </div>
              <div className="layer">
                <span className="tag">ML</span>
                <span className="lbl">Anomaly detection · Scikit-Learn</span>
              </div>
              <div className="layer">
                <span className="tag">Data</span>
                <span className="lbl">Zabbix MySQL · read-only</span>
              </div>
            </div>
            <div className="arch-side">
              <div className="arch-bullet">
                <h4>Resilience by design</h4>
                <p>When every LLM provider is unavailable, the agent transparently falls back to a Mock Mode so the UI never breaks.</p>
              </div>
              <div className="arch-bullet">
                <h4>Secure by default</h4>
                <p>Read-only database credentials, prompt sanitization, and API keys managed exclusively via environment variables.</p>
              </div>
              <div className="arch-bullet">
                <h4>Transparent reasoning</h4>
                <p>The Chain-of-Thought is visible in the UI — every tool call, every intermediate step, every conclusion.</p>
              </div>
              <div className="arch-bullet">
                <h4>Built to scale</h4>
                <p>Up to 50 concurrent requests without noticeable degradation, with sliding-window context for long sessions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="cta">
        <div className="container cta-inner">
          <h2>Give your team answers, not alerts.</h2>
          <p>Connect your Zabbix database in minutes. No agents to install on every host, no dashboards to rebuild.</p>
          <div className="cta-actions">
            <a href="/#contact" className="btn btn-primary">
              Request a demo <IconArrow />
            </a>
            <a
              href="https://github.com/Eng-ZAKARIAE-AI/intership_end_of_year"
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-ghost"
            >
              <IconGithub /> View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="section" id="contact-form">
        <div className="container">
          <div className="section-head">
            <h2>Talk to the team</h2>
            <p>Tell us about your infrastructure and what you want to monitor. We'll get back within 24 hours.</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="cf-name">Full name</label>
                <input
                  id="cf-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Jane Doe"
                  value={form.name}
                  onChange={onChange}
                />
              </div>
              <div className="form-field">
                <label htmlFor="cf-email">Work email</label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="jane@company.com"
                  value={form.email}
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="cf-company">Company</label>
                <input
                  id="cf-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Acme Corp"
                  value={form.company}
                  onChange={onChange}
                />
              </div>
              <div className="form-field">
                <label htmlFor="cf-hosts">Hosts monitored</label>
                <select id="cf-hosts" name="hosts" value={form.hosts} onChange={onChange}>
                  <option value="<50">Less than 50</option>
                  <option value="50-500">50 – 500</option>
                  <option value="500-5000">500 – 5,000</option>
                  <option value=">5000">More than 5,000</option>
                </select>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="cf-message">How can we help?</label>
              <textarea
                id="cf-message"
                name="message"
                rows={5}
                required
                placeholder="Tell us about your Zabbix setup and what you'd like the agent to do…"
                value={form.message}
                onChange={onChange}
              />
            </div>

            <div className="form-footer">
              <p className="form-fineprint">
                By submitting this form, you agree to our{' '}
                <a href="policy">privacy policy</a>. We never share your data.
              </p>
              <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send message'} <IconArrow />
              </button>
            </div>

            {status === 'sent' && (
              <div className="form-alert form-alert-success" role="status">
                Thanks! Your message is on its way — we'll reply within 24 hours.
              </div>
            )}
            {status === 'error' && (
              <div className="form-alert form-alert-error" role="alert">
                Something went wrong. Please try again or email us directly at{' '}
                <a href="mailto:zakariae.Elhaddouchi@sita.aero">zakariae.Elhaddouchi@sita.aero</a>.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* FEEDBACK */}
      <section className="section section-alt" id="feedback">
        <div className="container">
          <div className="section-head">
            <h2>Your opinion matters</h2>
            <p>
              How can we make TechIT Agent better for your Zabbix workflow? Rate your experience,
              report a bug, or suggest a feature — we read every submission.
            </p>
          </div>
          <FeedbackForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="brand" style={{ color: 'var(--inverse-text)' }}>
                <img src="/favicon1.svg" alt="TechIT Agent" width="50" height="50" />
                <span>TechIT Agent</span>
              </div>
              <p>
                An intelligent AI agent for Zabbix infrastructure monitoring. Built as an end-of-studies project at
                ENIAD.
              </p>
            </div>
            <div>
              <h5>Product</h5>
              <ul>
                <li><a href="/features">Features</a></li>
                <li><a href="/how">How it works</a></li>
                <li><a href="/architecture">Architecture</a></li>
              </ul>
            </div>
            <div>
              <h5>Resources</h5>
              <ul>
                <li><a href="/docs">Documentation</a></li>
                <li><a href="/api">API reference</a></li>
                <li><a href="/changelog">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h5>Contact</h5>
              <ul>
                <li><a href="mailto:zakariae.Elhaddouchi@sita.aero.">Zakaria</a></li>
                <li><a href="https://github.com/Eng-ZAKARIAE-AI" target="_blank" rel="noreferrer noopener">GitHub</a></li>
                <li><a href="/demo">Request a demo</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} TechIT Agent. All rights reserved.</span>
            <div className="legal">
              <a href="/policy">Privacy</a>
              <a href="/terms">Terms</a>
              <a href="/security">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App