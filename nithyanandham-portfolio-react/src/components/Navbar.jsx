import React, { useState, useEffect } from 'react';

const links = ['Home', 'About', 'Portfolio', 'Contact'];

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = links.map(l => document.getElementById(l.toLowerCase()));
      sections.forEach(s => {
        if (s && window.scrollY >= s.offsetTop - 200) setActive(s.id.charAt(0).toUpperCase() + s.id.slice(1));
      });
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '1.1rem 4rem',
      background: scrolled ? 'rgba(8,8,16,0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      transition: 'all 0.3s',
    }}>
      <span style={{
        fontFamily: "'Syne', sans-serif", fontWeight: 700,
        color: 'var(--purple-light)', fontSize: '1.1rem', letterSpacing: '-0.01em'
      }}>Nithyanandham J</span>

      <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }}>
        {links.map(l => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              onClick={() => setActive(l)}
              style={{
                color: active === l ? '#fff' : 'var(--muted)',
                textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500,
                transition: 'color 0.3s', position: 'relative', paddingBottom: 4,
              }}
            >
              {l}
              {active === l && (
                <span style={{
                  position: 'absolute', bottom: -4, left: 0, right: 0,
                  height: 2, background: 'var(--purple)', borderRadius: 2,
                }} />
              )}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
