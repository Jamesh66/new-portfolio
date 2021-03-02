//Styled
import { StyledAbout, StyledDescription, StyledHide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade } from "../Animation";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div>
          <StyledHide>
            <motion.h2 variants={titleAnim}>
              Hi!
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>
              I'm <span>James</span>
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.p variants={fade}>
              I'm currerntly on the hunt for a position as a Junior Front end
              developer. I have a host of skills including JaveScript ES6 and I
              have created some React applications including this portfilio.
              When I'm not creating awesome webistes I have a passion for
              Cycling and Vintage Cars.
            </motion.p>
            <motion.button variants={fade}>MY C.V.</motion.button>
          </StyledHide>
        </motion.div>
      </StyledDescription>
    </StyledAbout>
  );
};

export default AboutSection;
