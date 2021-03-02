import React from "react";
//Import styles
import { StyledCard, StyledCardHeader, StyledCardBody } from "../../styles";
//Import icons
import { FaGithub, FaDesktop } from "react-icons/fa";
//Import Animation
import { fade } from "../../Animation";

const CardItem = ({ item }) => {
  return (
    <div>
      <StyledCard whileHover={{ scale: 1.08 }} variants={fade}>
        <StyledCardHeader>
          <img src={item.img} alt="Screengrab" />
        </StyledCardHeader>
        <StyledCardBody>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <div className="user">
            <div className="links">
              <h5>
                <a target="_blank" rel="noreferrer" href={item.GitLink}>
                  <i>
                    <FaGithub color="#66DA97" />
                  </i>
                  GitHub
                </a>
              </h5>
              <h5>
                <a target="_blank" rel="noreferrer" href={item.LiveLink}>
                  <i>
                    <FaDesktop color="#23A1D7" />
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

export default CardItem;
