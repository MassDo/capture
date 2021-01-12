import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dream</span>
            </h2>
          </div>
          <div className="hide">
            <h2>come true</h2>
          </div>
        </div>
        <p>
          Contact us for any ideas that you have . We are professinals here to
          help you
        </p>
        <button>Contact Us</button>
      </div>
      <img src={home1} alt="guy with a camera" />
    </div>
  );
};

export default AboutSection;
