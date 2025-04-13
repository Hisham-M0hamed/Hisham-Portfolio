import React from "react";
import "./home.css";
import image from "../../files/personal-image.jpg";
import Resume from "../../files/Hisham CV.pdf";
import { Social } from "./social";
function Home() {
  return (
    <section id="home">
      <div className="image-me">
        <div className="image">
          <img src={image} alt="Hisham Mohamed" />
        </div>
      </div>
      <div className="info-me">
        <h1>
          Hello, I'm <span>Hisham Mohamed</span>
        </h1>
        <h3>Software developer</h3>
        <p>
          I hold a Bachelor's degree in Information Technology and specialize as
          a front-end developer with expertise in React , with a passion for
          creating engaging and user-friendly websites. I have experience in
          various programming languages and frameworks such as HTML, CSS,
          BootStrap, Tailwind , Figma,JavaScript, React, and Node.js.
        </p>

        <div className="social-media">
          <Social />
        </div>
        <div className="links">
          <a href={Resume} className="btn" download>
            Download CV
          </a>
          <a href="#contact" className="btn">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;

{
  /* <a>
            <FaLinkedin />
          </a>
          <a>
            <FaGithub />
          </a>
          <a>
            <FaInstagram />
          </a> */
}
