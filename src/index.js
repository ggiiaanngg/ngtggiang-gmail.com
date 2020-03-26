import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ChartApp from './ChartApp';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<ChartApp />, document.getElementById('root2'));
//ReactDOM.render(<ChartApp />, document.getElementById('root3'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
