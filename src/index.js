import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Redux/reducer';
const createStore = legacy_createStore



const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
