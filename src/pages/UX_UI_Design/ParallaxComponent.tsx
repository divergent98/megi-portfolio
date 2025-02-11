import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

type ParallaxProps = {
  image: string;
};

const ParallaxComponent: React.FC<ParallaxProps> = ({ image }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -100]);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      style={{
        y,
        backgroundImage: `url(${image})`,
        height: isSmallScreen ? "50vh" : "100vh", // Dynamic height based on screen size
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></motion.div>
  );
};

export default ParallaxComponent;
