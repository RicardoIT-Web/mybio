import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const LangContext = createContext({ lang: 'en', setLang: () => {}, t: (v) => v });

function initialLang() {
  const hash = window.location.hash.replace('#', '');
  if (hash === 'pt' || hash === 'en') return hash;
  try {
    const stored = localStorage.getItem('bio-lang');
    if (stored === 'pt' || stored === 'en') return stored;
  } catch (e) {
    // storage blocked: fall through to browser language
  }
  return (navigator.language || '').toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(initialLang);

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang);
  }, [lang]);

  const setLang = useCallback((next) => {
    setLangState(next);
    try {
      localStorage.setItem('bio-lang', next);
    } catch (e) {
      // not critical
    }
  }, []);

  // Pick the right language from a { en, pt } value; plain strings and arrays pass through
  const t = useCallback(
    (value) => (value && typeof value === 'object' && !Array.isArray(value) ? value[lang] ?? value.en : value),
    [lang]
  );

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
