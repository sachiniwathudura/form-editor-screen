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
    <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4 overflow-y-auto">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Form Elements
      </h2>
      
      <div className="space-y-2">
        {formElements.map(({ type, label, icon: Icon }) => (
          <button
            key={type}
            onClick={() => onAddElement(type)}
            className="w-full flex items-center space-x-3 p-3 text-left rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
          >
            <div className="p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 transition-colors">
              <Icon size={18} className="text-primary-600 dark:text-primary-400" />
            </div>
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {label}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wide">
          Layout
        </h3>
        <div className="space-y-2">
          <button className="w-full p-3 text-left rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-500 transition-colors text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
            + Add Section
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;