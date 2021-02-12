import React from "react";
//Import styles
import { StyledCard, StyledCardHeader, StyledCardBody } from "../styles";
//Import icons
import { FaGithub, FaDesktop } from "react-icons/fa";

const CardItem = ({ item }) => {
  return (
    <div>
      <StyledCard whileHover={{ scale: 1.08 }}>
        <StyledCardHeader>
          <img src={item.img} alt="Website Screengrab" />
        </StyledCardHeader>
        <StyledCardBody>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <div className="user">
            <div className="links">
              <h5>
                <a href={item.GitLink}>
                  <i>
                    <FaGithub color="#66DA97" />
                  </i>
                  GitHub
                </a>
              </h5>
              <h5>
                <a href={item.LiveLink}>
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

export default CardItem;
