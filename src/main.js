import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ParallaxProvider } from "react-scroll-parallax";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
createRoot(document.getElementById("root")).render(_jsx(StrictMode, { children: _jsx(I18nextProvider, { i18n: i18n, children: _jsx(ParallaxProvider, { children: _jsx(App, {}) }) }) }));
