import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import mnLogo from "../assets/mn-logo.png";
import meggiverseLogo from "../assets/meggiverse-logo.png";
import artvanturistaLogo from "../assets/artvanturista-logo.png";
import { useState } from "react";
import { useTranslation } from "react-i18next";
var CustomNavbar = function (_a) {
    var logo = _a.logo, color = _a.color;
    var _b = useState(false), isMenuOpen = _b[0], setIsMenuOpen = _b[1];
    // Match logo prop to the corresponding image
    var getLogoImage = function (logoName) {
        switch (logoName) {
            case "mnLogo":
                return mnLogo;
            case "meggiverseLogo":
                return meggiverseLogo;
            case "artvanturistaLogo":
                return artvanturistaLogo;
            default:
                return mnLogo; // If no logo matches, return default
        }
    };
    var logoImage = getLogoImage(logo);
    var _c = useTranslation(), t = _c.t, i18n = _c.i18n;
    var changeLanguage = function (lng) {
        i18n.changeLanguage(lng);
    };
    return (_jsx("nav", { className: "navbar navbar-expand-lg  bg-transparent", children: _jsxs("div", { className: "container-fluid", children: [_jsx(Link, { to: "/", className: "navbar-brand", children: logoImage ? (_jsx("img", { src: logoImage, alt: "Logo", className: "img-fluid", style: { maxHeight: "40px" } })) : ("Logo not found") }), _jsx("button", { className: "navbar-toggler", type: "button", "aria-controls": "navbarNav", "aria-expanded": isMenuOpen, "aria-label": "Toggle navigation", onClick: function () { return setIsMenuOpen(!isMenuOpen); }, children: _jsx("span", { className: "navbar-toggler-icon ".concat(color) }) }), _jsx("div", { className: "collapse navbar-collapse ".concat(isMenuOpen ? "show" : ""), id: "navbarNav", children: _jsxs("ul", { className: "navbar-nav ms-auto", children: [_jsx("li", { className: "nav-item", children: _jsx(Link, { to: "/", className: "nav-link text-uppercase ".concat(color), onClick: function () { return setIsMenuOpen(false); }, children: t('home') }) }), _jsx("li", { className: "nav-item", children: _jsx(Link, { to: "/artvanturista", className: "nav-link text-uppercase ".concat(color), onClick: function () { return setIsMenuOpen(false); }, children: "Artvanturista" }) }), _jsx("li", { className: "nav-item", children: _jsx(Link, { to: "/maggiverse", className: "nav-link text-uppercase ".concat(color), onClick: function () { return setIsMenuOpen(false); }, children: "Maggiverse" }) }), _jsx("li", { className: "nav-item", children: _jsx(Link, { to: "/graphic-design", className: "nav-link text-uppercase ".concat(color), onClick: function () { return setIsMenuOpen(false); }, children: "Graphic Design" }) }), _jsx("li", { className: "nav-item", children: _jsx(Link, { to: "/social-media-and-marketing", className: "nav-link text-uppercase ".concat(color), onClick: function () { return setIsMenuOpen(false); }, children: "Social Media & Marketing" }) }), _jsx("li", { className: "nav-item", children: _jsx(Link, { to: "/ux-ui-design", className: "nav-link text-uppercase ".concat(color), onClick: function () { return setIsMenuOpen(false); }, children: "UX/UI Design" }) }), _jsx("li", { children: _jsxs("select", { className: "form-select border-none border-0 bg-transparent", onChange: function (e) { return changeLanguage(e.target.value); }, defaultValue: i18n.language, children: [_jsx("option", { value: "en", children: "ENGLISH" }), _jsx("option", { value: "sr", children: "SRPSKI" })] }) })] }) })] }) }));
};
export default CustomNavbar;
