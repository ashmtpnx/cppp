import React, { useMemo } from 'react';
import { useAppContext } from '../context/AppContext';
import { curriculumData } from '../data/curriculum';
import InteractiveDiagram from '../components/InteractiveDiagram';

function Curriculum() {
  const { 
    currentModuleId, setCurrentModuleId, 
    currentSubtopicId, setCurrentSubtopicId,
    bookmarks, toggleBookmark,
    studentMode, setStudentMode
  } = useAppContext();

  // Find the active module and subtopic content
  const activeModule = useMemo(() => curriculumData.find(m => m.id === currentModuleId), [currentModuleId]);
  const activeSubtopic = useMemo(() => activeModule?.subtopics.find(s => s.id === currentSubtopicId), [activeModule, currentSubtopicId]);

  return (
    <div className="flex flex-1 w-full overflow-hidden bg-darkbase">
      
      {/* Sidebar (Modules & Subtopics) */}
      <aside className="w-80 sidebar-3d border-r border-forest/10 flex flex-col h-full overflow-hidden shrink-0">
        <div className="p-5 border-b border-forest/15 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-lime/15 flex items-center justify-center text-lime text-sm">
            <i className="fa-solid fa-layer-group"></i>
          </div>
          <h2 className="font-heading font-bold text-base text-cream">Course Modules</h2>
        </div>
        
        <div className="overflow-y-auto flex-1 custom-scrollbar py-1">
          {curriculumData.map(mod => (
            <div key={mod.id} className="border-b border-forest/8">
              <button 
                className={`w-full text-left px-5 py-3.5 hover:bg-forest/8 transition-all duration-200 flex items-center justify-between gap-2 ${
                  currentModuleId === mod.id 
                    ? 'bg-lime/8 border-l-3 border-lime' 
                    : 'border-l-3 border-transparent'
                }`}
                onClick={() => setCurrentModuleId(currentModuleId === mod.id ? null : mod.id)}
              >
                <span className={`font-medium text-sm leading-snug ${currentModuleId === mod.id ? 'text-cream' : 'text-cream/70'}`}>{mod.title}</span>
                <i className={`fa-solid fa-chevron-${currentModuleId === mod.id ? 'up' : 'down'} text-[10px] text-cream/30 shrink-0`}></i>
              </button>
              
              {currentModuleId === mod.id && (
                <div className="bg-darkbase/40 py-1">
                  {mod.subtopics.map(sub => (
                    <button
                      key={sub.id}
                      onClick={() => setCurrentSubtopicId(sub.id)}
                      className={`w-full text-left py-2.5 px-7 text-sm transition-all duration-200 flex items-center gap-3
                        ${currentSubtopicId === sub.id 
                          ? 'text-lime bg-lime/10 font-medium' 
                          : 'text-cream/50 hover:text-cream/80 hover:bg-forest/8'
                        }
                      `}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${currentSubtopicId === sub.id ? 'bg-lime' : 'bg-forest/40'}`}></span>
                      <span className="flex-1 truncate">{sub.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative bg-white">
        
        {/* Content Header */}
        <header className="h-14 header-3d border-b border-forest/10 flex items-center justify-between px-6 shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-lime bg-lime/10 px-2.5 py-1 rounded-lg border border-lime/15 font-medium">
              {activeModule?.category?.toUpperCase() || 'MODULE'}
            </span>
            <span className="text-sm font-medium text-cream/60">{activeSubtopic?.title || 'Select a topic'}</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Mode Toggle */}
            <button 
              onClick={() => setStudentMode(!studentMode)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all duration-300 ${
                studentMode 
                  ? 'bg-lime/10 text-lime border border-lime/20' 
                  : 'bg-olive/10 text-olive border border-olive/20'
              }`}
            >
              <i className={`fa-solid ${studentMode ? 'fa-user-graduate' : 'fa-laptop-code'}`}></i>
              {studentMode ? 'Student Mode' : 'Pro Mode'}
            </button>
            
            {/* Bookmark Toggle */}
            {activeSubtopic && (
              <button 
                onClick={() => toggleBookmark(activeSubtopic.id)}
                className={`transition-all duration-300 p-1.5 rounded-lg ${
                  bookmarks.includes(activeSubtopic.id) 
                    ? 'text-lime bg-lime/10' 
                    : 'text-cream/30 hover:text-cream/60 hover:bg-forest/8'
                }`}
              >
                <i className={`${bookmarks.includes(activeSubtopic.id) ? 'fa-solid' : 'fa-regular'} fa-bookmark`}></i>
              </button>
            )}
          </div>
        </header>

        {/* Markdown/HTML Content */}
        <div className="flex-1 overflow-y-auto p-8 lg:p-10 custom-scrollbar relative bg-darkbase/30">
          {activeSubtopic ? (
            <div className="max-w-4xl mx-auto pb-20">
              <h1 className="text-3xl font-heading font-bold text-cream mb-4">{activeSubtopic.title}</h1>
              <div className="text-cream/60 mb-8 p-4 bg-lime/5 border-l-4 border-lime rounded-r-xl italic text-sm leading-relaxed">
                {activeSubtopic.summary}
              </div>

              {/* Interactive Diagram Component */}
              {activeSubtopic.diagram && (
                <InteractiveDiagram data={activeSubtopic.diagram} />
              )}
              
              {/* Injecting legacy HTML content */}
              <div 
                className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:text-cream prose-p:text-cream/70 prose-a:text-olive hover:prose-a:text-lime prose-pre:bg-white prose-pre:border prose-pre:border-forest/20 prose-pre:rounded-xl prose-code:text-lime prose-code:bg-lime/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-[''] prose-strong:text-cream prose-li:text-cream/70"
                dangerouslySetInnerHTML={{ __html: activeSubtopic.content }} 
              />
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-cream/25 gap-3">
              <div className="icon-badge bg-forest/10 text-forest/30 text-3xl">
                <i className="fa-solid fa-book-open"></i>
              </div>
              <p className="text-sm">Select a topic from the sidebar to begin learning.</p>
            </div>
          )}
        </div>
      </main>

    </div>
  );
}

export default Curriculum;
