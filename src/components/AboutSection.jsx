import girl from "../img/neons/pexels-alex-powell-1769340.jpg";
// Style
import * as S from "../styles.jsx";
// Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
// Component
import Wave from "./Wave";
// router
import { Link } from "react-router-dom";

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
          We can't wait to hear about your project. Professionals neon signs
          crafters ! <br />
          <br /> Here to help you !
        </motion.p>
        <motion.button variants={fade}>
          <Link to="/contact">Contact Us</Link>
        </motion.button>
      </S.Description>
      <S.Image>
        <motion.img variants={photoAnim} src={girl} alt="girl between neons" />
      </S.Image>
      <Wave />
    </S.About>
  );
};

export default AboutSection;
