
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
A modern, responsive Form Editor built with React and Tailwind CSS that allows users to create and customize forms with a drag-and-drop interface.

Currently, two official plugins are available:
## 🚀 Features

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
- **Drag & Drop Form Builder**
- **Real-time Properties Panel**
- **Dark/Light Mode Toggle**
- **Form Export (JSON & HTML)**
- **Responsive Design**
- **7 Form Element Types**
- **Editable Form Metadata**
- **Professional UI/UX**

## 🛠️ Tech Stack

- **Frontend**: React 18 with JSX
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Context API + useState
- **Build Tool**: Create React App

## 📦 Installation & Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd form-editor-screen

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## 🎯 Usage

### Creating Forms
1. **Add Elements**: Click on form elements in the sidebar
2. **Customize**: Select elements to edit properties in the right panel
3. **Edit Metadata**: Click edit icons to modify form title and description
4. **Export**: Use export button to save as JSON or HTML format

### Available Form Elements
- ✅ Text Input
- ✅ Text Area
- ✅ Dropdown Select
- ✅ Checkbox
- ✅ Radio Group
- ✅ Date Picker
- ✅ File Upload

### Export Options
- **JSON Export**: Save form structure for later editing
- **HTML Export**: Generate fully functional HTML forms

## 📁 Project Structure

```
src/
├── components/
│   ├── FormEditor.jsx          # Main container
│   ├── Header.jsx              # App header with controls
│   ├── Sidebar.jsx             # Form elements palette
│   ├── FormCanvas.jsx          # Form preview area
│   └── PropertiesPanel.jsx     # Element properties editor
├── contexts/
│   └── ThemeContext.jsx        # Theme management
├── App.jsx                     # Root component
├── index.js                    # Entry point
└── index.css                   # Global styles
```

## 🎨 Theme System

- **Light/Dark Mode Toggle**
- **System Preference Detection**
- **Persistent Theme Storage**
- **Smooth Transitions**


## 📄 License

This project is licensed under the MIT License.
