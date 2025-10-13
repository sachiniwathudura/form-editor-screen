import React from 'react';
import { 
  Type, 
  Square, 
  CheckSquare, 
  List, 
  ToggleLeft,
  Calendar,
  Upload
} from 'lucide-react';

const formElements = [
  { type: 'text', label: 'Text Input', icon: Type },
  { type: 'textarea', label: 'Text Area', icon: Square },
  { type: 'select', label: 'Dropdown', icon: List },
  { type: 'checkbox', label: 'Checkbox', icon: CheckSquare },
  { type: 'radio', label: 'Radio Group', icon: ToggleLeft },
  { type: 'date', label: 'Date Picker', icon: Calendar },
  { type: 'file', label: 'File Upload', icon: Upload },
];

const Sidebar = ({ onAddElement }) => {
  return (
    <div className="h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-3 sm:p-4 overflow-y-auto">
      <div className="mb-4 sm:mb-6">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
          Form Elements
        </h2>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          Click to add elements
        </p>
      </div>
      
      <div className="space-y-1 sm:space-y-2">
        {formElements.map(({ type, label, icon: Icon }) => (
          <button
            key={type}
            onClick={() => onAddElement(type)}
            className="w-full flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 text-left rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
          >
            <div className="p-1.5 sm:p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors flex-shrink-0">
              <Icon size={16} className="sm:w-4 sm:h-4 text-primary-600 dark:text-primary-400" />
            </div>
            <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-medium truncate">
              {label}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2 sm:mb-3 uppercase tracking-wide">
          Layout
        </h3>
        <div className="space-y-1 sm:space-y-2">
          <button className="w-full p-2 sm:p-3 text-left rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-500 transition-colors text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-xs sm:text-sm">
            + Add Section
          </button>
        </div>
      </div>

      {/* Recent Elements for larger screens */}
      <div className="mt-4 sm:mt-6 hidden sm:block">
        <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
          Recently Used
        </h4>
        <div className="flex flex-wrap gap-1">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
            Text
          </span>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
            Email
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;