import React, { useEffect, useRef, useState } from 'react';
import { Code2, Award, Globe, Download, ArrowUpRight } from 'lucide-react';

const stats = [
  { icon: <Code2 size={20} />, num: '3', label: 'Total Projects', sub: 'Production-ready applications built' },
  { icon: <Award size={20} />, num: '3', label: 'Certification', sub: 'Oracle Java SE 17 Developer' },
  { icon: <Globe size={20} />, num: '2', label: 'Hackathons', sub: 'SIH 2025 & HackNexa 2026 finalist' },
];

function StatCard({ icon, num, label, sub }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--card)', borderRadius: 16, padding: '1.8rem 1.5rem',
        border: `1px solid ${hovered ? 'var(--purple)' : 'var(--card-border)'}`,
        transition: 'all 0.3s', textAlign: 'left',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? '0 20px 40px rgba(124,108,240,0.12)' : 'none',
      }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
        <div style={{
          width: 44, height: 44, borderRadius: '50%',
          background: 'rgba(124,108,240,0.12)', border: '1px solid rgba(124,108,240,0.2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--purple-light)',
        }}>{icon}</div>
        <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '2.5rem', fontWeight: 800 }}>{num}</span>
      </div>
      <div style={{ fontSize: '0.72rem', letterSpacing: '0.1em', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: '0.82rem', color: 'var(--muted)', marginBottom: 8 }}>{sub}</div>
      <ArrowUpRight size={14} color="var(--muted)" />
    </div>
  );
}

export default function About() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} style={{
      padding: '7rem 4rem', textAlign: 'center', position: 'relative', zIndex: 1,
    }}>
      <h2 style={{
        fontFamily: "'Syne', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 800, color: 'var(--purple-light)', marginBottom: '1.5rem',
        opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.7s ease',
      }}>About Me</h2>

      <p style={{
        maxWidth: 700, margin: '0 auto 2.5rem', color: 'var(--muted)',
        fontSize: '1.05rem', lineHeight: 1.85,
        opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.7s ease 0.15s',
      }}>
        Hello, I'm <strong style={{ color: 'var(--text)' }}>Nithyanandham J</strong> — a Software Engineering student at R.M.K Engineering College passionate about building smart and scalable web applications. I've built production-ready finance and collaboration platforms with structured authentication and optimized REST endpoints using ReactJS, Spring Boot, and PostgreSQL. Focused on backend development and analytical problem-solving, I aim to grow into a strong backend engineer within the IT industry.
      </p>

      <div style={{
        display: 'flex', gap: 12, justifyContent: 'center', marginBottom: '3.5rem',
        opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.7s ease 0.25s',
      }}>
        <a
  href="/Nithyanandham_Resume.pdf"
  download="Nithyanandham_Resume.pdf"
  style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: 'var(--purple)',
    color: '#fff',
    padding: '0.75rem 1.5rem',
    borderRadius: 10,
    fontWeight: 600,
    fontSize: '0.9rem',
    textDecoration: 'none',
    transition: 'all 0.3s',
  }}
  onMouseEnter={e => {
    e.currentTarget.style.background='var(--purple-light)';
    e.currentTarget.style.transform='translateY(-2px)';
  }}
  onMouseLeave={e => {
    e.currentTarget.style.background='var(--purple)';
    e.currentTarget.style.transform='translateY(0)';
  }}
>
  <Download size={16} />
  Download CV
</a>
        <a href="#portfolio" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          border: '1px solid var(--card-border)', color: 'var(--text)', padding: '0.75rem 1.5rem',
          borderRadius: 10, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', transition: 'all 0.3s',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor='var(--purple)'; e.currentTarget.style.color='var(--purple-light)'; e.currentTarget.style.transform='translateY(-2px)'; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor='var(--card-border)'; e.currentTarget.style.color='var(--text)'; e.currentTarget.style.transform='translateY(0)'; }}>
          <Code2 size={16} /> View Projects
        </a>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', maxWidth: 900, margin: '0 auto',
        opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.7s ease 0.35s',
      }}>
        {stats.map((s, i) => <StatCard key={i} {...s} />)}
      </div>
    </section>
  );
}
