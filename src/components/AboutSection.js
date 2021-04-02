//Styled
import styled from "styled-components";
import { StyledAbout, StyledDescription, StyledHide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade } from "../Animation";
//import icons
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJs,
  FaBootstrap,
  FaReact,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div>
          <StyledHide>
            <motion.h2 variants={titleAnim}>Hi!</motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>
              I&apos;m <span>James</span>
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.p variants={titleAnim}>
              I&apos;m currently on the hunt for a position as a Junior Front
              End Developer. I&apos;m a self taught developer with a whole host
              of skills including HTML 5, CSS, JavaScript and React. I&apos;ve
              used this skillset to create a variety of projects, which can be
              found in{" "}
              <span>
                <Link to="/portfolio">My Portfolio</Link>
              </span>
              .
            </motion.p>
          </StyledHide>
          <StyledHide>
            <motion.p variants={titleAnim}>
              I love development because I&apos;m a problem solver and for me,
              nothing beats the satisfaction of creating a new app or solving a
              troublesome bug. I also love learning and I feel in the fast paced
              tech world, the learning never stops.
            </motion.p>
          </StyledHide>
          <StyledHide>
            <motion.p variants={titleAnim}>
              I&apos;m also a big fan of cycling, vintage cars and good food.
              Want to know more? Head to the{" "}
              <Link to="/contact">
                <span>Contact Me</span>
              </Link>{" "}
              page to get in touch.
            </motion.p>
          </StyledHide>
          <StyledIcons variants={fade}>
            <ul>
              <li>
                <FaHtml5 color="#DD4B2B" />
              </li>
              <li>
                <FaCss3Alt color="#254BDD" />
              </li>
              <li>
                <FaSass color="#C76494" />
              </li>
              <li>
                <FaJs color="#EFD830" />
              </li>
              <li>
                <FaBootstrap color="#533B78" />
              </li>
              <li>
                <FaReact color="#5ED3F3" />
              </li>
              <li>
                <FaGithub />
              </li>
            </ul>
          </StyledIcons>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1o4zNG4Za7mF92aF8u7tsFXv_AW64CfR9/view?usp=sharing"
          >
            <motion.button variants={fade}>MY C.V.</motion.button>
          </a>
        </motion.div>
      </StyledDescription>
    </StyledAbout>
  );
};

export const StyledIcons = styled(motion.div)`
  ul {
    padding: 2rem 5rem 0.5rem 5rem;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    font-size: 50px;
    justify-content: space-evenly;
  }
`;

export default AboutSection;
