import React, { useState } from 'react';
import { Trash2, GripVertical, Type, Upload, Edit2, Save } from 'lucide-react';

const FormCanvas = ({ 
  elements, 
  selectedElement, 
  onSelectElement, 
  onDeleteElement,
  formTitle,
  formDescription,
  onTitleChange,
  onDescriptionChange
}) => {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [tempTitle, setTempTitle] = useState(formTitle);
  const [tempDescription, setTempDescription] = useState(formDescription);

  const handleTitleSave = () => {
    onTitleChange(tempTitle);
    setIsEditingTitle(false);
  };

  const handleDescriptionSave = () => {
    onDescriptionChange(tempDescription);
    setIsEditingDescription(false);
  };

  const renderFormElement = (element) => {
    const isSelected = selectedElement === element.id;
    
    const baseClasses = `p-4 rounded-lg border-2 transition-all ${
      isSelected 
        ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' 
        : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
    }`;

    switch (element.type) {
      case 'text':
        return (
          <div className={baseClasses}>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {element.label} {element.required && <span className="text-red-500">*</span>}
            </label>
            <input
              type="text"
              placeholder={element.placeholder}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              readOnly
            />
          </div>
        );

      case 'textarea':
        return (
          <div className={baseClasses}>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {element.label} {element.required && <span className="text-red-500">*</span>}
            </label>
            <textarea
              placeholder={element.placeholder}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-vertical"
              readOnly
            />
          </div>
        );

      case 'select':
        return (
          <div className={baseClasses}>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {element.label} {element.required && <span className="text-red-500">*</span>}
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option value="">Select an option</option>
              {element.options?.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
        );

      case 'checkbox':
        return (
          <div className={`${baseClasses} flex items-center space-x-3`}>
            <input
              type="checkbox"
              className="w-4 h-4 text-primary-600 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded focus:ring-primary-500"
              readOnly
            />
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {element.label} {element.required && <span className="text-red-500">*</span>}
            </label>
          </div>
        );

      case 'radio':
        return (
          <div className={baseClasses}>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              {element.label} {element.required && <span className="text-red-500">*</span>}
            </label>
            <div className="space-y-2">
              {['Option 1', 'Option 2', 'Option 3'].map((option, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name={`radio-${element.id}`}
                    className="w-4 h-4 text-primary-600 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-primary-500"
                    readOnly
                  />
                  <label className="text-sm text-gray-700 dark:text-gray-300">{option}</label>
                </div>
              ))}
            </div>
          </div>
        );

      case 'date':
        return (
          <div className={baseClasses}>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {element.label} {element.required && <span className="text-red-500">*</span>}
            </label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              readOnly
            />
          </div>
        );

      case 'file':
        return (
          <div className={baseClasses}>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {element.label} {element.required && <span className="text-red-500">*</span>}
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload size={24} className="text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                </div>
                <input type="file" className="hidden" readOnly />
              </label>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex-1 bg-gray-50 dark:bg-gray-900 p-8 overflow-y-auto">
      <div className="max-w-2xl mx-auto">
        {/* Editable Form Header */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 mb-8">
          {isEditingTitle ? (
            <div className="flex items-center space-x-2 mb-4">
              <input
                type="text"
                value={tempTitle}
                onChange={(e) => setTempTitle(e.target.value)}
                className="flex-1 text-2xl font-bold bg-transparent border-b-2 border-primary-500 focus:outline-none text-gray-900 dark:text-white"
                autoFocus
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleTitleSave();
                  }
                }}
              />
              <button
                onClick={handleTitleSave}
                className="p-1 text-green-600 hover:text-green-700 transition-colors"
                title="Save title"
              >
                <Save size={20} />
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-2 mb-4 group">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {formTitle}
              </h1>
              <button
                onClick={() => {
                  setTempTitle(formTitle);
                  setIsEditingTitle(true);
                }}
                className="p-1 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-gray-700 transition-all"
                title="Edit title"
              >
                <Edit2 size={16} />
              </button>
            </div>
          )}

          {isEditingDescription ? (
            <div className="flex items-start space-x-2">
              <textarea
                value={tempDescription}
                onChange={(e) => setTempDescription(e.target.value)}
                className="flex-1 bg-transparent border-b-2 border-primary-500 focus:outline-none text-gray-500 dark:text-gray-400 resize-none"
                rows="2"
                autoFocus
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && e.ctrlKey) {
                    handleDescriptionSave();
                  }
                }}
              />
              <button
                onClick={handleDescriptionSave}
                className="p-1 text-green-600 hover:text-green-700 transition-colors mt-1"
                title="Save description"
              >
                <Save size={16} />
              </button>
            </div>
          ) : (
            <div className="flex items-start space-x-2 group">
              <p className="text-gray-500 dark:text-gray-400 flex-1">
                {formDescription}
              </p>
              <button
                onClick={() => {
                  setTempDescription(formDescription);
                  setIsEditingDescription(true);
                }}
                className="p-1 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-gray-700 transition-all mt-1"
                title="Edit description"
              >
                <Edit2 size={14} />
              </button>
            </div>
          )}
        </div>

        <div className="space-y-6">
          {elements.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <Type className="text-gray-400" size={24} />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No form elements yet
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Drag elements from the sidebar or click to add them
              </p>
            </div>
          ) : (
            elements.map((element) => (
              <div
                key={element.id}
                className="group relative"
                onClick={() => onSelectElement(element.id)}
              >
                {renderFormElement(element)}
                
                {/* Element controls */}
                <div className="absolute top-2 right-2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-1 bg-white dark:bg-gray-700 rounded border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                    <GripVertical size={16} />
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteElement(element.id);
                    }}
                    className="p-1 bg-white dark:bg-gray-700 rounded border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default FormCanvas;