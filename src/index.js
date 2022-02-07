import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import BasicTabs from './BasicTabs';

ReactDOM.render(
  <>
  <BasicTabs/>,
    <App />,
  </>,
  document.getElementById('root')
);
