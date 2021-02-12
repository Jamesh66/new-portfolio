//Page compontents
import AboutSection from "../components/AboutSection";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const AboutUs = () => {
  return (
    <>
      <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
        <AboutSection />
      </motion.div>
    </>
  );
};

export default AboutUs;
