import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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

export default function Nav() {
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
      {item.label}
      {active === item.id && <motion.span layoutId="nav-underline" className="nav-underline" />}
    </a>
  ));

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="wrap nav-inner">
        <a className="mark" href="#top">RICARDO PIEDADE</a>
        <nav className="nav-links" aria-label="Sections">{links}</nav>
        <div className="nav-end">
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
