import React from 'react';
import { Settings } from 'lucide-react';

const PropertiesPanel = ({ selectedElement, onUpdateElement }) => {
  if (!selectedElement) {
    return (
      <div className="w-80 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 p-6 flex flex-col items-center justify-center text-center">
        <Settings size={48} className="text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
          No element selected
        </h3>
        <p className="text-gray-500 dark:text-gray-400">
          Select a form element to edit its properties
        </p>
      </div>
    );
  }

  const handleUpdate = (updates) => {
    onUpdateElement(selectedElement.id, updates);
  };

  return (
    <div className="w-80 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 p-6 overflow-y-auto">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center space-x-2">
        <Settings size={20} />
        <span>Properties</span>
      </h2>

      <div className="space-y-6">
        {/* Basic Properties */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
            Basic Properties
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Label
              </label>
              <input
                type="text"
                value={selectedElement.label}
                onChange={(e) => handleUpdate({ label: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Placeholder
              </label>
              <input
                type="text"
                value={selectedElement.placeholder || ''}
                onChange={(e) => handleUpdate({ placeholder: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="required"
                checked={selectedElement.required}
                onChange={(e) => handleUpdate({ required: e.target.checked })}
                className="w-4 h-4 text-primary-600 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded focus:ring-primary-500"
              />
              <label htmlFor="required" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Required Field
              </label>
            </div>
          </div>
        </div>

        {/* Options for Select */}
        {selectedElement.type === 'select' && (
          <div>
            <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
              Options
            </h3>
            <div className="space-y-2">
              {selectedElement.options?.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => {
                      const newOptions = [...selectedElement.options];
                      newOptions[index] = e.target.value;
                      handleUpdate({ options: newOptions });
                    }}
                    className="flex-1 px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                  />
                  <button
                    onClick={() => {
                      const newOptions = selectedElement.options.filter((_, i) => i !== index);
                      handleUpdate({ options: newOptions });
                    }}
                    className="p-1 text-red-600 hover:text-red-700 transition-colors"
                  >
                    ×
                  </button>
                </div>
              ))}
              <button
                onClick={() => {
                  const newOptions = [...(selectedElement.options || []), `Option ${(selectedElement.options?.length || 0) + 1}`];
                  handleUpdate({ options: newOptions });
                }}
                className="w-full py-2 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 border border-dashed border-gray-300 dark:border-gray-600 rounded-md hover:border-primary-400 dark:hover:border-primary-500 transition-colors"
              >
                + Add Option
              </button>
            </div>
          </div>
        )}

        {/* Appearance */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
            Appearance
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Width
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option>Full Width</option>
                <option>Half Width</option>
                <option>Auto</option>
              </select>
            </div>
          </div>
        </div>

        {/* Advanced */}
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
            Advanced
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Field ID
              </label>
              <input
                type="text"
                value={selectedElement.id}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-400 focus:outline-none cursor-not-allowed"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesPanel;