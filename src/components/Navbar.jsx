import React, { useState, useEffect } from 'react';
import { Home, User, Code, Briefcase, Mail, Settings, Moon } from 'lucide-react';

const Navbar = ({ theme, toggleTheme }) => {
  const [active, setActive] = useState('home');
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (showSettings) {
      timeoutId = setTimeout(() => {
        setShowSettings(false);
      }, 5000);
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [showSettings]);

  const navItemClass = (item) => 
    `flex flex-col items-center justify-center font-semibold text-sm transition-all duration-300 px-3 py-2 sm:px-4 rounded-full gap-1 no-underline cursor-pointer ` + 
    (active === item ? 'bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white' : 'text-[var(--text-secondary)] hover:bg-gradient-to-br hover:from-[var(--accent-primary)] hover:to-[var(--accent-secondary)] hover:text-white');

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 glass rounded-full flex justify-between items-center py-2">
        <a href="#home" className="hidden lg:flex items-center gap-3 no-underline">
          <span className="font-bold text-2xl font-['Plus_Jakarta_Sans']">MS</span>
          <div className="flex flex-col items-start gap-0.5">
            <span className="text-[0.65rem] font-bold tracking-widest text-[var(--text-secondary)] uppercase leading-none">PORTFOLIO</span>
            <span className="text-[1.05rem] font-bold text-[var(--text-primary)] leading-tight">Mohammednur Seid</span>
          </div>
        </a>
        
        <ul className="flex flex-1 justify-center lg:flex-none gap-2 sm:gap-4 m-0 p-0 list-none items-center">
          <li>
            <a href="#home" className={navItemClass('home')} onClick={() => { setActive('home'); setShowSettings(false); }}>
              <Home size={20} />
              <span className="hidden sm:block">Home</span>
            </a>
          </li>
          <li>
            <a href="#about" className={navItemClass('about')} onClick={() => { setActive('about'); setShowSettings(false); }}>
              <User size={20} />
              <span className="hidden sm:block">About</span>
            </a>
          </li>
          <li>
            <a href="#skills" className={navItemClass('skills')} onClick={() => { setActive('skills'); setShowSettings(false); }}>
              <Code size={20} />
              <span className="hidden sm:block">Skills</span>
            </a>
          </li>
          <li>
            <a href="#projects" className={navItemClass('projects')} onClick={() => { setActive('projects'); setShowSettings(false); }}>
              <Briefcase size={20} />
              <span className="hidden sm:block">Projects</span>
            </a>
          </li>
          <li>
            <a href="#contact" className={navItemClass('contact')} onClick={() => { setActive('contact'); setShowSettings(false); }}>
              <Mail size={20} />
              <span className="hidden sm:block">Contact</span>
            </a>
          </li>
          
          <li className="relative">
            <button className={`flex flex-col items-center justify-center font-semibold text-sm transition-all duration-300 px-3 py-2 sm:px-4 rounded-full gap-1 border-none cursor-pointer bg-transparent ${showSettings ? 'bg-gradient-to-br from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white' : 'text-[var(--text-secondary)] hover:bg-gradient-to-br hover:from-[var(--accent-primary)] hover:to-[var(--accent-secondary)] hover:text-white'}`} onClick={() => setShowSettings(!showSettings)}>
              <Settings size={20} />
              <span className="hidden sm:block">Settings</span>
            </button>
            
            {showSettings && (
              <div className="absolute top-[calc(100%+1rem)] right-[-20px] sm:right-0 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-2xl p-5 w-64 shadow-2xl text-[var(--text-primary)] text-left z-[1000] cursor-default backdrop-blur-xl">
                <div className="text-xs font-bold tracking-[0.1em] text-[var(--text-secondary)] uppercase mb-3">APPEARANCE</div>
                <hr className="border-t border-[var(--border-color)] mb-4" />
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3 text-[0.95rem] font-semibold">
                    <Moon size={16} />
                    <span>Dark Mode</span>
                  </div>
                  <label className="relative inline-block w-11 h-6">
                    <input type="checkbox" className="opacity-0 w-0 h-0 peer" checked={theme === 'dark'} onChange={toggleTheme} />
                    <span className="absolute cursor-pointer inset-0 bg-[var(--border-color)] transition-colors duration-400 rounded-full peer-checked:bg-[var(--text-primary)] before:absolute before:h-4 before:w-4 before:left-[3px] before:bottom-[4px] before:bg-[var(--text-secondary)] before:transition-transform before:duration-400 before:rounded-full peer-checked:before:translate-x-5 peer-checked:before:bg-[var(--bg-color)]"></span>
                  </label>
                </div>
              </div>
            )}
          </li>
        </ul>
        
        <div className="hidden lg:flex items-center gap-4">
          <a href="#contact" className="btn-primary py-2 px-6">Let's Talk</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
