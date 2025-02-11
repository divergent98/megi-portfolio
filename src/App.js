import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Artvanturista from "./pages/Artvanturista";
import Home from "./pages/Home";
import Megiverse from "./pages/Megiverse";
import GraphicDesign from "./pages/GraphicDesign";
import Social from "./pages/Social";
import Design from "./pages/UX_UI_Design";
import './App.css';
var App = function () {
    return (_jsx(_Fragment, { children: _jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/artvanturista", element: _jsx(Artvanturista, {}) }), _jsx(Route, { path: "/maggiverse", element: _jsx(Megiverse, {}) }), _jsx(Route, { path: "/graphic-design", element: _jsx(GraphicDesign, {}) }), _jsx(Route, { path: "/social-media-and-marketing", element: _jsx(Social, {}) }), _jsx(Route, { path: "/ux-ui-design", element: _jsx(Design, {}) })] }) }) }));
};
export default App;
