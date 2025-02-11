var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Navbar from "../../Components/Navbar";
import earth from "../../assets/earth.png";
import earthmobile from "../../assets/earth-mobile-01.png";
import verse2 from "../../assets/verse-2.png";
import verse3 from "../../assets/verse-3.png";
import verse4 from "../../assets/verse-4.png";
import verse5 from "../../assets/verse-5.png";
import verse7 from "../../assets/verse-7.png";
import verse8 from "../../assets/verse-8.png";
import verse10 from "../../assets/verse-10.png";
import ContactForm from "../Components/ContactForm";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from 'react-owl-carousel';
import { useTranslation } from "react-i18next";
var Megiverse = function () {
    var slides = [
        //   { id: 1, image: `${verse1}`, title: "" },
        { id: 2, image: "".concat(verse2), title: "" },
        { id: 3, image: "".concat(verse3), title: "" },
        { id: 4, image: "".concat(verse4), title: "" },
        { id: 5, image: "".concat(verse5), title: "Soltitude, 2021" },
        //  { id: 6, image: `${verse6}`, title: "" },
        { id: 7, image: "".concat(verse7), title: "Lake 2022" },
        { id: 8, image: "".concat(verse8), title: "Universal music" },
        // { id: 9, image: `${verse9}`, title: "" },
        { id: 10, image: "".concat(verse10), title: "Digital Chemistry" },
    ];
    var options = {
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        center: true,
        responsive: {
            0: {
                items: 1, // Show 1 slide on mobile
            },
            768: {
                items: 3, // Show 3 slides on tablets and larger screens
            },
        },
    };
    var t = useTranslation().t;
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "container-fluid p-0 overflow-hidden night-sky-background", children: [_jsx(Navbar, { logo: "meggiverseLogo", color: "text-white" }), _jsx("div", { className: "my-5" }), _jsx("div", { className: "row megiverse-hero", children: _jsxs("div", { className: "maggiverse-hero", children: [_jsx("h5", { children: t("megiverse.welcome") }), _jsx("h1", { children: "MAGGIVERSE" })] }) }), _jsxs("div", { className: "maggiverse-body", children: [_jsxs("div", { className: "row align-items-lg-center", children: [_jsxs("div", { className: "col-4 col-lg-6 ", children: [_jsx("img", { src: earth, className: "img-fluid d-none d-md-block" }), _jsx("img", { src: earthmobile, className: "img-fluid d-block d-md-none" })] }), _jsx("div", { className: "col-8 col-lg-6 d-lg-flex", children: _jsx("p", { className: "fs-25 mx-lg-5 me-2 mt-3 pe-lg-5 text-lg-end text-white", children: t("megiverse.welcome_text") }) })] }), _jsx("div", { className: "row planet-background align-items-lg-center", children: _jsxs("div", { className: "col-8", children: [" ", _jsxs("p", { className: "fs-25 mx-lg-5 custom-meggiverse-p pe-lg-5 text-start text-white", children: [t("megiverse.text_2"), " ", _jsx("br", {}), _jsx("br", {}), t("megiverse.text_3")] })] }) })] }), _jsxs("div", { children: [_jsx("h1", { className: "maggiverse-h2", children: t("megiverse.illustrations") }), _jsx("div", { className: "row justify-content-center", children: _jsx("div", { className: "col-10", children: _jsx(OwlCarousel, __assign({ className: "owl-theme my-5" }, options, { children: slides.map(function (slide) { return (_jsxs("div", { className: "item", children: [_jsx("div", { className: "rounded-5 d-flex flex-column justify-content-center carousel-bg-color m", children: _jsx("img", { src: slide.image, alt: "Slide ".concat(slide.id), className: "img-fluid text-center " }) }), _jsx("h1", { className: "mb-2 p-1 text-center text-white fs-25 fw-bold", children: slide.title })] }, slide.id)); }) })) }) })] }), _jsx(ContactForm, { page: "maggiverse", color: "white", button: "maggiverse-btn", customInput: "meggiverse-input-field overflow-hidden" })] }) }));
};
export default Megiverse;
