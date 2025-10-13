import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon, Download, Eye } from 'lucide-react';

const Header = ({ onExport }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">D</span>
          </div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Donely Form Editor
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={onExport}
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-accent text-white rounded-lg transition-colors"
          >
            <Download size={18} />
            <span>Export</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;