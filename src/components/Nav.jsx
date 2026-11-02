import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLang } from '../lang.jsx';
import { nav } from '../content.js';

function useActiveSection(ids) {
  const [active, setActive] = useState(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

// "top" is the hero: when it is in view no menu link is highlighted
const ids = ['top', ...nav.map((n) => n.id)];

function LangSwitch() {
  const { lang, setLang } = useLang();
  return (
    <div className="lang" role="group" aria-label="Language">
      {['en', 'pt'].map((code) => (
        <button key={code} type="button" id={`lang-${code}`} aria-pressed={lang === code} onClick={() => setLang(code)}>
          {lang === code && <motion.span layoutId="lang-pill" className="lang-pill" transition={{ type: 'spring', stiffness: 500, damping: 38 }} />}
          <span className="lang-code">{code.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
}

function savedTheme() {
  try {
    const stored = localStorage.getItem('bio-theme');
    if (stored === 'light' || stored === 'dark') return stored;
  } catch (e) {
    // storage blocked: use the device setting
  }
  const attr = document.documentElement.getAttribute('data-theme');
  return attr === 'light' || attr === 'dark' ? attr : null;
}

const media = window.matchMedia('(prefers-color-scheme: dark)');

function ThemeToggle() {
  const { lang } = useLang();
  const [choice, setChoice] = useState(savedTheme);
  const [systemDark, setSystemDark] = useState(media.matches);

  // Follow the device setting until the visitor picks a theme
  useEffect(() => {
    const onChange = (e) => setSystemDark(e.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, [media]);

  useEffect(() => {
    if (choice) document.documentElement.setAttribute('data-theme', choice);
  }, [choice]);

  const current = choice ?? (systemDark ? 'dark' : 'light');
  const next = current === 'dark' ? 'light' : 'dark';
  const label =
    lang === 'pt'
      ? next === 'dark' ? 'Mudar para modo escuro' : 'Mudar para modo claro'
      : next === 'dark' ? 'Switch to dark mode' : 'Switch to light mode';

  const toggle = () => {
    setChoice(next);
    try {
      localStorage.setItem('bio-theme', next);
    } catch (e) {
      // not critical
    }
  };

  return (
    <button type="button" id="theme-toggle" className="theme-btn" aria-label={label} title={label} onClick={toggle}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.svg
          key={current}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.25 }}
        >
          {current === 'dark' ? (
            <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
          ) : (
            <>
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </>
          )}
        </motion.svg>
      </AnimatePresence>
    </button>
  );
}

export default function Nav() {
  const { t } = useLang();
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = nav.map((item) => (
    <a key={item.id} href={`#${item.id}`} className={active === item.id ? 'active' : undefined} onClick={() => setOpen(false)}>
      {t(item.label)}
      {active === item.id && <motion.span layoutId="nav-underline" className="nav-underline" />}
    </a>
  ));

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="wrap nav-inner">
        <a className="mark" href="#top">RICARDO PIEDADE</a>
        <nav className="nav-links" aria-label="Sections">{links}</nav>
        <div className="nav-end">
          <LangSwitch />
          <ThemeToggle />
          <button
            type="button"
            className="menu-btn"
            id="menu-btn"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">Menu</span>
            <span className={`burger${open ? ' open' : ''}`} aria-hidden="true"><i /><i /></span>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            className="mobile-menu"
            aria-label="Sections"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="wrap">{links}</div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
