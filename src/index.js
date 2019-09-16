import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Browser } from "react-router-dom";

ReactDOM.render(<Browser><App /></Browser>, document.getElementById('root'));
