//Import React Router Dom
import { Link } from "react-router-dom";
//Import Styled components
import styled from "styled-components";
import { bool } from "prop-types";
const SideDrawer = ({ open, setOpen }) => {
  return (
    <StyledSideDrawer open={open}>
      <ul>
        <li>
          <Link to="/">About Me</Link>
        </li>
        <li>
          <Link to="/portfolio">My Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
    </StyledSideDrawer>
  );
};

SideDrawer.propTypes = {
  open: bool.isRequired,
};

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
