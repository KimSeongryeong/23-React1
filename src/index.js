import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/Comment';
import Accommodate from './chapter_07/Accommodate';
import Calculator from './chapter_12/Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  <React.StrictMode>
    <Calculator/>
  </React.StrictMode>
);

reportWebVitals();
