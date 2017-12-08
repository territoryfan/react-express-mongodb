import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import Todo from './pages/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Todo />, document.getElementById('root'));
registerServiceWorker();
