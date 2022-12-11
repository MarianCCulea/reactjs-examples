import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import postsReducer from "./redux/reducers/postsSlice";
import { fetchPosts } from "./redux/reducers/postsSlice";

import propertyReducer from "./redux/reducers/property";

const store = configureStore({
  reducer: {
    propertyData: propertyReducer,
    posts: postsReducer,
  },
});

store.dispatch(fetchPosts());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
