import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {store} from "./redux/context";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    // eslint-disable-next-line react/jsx-no-undef
    <Provider store={store}>
        <App />
    </Provider>
);

