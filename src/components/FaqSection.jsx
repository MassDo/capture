import styled from "styled-components";
import * as S from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
  return (
    <StyledFaq>
      <h2>
        Any Question <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How Do I Start ?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
              velit veritatis fugiat laboriosam excepturi neque exercitationem
              ab porro officia saepe.
            </p>
          </div>
        </Toggle>
        <Toggle title="Daily Schedule">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              corporis minus a at nisi numquam voluptas accusantium eos quae
              asperiores!
            </p>
          </div>
        </Toggle>
        <Toggle title="Diferent payment methods">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              illum provident deleniti error commodi nemo et? Culpa magnam
              sapiente dicta?
            </p>
          </div>
        </Toggle>
        <Toggle title="What Product Do You Offert ?">
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              animi aspernatur sed veniam officia recusandae quisquam in quas
              quo temporibus!
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
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
    padding: 1rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0remp {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
