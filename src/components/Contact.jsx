

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#0d0d14]">
      <div className="max-w-[1100px] mx-auto px-6">
        <span className="font-mono text-[13px] text-primary-500 tracking-widest uppercase mb-3 block">Contact</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">Get In Touch</h2>
        <p className="text-gray-400 text-[17px] max-w-[540px] mb-12">
          Feel free to reach out via the platforms below if you want to discuss projects, collaborations, or anything else.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a 
            href="https://github.com/emrekocadere" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#16161f] border border-primary-500/15 rounded-2xl p-8 flex items-center gap-5 hover:border-primary-500/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-500/15 transition-all group relative"
          >
            <div className="w-16 h-16 rounded-xl bg-primary-500/15 text-primary-500 flex items-center justify-center flex-shrink-0">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-100 mb-1">GitHub</h3>
              <p className="text-sm text-gray-400">Check out my projects</p>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-auto text-gray-600 group-hover:text-primary-500 group-hover:translate-x-1 transition-all">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/salih-emre-kocadere/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#16161f] border border-primary-500/15 rounded-2xl p-8 flex items-center gap-5 hover:border-primary-500/40 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-500/15 transition-all group relative"
          >
            <div className="w-16 h-16 rounded-xl bg-primary-400/15 text-primary-400 flex items-center justify-center flex-shrink-0">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-100 mb-1">LinkedIn</h3>
              <p className="text-sm text-gray-400">View my professional network</p>
            </div>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-auto text-gray-600 group-hover:text-primary-500 group-hover:translate-x-1 transition-all">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
        
        <div className="text-center py-10 border-t border-primary-500/15">
          <a 
            href="/resume.pdf"
            download="Salih_Emre_Kocadere_Resume.pdf"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary-500 text-white font-medium shadow-lg shadow-primary-500/30 hover:bg-primary-600 transition-all"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
