import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'antd/dist/antd.css';
import 'antd/dist/antd.less';
// import 'antd/dist/antd.variable.min.css'
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode >
);

