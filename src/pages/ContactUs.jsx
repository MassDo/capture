import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components/macro";

const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in Touch !</motion.h2>
        </Hide>
        <Hide>
          <SocialStyle variants={titleAnim}>
            <Circle></Circle>
            <a href="https://massdo.github.io/">
              <h2> Your Linkedin</h2>
            </a>
          </SocialStyle>
        </Hide>
        <Hide>
          <SocialStyle variants={titleAnim}>
            <Circle></Circle>
            <a href="https://massdo.github.io/">
              <h2> Your Twitter</h2>
            </a>
          </SocialStyle>
        </Hide>
        <Hide>
          <SocialStyle variants={titleAnim}>
            <Circle></Circle>
            <a href="https://massdo.github.io/">
              <h2> Your Mail</h2>
            </a>
          </SocialStyle>
        </Hide>
      </Title>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  min-width: 1rem;
  height: 1rem;
  background-color: #353535;
`;
const SocialStyle = styled(motion.div)`
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
  }
  h2 {
    font-size: 2rem;
    margin: 2rem;
  }
`;

export default ContactUs;
