import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  const regexOurWork = /\/work+.*/g;

  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Neon
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
          <LineStyled
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "100%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/work">Our Work</Link>
          <LineStyled
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname.match(regexOurWork) ? "100%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
          <LineStyled
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "100%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const LineStyled = styled(motion.div)`
  height: 0.3rem;
  background-color: #02ec5c;
  width: 3%;
  position: absolute;
  bottom: -80%;
  left: 0%;
  @media (min-width: 750px) {
    margin-left: 1rem;
  }
`;

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 3;
  min-height: 10vh;
  display: flex;
  /* margin: auto; */
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: black;
  a {
    color: white;
    text-decoration: none;
    font-size: 2rem;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 3rem;
    font-family: "lobster", cursive;
    font-weight: lighter;
    color: #02ec5c;
  }
  li {
    padding-left: 3rem;
    position: relative;
  }
  @media (max-width: 750px) {
    flex-direction: column;
    padding: 0rem 0rem;
    ul {
      padding: 0rem 0rem 2rem 0rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

export default Nav;
