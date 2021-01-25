import styled from "styled-components/macro";
import { motion } from "framer-motion";
import neonGirl from "./img/neons/pexels-alex-powell-1769340.jpg";

// Styled components
export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 750px) {
    display: block;
    text-align: center;
    min-height: 90vh;
    background-image: linear-gradient(
        rgba(19, 18, 18, 0.747),
        rgba(0, 0, 0, 0.158)
      ),
      url(${neonGirl});
    background-size: cover;
    background-repeat: no-repeat;
    button {
      margin-top: 5rem;
    }
    p {
      color: white;
      font-size: 2rem;
      margin: 7rem 0rem 3rem 0rem;
    }
  }
`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
  .serviceSpan {
    color: #02ec5c;
  }
  a {
    text-decoration: none;
    color: white;
  }
  @media (max-width: 810px) {
    padding: 0;
    button {
      margin-bottom: 2rem;
    }
  }
`;
export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: contain;
    @media (max-width: 750px) {
      display: none;
    }
  }
`;
export const Hide = styled.div`
  overflow: hidden;
`;
