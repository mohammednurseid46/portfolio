import React from 'react';
import { Code, Database, Atom, Server } from 'lucide-react';

const Services = () => {
  const skills = [
    {
      title: "Java & JavaFX",
      desc: "Desktop application development, modern UI implementation, and system architecture.",
      icon: (
        <svg viewBox="0 0 128 128" width="24" height="24">
          <path fill="currentColor" d="M68.73 34.02c.07-4.47 2.38-5.69 5.08-7.38 5.99-3.75 6.07-10.42 2.5-16.14-1-1.61-3.6-3.87-4.84-1.6-.96 1.76-1.55 3.32-.4 5.34 2.76 4.8 1.13 6.94-1.85 8.7-3.83 2.26-6.19 6.22-5.49 11.1.2 1.43 3.96 4.7 5.02.04l-.02-.06z"/>
          <path fill="currentColor" d="M72.03 52.88c.07-4.47 2.38-5.69 5.08-7.38 5.99-3.75 6.07-10.42 2.5-16.14-1-1.61-3.6-3.87-4.84-1.6-.96 1.76-1.55 3.32-.4 5.34 2.76 4.8 1.13 6.94-1.85 8.7-3.83 2.26-6.19 6.22-5.49 11.1.2 1.43 3.96 4.7 5.02.04v-.06z"/>
          <path fill="currentColor" d="M82.88 43.14c.1-4.09 2.19-5.21 4.67-6.75 5.51-3.43 5.58-9.53 2.31-14.77-.92-1.47-3.32-3.54-4.46-1.46-.89 1.61-1.42 3.03-.37 4.88 2.54 4.39 1.04 6.35-1.7 7.96-3.52 2.07-5.69 5.69-5.05 10.16.18 1.3 3.65 4.29 4.61.03l-.01-.05z"/>
          <path fill="currentColor" d="M96.06 63.85c-.95-2.07-6.07-2.97-6.07-2.97s6.88.4 8.23 2.34c1.86 2.68 1.25 5.37-1.36 6.94-2.82 1.7-8.62 1.83-8.62 1.83s11.51-.77 12.35-4.48c.67-2.98-2.61-3.41-4.53-3.66M80.24 81.36c-9.08 3.51-22.37 5.02-36.93 2.87 0 0-8.63 7.82 27.69 7.85 24.31.02 30.64-5.22 30.64-5.22s-10.37 5.57-21.4 5.48"/>
          <path fill="currentColor" d="M106.87 72.84c-3.1-4.66-26.68-7.85-26.68-7.85s47.16 8.71 18.04 18.34c-12.02 3.97-28.71 4.7-44.59 4.09-7.22-.27-14.28-1.07-14.28-1.07s18.25 2.5 30.93 2.56c12.35.06 32.74-2.83 36.58-16.07z"/>
          <path fill="currentColor" d="M98.92 78.43C95.2 73.18 73.53 71.1 73.53 71.1s43.51 5.92 18.84 15.34c-12.25 4.67-33.39 5.31-50.62 4.41-8.52-.45-16.14-1.55-16.14-1.55s17.9 2.58 31.81 2.91c13.78.33 35.83-1.63 41.5-13.78zM19.16 71.16c-3.76-4.04 10.9-10.42 10.9-10.42s-17.7 5.21-12.98 11.23c2.72 3.47 9.8 4.3 17.58 4.54 6.77.21 14.18-.08 14.18-.08s-13.84 1.13-21.6-.33c-3.92-.74-7.2-2.31-8.08-4.94"/>
          <path fill="currentColor" d="M84.28 58.73c0-3.08-25.07-2.61-45.74-2.61-26.83 0-25.32 10.08-22.31 13.91 3.51 4.45 12.63 5.48 22.84 5.76 11.02.3 23.36-.21 23.36-.21s-14.88 1.18-25.7-.12c-9.5-1.14-15.01-3.66-15.42-7.14-.62-5.32 11.02-9.67 36.42-9.67 15.14 0 26.55 0 26.55 0z"/>
        </svg>
      )
    },
    {
      title: "C# & .NET",
      desc: "Backend structures, desktop logic, and modular programming.",
      icon: <Code size={24} />
    },
    {
      title: "Python & Flask",
      desc: "Web backend frameworks, API development, and data integration.",
      icon: (
        <svg viewBox="0 0 128 128" width="24" height="24">
          <path fill="currentColor" d="M64 5.313c-28.784 0-33.155 12.39-33.155 12.39l.024 12.658h33.864v4.618H28.845s-14.73.49-14.73 32.18c0 31.691 12.64 33.725 12.64 33.725h9.19v-13.6c0-15.54 13-17.152 13-17.152h28.163s11.583-.178 11.583-11.458V29.47s.67-24.157-24.69-24.157zM50.297 17.518c2.97 0 5.378 2.378 5.378 5.313 0 2.935-2.408 5.314-5.378 5.314-2.97 0-5.377-2.38-5.377-5.314 0-2.935 2.407-5.313 5.377-5.313zM85.736 26.634v13.6c0 15.542-13 17.153-13 17.153H44.573s-11.583.178-11.583 11.458V98.53s-.67 24.156 24.69 24.156c28.785 0 33.156-12.39 33.156-12.39l-.024-12.658H57.108v-4.617h35.887s14.73-.492 14.73-32.18c0-31.69-12.64-33.726-12.64-33.726h-9.35zM78.69 105.15c-2.97 0-5.378-2.379-5.378-5.314 0-2.934 2.408-5.313 5.378-5.313 2.97 0 5.377 2.38 5.377 5.313 0 2.935-2.407 5.314-5.377 5.314z"/>
        </svg>
      )
    },
    {
      title: "SQL & Databases",
      desc: "Relational databases including SQLite and Microsoft SQL Server management.",
      icon: <Database size={24} />
    },
    {
      title: "React JS",
      desc: "Building interactive user interfaces and dynamic single-page applications.",
      icon: <Atom size={24} />
    },
    {
      title: "Next JS",
      desc: "Server-side rendering, static site generation, and optimized web applications.",
      icon: (
        <svg viewBox="0 0 128 128" width="24" height="24">
          <path fill="currentColor" d="M64 0C28.654 0 0 28.654 0 64s28.654 64 64 64 64-28.654 64-64S99.346 0 64 0zm0 120.89c-31.365 0-56.89-25.524-56.89-56.89C7.11 32.635 32.635 7.11 64 7.11c31.365 0 56.89 25.525 56.89 56.89 0 31.365-25.525 56.89-56.89 56.89z"/>
          <path fill="currentColor" d="M102.77 97.433l-45.71-61.944H45.72v57.02h7.625v-45.83l40.407 55.45c2.146-1.503 4.148-3.18 5.996-5.028a55.15 55.15 0 003.023-3.668zM76.92 41.517v39.462h7.614V41.517z"/>
        </svg>
      )
    },
    {
      title: "Node JS",
      desc: "Scalable server-side execution, RESTful APIs, and robust backend services.",
      icon: <Server size={24} />
    }
  ];

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-12 text-gradient inline-block font-bold">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="glass p-10 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:border-[var(--accent-primary)] group">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-[var(--accent-primary)] mb-6 bg-gradient-to-br from-[rgba(59,130,246,0.15)] to-[rgba(139,92,246,0.15)] group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
              <p className="text-[var(--text-secondary)]">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
