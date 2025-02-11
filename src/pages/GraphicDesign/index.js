import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Navbar from '../../Components/Navbar';
import graphicDesign from '../../assets/graphic-design.png';
import FirstTab from './FirstTab';
import SecondTab from './SecondTab';
import ThirdTab from './ThirdTab';
import FourthTab from './FourthTab';
import pen from '../../assets/pen.png';
import ContactForm from '../Components/ContactForm';
import { useTranslation } from 'react-i18next';
var GraphicDesign = function () {
    var _a = useState('tab1'), activeTab = _a[0], setActiveTab = _a[1];
    var t = useTranslation().t;
    var renderTabContent = function () {
        switch (activeTab) {
            case 'tab1':
                return _jsx(FirstTab, {});
            case 'tab2':
                return _jsx(SecondTab, {});
            case 'tab3':
                return _jsx(ThirdTab, {});
            case 'tab4':
                return _jsx(FourthTab, {});
            default:
                return null;
        }
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "hero-section", style: {
                    backgroundColor: "#fff8f0",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }, children: [_jsx(Navbar, {}), _jsx("div", { className: "container pt-lg-5", children: _jsxs("div", { className: "row align-items-center justify-content-center pt-lg-5", children: [_jsxs("div", { className: "col-md-5", children: [_jsx("h1", { className: "text-center text-lg-start mt-lg-5 mb-5 pt-lg-5 fw-43 fw-bold", children: t("graphic_design.title") }), _jsx("p", { className: "text-center text-lg-start fs-25 pe-lg-5", children: t("graphic_design.text") })] }), _jsx("div", { className: "col-9 mt-5 mt-lg-5 col-md-6 ps-5", children: _jsx("img", { src: graphicDesign, className: 'img-fluid', alt: "Graphic Design" }) })] }) })] }), _jsxs("div", { className: "container mt-5", children: [_jsx("h1", { className: "my-5 pt-5 fs-64 fw-bold text-center", children: "PORTFOLIO" }), _jsx("div", { className: "tabs-container", children: _jsxs("ul", { className: "custom-tabs", children: [_jsx("li", { className: "custom-tab ".concat(activeTab === 'tab1' ? 'active' : ''), onClick: function () { return setActiveTab('tab1'); }, children: "LOGO" }), _jsx("li", { className: "custom-tab ".concat(activeTab === 'tab2' ? 'active' : ''), onClick: function () { return setActiveTab('tab2'); }, children: t("graphic_design.business_card") }), _jsx("li", { className: "custom-tab ".concat(activeTab === 'tab3' ? 'active' : ''), onClick: function () { return setActiveTab('tab3'); }, children: "CV" }), _jsx("li", { className: "custom-tab ".concat(activeTab === 'tab4' ? 'active' : ''), onClick: function () { return setActiveTab('tab4'); }, children: "PRINT" })] }) }), _jsx("div", { className: "tab-content mt-4", children: renderTabContent() })] }), _jsx("div", { className: 'container-fluid', children: _jsxs("div", { className: 'row d-flex flex-row align-items-center py-lg-5', children: [_jsx("div", { className: 'col-6', children: _jsx("img", { src: pen, className: 'img-fluid' }) }), _jsx("div", { className: 'col-5', children: _jsxs("p", { className: 'fs-28 text-center mt-3', children: ["   ", t("graphic_design.text_2")] }) })] }) }), _jsx(ContactForm, { page: "graphic", color: "black", button: "graphic-btn" })] }));
};
export default GraphicDesign;
