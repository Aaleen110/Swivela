import React from 'react';
import ReactDOM from 'react-dom/client';
import Preview from './components/Preview';
import './index.css';

// Create a simple preview app that renders the Preview component
const PreviewApp = () => {
  return (
    <div className="preview-app">
      <Preview />
    </div>
  );
};

// Render the preview app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PreviewApp />);
