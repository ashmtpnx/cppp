import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [studentMode, setStudentMode] = useState(true); // true = Beginner, false = Pro
  const [currentModuleId, setCurrentModuleId] = useState("mod-1");
  const [currentSubtopicId, setCurrentSubtopicId] = useState("mod-1-1");
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem("cpp_bookmarks");
    return saved ? JSON.parse(saved) : [];
  });
  
  // Persist bookmarks
  useEffect(() => {
    localStorage.setItem("cpp_bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (subtopicId) => {
    setBookmarks(prev => 
      prev.includes(subtopicId) 
        ? prev.filter(id => id !== subtopicId)
        : [...prev, subtopicId]
    );
  };

  const isBookmarked = (subtopicId) => bookmarks.includes(subtopicId);

  const value = {
    studentMode,
    setStudentMode,
    currentModuleId,
    setCurrentModuleId,
    currentSubtopicId,
    setCurrentSubtopicId,
    bookmarks,
    toggleBookmark,
    isBookmarked
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
