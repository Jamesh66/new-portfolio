//Styles
import { StyledServices, StyledDescription } from "../styles";
//Animations
import { pageAnimation } from "../Animation";
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
        <motion.h2>
          My <span>Portfolio</span>
        </motion.h2>
        <Cards cardInfo={cardInfo} />
      </StyledDescription>
    </StyledServices>
  );
};

export default PortfolioSection;
