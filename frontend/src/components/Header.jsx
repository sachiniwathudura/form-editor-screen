import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon, Download, Eye, Menu, PanelLeftClose, PanelRightClose } from 'lucide-react';

const Header = ({ onExport, onToggleSidebar, onToggleProperties, isSidebarOpen, isPropertiesOpen }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 sm:px-6 py-3 sm:py-4">
      <div className="flex items-center justify-between">
        {/* Left section - Logo and mobile menu */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Mobile sidebar toggle */}
          <button
            onClick={onToggleSidebar}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors lg:hidden"
            aria-label="Toggle sidebar"
          >
            <Menu size={20} />
          </button>

          <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">D</span>
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
              Donely Form Editor
            </h1>
            <p className="hidden sm:block text-sm text-gray-500 dark:text-gray-400">
              Build beautiful forms effortlessly
            </p>
          </div>
        </div>

        {/* Actions Section */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Mobile properties panel toggle */}
          <button
            onClick={onToggleProperties}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors lg:hidden"
            aria-label="Toggle properties"
          >
            {isPropertiesOpen ? <PanelRightClose size={20} /> : <PanelLeftClose size={20} />}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Export Button */}
          <button 
            onClick={onExport}
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-accent text-white rounded-lg transition-colors"
          >
            <Download size={18} />
            <span className="hidden sm:block">Export</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;