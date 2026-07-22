import React from 'react';
import { NavLink } from 'react-router-dom';

function TopNav() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 z-50 glass-panel flex items-center justify-between px-6">
      
      {/* Left: Logo */}
      <div className="flex items-center gap-3">
        <button className="text-cream hover:text-lime transition-colors p-2 md:hidden">
          <i className="fa-solid fa-bars text-xl"></i>
        </button>
        <div className="icon-badge bg-gradient-to-br from-lime/30 to-olive/30 text-lime border border-lime/20">
          <i className="fa-solid fa-code"></i>
        </div>
        <div className="hidden md:block">
          <h1 className="font-heading font-bold text-lg text-cream tracking-wide">
            C++ & DSA <span className="bg-gradient-to-r from-lime to-forest bg-clip-text text-transparent">MasterClass Pro</span>
          </h1>
          <p className="text-xs text-cream/50">Complete 24-Module Training Curriculum</p>
        </div>
      </div>

      {/* Center: Search */}
      <div className="hidden lg:flex flex-1 max-w-lg mx-8">
        <div className="relative w-full group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-cream/30 group-focus-within:text-lime transition-colors duration-300">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <input 
            type="text" 
            placeholder="Search any topic, subtopic, or concept..." 
            className="w-full bg-darkbase/80 border border-forest/30 rounded-2xl py-2.5 pl-11 pr-14 text-sm text-cream placeholder-cream/30 focus:outline-none focus:border-lime/60 focus:ring-4 focus:ring-lime/10 focus:bg-white hover:border-forest/50 transition-all duration-300"
          />
          <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none">
            <span className="text-[10px] font-mono text-cream/40 bg-white/80 border border-forest/20 rounded-lg px-2 py-0.5">⌘K</span>
          </div>
        </div>
      </div>

      {/* Right: Navigation Links & Actions */}
      <div className="flex items-center gap-2 md:gap-4">
        <nav className="hidden md:flex items-center gap-1 bg-darkbase/60 p-1.5 rounded-2xl border border-forest/20">
          <NavLink end to="/" className={({ isActive }) => `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${isActive ? 'bg-white text-cream shadow-md border border-forest/20' : 'text-cream/50 hover:text-cream hover:bg-white/50 border border-transparent'}`}>
            <i className="fa-solid fa-house text-xs"></i> Home
          </NavLink>
          <NavLink to="/curriculum" className={({ isActive }) => `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${isActive ? 'bg-white text-cream shadow-md border border-forest/20' : 'text-cream/50 hover:text-cream hover:bg-white/50 border border-transparent'}`}>
            <i className="fa-solid fa-book-open text-xs"></i> Curriculum
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => `px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${isActive ? 'bg-white text-cream shadow-md border border-forest/20' : 'text-cream/50 hover:text-cream hover:bg-white/50 border border-transparent'}`}>
            <i className="fa-solid fa-laptop-code text-xs"></i> Projects
          </NavLink>
        </nav>

        <div className="flex items-center gap-1 border-l border-forest/20 pl-3 ml-1">
          <button className="text-cream/40 hover:text-lime transition-all duration-300 p-2 rounded-xl hover:bg-lime/10" title="Bookmarks">
            <i className="fa-regular fa-bookmark text-lg"></i>
          </button>
          <button className="text-cream/40 hover:text-forest transition-all duration-300 p-2 rounded-xl hover:bg-forest/10" title="Settings">
            <i className="fa-solid fa-gear text-lg"></i>
          </button>
        </div>
      </div>
      
    </header>
  );
}

export default TopNav;
