import home1 from "../img/home1.png";
// Style
import * as S from "../styles.jsx";
// Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";

const AboutSection = () => {
  return (
    <S.About>
      <S.Description>
        <motion.div>
          <S.Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </S.Hide>
          <S.Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dream</span>
            </motion.h2>
          </S.Hide>
          <S.Hide>
            <motion.h2 variants={titleAnim}>come true</motion.h2>
          </S.Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any ideas that you have . We are professinals here to
          help you
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </S.Description>
      <S.Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </S.Image>
    </S.About>
  );
};

export default AboutSection;
