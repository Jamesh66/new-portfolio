//Import icons
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";
//Import styling
import styled from "styled-components";
import {
  StyledAbout,
  StyledServices,
  StyledDescription,
  StyledContainer,
} from "../styles";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";
//Import Material ui Compoents
import { TextField } from "@material-ui/core/";
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
                    <a href="https://www.linkedin.com/in/james-harrold-33446014b/">
                      LinkedIn
                    </a>
                  </h4>
                </div>
              </li>
            </ul>
          </div>

          <StyledForm action="" autoComplete="off">
            <h3>Or give my form a try...</h3>
            <TextField
              className="TextField"
              variant="outlined"
              type="Text"
              label="Name"
              placeholder="Name"
              color="secondary"
              color="#23d997"
            />
            <TextField
              className="TextField"
              variant="outlined"
              type="email"
              label="Email"
              placeholder="name@email.com"
              color="#23d997"
            />
            <TextField
              className="TextArea"
              variant="outlined"
              type="Text"
              multiline
              rowsMax={6}
              label="Message"
              placeholder="Message"
              color="#23d997"
            />
            <button>Submit</button>
          </StyledForm>
        </StyledContact>
      </StyledDescription>
    </StyledServices>
  );
};

//Styled components

const StyledContact = styled(StyledContainer)`
  flex: wrap;
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
  h3 {
    font-size: 30px;
    padding-bottom: 1.5rem;
  }
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  justify-content: space-between;
  .TextField {
    width: 49%;
    margin-bottom: 2%;
    background-color: #121212;
    color: white;
  }
  .TextArea {
    width: 100%;
    margin-bottom: 4%;
    background-color: #121212;
    color: white;
  }
`;

export default contactSection;
