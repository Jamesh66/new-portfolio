//Import styling
import { StyledServices } from "../styles";
//Framer motion
import { pageAnimation } from "../Animation";
//Page components
import ContactSection from "../components/ContactSection";
const contactSection = () => {
  return (
    <StyledServices
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ContactSection />
    </StyledServices>
  );
};

export default contactSection;
