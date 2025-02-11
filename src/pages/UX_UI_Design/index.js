import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Navbar from "../../Components/Navbar";
import uxui from "../../assets/ux-ui-design.png";
import biteLogo from "../../assets/bite-logo.png";
import bite1 from "../../assets/bite-1-revised.png";
import bite2 from "../../assets/bite-mockups.png";
import megaLogo from "../../assets/mega-logo.png";
import mega from "../../assets/mega-promet.png";
import mega2 from "../../assets/mega-promet-2.png";
import portfolio from "../../assets/portfolio.png";
import ContactForm from "../Components/ContactForm";
import ParallaxComponent from "./ParallaxComponent";
import { useTranslation } from "react-i18next";
var Design = function () {
    var t = useTranslation().t;
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "hero-section overflow-hidden", children: [_jsx(Navbar, {}), _jsx("div", { className: "container overflow-hidden", children: _jsxs("div", { className: "row align-items-center mb-5 justify-content-center", children: [_jsx("h1", { className: "mt-lg-5 mb-5 fw-43 fs-64 fw-bold text-center", children: t("ux_ui_design.title") }), _jsx("div", { className: "col-md-5 text-center text-md-start", children: _jsx("p", { className: "fs-28", children: t("ux_ui_design.text") }) }), _jsx("div", { className: "col-7 text-center", children: _jsx("img", { src: uxui, className: "img-fluid" }) })] }) })] }), _jsx("div", { className: "container-fluid overflow-hidden", children: _jsxs("div", { className: "row", children: [_jsx("div", { className: "row justify-content-start ms-0 ps-0", children: _jsx("div", { className: "col-8 ms-0 ps-0 my-5", children: _jsx("img", { src: portfolio, className: "img-fluid ms-0 ps-0 my-5" }) }) }), _jsx("div", { className: "row justify-content-center", children: _jsx("div", { className: "col-lg-3 ", children: _jsx("img", { src: biteLogo, className: "img-fluid p-5" }) }) }), _jsxs("div", { className: "row justify-content-center align-items-center", children: [_jsx("div", { className: "col-lg-6", children: _jsx("img", { src: bite1, className: "img-fluid" }) }), _jsx("div", { className: "col-lg-5", children: _jsx("p", { className: "my-5 fs-25 text-end", children: t("ux_ui_design.text_bite") }) })] })] }) }), _jsx("div", { className: "my-5 py-5", children: _jsx(ParallaxComponent, { image: bite2 }) }), _jsxs("div", { className: "container", children: [_jsx("div", { className: "row justify-content-center", children: _jsx("div", { className: "col-lg-3 ", children: _jsx("img", { src: megaLogo, className: "img-fluid" }) }) }), _jsxs("div", { className: "row justify-content-center align-items-center mb-5 pb-5", children: [_jsx("div", { className: "col-lg-6", children: _jsx("img", { src: mega2, className: "img-fluid" }) }), _jsx("div", { className: "col-lg-5", children: _jsxs("p", { className: "my-5 fs-25 text-end", children: [t("ux_ui_design.text_mega"), " ", _jsx("br", {}), _jsx("br", {}), t("ux_ui_design.text_mega_2")] }) })] })] }), _jsx(ParallaxComponent, { image: mega }), _jsx("div", { className: "row justify-content-center", children: _jsx("div", { className: "col-lg-9", children: _jsx("p", { className: "text-center fs-25", children: t("ux_ui_design.text_2") }) }) }), _jsx(ContactForm, { page: "ux-ui", color: "black", button: "social-media-btn" })] }));
};
export default Design;
