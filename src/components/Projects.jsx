import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "FlutterQuickhelp",
      desc: "A Flutter-based quick help application providing fast and efficient assistance with a clean mobile UI.",
      tags: ["Flutter", "Dart", "Mobile"],
      link: "https://github.com/mohammednurseid46/FlutterQuickhelp",
      bg: "linear-gradient(135deg, #0553B1, #027DFD)",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
    },
    {
      title: "JavaUI",
      desc: "A Java-based user interface project showcasing desktop application design with modern UI components.",
      tags: ["Java", "UI", "Desktop"],
      link: "https://github.com/mohammednurseid46/JavaUI",
      bg: "linear-gradient(135deg, #f89820, #e76f00)",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Selected Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <a key={index} href={project.link} target="_blank" rel="noreferrer" className="project-card">
              <div className="project-image" style={{ background: project.bg }}>
                {project.icon}
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
