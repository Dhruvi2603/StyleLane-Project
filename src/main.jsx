// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ShopContextProvider from "./context/ShopContext.jsx";
import LikedItemsProvider from "./context/LikedItemsContext.jsx";
import { SearchProvider } from "./context/SearchContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ShopContextProvider>
        <LikedItemsProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </LikedItemsProvider>
      </ShopContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
