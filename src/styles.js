import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledAbout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1100px) {
    display: block;
    padding: 15rem 4rem;
  }
`;

export const StyledDescription = styled(motion.div)`
  flex: 1;
  /* padding-right: 5rem; */
  h2 {
    font-weight: lighter;
  }
`;

export const StyledHide = styled.div`
  overflow: hidden;
`;

export const StyledServices = styled(StyledAbout)`
  padding: 1rem 10rem;
  h2 {
    padding: 1.5rem;
  }
  @media (max-width: 1100px) {
    padding: 4rem 4rem;
    h2 {
      padding-top: 0;
    }
  }
`;

export const StyledContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledCard = styled(motion.header)`
  background-color: #121212;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const StyledCardHeader = styled(motion.div)`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledCardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px;
  min-height: 250px;
  .tag-teal {
    background-color: #92d4e4;
  }
  h3 {
    font-weight: 400;
    font-size: 22px;
  }
  p {
    font-size: 18px;
    padding: 25px 5px 40px 5px;
    color: #a9a9a8;
    font-weight: 300;
  }
  h5 {
    color: #888785;
    margin: 0;
    text-decoration: none;
  }
  a {
    text-decoration: none;
    font-size: 18px;
    color: #a9a9a8;
    margin: auto;
  }
  i {
    position: relative;
    top: 5px;
    display: inline-block;
    margin-right: 1em;
  }
`;
