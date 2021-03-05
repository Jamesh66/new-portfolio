//Import React Router Dom
import { Link } from "react-router-dom";
//Import Styled components
import styled from "styled-components";
import { bool } from "prop-types";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
const SideDrawer = ({ open }) => {
  const { pathname } = useLocation();
  return (
    <StyledSideDrawer open={open}>
      <ul>
        <li>
          <Link to="/">About Me</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "33%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/portfolio">My Portfolio</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/portfolio" ? "43%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "40%" : "0%" }}
          />
        </li>
      </ul>
    </StyledSideDrawer>
  );
};

SideDrawer.propTypes = {
  open: bool.isRequired,
};

const Line = styled(motion.div)`
  height: 0.36rem;
  background: #23a1d7;
  width: 10%;
  position: absolute;
  left: 0%;
`;

export default SideDrawer;

const StyledSideDrawer = styled.nav`
  height: 100%;
  background: #282828;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 400px;
  z-index: 200;
  transform: translateX(-100%);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-out;
  ul {
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: top;
    padding: 8rem 0;
  }
  li {
    margin: 1.5rem 2rem;
    position: relative;
  }
  a {
    color: white;
    text-decoration: none;
    font-size: 2rem;
  }
  @media (min-width: 769px) {
    display: none;
  }
  .side-drawer-active {
    transform: translateX(0%);
  }
`;
