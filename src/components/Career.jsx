import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { career, SCHEDULE_MONTHS, SCHEDULE_START_YEAR } from '../content.js';
import Reveal, { SectionHead } from './Reveal.jsx';

const pct = (months) => `${(months / SCHEDULE_MONTHS) * 100}%`;
const axisYears = [2014, 2016, 2018, 2020, 2022, 2024, 2026];
const latest = career.roles[career.roles.length - 1].id;

// Company icon on a small white tile, so logos with and without backgrounds match
function Logo({ role }) {
  return (
    <span className="logo" aria-hidden="true">
      <img src={role.logo} alt="" width="96" height="96" loading="lazy" />
    </span>
  );
}

function RoleDetail({ role }) {
  return (
    <div className="role">
      <div className="when">
        {role.dates}
        <br />
        {role.place}
      </div>
      <div>
        <h3 className="role-org">
          <Logo role={role} />
          <span>
            {role.org}
            {role.orgNote && <small className="label"> ({role.orgNote})</small>}
          </span>
        </h3>
        <p className="title">{role.title}</p>
        <ul>
          {role.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Career() {
  const [selected, setSelected] = useState(latest);
  const [showAll, setShowAll] = useState(true);
  const selectedRole = career.roles.find((r) => r.id === selected);

  return (
    <section id="experience">
      <SectionHead label={career.label} title={career.title} />

      <Reveal className="gantt">
        <div className="gantt-top">
          <p className="hint">{career.hint}</p>
          <div className="legend" aria-hidden="true">
            <span><i className="sw" />{career.legend.work}</span>
            <span><i className="sw train" />{career.legend.training}</span>
            <span><i className="sw dia" />{career.legend.cert}</span>
          </div>
        </div>

        <div role="list">
          {career.roles.map((role, i) => {
            const isOn = !showAll && selected === role.id;
            return (
              <div role="listitem" key={role.id}>
                <button
                  type="button"
                  id={`role-${role.id}`}
                  className={`g-row${isOn ? ' on' : ''}`}
                  aria-pressed={isOn}
                  aria-controls="role-detail"
                  onClick={() => {
                    setSelected(role.id);
                    setShowAll(false);
                  }}
                >
                  <span className="g-name">
                    <Logo role={role} />
                    <span className="g-text">
                      <b>{role.org}</b> · {role.short}
                      <small>{role.dates}</small>
                    </span>
                  </span>
                  <span className="track">
                    <motion.i
                      className={`bar${role.training ? ' train' : ''}`}
                      style={{ left: pct(role.start), width: pct(role.length) }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, amount: 0.8 }}
                      transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.65, 0, 0.35, 1] }}
                    />
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        <div className="g-row ms-row" aria-hidden="true">
          <span className="g-name"><b>{career.milestoneLane}</b></span>
          <span className="track">
            {career.milestones.map((m, i) => (
              <span key={m.year + i}>
                <motion.i
                  className="ms"
                  style={{ left: pct(m.at) }}
                  initial={{ scale: 0, rotate: 45 }}
                  whileInView={{ scale: 1, rotate: 45 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18, delay: 1 + i * 0.12 }}
                />
                <em className={`${m.low ? 'low' : ''}${m.end ? ' end' : ''}`} style={{ left: pct(m.at) }}>
                  {m.label}
                  <small>{m.year}</small>
                </em>
              </span>
            ))}
          </span>
        </div>

        <div className="g-row axis-row" aria-hidden="true">
          <span className="g-name" />
          <span className="axis">
            {axisYears.map((y) => (
              <span key={y} style={{ left: pct((y - SCHEDULE_START_YEAR) * 12) }}>{y}</span>
            ))}
          </span>
        </div>
      </Reveal>

      <div className="roles" id="role-detail" aria-live="polite">
        <div className="roles-bar">
          <button type="button" id="toggle-roles" className="link-btn" onClick={() => setShowAll((s) => !s)}>
            {showAll ? career.showOne : career.showAll}
          </button>
        </div>
        <AnimatePresence mode="wait" initial={false}>
          {showAll ? (
            <motion.div key="all" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {[...career.roles].reverse().map((role) => (
                <RoleDetail key={role.id} role={role} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key={selectedRole.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <RoleDetail role={selectedRole} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
