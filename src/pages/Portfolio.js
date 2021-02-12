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
          <div className="background">
            <StyledCard
              whileHover={{ scale: 1.08 }}
              variants={item}
              initial="hidden"
              animate="show"
            >
              <StyledCardHeader>
                <img src={pomodoro} alt="Pomodoro Screen Grab" />
              </StyledCardHeader>
              <StyledCardBody>
                <h3>Pomodoro Timer</h3>
                <p>
                  A web app that provides a countdown timer to help the user
                  increase their focus over a specified period. A bell sound is
                  played once the timer is finished and a notification is
                  displayed on the screen. Made with Vanilla JavaScript.
                </p>
                <div className="user">
                  <div className="links">
                    <h5>
                      <a href="#">
                        <i>
                          <FaGithub color="#66DA97" />
                        </i>
                        GitHub
                      </a>
                    </h5>
                    <h5>
                      <a href="https://pomodorobyjames.com/">
                        <i>
                          <FaDesktop color="#49408C" />
                        </i>
                        Visit The Site
                      </a>
                    </h5>
                  </div>
                </div>
              </StyledCardBody>
            </StyledCard>
          </div>
          <div className="background">
            <StyledCard
              whileHover={{ scale: 1.08 }}
              variants={item}
              initial="hidden"
              animate="show"
            >
              <StyledCardHeader>
                <img src={maths} alt="Mr Carter Maths Screen Grab" />
              </StyledCardHeader>
              <StyledCardBody>
                <h3>Mr Carter Maths</h3>
                <p>
                  A landing page I created for a family member using
                  Materialize, the design was based on an existing design but
                  modernized to create a more user firendly experiance while
                  retaining brand identiy to keep conintity with other sites
                  within the brand.
                </p>
                <div className="user">
                  <div className="links">
                    <h5 className="link-item">
                      <a href="#">
                        <i>
                          <FaGithub color="#66DA97" />
                        </i>
                        GitHub
                      </a>
                    </h5>
                    <h5 className="link-item">
                      <a href="#">
                        <i>
                          <FaDesktop color="#49408C" />
                        </i>
                        Visit The Site
                      </a>
                    </h5>
                  </div>
                </div>
              </StyledCardBody>
            </StyledCard>
          </div>
        </StyledContainer>
      </StyledDescription>
    </StyledServices>
  );
};

export default PortfolioSection;
