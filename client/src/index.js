import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './components/App.jsx';
import './index.less'
import {store} from "./reducers"
import {Provider} from 'react-redux';

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App/>
  </Provider>
);