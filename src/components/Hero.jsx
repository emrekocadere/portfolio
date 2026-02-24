import { useState, useEffect } from 'react';

const csharpTokenize = (code) => {
  const keywords = ['public', 'class', 'string', 'get', 'set', 'new', 'List', 'return', 'private', 'protected', 'void', 'static', 'using', 'namespace'];
  const types = ['string', 'int', 'bool', 'void', 'List', 'Dictionary', 'IEnumerable'];
  
  const tokens = [];
  
  const regex = /(\s+|"[^"]*"|\/\/.*|[\{\}\(\)\[\]=;,.]|\w+|.)/g;
  let match;
  
  while ((match = regex.exec(code)) !== null) {
    const token = match[0];
    
    if (/^\s+$/.test(token)) {
      tokens.push({ type: 'whitespace', value: token });
    } else if (token.startsWith('"')) {
      tokens.push({ type: 'string', value: token });
    } else if (keywords.includes(token)) {
      tokens.push({ type: 'keyword', value: token });
    } else if (types.includes(token)) {
      tokens.push({ type: 'type', value: token });
    } else if (/^[=\{\}\(\)\[\];,.]$/.test(token)) {
      tokens.push({ type: 'punctuation', value: token });
    } else if (token === '=') {
      tokens.push({ type: 'operator', value: token });
    } else if (/^[A-Z]/.test(token)) {
      tokens.push({ type: 'className', value: token });
    } else {
      tokens.push({ type: 'text', value: token });
    }
  }
  
  return tokens;
};

const renderToken = (token, idx) => {
  const colorMap = {
    keyword: 'text-blue-400',
    type: 'text-blue-400',
    string: 'text-green-400',
    number: 'text-yellow-400',
    comment: 'text-gray-500',
    className: 'text-pink-400',
    operator: 'text-green-500',
    punctuation: 'text-gray-300',
    whitespace: '',
    text: 'text-gray-300'
  };
  
  return (
    <span key={idx} className={colorMap[token.type] || ''}>
      {token.value}
    </span>
  );
};

const Hero = () => {
  const codeText = `public class Developer
{
    public string Name { get; set; } 
        = "Salih Emre Kocadere";
    
    public string Role { get; set; } 
        = "Full Stack Developer";
    
    public List<string> Skills { get; set; } = new()
    {
        "React", "TypeScript",
        ".NET", "C#",
        "PostgreSQL", "Redis"
    };
    
    public string Passion { get; set; } 
        = "Building great products";
}`;

  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < codeText.length) {
        setDisplayedText(codeText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 5);

    return () => clearInterval(timer);
  }, []);

  const tokens = csharpTokenize(displayedText);

  return (
    <section id="home" className="min-h-screen flex items-center py-12 md:pt-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-[400px] sm:w-[600px] md:w-[800px] aspect-square -translate-x-1/2 -translate-y-[30%] pointer-events-none">
        <div className="w-full h-full rounded-full bg-primary-500/15 blur-3xl"></div>
      </div>
      
      <div className="max-w-[1300px] mx-auto px-8 grid md:grid-cols-2 gap-12 md:gap-48 items-center relative z-10">
        <div className="animate-[fadeInUp_0.8s_ease_forwards]">
          <span className="font-mono text-xs sm:text-sm text-primary-500 block mb-3">Hello, I'm</span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-100 mb-2 leading-tight">
            Salih Emre Kocadere
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gradient mb-4 md:mb-5">
            Full Stack Developer
          </h2>
          <p className="text-sm sm:text-base md:text-[17px] text-gray-400 leading-relaxed mb-6 md:mb-8 max-w-[540px]">
            I build scalable and user-friendly applications with modern web technologies.
            Passionate about React, .NET, and database systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-8 md:mb-10">
            <a href="#projects" className="inline-flex items-center justify-center sm:justify-start gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-lg bg-primary-500 text-white font-medium text-sm sm:text-base shadow-lg shadow-primary-500/30 hover:bg-primary-600 transition-all whitespace-nowrap">
              View My Work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 8h14M8 1l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#contact" className="inline-flex items-center justify-center sm:justify-start gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-lg bg-transparent text-gray-100 font-medium text-sm sm:text-base border border-primary-500/40 hover:border-primary-500/60 transition-all whitespace-nowrap">
              Contact Me
            </a>
            <a href="/resume.pdf" download="Salih_Emre_Kocadere_Resume.pdf" className="inline-flex items-center justify-center sm:justify-start gap-2 px-5 sm:px-7 py-2.5 sm:py-3 rounded-lg bg-primary-500 text-white font-medium text-sm sm:text-base shadow-lg shadow-primary-500/30 hover:bg-primary-600 transition-all whitespace-nowrap">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download CV
            </a>
          </div>
          <div className="flex gap-3 md:gap-4">
            <a href="https://github.com/emrekocadere" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#16161f] border border-primary-500/15 flex items-center justify-center text-gray-400 hover:text-primary-500 transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/salih-emre-kocadere/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#16161f] border border-primary-500/15 flex items-center justify-center text-gray-400 hover:text-primary-500 transition-all">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="hidden md:block overflow-x-auto no-scrollbar">
       
            <pre className="font-mono text-xs sm:text-sm lg:text-base leading-relaxed">
              <code>
                {tokens.map((token, idx) => renderToken(token, idx))}
              </code>
            </pre>

        </div>
      </div>
    </section>
  );
};
export default Hero;
