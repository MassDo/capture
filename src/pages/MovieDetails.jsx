import { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
  // State
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  // Use effect
  useEffect(() => {
    const currentMovie = movies.find((mov) => mov.url === url);
    setMovie(currentMovie);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <StyledDetails
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <StyledHeadline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </StyledHeadline>
          <StyledAwards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </StyledAwards>
        </StyledDetails>
      )}
    </>
  );
};

// Award component
const Award = ({ title, description }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledAward>
  );
};
// Styled components
const StyledDetails = styled(motion.div)`
  color: white;
`;
const StyledHeadline = styled.div`
  min-height: 40vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 60vh;
    object-fit: contain;
  }
`;
const StyledAwards = styled.div`
  min-height: 80vh;
  display: flex;
  flex-wrap: wrap;
  margin: 5rem 3rem;
  align-items: flex-start;
  justify-content: space-around;
`;
const StyledAward = styled.div`
  width: 30%;
  padding: 5rem;
  h3 {
    font-size: 1.5rem;
  }
  .line {
    width: 100%;
    background-color: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

export default MovieDetail;
