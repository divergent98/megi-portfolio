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
import ArtvanturistaImg from "../../assets/Artvanturista.png";
import ArtvanturistaMobile from "../../assets/2222.jpg";
import leaf from "../../assets/leaf.png";
import artist from "../../assets/artist.png";
import one from "../../assets/1.png";
import two from "../../assets/2.png";
import three from "../../assets/3.png";
import four from "../../assets/4.png";
import five from "../../assets/5.png";
import six from "../../assets/6.png";
import seven from "../../assets/7.png";
import eight from "../../assets/8.png";
import nine from "../../assets/9.png";
import ten from "../../assets/10.png";
import eleven from "../../assets/11.png";
import twelve from "../../assets/12.png";
import { Modal, ModalBody } from "reactstrap";
import ContactForm from "../Components/ContactForm";
import { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useTranslation } from "react-i18next";
var Artvanturista = function () {
    var carouselOptions = {
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        responsive: {
            0: { items: 1 },
        },
    };
    var _a = useState(false), isOpenOne = _a[0], setIsOpenOne = _a[1];
    var toggleModalOne = function () { return setIsOpenOne(!isOpenOne); };
    var _b = useState(false), isOpenTwo = _b[0], setIsOpenTwo = _b[1];
    var toggleModalTwo = function () { return setIsOpenTwo(!isOpenTwo); };
    var _c = useState(false), isOpenThree = _c[0], setIsOpenThree = _c[1];
    var toggleModalThree = function () { return setIsOpenThree(!isOpenThree); };
    var _d = useState(false), isOpenFour = _d[0], setIsOpenFour = _d[1];
    var toggleModalFour = function () { return setIsOpenFour(!isOpenFour); };
    var _e = useState(false), isOpenFive = _e[0], setIsOpenFive = _e[1];
    var toggleModalFive = function () { return setIsOpenFive(!isOpenFive); };
    var _f = useState(false), isOpenSix = _f[0], setIsOpenSix = _f[1];
    var toggleModalSix = function () { return setIsOpenSix(!isOpenSix); };
    var _g = useState(false), isOpenSeven = _g[0], setIsOpenSeven = _g[1];
    var toggleModalSeven = function () { return setIsOpenSeven(!isOpenSeven); };
    var _h = useState(false), isOpenEight = _h[0], setIsOpenEight = _h[1];
    var toggleModalEight = function () { return setIsOpenEight(!isOpenEight); };
    var _j = useState(false), isOpenNine = _j[0], setIsOpenNine = _j[1];
    var toggleModalNine = function () { return setIsOpenNine(!isOpenNine); };
    var _k = useState(false), isOpenTen = _k[0], setIsOpenTen = _k[1];
    var toggleModalTen = function () { return setIsOpenTen(!isOpenTen); };
    var _l = useState(false), isOpenEleven = _l[0], setIsOpenEleven = _l[1];
    var toggleModalEleven = function () { return setIsOpenEleven(!isOpenEleven); };
    var _m = useState(false), isOpenTwelve = _m[0], setIsOpenTwelve = _m[1];
    var toggleModalTwelve = function () { return setIsOpenTwelve(!isOpenTwelve); };
    var t = useTranslation().t;
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "hero-section d-none d-lg-block", style: {
                    backgroundImage: "url(".concat(ArtvanturistaImg, ")"),
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }, children: [_jsx(Navbar, { logo: "artvanturistaLogo" }), _jsx("div", { className: "container", children: _jsx("div", { className: "row justify-content-end align-items-center", children: _jsxs("div", { className: "col-md-8 text-center", children: [_jsx("h1", { className: "my-5 pt-5 fw-43 fw-bold", children: "ARTVANTURISTA" }), _jsx("p", { className: "fs-28 fs-mb-14", children: t("artvanturista.text") })] }) }) })] }), _jsxs("div", { className: "hero-section d-block d-lg-none", style: {
                    backgroundImage: "url(".concat(ArtvanturistaMobile, ")"),
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }, children: [_jsx(Navbar, { logo: "artvanturistaLogo" }), _jsx("div", { className: "container", children: _jsxs("div", { className: "row", children: [_jsxs("div", { className: "col-12 text-center", children: [_jsx("h1", { className: "fw-43 fw-bold", children: "ARTVANTURISTA" }), _jsxs("p", { className: "fs-28", children: [t("artvanturista.text"), "               "] })] }), _jsx("div", { className: "spacer" }), _jsxs("div", { className: "col-12", children: [_jsxs("h2", { className: " fs-26 fw-bold text-end mb-5 me-4", children: [t("artvanturista.title_1"), "  ", _jsx("br", {}), " ", t("artvanturista.title_2")] }), _jsx("p", { className: "fs-mb-18 text-end me-4", children: t("artvanturista.text_2") })] })] }) })] }), _jsx("div", { className: "container-fluid d-none d-md-block ", children: _jsxs("div", { className: "row background-beidge align-items-center py-5", children: [_jsx("div", { className: "col-md-5", children: _jsx("img", { src: leaf, className: "img-fluid", alt: "leaf" }) }), _jsxs("div", { className: "col-md-6", children: [_jsxs("h2", { className: "my-5 fs-43 fw-bold", children: [t("artvanturista.title_1"), "  ", _jsx("br", {}), " ", t("artvanturista.title_2")] }), _jsx("p", { className: "fs-28", children: t("artvanturista.text_2") })] })] }) }), _jsx("div", { className: "container-fluid ", children: _jsxs("div", { className: "row background-gray justify-content-center align-items-center py-5", children: [_jsx("div", { className: "col-10 col-md-4 fs-28  fw-bold text-center order-2 order-md-1", children: _jsx("p", { children: t("artvanturista.text_3") }) }), _jsx("div", { className: "col-10 col-md-5 order-1 order-md-2", children: _jsx("img", { src: artist, className: "img-fluid", alt: "artist" }) })] }) }), _jsxs("div", { className: "container-fluid  background-beidge py-5 d-none d-md-block", children: [_jsxs("div", { className: "row justify-content-center", children: [_jsxs("div", { className: "col-3", children: [" ", _jsx("img", { src: one, className: "img-fluid", alt: "one", onClick: toggleModalOne, style: { cursor: "pointer" } })] }), _jsx("div", { className: "col-3 p-5", children: _jsx("img", { src: two, className: "img-fluid", alt: "two", onClick: toggleModalTwo, style: { cursor: "pointer" } }) }), _jsx("div", { className: "col-3", children: _jsx("img", { src: three, className: "img-fluid", alt: "three", onClick: toggleModalThree, style: { cursor: "pointer" } }) })] }), _jsxs("div", { className: "row justify-content-center", children: [_jsx("div", { className: "col-3 p-5", children: _jsx("img", { src: four, className: "img-fluid", alt: "four", onClick: toggleModalFour, style: { cursor: "pointer" } }) }), _jsx("div", { className: "col-3 custom-5", children: _jsx("img", { src: five, className: "img-fluid", alt: "five", onClick: toggleModalFive, style: { cursor: "pointer" } }) }), _jsx("div", { className: "col-3 custom-6", children: _jsx("img", { src: six, className: "img-fluid", alt: "six", onClick: toggleModalSix, style: { cursor: "pointer" } }) })] }), _jsxs("div", { className: "row justify-content-center", children: [_jsx("div", { className: "col-3 custom-7", children: _jsx("img", { src: seven, className: "img-fluid", alt: "seven", onClick: toggleModalSeven, style: { cursor: "pointer" } }) }), _jsx("div", { className: "col-3 custom-8", children: _jsx("img", { src: eight, className: "img-fluid", alt: "eight", onClick: toggleModalEight, style: { cursor: "pointer" } }) }), _jsx("div", { className: "col-3 custom-9", children: _jsx("img", { src: nine, className: "img-fluid", alt: "nine", onClick: toggleModalNine, style: { cursor: "pointer" } }) })] }), _jsxs("div", { className: "row justify-content-center", children: [_jsx("div", { className: "col-2 custom-10", children: _jsx("img", { src: ten, className: "img-fluid", alt: "ten", onClick: toggleModalTen, style: { cursor: "pointer" } }) }), _jsx("div", { className: "col-4 custom-11", children: _jsx("img", { src: eleven, className: "img-fluid", alt: "eleven", onClick: toggleModalEleven, style: { cursor: "pointer" } }) }), _jsx("div", { className: "col-3 custom-12", children: _jsx("img", { src: twelve, className: "img-fluid", alt: "twelve", onClick: toggleModalTwelve, style: { cursor: "pointer" } }) })] })] }), _jsx("div", { className: "d-block d-md-none my-5", children: _jsxs(OwlCarousel, __assign({ className: "owl-theme" }, carouselOptions, { children: [_jsx("div", { children: _jsx("img", { src: one, className: "img-fluid", alt: "one", onClick: toggleModalOne, style: { cursor: "pointer" } }) }), _jsx("div", { children: _jsx("img", { src: two, className: "img-fluid", alt: "two", onClick: toggleModalTwo, style: { cursor: "pointer" } }) }), _jsx("div", { children: _jsx("img", { src: three, className: "img-fluid", alt: "three", onClick: toggleModalThree, style: { cursor: "pointer" } }) })] })) }), _jsx(ContactForm, { page: "artvanturista", background: "background-beidge", color: "black", button: "artvanturista-btn" }), _jsxs("div", { children: [_jsx(Modal, { isOpen: isOpenOne, toggle: toggleModalOne, centered: true, children: _jsx(ModalBody, { className: "ps-4", children: _jsx("img", { src: one, className: "img-fluid scale", width: "100%", height: "auto", alt: "Full Image" }) }) }), _jsx(Modal, { isOpen: isOpenTwo, toggle: toggleModalTwo, centered: true, children: _jsx(ModalBody, { className: "ps-4", children: _jsx("img", { src: two, className: "img-fluid scale", width: "100%", height: "auto", alt: "Full Image" }) }) }), _jsx(Modal, { isOpen: isOpenThree, toggle: toggleModalThree, centered: true, children: _jsx(ModalBody, { className: "ps-4", children: _jsx("img", { src: three, className: "img-fluid scale", width: "100%", height: "auto", alt: "Full Image" }) }) }), _jsx(Modal, { isOpen: isOpenFour, toggle: toggleModalFour, centered: true, children: _jsx(ModalBody, { className: "ps-4", children: _jsx("img", { src: four, className: "img-fluid scale", width: "100%", height: "auto", alt: "Full Image" }) }) }), _jsx(Modal, { isOpen: isOpenFive, toggle: toggleModalFive, centered: true, children: _jsx(ModalBody, { className: "ps-4", children: _jsx("img", { src: five, className: "img-fluid scale", width: "100%", height: "auto", alt: "Full Image" }) }) }), _jsx(Modal, { isOpen: isOpenSix, toggle: toggleModalSix, centered: true, children: _jsx(ModalBody, { className: "ps-4", children: _jsx("img", { src: six, className: "img-fluid scale", width: "100%", height: "auto", alt: "Full Image" }) }) }), _jsx(Modal, { isOpen: isOpenSeven, toggle: toggleModalSeven, centered: true, children: _jsx(ModalBody, { className: "ps-4", children: _jsx("img", { src: seven, className: "img-fluid scale", width: "100%", height: "auto", alt: "Full Image" }) }) }), _jsx(Modal, { isOpen: isOpenEight, toggle: toggleModalEight, centered: true, children: _jsx(ModalBody, { className: "ps-4", children: _jsx("img", { src: eight, className: "img-fluid scale", width: "100%", height: "auto", alt: "Full Image" }) }) }), _jsx(Modal, { isOpen: isOpenNine, toggle: toggleModalNine, centered: true, children: _jsx(ModalBody, { className: "ps-4", children: _jsx("img", { src: nine, className: "img-fluid scale", width: "100%", height: "auto", alt: "Full Image" }) }) }), _jsx(Modal, { isOpen: isOpenTen, toggle: toggleModalTen, centered: true, children: _jsx(ModalBody, { className: "ps-4", children: _jsx("img", { src: ten, className: "img-fluid scale-2", width: "100%", height: "auto", alt: "Full Image" }) }) }), _jsx(Modal, { isOpen: isOpenEleven, toggle: toggleModalEleven, centered: true, children: _jsx(ModalBody, { className: "ps-4", children: _jsx("img", { src: eleven, className: "img-fluid scale", width: "100%", height: "auto", alt: "Full Image" }) }) }), _jsx(Modal, { isOpen: isOpenTwelve, toggle: toggleModalTwelve, centered: true, children: _jsx(ModalBody, { className: "ps-4", children: _jsx("img", { src: twelve, className: "img-fluid scale", width: "100%", height: "auto", alt: "Full Image" }) }) })] })] }));
};
export default Artvanturista;
