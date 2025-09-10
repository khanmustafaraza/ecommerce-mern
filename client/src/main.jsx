import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import { ProductAppProvider } from "./context/ProductContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProductAppProvider>
      <App />
    </ProductAppProvider>
  </BrowserRouter>
);
