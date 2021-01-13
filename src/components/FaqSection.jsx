import styled from "styled-components";
import * as S from "../styles";

const FaqSection = () => {
  return (
    <StyledFaq>
      <h2>
        Any Question <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How Do I Start ?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero,
            illo.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero,
            illo.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Diferent payment methods</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero,
            illo.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>What Product Do You Offert ?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero,
            illo.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </StyledFaq>
  );
};

const StyledFaq = styled(S.About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background-color: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0remp {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
