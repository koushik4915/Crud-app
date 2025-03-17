import { StrictMode, useReducer } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {Provider} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import userReducer from './assets/userReducer.jsx'



const store = configureStore({
  reducer:{
    users: userReducer
  }
})


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
