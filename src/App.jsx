import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import TopNav from './components/TopNav';
import Home from './pages/Home';
import Curriculum from './pages/Curriculum';
import Visualizer from './pages/Visualizer';
import Projects from './pages/Projects';
import Practice from './pages/Practice';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-darkbase text-cream flex flex-col font-sans">
          <TopNav />
          <main className="flex-grow pt-16 w-full flex flex-col h-[100dvh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/visualizer" element={<Visualizer />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/practice" element={<Practice />} />
          </Routes>
        </main>
      </div>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
