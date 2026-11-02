import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLang } from '../lang.jsx';
import { about, contact, footer, qualifications, services, skills } from '../content.js';
import Reveal, { SectionHead } from './Reveal.jsx';

export function About() {
  const { t } = useLang();
  return (
    <section id="about">
      <SectionHead label={t(about.label)} title={t(about.title)} />
      <div className="sec-body prose">
        {about.paragraphs.map((p, i) => (
          <Reveal as="p" key={i} delay={i * 0.08}>{t(p)}</Reveal>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  const { t } = useLang();
  return (
    <section id="services">
      <SectionHead label={t(services.label)} title={t(services.title)} />
      <div className="services">
        {services.items.map((s, i) => (
          <Reveal as="article" key={i} delay={(i % 3) * 0.08} whileHover={{ y: -4 }}>
            <h3>{t(s.title)}</h3>
            <p>{t(s.text)}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Skills() {
  const { t } = useLang();
  return (
    <section id="skills">
      <SectionHead label={t(skills.label)} title={t(skills.title)} />
      <div className="cols">
        {skills.groups.map((g, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <h3>{t(g.title)}</h3>
            <div className="chips">
              {g.items.map((item) => (
                <motion.span key={item} whileHover={{ y: -2 }}>{item}</motion.span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Qualifications() {
  const { t } = useLang();
  const [filter, setFilter] = useState('all');
  const shown = qualifications.items.filter((q) => filter === 'all' || q.cat === filter);

  return (
    <section id="qualifications">
      <SectionHead label={t(qualifications.label)} title={t(qualifications.title)} />
      <Reveal className="filters" role="group" aria-label={t(qualifications.label)}>
        {qualifications.filters.map((f) => (
          <button
            key={f.id}
            type="button"
            id={`filter-${f.id}`}
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
          >
            {filter === f.id && <motion.span layoutId="filter-pill" className="filter-pill" transition={{ type: 'spring', stiffness: 500, damping: 38 }} />}
            <span>{t(f.label)}</span>
          </button>
        ))}
      </Reveal>
      <motion.ul className="quals" layout>
        <AnimatePresence initial={false}>
          {shown.map((q) => (
            <motion.li
              key={q.year + q.by + (q.name.en || q.name)}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
            >
              <span className="yr">{q.year}</span>
              <span>
                {t(q.name)}
                <small>{q.by}</small>
              </span>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <div className="cols facts">
        <Reveal>
          <h3>{t(qualifications.education.title)}</h3>
          <p>{t(qualifications.education.degree)}</p>
          <p><small>{qualifications.education.school}</small></p>
        </Reveal>
        <Reveal delay={0.08}>
          <h3>{t(qualifications.languages.title)}</h3>
          {qualifications.languages.items.map((l) => (
            <p key={l.name}>
              {l.name} <small>· {t(l.level)}</small>
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);

  const selectEmail = () => {
    const range = document.createRange();
    range.selectNodeContents(document.getElementById('email-text'));
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  };

  const copy = () => {
    try {
      navigator.clipboard.writeText(contact.email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      }, selectEmail);
    } catch (e) {
      selectEmail();
    }
  };

  return (
    <section id="contact" className="contact">
      <Reveal>
        <p className="label">{t(contact.label)}</p>
        <h2>{t(contact.title)}</h2>
        <p className="contact-text">{t(contact.text)}</p>
        <div className="channels">
          <span className="email">
            <a href={`mailto:${contact.email}`} id="email-text">{contact.email}</a>
            <button type="button" id="copy-email" onClick={copy}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={copied ? 'done' : 'idle'}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                >
                  {copied ? t(contact.copied) : t(contact.copy)}
                </motion.span>
              </AnimatePresence>
            </button>
          </span>
          <a className="btn" href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="wrap">
      <span>© 2026 Ricardo Piedade</span>
      <span>{t(footer.updated)}</span>
    </footer>
  );
}
