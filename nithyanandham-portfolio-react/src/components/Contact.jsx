import React, { useState, useRef, useEffect } from 'react';
import { User, Mail, MessageSquare, Send, Share2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

export default function Contact() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleSend = async () => {
  if (!form.name || !form.email || !form.message) return;

  try {
    await emailjs.send(
      'service_yzpsnjk',
      'template_c38nkdj',
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      },
      'p_Og9PP7Rhs4lcowY'
    );

    setSent(true);

    setTimeout(() => setSent(false), 3000);

    setForm({
      name: '',
      email: '',
      message: '',
    });

  } catch (error) {
    console.log(error);
    alert('Failed to send message');
  }
};

  

  const connects = [
    { icon: <LinkedinIcon size={18} />, bg: '#0077b5', label: "Let's Connect", sub: 'on LinkedIn', href: 'https://linkedin.com/in/nithyanandham-j-194036312' },
    { icon: <GithubIcon size={18} />, bg: '#333', label: 'Github', sub: '@nithyanandham14', href: 'https://github.com/nithyanandham14' },
    { icon: <Mail size={18} />, bg: '#ea4335', label: 'Email Me', sub: 'nithyanandham1452006@gmail.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=nithyanandham1452006@gmail.com' },
  ];

  return (
    <section id="contact" ref={ref} style={{ padding: '7rem 4rem 5rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 780, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem',
          opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.7s ease' }}>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: 'var(--purple-light)', marginBottom: '0.75rem' }}>
            Contact Me
          </h2>
          <p style={{ color: 'var(--muted)' }}>Got a question? Send me a message, and I'll get back to you soon.</p>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.03)', border: '1px solid var(--card-border)',
          borderRadius: 20, padding: '2.5rem', backdropFilter: 'blur(20px)',
          opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.7s ease 0.15s',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
            <h3 style={{ fontFamily: "'Syne',sans-serif", fontSize: '1.6rem', fontWeight: 700, color: 'var(--purple-light)' }}>Get in Touch</h3>
            <Share2 size={20} color="var(--purple-light)" />
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>Have something to discuss? Send me a message and let's talk.</p>

          <Field
  icon={<User size={16} />}
  placeholder="Your Name"
  field="name"
  form={form}
  setForm={setForm}
/>
          <Field
  icon={<Mail size={16} />}
  placeholder="Your Email"
  field="email"
  form={form}
  setForm={setForm}
/>
          <Field
  icon={<MessageSquare size={16} />}
  type="textarea"
  placeholder="Your Message"
  field="message"
  form={form}
  setForm={setForm}
/>

          <button onClick={handleSend} style={{
            width: '100%', padding: '1rem', background: sent ? '#22c55e' : 'var(--purple)',
            color: '#fff', border: 'none', borderRadius: 12, fontSize: '1rem', fontWeight: 600,
            fontFamily: "'Outfit',sans-serif", cursor: 'pointer', transition: 'all 0.3s',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          }}
          onMouseEnter={e => { if (!sent) { e.currentTarget.style.background='var(--purple-light)'; e.currentTarget.style.transform='translateY(-2px)'; }}}
          onMouseLeave={e => { if (!sent) { e.currentTarget.style.background='var(--purple)'; e.currentTarget.style.transform='translateY(0)'; }}}>
            <Send size={16} /> {sent ? 'Message Sent! ✓' : 'Send Message'}
          </button>
        </div>

        <div style={{
          background: 'rgba(255,255,255,0.03)', border: '1px solid var(--card-border)',
          borderRadius: 16, padding: '1.5rem', marginTop: '2rem',
          opacity: visible ? 1 : 0, transition: 'all 0.7s ease 0.3s',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.2rem', fontWeight: 600 }}>
            <span style={{ display: 'block', width: 28, height: 2, background: 'var(--purple)', borderRadius: 2 }} />
            Connect With Me
          </div>
          {connects.map((c, i) => (
            <ConnectLink key={i} {...c} last={i === connects.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ConnectLink({ icon, bg, label, sub, href, last }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target="_blank" rel="noreferrer"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 14, padding: '0.9rem 1rem',
        background: hov ? 'rgba(124,108,240,0.07)' : 'rgba(255,255,255,0.02)',
        border: `1px solid ${hov ? 'var(--purple)' : 'var(--card-border)'}`,
        borderRadius: 10, textDecoration: 'none', color: 'var(--text)',
        marginBottom: last ? 0 : '0.75rem', transition: 'all 0.3s',
      }}>
      <div style={{ width: 40, height: 40, borderRadius: 10, background: bg, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {icon}
      </div>
      <div>
        <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>{label}</div>
        <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{sub}</div>
      </div>
    </a>
  );
}
  function Field({
  icon,
  type = 'input',
  placeholder,
  field,
  form,
  setForm
}) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid var(--card-border)',
        borderRadius: 12,
        padding: type === 'input' ? '0.9rem 1.2rem' : '1rem 1.2rem',
        display: 'flex',
        alignItems: type === 'input' ? 'center' : 'flex-start',
        gap: 10,
        marginBottom: '1rem',
        transition: 'border-color 0.3s',
      }}
    >
      <span
        style={{
          color: 'var(--muted)',
          flexShrink: 0,
          marginTop: type === 'textarea' ? 2 : 0
        }}
      >
        {icon}
      </span>

      {type === 'input' ? (
        <input
          type={field === 'email' ? 'email' : 'text'}
          placeholder={placeholder}
          value={form[field]}
          onChange={e =>
            setForm(f => ({
              ...f,
              [field]: e.target.value
            }))
          }
          style={{
            background: 'transparent',
            border: 'none',
            outline: 'none',
            width: '100%',
            color: 'var(--text)',
            fontFamily: "'Outfit',sans-serif",
            fontSize: '0.95rem',
          }}
        />
      ) : (
        <textarea
          placeholder={placeholder}
          value={form[field]}
          onChange={e =>
            setForm(f => ({
              ...f,
              [field]: e.target.value
            }))
          }
          rows={5}
          style={{
            background: 'transparent',
            border: 'none',
            outline: 'none',
            width: '100%',
            color: 'var(--text)',
            fontFamily: "'Outfit',sans-serif",
            fontSize: '0.95rem',
            resize: 'none',
          }}
        />
      )}
    </div>
  );

}
