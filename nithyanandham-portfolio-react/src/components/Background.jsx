import React from 'react';

export default function Background() {
  return (
    <>
      {/* Grid */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(124,108,240,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(124,108,240,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }} />
      {/* Blobs */}
      <div style={{
        position: 'fixed', width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,108,240,0.25) 0%, transparent 70%)',
        top: -150, left: -150, zIndex: 0, pointerEvents: 'none', filter: 'blur(40px)'
      }} />
      <div style={{
        position: 'fixed', width: 500, height: 500, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(192,38,211,0.2) 0%, transparent 70%)',
        top: '40%', right: -100, zIndex: 0, pointerEvents: 'none', filter: 'blur(40px)'
      }} />
      <div style={{
        position: 'fixed', width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,180,200,0.12) 0%, transparent 70%)',
        bottom: 0, left: '30%', zIndex: 0, pointerEvents: 'none', filter: 'blur(40px)'
      }} />
    </>
  );
}
