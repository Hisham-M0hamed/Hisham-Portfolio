import React from "react";
import "./skills.css";
import { SkillsContent } from "./SkillsContent";
// import SkillsContent from "./SkillsContent.js";

function Skills() {
  return (
    <section id="skills">
      <div className="top-section">
        <h3>My Skills</h3>
        <p>What Skills I have</p>
      </div>

      <div className="skills-section">
        {SkillsContent.map(({ id, title, icon, disc }) => (
          <div key={id} className="skill">
            <img src={icon}></img>
            <div className="text">
              <h4>{title}</h4>
              <p>{disc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

{
  /* <div className="skill">
          <img src={html}></img>
          <div className="text">
            <h4>HTML5</h4>
            <p>User Structure</p>
          </div>
        </div>
        <div className="skill">
          <img src={css}></img>
          <div className="text">
            <h4>CSS</h4>
            <p>User Interface</p>
          </div>
        </div>
        <div className="skill">
          <img src={bootstrap}></img>
          <div className="text">
            <h4>Bootstrap</h4>
            <p>Responsive Design</p>
          </div>
        </div>
        <div className="skill">
          <img src={tailwindcss}></img>
          <div className="text">
            <h4>Tailwind</h4>
            <p>Responsive Design</p>
          </div>
        </div>
        <div className="skill">
          <img src={javascript}></img>
          <div className="text">
            <h4>JavaScript</h4>
            <p>Interactive Features</p>
          </div>
        </div>
        <div className="skill">
          <img src={figma}></img>
          <div className="text">
            <h4>Figma</h4>
            <p>Web Server</p>
          </div>
        </div>
        <div className="skill">
          <img src={react}></img>
          <div className="text">
            <h4>React</h4>
            <p>Framework</p>
          </div>
        </div>
        <div className="skill">
          <img src={nodejs}></img>
          <div className="text">
            <h4>Node.js</h4>
            <p>Web Server</p>
          </div>
        </div> */
}
