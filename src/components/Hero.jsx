import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useReducedMotion } from 'framer-motion';
import { figures, hero } from '../content.js';

const rise = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

export function Hero() {
  return (
    <div className="hero" id="top">
      <div>
        <motion.p className="label" variants={rise} initial="hidden" animate="show" custom={0}>
          {hero.eyebrow}
        </motion.p>
        {/* name stays in the page outline for screen readers and search engines, but isn't shown */}
        <h1 className="sr-only">Ricardo Piedade</h1>
        <motion.p className="lede" variants={rise} initial="hidden" animate="show" custom={1}>
          {hero.lede}
        </motion.p>
        <motion.div className="actions" variants={rise} initial="hidden" animate="show" custom={2}>
          <a className="btn primary" href="#contact">{hero.primary}</a>
          <a className="btn" href="#experience">{hero.secondary}</a>
        </motion.div>
      </div>

      <motion.figure
        className="titleblock"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="photo">
          <img src="assets/ricardo.jpg" alt={hero.photoAlt} width="640" height="640" />
        </div>
        <dl>
          {hero.facts.map((f) => (
            <div key={f.label} className="tb-row">
              <dt className="label">{f.label}</dt>
              <dd className={f.status ? 'status' : undefined}>{f.value}</dd>
            </div>
          ))}
        </dl>
      </motion.figure>
    </div>
  );
}

function CountUp({ prefix = '', to, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) {
      if (reduce) setValue(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, to]);

  return (
    <b ref={ref} aria-label={`${prefix}${to}${suffix}`}>
      {prefix}
      {value}
      {suffix}
    </b>
  );
}

export function Figures() {
  return (
    <div className="figures">
      {figures.map((f, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
        >
          <CountUp prefix={f.prefix} to={f.to} suffix={f.suffix} />
          <span>{f.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
