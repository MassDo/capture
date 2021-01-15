import home1 from "../img/home1.png";
// Style
import * as S from "../styles.jsx";
// Framer Motion
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <S.About>
      <S.Description>
        <motion.div>
          <S.Hide>
            <motion.h2>We work to make</motion.h2>
          </S.Hide>
          <S.Hide>
            <motion.h2>
              your <span>dream</span>
            </motion.h2>
          </S.Hide>
          <S.Hide>
            <motion.h2>come true</motion.h2>
          </S.Hide>
        </motion.div>
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
