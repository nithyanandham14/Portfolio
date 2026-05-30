import React, { useState, useRef, useEffect } from 'react';
import { Code2, Award, Layers, ExternalLink, ArrowRight } from 'lucide-react';
import likemindedImg from '../assets/likeminded-desing.png';
import finance from '../assets/Image2.png';
import crowd from '../assets/Image1.png';
import OracleCert from '../assets/OracleCert.jpg';
import javaDev from '../assets/javaDeveloper.jpg';
import ai from '../assets/ai.jpg';

const projects = [
  {
    image: finance ,
    gradient: 'linear-gradient(135deg,rgba(16,185,129,0.25),rgba(5,150,105,0.15))',
    name: 'Finance Management App',
    desc: 'Full-stack finance platform with authentication, interest computation, live gold/silver rates, and automated monthly PDF generation.',
    demo: 'https://finance-1-gamma.vercel.app/', detail: 'https://github.com/nithyanandham14/Finance.git',
  },
  {
    image:crowd,
    gradient: 'linear-gradient(135deg,rgba(59,130,246,0.25),rgba(37,99,235,0.15))',
    name: 'CrowdSource — Civic Reporting',
    desc: 'Civic reporting platform with REST API structure, issue submission, real-time status tracking, and administrator update mechanisms.',
    demo: 'https://civic-reporter-sepia.vercel.app/login', detail: 'https://github.com/nithyanandham14/Crowd-Source.git',
  },
  {
    image: likemindedImg,
    gradient: 'linear-gradient(135deg,rgba(124,108,240,0.25),rgba(192,38,211,0.15))',
    name: 'Likeminded — Collaboration',
    desc: 'Collaboration platform built with Spring Boot featuring modular authentication, user-role logic, and APIs for seamless user interaction.',
    demo: 'https://likeminded-git-main-swetha21062006s-projects.vercel.app/', detail: 'https://github.com/nithyanandham14/Like-Minded.git',
  },
];

const certs = [
  {
    image: OracleCert,
    name: 'Oracle Java SE 17 Developer',
    issuer: 'Oracle Corporation',
    date: 'March-20-2026',
  },
  {
    image: ai,
    name: 'AI Foundation Certification',
    issuer: 'Infosys corporation',
    date: 'October-23-2024',
  },
  {
    image: javaDev,
    name: 'Java Developer Certification',
    issuer: 'Infosys corporation',
    date: 'January-26-2026',
  },
];

const techs = [
  { emoji: '☕', name: 'Java' },
  { emoji: '🍃', name: 'Spring Boot' },
  { emoji: '⚛️', name: 'ReactJS' },
  { emoji: '🐘', name: 'PostgreSQL' },
  { emoji: '🔐', name: 'JWT Auth' },
  { emoji: '🌐', name: 'REST APIs' },
  { emoji: '🐙', name: 'Git' },
  { emoji: '📮', name: 'Postman' },
  { emoji: '💻', name: 'VS Code' },
  { emoji: '🔄', name: 'n8n' },
  { emoji: '☁️', name: 'AWS' },
  { emoji: '🚀', name: 'Vercel' },
];

function ProjectCard({ image, name, desc, demo, detail }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      background: 'var(--card)', border: `1px solid ${hov ? 'var(--purple)' : 'var(--card-border)'}`,
      borderRadius: 16, overflow: 'hidden', transition: 'all 0.3s',
      transform: hov ? 'translateY(-6px)' : 'translateY(0)',
      boxShadow: hov ? '0 20px 40px rgba(124,108,240,0.15)' : 'none',
    }}>
      <div style={{ height: 220, overflow: 'hidden' }}>
  <img
    src={image}
    alt={name}
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    }}
  />
