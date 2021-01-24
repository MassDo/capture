import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components/macro";
// Image
import backgroundImage from "../img/neons/pexels-ricardo-esquivel-1964474.jpg";

const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in Touch !</motion.h2>
        </Hide>
      </Title>

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
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  background-image: url(${backgroundImage});
  background-size: cover;
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`;
const Title = styled.div`
  margin-bottom: 8rem;
  color: white;
  /* &:hover {
    color: white;
  } */
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  min-width: 1rem;
  height: 1rem;
  background-color: #c5c1c1;
`;
const SocialStyle = styled(motion.div)`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: #c5c1c1;
    &:hover {
      color: white;
    }
  }
  h2 {
    font-size: 2rem;
    margin: 2rem;
  }
  &:hover {
    color: white;
  }
`;

export default ContactUs;
