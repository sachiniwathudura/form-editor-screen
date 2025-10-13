import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Header from './Header';
import Sidebar from './Sidebar';
import FormCanvas from './FormCanvas';
import PropertiesPanel from './PropertiesPanel';

const FormEditor = () => {
  const { isDark } = useTheme();
  const [selectedElement, setSelectedElement] = useState(null);
  const [formElements, setFormElements] = useState([]);
  const [formTitle, setFormTitle] = useState('Untitled Form');
  const [formDescription, setFormDescription] = useState('Form description goes here...');

  const addFormElement = (type) => {
    const newElement = {
      id: Date.now().toString(),
      type,
      label: `${type.charAt(0).toUpperCase() + type.slice(1)} Field`,
      required: false,
      placeholder: `Enter ${type}...`,
      ...(type === 'select' && { options: ['Option 1', 'Option 2'] }),
    };
    setFormElements([...formElements, newElement]);
    setSelectedElement(newElement.id);
  };

  const updateFormElement = (id, updates) => {
    setFormElements(prev =>
      prev.map(el => (el.id === id ? { ...el, ...updates } : el))
    );
  };

  const deleteFormElement = (id) => {
    setFormElements(prev => prev.filter(el => el.id !== id));
    if (selectedElement === id) {
      setSelectedElement(null);
    }
  };

  // Export function to save form data
  const exportForm = () => {
    const formData = {
      title: formTitle,
      description: formDescription,
      elements: formElements,
      exportDate: new Date().toISOString(),
      version: '1.0'
    };

    // Convert to JSON string with nice formatting
    const jsonString = JSON.stringify(formData, null, 2);
    
    // Create a Blob with the JSON data
    const blob = new Blob([jsonString], { type: 'application/json' });
    
    // Create a download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${formTitle.replace(/\s+/g, '_').toLowerCase()}_form.json`;
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    // Optional: Show success message
    alert(`Form exported successfully as ${link.download}`);
  };

  // Export as HTML form
  const exportAsHTML = () => {
    let htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${formTitle}</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9fafb;
        }
        .form-container {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }
        .form-header {
            margin-bottom: 2rem;
        }
        .form-title {
            font-size: 2rem;
            font-weight: bold;
            color: #111827;
            margin-bottom: 0.5rem;
        }
        .form-description {
            color: #6b7280;
            font-size: 1rem;
        }
        .form-group {
            margin-bottom: 1.5rem;
        }
        label {
            display: block;
            font-weight: 500;
            color: #374151;
            margin-bottom: 0.5rem;
        }
        .required::after {
            content: " *";
            color: #ef4444;
        }
        input, textarea, select {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #d1d5db;
            border-radius: 6px;
            font-size: 1rem;
        }
        input:focus, textarea:focus, select:focus {
            outline: none;
            border-color: #0ea5e9;
            box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
        }
        .checkbox-group, .radio-group {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 0.5rem;
        }
        .file-upload {
            border: 2px dashed #d1d5db;
            border-radius: 6px;
            padding: 2rem;
            text-align: center;
            background: #f9fafb;
            cursor: pointer;
        }
        .file-upload:hover {
            border-color: #0ea5e9;
            background: #f0f9ff;
        }
        .submit-btn {
            background: #0ea5e9;
            color: white;
            padding: 0.75rem 2rem;
            border: none;
            border-radius: 6px;
            font-size: 1rem;
            cursor: pointer;
            margin-top: 1rem;
        }
        .submit-btn:hover {
            background: #0284c7;
        }
    </style>
</head>
<body>
    <div class="form-container">
        <div class="form-header">
            <h1 class="form-title">${formTitle}</h1>
            <p class="form-description">${formDescription}</p>
        </div>
        <form id="dynamicForm">
`;

    // Generate HTML for each form element
    formElements.forEach(element => {
      const requiredClass = element.required ? 'required' : '';
      
      switch (element.type) {
        case 'text':
          htmlContent += `
            <div class="form-group">
                <label class="${requiredClass}">${element.label}</label>
                <input type="text" 
                       placeholder="${element.placeholder}" 
                       ${element.required ? 'required' : ''}
                       name="${element.id}">
            </div>`;
          break;

        case 'textarea':
          htmlContent += `
            <div class="form-group">
                <label class="${requiredClass}">${element.label}</label>
                <textarea placeholder="${element.placeholder}" 
                          rows="3"
                          ${element.required ? 'required' : ''}
                          name="${element.id}"></textarea>
            </div>`;
          break;

        case 'select':
          htmlContent += `
            <div class="form-group">
                <label class="${requiredClass}">${element.label}</label>
                <select ${element.required ? 'required' : ''} name="${element.id}">
                    <option value="">Select an option</option>`;
          element.options?.forEach(option => {
            htmlContent += `<option value="${option}">${option}</option>`;
          });
          htmlContent += `
                </select>
            </div>`;
          break;

        case 'checkbox':
          htmlContent += `
            <div class="form-group">
                <div class="checkbox-group">
                    <input type="checkbox" 
                           id="${element.id}" 
                           ${element.required ? 'required' : ''}
                           name="${element.id}">
                    <label for="${element.id}" class="${requiredClass}">${element.label}</label>
                </div>
            </div>`;
          break;

        case 'radio':
          htmlContent += `
            <div class="form-group">
                <label class="${requiredClass}">${element.label}</label>`;
          ['Option 1', 'Option 2', 'Option 3'].forEach((option, index) => {
            htmlContent += `
                <div class="radio-group">
                    <input type="radio" 
                           id="${element.id}_${index}" 
                           name="${element.id}" 
                           value="${option}"
                           ${element.required ? 'required' : ''}>
                    <label for="${element.id}_${index}">${option}</label>
                </div>`;
          });
          htmlContent += `
            </div>`;
          break;

        case 'date':
          htmlContent += `
            <div class="form-group">
                <label class="${requiredClass}">${element.label}</label>
                <input type="date" 
                       ${element.required ? 'required' : ''}
                       name="${element.id}">
            </div>`;
          break;

        case 'file':
          htmlContent += `
            <div class="form-group">
                <label class="${requiredClass}">${element.label}</label>
                <div class="file-upload">
                    <input type="file" 
                           ${element.required ? 'required' : ''}
                           name="${element.id}"
                           style="display: none;" 
                           id="file-${element.id}">
                    <label for="file-${element.id}" style="cursor: pointer;">
                        <div>Click to upload or drag and drop</div>
                    </label>
                </div>
            </div>`;
          break;
      }
    });

    htmlContent += `
            <button type="submit" class="submit-btn">Submit Form</button>
        </form>
    </div>

    <script>
        document.getElementById('dynamicForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Form submitted successfully!');
        });

        // File upload click handling
        const fileInputs = document.querySelectorAll('input[type="file"]');
        fileInputs.forEach(input => {
            input.addEventListener('change', function() {
                const fileName = this.files[0] ? this.files[0].name : 'No file chosen';
                this.parentElement.querySelector('div').textContent = fileName;
            });
        });
    </script>
