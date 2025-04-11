import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import './App.css';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  useEffect(() => {
    document.documentElement.className = isDarkMode ? 'dark-theme' : '';
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <div className={`app-container ${isDarkMode ? 'dark-theme' : ''}`}>
      <button 
        className="theme-toggle"
        onClick={toggleDarkMode}
        aria-label={isDarkMode ? 'Светлая тема' : 'Темная тема'}
      >
        <span className="toggle-icon">
          {isDarkMode ? '🌑' : '💡'}
        </span>
      </button>
      
      <div className="app-content">
        <header className="app-header">
          <h1 className="app-title">Task Manager</h1>
        </header>

        <main className="main-content">
          <TaskList />
        </main>

        <footer className="app-footer">
          <p>© {new Date().getFullYear()} Task Manager App</p>
        </footer>
      </div>
    </div>
  );
};

export default App;