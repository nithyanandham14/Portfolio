import React, { useState, useEffect } from 'react';
import { Mail, Code2, Zap } from 'lucide-react';
const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
);
const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);

const phrases = ['Backend Developer', 'Java Enthusiast', 'Full Stack Developer', 'Tech Explorer'];

export default function Home() {
  const [typed, setTyped] = useState('');
  const [pIdx, setPIdx] = useState(0);
  const [cIdx, setCIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const word = phrases[pIdx];
    let timeout;
    if (!deleting) {
      if (cIdx < word.length) {
        timeout = setTimeout(() => { setTyped(word.slice(0, cIdx + 1)); setCIdx(c => c + 1); }, 100);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (cIdx > 0) {
        timeout = setTimeout(() => { setTyped(word.slice(0, cIdx - 1)); setCIdx(c => c - 1); }, 60);
      } else {
        setDeleting(false);
        setPIdx(p => (p + 1) % phrases.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [typed, cIdx, deleting, pIdx]);

  const fadeIn = (delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(30px)',
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });

  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      padding: '0 4rem', paddingTop: '5rem', position: 'relative', zIndex: 1,
    }}>
      <div style={{ maxWidth: 680 }}>
        {/* Badge */}
        <div style={{ ...fadeIn(0.1), display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(124,108,240,0.12)', border: '1px solid rgba(124,108,240,0.3)',
          color: 'var(--purple-light)', padding: '0.4rem 1rem', borderRadius: 100,
          fontSize: '0.85rem', fontWeight: 500, marginBottom: '1.5rem' }}>
          <Zap size={13} /> Ready to Innovate
        </div>

        {/* Title */}
        <h1 style={{ ...fadeIn(0.25), fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(2.8rem, 6vw, 4.8rem)', fontWeight: 800, lineHeight: 1.05,
          marginBottom: '0.5rem' }}>
          Full Stack<br />
          <span style={{ color: 'var(--purple-light)' }}>Developer</span>
        </h1>

        {/* Typed */}
        <p style={{ ...fadeIn(0.4), fontSize: '1.15rem', color: 'var(--muted)',
          marginBottom: '0.9rem', minHeight: '1.5em', fontWeight: 400 }}>
          {typed}
          <span style={{
            display: 'inline-block', width: 2, height: '1em', background: 'var(--purple-light)',
            animation: 'blink 1s step-end infinite', verticalAlign: 'text-bottom', marginLeft: 1,
          }} />
        </p>

        {/* Desc */}
        <p style={{ ...fadeIn(0.5), color: 'var(--muted)', fontSize: '1rem',
          lineHeight: 1.8, marginBottom: '1.8rem', maxWidth: 520 }}>
          Building reliable, scalable backend systems and clean full-stack web applications that solve real problems.
        </p>

        {/* Tags */}
        <div style={{ ...fadeIn(0.6), display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: '2rem' }}>
          {['Java', 'Spring Boot', 'ReactJS', 'PostgreSQL'].map(t => (
            <span key={t} style={{
              background: 'rgba(255,255,255,0.05)', border: '1px solid var(--card-border)',
              color: 'var(--text)', padding: '0.35rem 1rem', borderRadius: 100, fontSize: '0.85rem',
            }}>{t}</span>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ ...fadeIn(0.7), display: 'flex', gap: 12, marginBottom: '2rem' }}>
          <a href="#portfolio" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'var(--purple)', color: '#fff', padding: '0.75rem 1.5rem',
            borderRadius: 10, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
            transition: 'all 0.3s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background='var(--purple-light)'; e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 8px 25px rgba(124,108,240,0.4)'; }}
          onMouseLeave={e => { e.currentTarget.style.background='var(--purple)'; e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none'; }}>
            <Code2 size={16} /> Projects
          </a>
          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'transparent', color: 'var(--text)', padding: '0.75rem 1.5rem',
            borderRadius: 10, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
            border: '1px solid var(--card-border)', transition: 'all 0.3s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor='var(--purple)'; e.currentTarget.style.color='var(--purple-light)'; e.currentTarget.style.transform='translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor='var(--card-border)'; e.currentTarget.style.color='var(--text)'; e.currentTarget.style.transform='translateY(0)'; }}>
            <Mail size={16} /> Contact
          </a>
        </div>

        {/* Socials */}
        <div style={{ ...fadeIn(0.8), display: 'flex', gap: 10 }}>
          {[
            { href: 'https://github.com/nithyanandham14', icon: <GithubIcon size={18} /> },
            { href: 'https://linkedin.com/in/nithyanandham-j-194036312', icon: <LinkedinIcon size={18} /> },
            { href: 'https://mail.google.com/mail/?view=cm&fs=1&to=nithyanandham1452006@gmail.com', icon: <Mail size={18} /> },
          ].map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noreferrer" style={{
              width: 44, height: 44, borderRadius: '50%', border: '1px solid var(--card-border)',
              background: 'var(--card)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--muted)', textDecoration: 'none', transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor='var(--purple)'; e.currentTarget.style.color='var(--purple-light)'; e.currentTarget.style.transform='translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor='var(--card-border)'; e.currentTarget.style.color='var(--muted)'; e.currentTarget.style.transform='translateY(0)'; }}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
    </section>
  );
}
