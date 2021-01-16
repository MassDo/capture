import styled from "styled-components/macro";
import { Link } from "react-router-dom";

// Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
// Animation
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  frameAnim,
  frameAnimContainer,
} from "../animation";

const OurWork = () => {
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
          <motion.h2 variants={fade}>Athlete</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/work/the-athlete">
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </Link>
        </StyledMovie>
        <StyledMovie>
          <h2>The Racer</h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/work/the-racer">
            <img src={theracer} alt="racer" />
          </Link>
        </StyledMovie>
        <StyledMovie>
          <h2>Good Times</h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/work/good-times">
            <img src={goodtimes} alt="goodtimes" />
          </Link>
        </StyledMovie>
      </StyledWork>
    </>
  );
};

const StyledWork = styled(motion.div)`
  background-color: white;
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const StyledMovie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

// Frame animation
const StyledFrame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
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
