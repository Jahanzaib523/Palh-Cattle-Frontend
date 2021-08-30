
/* This is the component which links the React App to the HTML file and renders on the screen. */


import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";


ReactDOM.render(<App/>,document.getElementById('root'));

reportWebVitals();
