/**
 * Application entry point.
 * Mounts the App component into the #root element in index.html and
 * loads the global styles from index.css. StrictMode adds extra
 * development-time checks and has no effect in production.
 */


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)