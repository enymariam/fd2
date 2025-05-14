import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const defaultTheme = createTheme();

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);

reportWebVitals();
