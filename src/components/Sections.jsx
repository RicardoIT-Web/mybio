import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { about, contact, footer, qualifications, services, skills } from '../content.js';
import Reveal, { SectionHead } from './Reveal.jsx';

export function About() {
  return (
    <section id="about">
      <SectionHead label={about.label} title={about.title} />
      <div className="sec-body prose">
        {about.paragraphs.map((p, i) => (
          <Reveal as="p" key={i} delay={i * 0.08}>{p}</Reveal>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services">
      <SectionHead label={services.label} title={services.title} />
      <div className="services">
        {services.items.map((s, i) => (
          <Reveal as="article" key={i} delay={(i % 3) * 0.08} whileHover={{ y: -4 }}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills">
      <SectionHead label={skills.label} title={skills.title} />
      <div className="cols">
        {skills.groups.map((g, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <h3>{g.title}</h3>
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
  const [filter, setFilter] = useState('all');
  const shown = qualifications.items.filter((q) => filter === 'all' || q.cat === filter);

  return (
    <section id="qualifications">
      <SectionHead label={qualifications.label} title={qualifications.title} />
      <Reveal className="filters" role="group" aria-label={qualifications.label}>
        {qualifications.filters.map((f) => (
          <button
            key={f.id}
            type="button"
            id={`filter-${f.id}`}
            aria-pressed={filter === f.id}
            onClick={() => setFilter(f.id)}
          >
            {filter === f.id && <motion.span layoutId="filter-pill" className="filter-pill" transition={{ type: 'spring', stiffness: 500, damping: 38 }} />}
            <span>{f.label}</span>
          </button>
        ))}
      </Reveal>
      <motion.ul className="quals" layout>
        <AnimatePresence initial={false}>
          {shown.map((q) => (
            <motion.li
              key={q.year + q.by + q.name}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
            >
              <span className="yr">{q.year}</span>
              <span>
                {q.name}
                <small>{q.by}</small>
              </span>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <div className="cols facts">
        <Reveal>
          <h3>{qualifications.education.title}</h3>
          <p>{qualifications.education.degree}</p>
          <p><small>{qualifications.education.school}</small></p>
        </Reveal>
        <Reveal delay={0.08}>
          <h3>{qualifications.languages.title}</h3>
          {qualifications.languages.items.map((l) => (
            <p key={l.name}>
              {l.name} <small>· {l.level}</small>
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
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
        <p className="label">{contact.label}</p>
        <h2>{contact.title}</h2>
        <p className="contact-text">{contact.text}</p>
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
                  {copied ? contact.copied : contact.copy}
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
  return (
    <footer className="wrap">
      <a className="to-top" href="#top">
        <i aria-hidden="true">↑</i>
        {footer.backToTop}
      </a>
      <div className="footer-row">
        <span>© 2026 Ricardo Piedade</span>
        <span>{footer.updated}</span>
      </div>
      <p className="disclosure">
        <b>{footer.disclosureTitle}.</b> {footer.disclosure}
      </p>
    </footer>
  );
}
