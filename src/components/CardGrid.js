//Import screenshots
import pomodoro from "../img/pomodoro.png";
import maths from "../img/maths.png";
//Import styles
import { StyledCard, StyledCardHeader, StyledCardBody } from "../styles";
//Import icons
import { FaGithub, FaDesktop } from "react-icons/fa";
//Import components
import CardItem from "./CardItem";

const Cards = ({ cardInfo }) => {
  return (
    <div>
      <div>
        {cardInfo.map((item) => (
          <>
            <CardItem key={item.id} item={item}></CardItem>
            <img src={item.image} alt="" />
          </>
        ))}
      </div>

      <StyledCard whileHover={{ scale: 1.08 }}>
        <StyledCardHeader>
          <img src={pomodoro} alt="Pomodoro Screen Grab" />
        </StyledCardHeader>
        <StyledCardBody>
          <h3>Pomodoro Timer</h3>
          <p>
            A web app that provides a countdown timer to help the user increase
            their focus over a specified period. A bell sound is played once the
            timer is finished and a notification is displayed on the screen.
            Made with Vanilla JavaScript.
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
  );
};

export default Cards;
