import { MotionConfig } from 'framer-motion';
import { LangProvider } from './lang.jsx';
import Nav from './components/Nav.jsx';
import { Figures, Hero } from './components/Hero.jsx';
import Career from './components/Career.jsx';
import { About, Contact, Footer, Qualifications, Services, Skills } from './components/Sections.jsx';

export default function App() {
  return (
    <LangProvider>
      {/* "user" turns animations off for people who ask their device for reduced motion */}
      <MotionConfig reducedMotion="user">
        <Nav />
        <main className="wrap">
          <Hero />
          <Figures />
          <About />
          <Services />
          <Career />
          <Skills />
          <Qualifications />
          <Contact />
        </main>
        <Footer />
      </MotionConfig>
    </LangProvider>
  );
}
