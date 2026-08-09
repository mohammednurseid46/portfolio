import React, { useState, useEffect } from 'react';

const phrases = [
  "Full Stack Developer",
  "Student at Bahir Dar University",
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
        setTypingSpeed(50); // Deleting speed
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(100); // Typing speed
      }

      if (!isDeleting && text === fullText) {
        // Pause before starting to delete
        setTimeout(() => setIsDeleting(true), 2000); 
      } else if (isDeleting && text === '') {
        // Switch to the next word and pause before typing
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); 
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--card-bg)', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', marginBottom: '2rem', border: '1px solid var(--border-color)' }}>
            <span style={{ width: '8px', height: '8px', background: 'var(--accent-primary)', borderRadius: '50%' }}></span>
            AN IT PROFESSIONAL
          </div>
          <h1>
            <span className="typing-text">{text}</span>
          </h1>
          <p>
            Hi, I'm Mohammednur Seid. Code, Learn, Innovate. I build elegant and high-performance digital solutions.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-secondary">Get in Touch</a>
          </div>
        </div>
        <div className="hero-image-wrapper glass">
          <img src="/interview2.jpg" alt="Mohammednur Seid" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
