import React, { useState, useEffect } from 'react';

const phrases = [
  "Full Stack Developer",
  "4th Year Student at Bahir Dar University",
  "IT Professional"
];

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);
  
  useEffect(() => {
    let timer = setTimeout(() => {
      const current = loopNum % phrases.length;
      const fullText = phrases[current];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); 
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); 
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center w-full">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-[var(--card-bg)] px-4 py-2 rounded-full text-xs font-bold tracking-widest mb-8 border border-[var(--border-color)]">
            <span className="w-2 h-2 bg-[var(--accent-primary)] rounded-full animate-pulse"></span>
            AN IT PROFESSIONAL
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight font-extrabold h-[140px] sm:h-auto">
            <span className="typing-text text-gradient">{text}</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-10 max-w-lg">
            Hi, I'm Mohammednur Seid. Code, Learn, Innovate. I build elegant and high-performance digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-secondary">Get in Touch</a>
          </div>
        </div>
        <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl max-w-md mx-auto md:ml-auto glass group">
          <img 
            src={`${import.meta.env.BASE_URL}interview2.jpg`} 
            alt="Mohammednur Seid" 
            onError={(e) => { e.target.onerror = null; e.target.src = `${import.meta.env.BASE_URL}mohammednur.jpg`; }} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-[2rem] border border-[var(--glass-border)] pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
