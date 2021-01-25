import styled from "styled-components/macro";
import { Link } from "react-router-dom";

// Images
import veltex from "../img/neons/pexels-brett-sayles-1264939.jpg";
import love from "../img/neons/pexels-joshua-teichroew-1476635.jpg";
import deadEnd from "../img/neons/pexels-aleksandar-pasaric-1820770.jpg";
import orient from "../img/neons/pexels-ba-phi-1710995.jpg";
import neonGirl from "../img/neons/pexels-alex-powell-1769340.jpg";
// Animation
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  frameAnim,
  frameAnimContainer,
  scrollRevealMovie,
} from "../animation";
import { useScroll } from "../components/useScroll";

const OurWork = () => {
  const [element, controls, view] = useScroll();
  const [element2, controls2, view2] = useScroll();
  const [element3, controls3, view3] = useScroll();
  const [element4, controls4, view4] = useScroll();

  return (
    <>
      <motion.div variants={frameAnimContainer} initial="hidden" animate="show">
        <StyledFrame1 variants={frameAnim}></StyledFrame1>
        <StyledFrame2 variants={frameAnim}></StyledFrame2>
        <StyledFrame3 variants={frameAnim}></StyledFrame3>
        <StyledFrame4 variants={frameAnim}></StyledFrame4>
      </motion.div>
      <StyledWork
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <StyledMovie>
          <motion.h2 variants={fade}>The Veltex</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/work/the-veltex">
            <motion.img variants={photoAnim} src={veltex} alt="veltex" />
          </Link>
        </StyledMovie>
        <StyledMovie
          variants={scrollRevealMovie}
          initial="hidden"
          animate={controls4}
          ref={element4}
        >
          <motion.h2 variants={fade}>The Neon Girl</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/work/neongirl">
            <img src={neonGirl} alt="neon girl" />
          </Link>
        </StyledMovie>

        <StyledMovie
          variants={scrollRevealMovie}
          initial="hidden"
          animate={controls}
          ref={element}
        >
          <h2>Orient Express</h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/work/orient">
            <img src={orient} alt="orient" />
          </Link>
        </StyledMovie>
        <StyledMovie
          variants={scrollRevealMovie}
          initial="hidden"
          animate={controls2}
          ref={element2}
        >
          <h2>Taste The Love</h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/work/love">
            <img src={love} alt="racer" />
          </Link>
        </StyledMovie>
        <StyledMovie
          variants={scrollRevealMovie}
          initial="hidden"
          animate={controls3}
          ref={element3}
        >
          <h2>Dead End</h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/work/deadend">
            <img src={deadEnd} alt="goodtimes" />
          </Link>
        </StyledMovie>
      </StyledWork>
    </>
  );
};

const StyledWork = styled(motion.div)`
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
`;
const StyledMovie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #02ec5c;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: contain;
    @media (max-width: 1300px) {
      object-fit: cover;
    }
  }
`;

// Frame animation
const StyledFrame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 10%;
  height: 100%;
  background-color: black;
  z-index: 2;
`;
const StyledFrame2 = styled(StyledFrame1)`
  background-color: black;
`;
const StyledFrame3 = styled(StyledFrame1)`
  background-color: black;
`;
const StyledFrame4 = styled(StyledFrame1)`
  background-color: black;
`;

export default OurWork;
