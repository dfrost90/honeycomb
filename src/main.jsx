import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import 'normalize.css';
import './index.css';
import { AuthProvider } from './context/auth_context.jsx';
// import { DataProvider } from './context/data_contenxt.jsx';
import { FilterProvider } from './context/filter_context.jsx';
import { Provider } from 'react-redux';
import { store } from './store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      {/* <DataProvider> */}
      <Provider store={store}>
        <FilterProvider>
          <App />
        </FilterProvider>
      </Provider>
      {/* </DataProvider> */}
    </AuthProvider>
  </React.StrictMode>
);
