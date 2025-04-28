import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const parent = document.getElementById("root");
const reactRoot = createRoot(parent);

reactRoot.render(
    <StrictMode>
        <App />
    </StrictMode>
);
