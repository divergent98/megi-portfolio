import { jsx as _jsx } from "react/jsx-runtime";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
var ParallaxComponent = function (_a) {
    var image = _a.image;
    var scrollY = useScroll().scrollY;
    var y = useTransform(scrollY, [0, 300], [0, -100]);
    var _b = useState(false), isSmallScreen = _b[0], setIsSmallScreen = _b[1];
    useEffect(function () {
        var handleResize = function () {
            setIsSmallScreen(window.innerWidth <= 768); // Adjust breakpoint as needed
        };
        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return function () {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (_jsx(motion.div, { style: {
            y: y,
            backgroundImage: "url(".concat(image, ")"),
            height: isSmallScreen ? "50vh" : "100vh", // Dynamic height based on screen size
            backgroundSize: "cover",
            backgroundPosition: "center",
        } }));
};
export default ParallaxComponent;
