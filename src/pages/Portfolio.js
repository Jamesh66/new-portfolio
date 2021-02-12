//Import screenshots
import pomodoro from "../img/pomodoro.png";
import maths from "../img/maths.png";
//Styles
import {
  StyledServices,
  StyledDescription,
  StyledContainer,
  StyledCard,
  StyledCardHeader,
  StyledCardBody,
} from "../styles";
//Import icons
import { FaGithub, FaDesktop } from "react-icons/fa";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, container, item } from "../Animation";
//Import components
import Card from "../components/Card";

const PortfolioSection = () => {

  return (
    <StyledServices>
      <StyledDescription
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <h2>
          My <span>Portfolio</span>
        </h2>
        <StyledContainer
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <div className="background"></div>
          <Card/>
          <div className="background"></div>
          <Card />
        </StyledContainer>
      </StyledDescription>
    </StyledServices>
  );
};

export default PortfolioSection;
