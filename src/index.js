import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './App';
import {RecoilRoot} from "recoil";
import { CookiesProvider } from "react-cookie";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <CookiesProvider>
          <RecoilRoot>
            <App />
          </RecoilRoot>
      </CookiesProvider>
  </React.StrictMode>
);

