import React from 'react';

const About = () => {
  const skills = [
    'JavaScript', 'React', 'Node.js', 'Python', 'SQL',
    'Next.js', 'FastAPI', 'Tailwind CSS', 'UI/UX Design'
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-12 text-gradient inline-block font-bold">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="glass p-10 rounded-3xl">
            <p className="text-lg text-[var(--text-secondary)] mb-6">
              I am a dedicated <strong className="text-[var(--text-primary)] font-semibold">4th year Information Technology student at Bahir Dar University</strong> with a
              strong focus on software development. My journey in tech is driven by a desire to create
              impactful and high-performance digital solutions.
            </p>
            <p className="text-lg text-[var(--text-secondary)] mb-8">
              With experience in full-stack development, I enjoy bridging the gap between functional
              requirements and elegant user experiences. I'm constantly learning new technologies to stay at
              the forefront of the industry.
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span key={index} className="px-4 py-2 bg-[var(--card-bg)] border border-[var(--border-color)] rounded-full text-sm font-semibold transition-all duration-300 hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] hover:-translate-y-1">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-8">
            <div className="glass flex-1 p-12 rounded-3xl text-center flex flex-col justify-center items-center">
              <h3 className="text-6xl text-[var(--accent-primary)] mb-2 font-bold">4+</h3>
              <p className="font-semibold text-[var(--text-secondary)] text-xl">Years of<br/>Learning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
