

const projects = [
  {
    id: 1,
    title: "WalletUp",
    description: "Modern personal finance management application. Account management, expense tracking, financial goals, and AI-powered insights.",
    tech: ["React 19", "TypeScript", ".NET 8", "PostgreSQL", "Redis", "Clean Architecture"],
    github: "https://github.com/emrekocadere/WalletUp",
    live: "https://walletup.io/",
    color: "#6c63ff"
  },
  {
    id: 2,
    title: "Currvia",
    description: "Real-time currency exchange platform. Live rates, historical data analysis, chart visualization, and financial news.",
    tech: ["React", "Ant Design", ".NET 8", "SQL Server", "Quartz.NET", "MUI Charts"],
    github: "https://github.com/emrekocadere/Currvia",
    live: "https://currvia.com/",
    color: "#a78bfa"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#12121c]">
      <div className="max-w-[1100px] mx-auto px-6">
        <span className="font-mono text-[13px] text-primary-500 tracking-widest uppercase mb-3 block">Portfolio</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">My Projects</h2>
        <p className="text-gray-400 text-[17px] max-w-[540px] mb-12">
          Some projects I've built using full-stack technologies
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="bg-[#16161f] border border-primary-500/15 rounded-2xl p-8"
            >
              <div className="flex items-center gap-4 mb-5">
                <img 
                  src={project.title === "WalletUp" ? "/WalletUp.png" : "/Currvia.png"}
                  alt={project.title}
                  className="w-[140px] h-[140px] flex-shrink-0 object-contain"
                />
      
              </div>
              
              <p className="text-gray-400 text-[15px] leading-relaxed mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-7">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-primary-500/10 border border-primary-500/15 rounded-md text-[13px] text-primary-400 font-medium font-mono">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3 pt-6 border-t border-primary-500/15">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-[#12121c] border border-primary-500/15 text-gray-400"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  Code
                </a>
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-primary-500/10 border border-primary-500 text-primary-500"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
