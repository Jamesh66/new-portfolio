import React from "react";
//Import styles
import { StyledCard, StyledCardHeader, StyledCardBody } from "../../styles";
//Import icons
import { FaGithub, FaDesktop, FaYoutube } from "react-icons/fa";
//Import Animation
import { fade } from "../../Animation";

const CardItem = ({ item }) => {
  return (
    <div>
      <StyledCard whileHover={{ scale: 1.08 }} variants={fade}>
        <StyledCardHeader>
          <a target="_blank" rel="noreferrer" href={item.LiveLink}>
            <img src={item.img} alt="Screengrab" />
          </a>
        </StyledCardHeader>
        <StyledCardBody>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <div className="user">
            <div className="links">
              <h5>
                <a target="_blank" rel="noreferrer" href={item.GitLink}>
                  <i>{item.GitIcon}</i>
                  GitHub
                </a>
              </h5>
              <h5>
                <a target="_blank" rel="noreferrer" href={item.LiveLink}>
                  <i>{item.LiveIcon}</i>
                  {item.LinkInfo}
                </a>
              </h5>
            </div>
          </div>
        </StyledCardBody>
      </StyledCard>
    </div>
  );
};

export default CardItem;
