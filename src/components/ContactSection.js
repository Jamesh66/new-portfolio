//Import icons
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";
//Import styling
import styled from "styled-components";
import { StyledContainer, StyledHide } from "../styles";
//Framer motion
import { motion } from "framer-motion";
import { titleAnim, fade } from "../Animation";

const ContactSection = () => {
  return (
    <div>
      <StyledHide>
        <motion.h2 variants={titleAnim}>
          <span>Contact </span>Me
        </motion.h2>
      </StyledHide>
      <StyledContact variants={fade}>
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
                  <a href="mailto: james.harrold95@gmail.com">
                    james.harrold95@gmail.com
                  </a>
                </h4>
              </div>
            </li>
            <li className="linkedin">
              <div className="icon">
                <h4>
                  <i>
                    <FaLinkedin color="#34A1F2" />
                  </i>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/james-harrold-33446014b/"
                  >
                    LinkedIn
                  </a>
                </h4>
              </div>
            </li>
          </ul>
        </div>

        <StyledForm
          name="contact v1"
          method="post"
          data-netlify="true"
          onSubmit="submit"
          variants={fade}
        >
          <h3>Or give my form a try...</h3>
          <input type="hidden" name="form-name" value="contact v1" />
          <StyledTextField
            name="name"
            type="text"
            placeholder="Name"
          ></StyledTextField>
          <StyledTextField
            id="email"
            name="email"
            type="email"
            placeholder="Email"
          ></StyledTextField>
          <StyledTextArea
            spellcheck="true"
            name="message"
            type="text"
            placeholder="Message"
          ></StyledTextArea>
          <div data-netlify-recaptcha="true"></div>
          <button type="submit">Submit</button>
        </StyledForm>
      </StyledContact>
    </div>
  );
};

export default ContactSection;

//Styled components
const StyledContact = styled(StyledContainer)`
  padding-top: 4rem;
  padding-bottom: 10rem;
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
  @media (max-width: 750px) {
    padding-top: 0;
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
  @media (max-width: 750px) {
    padding-top: 1rem;
  } ;
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
