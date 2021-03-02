//Styles
import { StyledServices, StyledDescription, StyledHide } from "../styles";
//Animations
import { pageAnimation, titleAnim } from "../Animation";
import { motion } from "framer-motion";
//Import components
import Cards from "../components/Cards/CardGrid";

const PortfolioSection = ({ cardInfo }) => {
  return (
    <StyledServices
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      beforechildren
    >
      <StyledDescription>
        <StyledHide>
          <motion.h2 variants={titleAnim}>
            My <span>Portfolio</span>
          </motion.h2>
        </StyledHide>
        <Cards cardInfo={cardInfo} />
      </StyledDescription>
    </StyledServices>
  );
};

export default PortfolioSection;
