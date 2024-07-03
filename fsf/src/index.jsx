import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createRoot } from 'react-dom/client';
import { App } from './App';

// const app = document.getElementById("app")
// if (app){
//     const root = createRoot(app)
//     root.render(<App />)
// }

ReactDOM.createRoot(document.getElementById('app')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )