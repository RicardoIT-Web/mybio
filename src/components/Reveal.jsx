import { motion } from 'framer-motion';

// Fades and lifts content into place the first time it scrolls into view
export default function Reveal({ as = 'div', delay = 0, children, ...rest }) {
  const Tag = motion[as];
  return (
    <Tag
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export function SectionHead({ label, title }) {
  return (
    <Reveal className="sec-head">
      <p className="label">{label}</p>
      <h2>{title}</h2>
    </Reveal>
  );
}
