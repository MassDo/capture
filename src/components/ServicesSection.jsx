// Import icon
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
// Styles
import styled from "styled-components/macro";
import * as S from "../styles";
//Animations
import { useScroll } from "./useScroll";
import { scrollReaveal } from "../animation";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledServices
      variants={scrollReaveal}
      initial="hidden"
      animate={controls}
      ref={element}
    >
      <S.Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <StyledCards>
          <StyleCard>
            <div className="icon">
              <img src={clock} alt="clock icon" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyleCard>
          <StyleCard>
            <div className="icon">
              <img src={teamwork} alt="team icon" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyleCard>
          <StyleCard>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm icon" />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyleCard>
          <StyleCard>
            <div className="icon">
              <img src={money} alt="money icon" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </StyleCard>
        </StyledCards>
      </S.Description>
      <S.Image>
        <img src={home2} alt="camera " />
      </S.Image>
    </StyledServices>
  );
};

// Custom style
const StyledServices = styled(S.About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 810px) {
    justify-content: space-evenly;
  }
`;

const StyleCard = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background-color: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
