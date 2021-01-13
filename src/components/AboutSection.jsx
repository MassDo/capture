import home1 from "../img/home1.png";
// Style
import * as S from "../styles.jsx";

const AboutSection = () => {
  return (
    <S.About>
      <S.Description>
        <div className="title">
          <S.Hide>
            <h2>We work to make</h2>
          </S.Hide>
          <S.Hide>
            <h2>
              your <span>dream</span>
            </h2>
          </S.Hide>
          <S.Hide>
            <h2>come true</h2>
          </S.Hide>
        </div>
        <p>
          Contact us for any ideas that you have . We are professinals here to
          help you
        </p>
        <button>Contact Us</button>
      </S.Description>
      <S.Image>
        <img src={home1} alt="guy with a camera" />
      </S.Image>
    </S.About>
  );
};

export default AboutSection;
