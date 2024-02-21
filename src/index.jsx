import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Footer, Header } from "./components";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="wrapper">
        <header>
          <Header />
        </header>
        <main>
          <div className="container">
            <App />
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
