import { motion } from "framer-motion";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          James Harrold
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Me</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/portfolio">My Portfolio</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/portfolio" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23a1d7;
  width: 0%;
  position: absolute;
  left: 56%;
  top: 110%;
`;

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {    
    font-size: 1.5rem;
    font-family: "Courgette", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 8rem;
    position: relative;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    h1 {
      padding-top: 1.5rem;
    }
    li {
      display: none;
    }
  }
`;

export default Nav;
