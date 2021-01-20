import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/work">Our Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

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
  background-color: #282828;
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
  }
  li {
    padding-left: 3rem;
    position: relative;
  }
`;

export default Nav;
