//Styles
import { StyledServices, StyledDescription, StyledContainer } from "../styles";
//Animations
import { pageAnimation, container } from "../Animation";
//Import components
import Cards from "../components/CardGrid";

const PortfolioSection = ({ cardInfo }) => {
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
        <Cards cardInfo={cardInfo} />
      </StyledDescription>
    </StyledServices>
  );
};

export default PortfolioSection;
