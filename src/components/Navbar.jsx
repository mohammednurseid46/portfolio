import React, { useState, useEffect } from 'react';
import { Home, User, Code, Briefcase, Mail, Settings, Moon } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  const [active, setActive] = useState('home');
  const [showSettings, setShowSettings] = useState(false);

  // Automatically close settings popover after 5 seconds
  useEffect(() => {
    let timeoutId;
    if (showSettings) {
      timeoutId = setTimeout(() => {
        setShowSettings(false);
      }, 5000); // 5 seconds timer limit
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [showSettings]);

  return (
    <nav className="navbar">
      <div className="container glass">
        <a href="#home" className="nav-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
          <span className="nav-logo">MS</span>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.1rem' }}>
            <span style={{ fontSize: '0.65rem', fontWeight: 'bold', letterSpacing: '0.1em', color: 'var(--text-secondary)', textTransform: 'uppercase', lineHeight: 1 }}>PORTFOLIO</span>
            <span style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.2 }}>Mohammednur Seid</span>
          </div>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#home" className={active === 'home' ? 'active' : ''} onClick={() => { setActive('home'); setShowSettings(false); }}>
              <Home size={20} />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about" className={active === 'about' ? 'active' : ''} onClick={() => { setActive('about'); setShowSettings(false); }}>
              <User size={20} />
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#skills" className={active === 'skills' ? 'active' : ''} onClick={() => { setActive('skills'); setShowSettings(false); }}>
              <Code size={20} />
              <span>Skills</span>
            </a>
          </li>
          <li>
            <a href="#projects" className={active === 'projects' ? 'active' : ''} onClick={() => { setActive('projects'); setShowSettings(false); }}>
              <Briefcase size={20} />
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a href="#contact" className={active === 'contact' ? 'active' : ''} onClick={() => { setActive('contact'); setShowSettings(false); }}>
              <Mail size={20} />
              <span>Contact</span>
            </a>
          </li>
          <li style={{ position: 'relative' }}>
            <button className={`theme-toggle-link ${showSettings ? 'active' : ''}`} onClick={() => setShowSettings(!showSettings)}>
              <Settings size={20} />
              <span>Settings</span>
            </button>
            {showSettings && (
              <div className="settings-popover">
                <div className="settings-header">APPEARANCE</div>
                <hr className="settings-divider" />
                <div className="settings-option">
                  <div className="settings-label">
                    <Moon size={16} />
                    <span>Dark Mode</span>
                  </div>
                  <label className="toggle-switch">
                    <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
            )}
          </li>
        </ul>
        <div className="nav-actions">
          <a href="#contact" className="btn-primary" style={{ padding: '0.5rem 1.5rem' }}>Let's Talk</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