</div>
      <div style={{ padding: '1.5rem' }}>
        <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: '1.1rem', marginBottom: 8 }}>{name}</div>
        <p style={{ color: 'var(--muted)', fontSize: '0.87rem', lineHeight: 1.65, marginBottom: '1.2rem' }}>{desc}</p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href={demo} style={{ color: 'var(--purple-light)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 5, textDecoration: 'none' }}>
            <ExternalLink size={13} /> Live Demo
          </a>
          <a href={detail} style={{ color: 'var(--text)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: 5, textDecoration: 'none' }}>
            Details <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}

function CertCard({ image, name, issuer, date }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      background: 'var(--card)', border: `1px solid ${hov ? 'var(--purple)' : 'var(--card-border)'}`,
      borderRadius: 16, padding: '1.5rem', transition: 'all 0.3s',
      transform: hov ? 'translateY(-4px)' : 'translateY(0)',
      display: 'flex', flexDirection: 'column', gap: 10,
    }}><div style={{ height: 220, overflow: 'hidden', borderRadius: 12 }}>
  <img
    src={image}
    alt={name}
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    }}
  />
</div>
      
      <div style={{ fontWeight: 600, fontSize: '1rem', lineHeight: 1.4 }}>{name}</div>
      <div style={{ color: 'var(--muted)', fontSize: '0.84rem' }}>{issuer}</div>
      <div style={{ color: 'var(--purple-light)', fontSize: '0.8rem' }}>{date}</div>
    </div>
  );
}

function TechCard({ emoji, name }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      background: hov ? 'rgba(124,108,240,0.07)' : 'var(--card)',
      border: `1px solid ${hov ? 'var(--purple)' : 'var(--card-border)'}`,
      borderRadius: 16, padding: '1.5rem 1rem',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
      transition: 'all 0.3s', transform: hov ? 'translateY(-4px)' : 'translateY(0)',
      cursor: 'default',
    }}>
      <span style={{ fontSize: '2.4rem', lineHeight: 1 }}>{emoji}</span>
      <span style={{ fontSize: '0.84rem', fontWeight: 500, textAlign: 'center' }}>{name}</span>
    </div>
  );
}

const tabs = [
  { id: 'projects', label: 'Projects', icon: <Code2 size={15} /> },
  { id: 'certs', label: 'Certificates', icon: <Award size={15} /> },
  { id: 'tech', label: 'Tech Stack', icon: <Layers size={15} /> },
];

export default function Portfolio() {
  const [active, setActive] = useState('projects');
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={ref} style={{ padding: '7rem 4rem', position: 'relative', zIndex: 1 }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem',
        opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.7s ease' }}>
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: 'var(--purple-light)', marginBottom: '1rem' }}>
          Portfolio Showcase
        </h2>
        <p style={{ color: 'var(--muted)', maxWidth: 580, margin: '0 auto', lineHeight: 1.7 }}>
          Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      {/* Tab bar */}
      <div style={{
        display: 'flex', maxWidth: 600, margin: '0 auto 3rem',
        background: 'var(--card)', border: '1px solid var(--card-border)', borderRadius: 14, padding: 4,
        opacity: visible ? 1 : 0, transition: 'all 0.7s ease 0.15s',
      }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setActive(t.id)} style={{
            flex: 1, padding: '0.75rem', border: active === t.id ? '1px solid rgba(124,108,240,0.4)' : '1px solid transparent',
            borderRadius: 10, background: active === t.id ? 'rgba(124,108,240,0.18)' : 'transparent',
            color: active === t.id ? '#fff' : 'var(--muted)',
            fontFamily: "'Outfit',sans-serif", fontSize: '0.88rem', fontWeight: 500,
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
            transition: 'all 0.25s',
          }}>
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      {/* Panels */}
      <div style={{ opacity: visible ? 1 : 0, transition: 'all 0.7s ease 0.25s' }}>
        {active === 'projects' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
            {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
          </div>
        )}
        {active === 'certs' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
            {certs.map((c, i) => <CertCard key={i} {...c} />)}
          </div>
        )}
        {active === 'tech' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '1rem', maxWidth: 900, margin: '0 auto' }}>
            {techs.map((t, i) => <TechCard key={i} {...t} />)}
          </div>
        )}
      </div>
    </section>
  );
}
