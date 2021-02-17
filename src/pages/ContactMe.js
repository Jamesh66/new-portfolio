//Import icons
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";
//Import styling
import styled from "styled-components";
import { StyledServices, StyledDescription, StyledContainer } from "../styles";
//Animations
import { pageAnimation } from "../Animation";

const contactSection = () => {
  return (
    <StyledServices>
      <StyledDescription
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <h2>
          <span>Contact </span>Me
        </h2>
        <StyledContact>
          <div className="contact-info-container">
            <ul className="details">
              <li className="phone">
                <div className="icon">
                  <h4>
                    <i>
                      <FaPhoneAlt color="#66DA97" />
                    </i>
                    07849565664
                  </h4>
                </div>
              </li>
              <li className="email">
                <div className="icon">
                  <h4>
                    <i>
                      <FaEnvelope color="#49408C" />
                    </i>
                    james.harrold95@gmail.com
                  </h4>
                </div>
              </li>
              <li className="linkedin">
                <div className="icon">
                  <h4>
                    <i>
                      <FaLinkedin color="#0B66C2" />
                    </i>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/james-harrold-33446014b/"
                    >
                      LinkedIn
                    </a>
                  </h4>
                </div>
              </li>
            </ul>
          </div>

          <StyledForm action="" autoComplete="off">
            <h3>Or give my form a try...</h3>
            <StyledTextField type="text" placeholder="Name"></StyledTextField>
            <StyledTextField type="email" placeholder="Email"></StyledTextField>
            <StyledTextArea type="text" placeholder="Message"></StyledTextArea>
            <button>Submit</button>
          </StyledForm>
        </StyledContact>
      </StyledDescription>
    </StyledServices>
  );
};

//Styled components

const StyledContact = styled(StyledContainer)`
  padding-top: 4rem;
  padding-bottom: 10rem;
  h2 {
    position: relative;
  }
  h4 {
    font-size: 18px;
    color: #fefefe;
    line-height: 3rem;
    font-weight: 300;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    font-size: 18px;
    color: #fefefe;
    margin: auto;
    font-weight: ligher;
  }
  i {
    position: relative;
    top: 5px;
    display: inline-block;
    margin-right: 1em;
    font-size: 22px;
  }
  .contact-info-container {
    padding-top: 3rem;
  }
`;

const StyledForm = styled.form`
  position: relative;
  h3 {
    font-size: 30px;
    padding-bottom: 1.5rem;
    width: 100%;
  }
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  font: inherit;
`;

const StyledTextField = styled.input`
  background: #121212;
  padding: 10px 15px;
  outline: none;
  border: 0;
  width: 49%;
  margin-bottom: 2%;
  color: white;
  font-size: 18px;
`;

const StyledTextArea = styled.textarea`
  background: #121212;
  padding: 10px 15px;
  outline: none;
  border: 0;
  width: 100%;
  height: 25vh;
  margin-bottom: 4%;
  color: white;
  padding: 10px 15px;
  font-size: 18px !important;
  font: inherit;
`;

export default contactSection;
