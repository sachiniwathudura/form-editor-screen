import React from 'react';
import FormEditor from './components/FormEditor';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <FormEditor />
      </div>
    </ThemeProvider>
  );
}

export default App;