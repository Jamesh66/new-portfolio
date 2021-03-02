//Import Styled components
import styled from "styled-components";
//hamburger Icon
import { Squash as Hamburger } from "hamburger-react";
//Prop types
import { bool, func } from "prop-types";

const ToggleButton = ({ open, setOpen }) => {
  return (
    <StyledBurger>
      <Hamburger toggled={open} toggle={setOpen} />
    </StyledBurger>
  );
};

ToggleButton.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

const StyledBurger = styled.button`
  position: absolute;
  top: 2%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent !important;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 201;

  &:focus {
    outline: none;
  }
  @media (min-width: 769px) {
    display: none;
  }
`;

export default ToggleButton;