</body>
</html>`;

    // Create and download HTML file
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${formTitle.replace(/\s+/g, '_').toLowerCase()}_form.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    alert(`Form exported as HTML: ${link.download}`);
  };

  // Enhanced export with multiple format options
  const handleExport = () => {
    if (formElements.length === 0) {
      alert('Please add some form elements before exporting.');
      return;
    }

    // Ask user for export format
    const format = prompt('Choose export format:\n1. JSON (Form Data)\n2. HTML (Working Form)\n\nEnter 1 or 2:');
    
    if (format === '1') {
      exportForm(); // JSON export
    } else if (format === '2') {
      exportAsHTML(); // HTML export
    } else if (format !== null) {
      alert('Invalid choice. Please enter 1 or 2.');
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Header onExport={handleExport} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar onAddElement={addFormElement} />
        <FormCanvas
          elements={formElements}
          selectedElement={selectedElement}
          onSelectElement={setSelectedElement}
          onDeleteElement={deleteFormElement}
          formTitle={formTitle}
          formDescription={formDescription}
          onTitleChange={setFormTitle}
          onDescriptionChange={setFormDescription}
        />
        <PropertiesPanel
          selectedElement={formElements.find(el => el.id === selectedElement)}
          onUpdateElement={updateFormElement}
        />
      </div>
    </div>
  );
};

export default FormEditor;