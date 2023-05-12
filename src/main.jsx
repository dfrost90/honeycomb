import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'normalize.css';
import './index.css';
import { AuthProvider } from './context/auth_context.jsx';
import { Provider } from 'react-redux';
import { store } from './store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);
