import React from 'react';

const About = () => {
  const skills = [
    'JavaScript', 'React', 'Node.js', 'Python', 'SQL',
    'Next.js', 'FastAPI', 'Tailwind CSS', 'UI/UX Design'
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-text glass" style={{ padding: '2.5rem', borderRadius: '1.5rem' }}>
            <p>
              I am a dedicated <strong>Information Technology student at Bahir Dar University</strong> with a
              strong focus on software development. My journey in tech is driven by a desire to create
              impactful and high-performance digital solutions.
            </p>
            <p>
              With experience in full-stack development, I enjoy bridging the gap between functional
              requirements and elegant user experiences. I'm constantly learning new technologies to stay at
              the forefront of the industry.
            </p>
            <div className="skills">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="about-stats" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <div className="stat-card glass" style={{ flex: 1, padding: '3rem', borderRadius: '1.5rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '4rem', color: 'var(--accent-primary)', marginBottom: '0.5rem' }}>3+</h3>
              <p style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>Years of<br/>Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
