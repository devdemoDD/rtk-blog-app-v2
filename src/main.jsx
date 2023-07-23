import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.jsx';
import { Provider } from 'react-redux';
import { configure as createStore } from './modules';

import './styles/reset.css';
import './styles/global.css';

const store = createStore();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
