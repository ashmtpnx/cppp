import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const features = [
    {
      icon: 'fa-book-open',
      title: 'Curriculum',
      desc: '24 comprehensive modules covering Core C++, Object-Oriented Programming, and Data Structures.',
      gradient: 'from-lime/20 to-forest/10',
      iconBg: 'bg-lime/20 text-lime',
      hoverBorder: 'hover:border-lime/50',
      route: '/curriculum',
    },
    {
      icon: 'fa-wand-magic-sparkles',
      title: 'Interactive Animations',
      desc: 'Visualize how memory allocation, pointers, and complex data structures actually work under the hood.',
      gradient: 'from-rust/20 to-olive/10',
      iconBg: 'bg-rust/20 text-olive',
      hoverBorder: 'hover:border-olive/50',
      route: '/visualizer',
    },
    {
      icon: 'fa-laptop-code',
      title: 'C++ Projects',
      desc: 'Build real-world applications including a complete Bank Management and Hotel Reservation system.',
      gradient: 'from-olive/20 to-rust/10',
      iconBg: 'bg-olive/20 text-olive',
      hoverBorder: 'hover:border-rust/50',
      route: '/projects',
    },
    {
      icon: 'fa-graduation-cap',
      title: 'Quiz & Practice',
      desc: 'Test your conceptual mastery with interactive quizzes and algorithm practice arenas.',
      gradient: 'from-forest/20 to-lime/10',
      iconBg: 'bg-forest/20 text-forest',
      hoverBorder: 'hover:border-forest/50',
      route: '/practice',
    },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center animate-fade-in px-6 py-12 max-w-6xl mx-auto">
      
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden rounded-3xl neo-panel card-3d p-10 md:p-16 lg:p-20 text-center mb-14 flex flex-col items-center">
        
        {/* Background Gradient Blobs */}
        <div className="absolute -top-32 -left-20 w-80 h-80 bg-lime/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-20 w-80 h-80 bg-olive/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-forest/8 rounded-full blur-[100px] pointer-events-none"></div>
        
        {/* Floating Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[18%] left-[12%] text-6xl text-cream/5 font-mono animate-float" style={{ animationDelay: '0s' }}>C++</div>
          <div className="absolute bottom-[18%] right-[12%] text-5xl text-lime/10 animate-float" style={{ animationDelay: '1.2s' }}><i className="fa-solid fa-code"></i></div>
          <div className="absolute top-[35%] right-[25%] text-4xl text-olive/10 animate-float" style={{ animationDelay: '2.5s' }}><i className="fa-solid fa-microchip"></i></div>
          <div className="absolute bottom-[35%] left-[25%] text-3xl text-forest/10 animate-float" style={{ animationDelay: '3.5s' }}><i className="fa-solid fa-terminal"></i></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <div className="mb-6 flex items-center gap-2 bg-lime/10 text-lime px-4 py-1.5 rounded-full text-sm font-medium border border-lime/20">
            <i className="fa-solid fa-sparkles text-xs"></i>
            <span>24 Modules · Interactive Diagrams · Real Projects</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 tracking-tight text-cream leading-tight">
            Master <span className="bg-gradient-to-r from-lime via-forest to-olive bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradientText_4s_ease_infinite]">C++ & Data Structures</span>
          </h1>
          <p className="text-base md:text-lg text-cream/55 mb-10 max-w-xl leading-relaxed">
            From zero to professional architecture with interactive visualizers, real-world projects, and hardware-level deep dives.
          </p>
          <button 
            className="btn-primary flex items-center gap-3 text-base animate-pulse-glow"
            onClick={() => navigate('/curriculum')}
          >
            <span className="font-bold">Start Learning</span> 
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {features.map((f, i) => (
          <div 
            key={i}
            onClick={() => navigate(f.route)}
            className={`neo-panel card-3d p-8 rounded-3xl cursor-pointer group border border-transparent ${f.hoverBorder} transition-all duration-300`}
          >
            <div className={`icon-badge ${f.iconBg} mb-6 group-hover:scale-110 transition-transform duration-300`}>
              <i className={`fa-solid ${f.icon}`}></i>
            </div>
            <h3 className="text-xl font-heading font-bold text-cream mb-3 group-hover:text-cream transition-colors">
              {f.title}
            </h3>
            <p className="text-cream/50 leading-relaxed text-sm">{f.desc}</p>
            <div className="mt-5 flex items-center gap-2 text-sm font-medium text-cream/30 group-hover:text-lime transition-colors duration-300">
              <span>Explore</span>
              <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform duration-300"></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;
