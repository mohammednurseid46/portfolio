import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "FlutterQuickhelp",
      desc: "A Flutter-based quick help application providing fast and efficient assistance with a clean mobile UI.",
      tags: ["Flutter", "Dart", "Mobile"],
      link: "https://github.com/mohammednurseid46/FlutterQuickhelp",
      bgClass: "bg-blue-600",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
    },
    {
      title: "JavaUI",
      desc: "A Java-based user interface project showcasing desktop application design with modern UI components.",
      tags: ["Java", "UI", "Desktop"],
      link: "https://github.com/mohammednurseid46/JavaUI",
      bgClass: "bg-orange-500",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
    },
    {
      title: "Portfolio 1",
      desc: "A personal portfolio website highlighting my skills and projects.",
      tags: ["HTML", "CSS", "JS"],
      link: "https://mohammednurseid46.github.io/my-portfolio-2/",
      bgClass: "bg-emerald-500",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>,
      features: ["Responsive Design", "Custom CSS Styling", "Project Showcase"]
    },
    {
      title: "Portfolio 2",
      desc: "Another portfolio iteration showcasing different design aesthetics and components.",
      tags: ["Web", "Design", "Portfolio"],
      link: "https://mohammednurseid46.github.io/MyPortfolio/",
      bgClass: "bg-purple-600",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>,
      features: ["Modern UI", "Interactive Elements", "Clean Layout"]
    }
  ];

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-12 text-gradient inline-block font-bold">Selected Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a key={index} href={project.link} target="_blank" rel="noreferrer" className="block bg-[#111111] rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group no-underline">
              <div className={`h-48 flex items-center justify-center relative overflow-hidden ${project.bgClass}`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                <div className="transform group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-6">{project.desc}</p>
                
                {project.features && (
                  <ul className="mb-6 pl-5 text-gray-400 text-sm list-disc">
                    {project.features.map(feature => (
                      <li key={feature} className="mb-1">{feature}</li>
                    ))}
                  </ul>
                )}
                
                <div className="flex flex-row flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-800 text-white text-xs font-medium rounded-full">
                      {tag}
                    </span>
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
