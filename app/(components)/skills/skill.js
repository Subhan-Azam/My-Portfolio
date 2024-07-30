import React from "react";
import "./skill.css";

export default function Skill() {
  return (
    <div className="skills text-white">
      <div className="font-bold text-xl">Technical skills</div>

      <div className="skill-box">
        <span className="title">Tailwind CSS / BOOTSTRAP</span>

        <div className="skill-bar">
          <span className="skill-per tailwind">
            <span className="tooltip">85%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">Javascript</span>

        <div className="skill-bar">
          <span className="skill-per javascript">
            <span className="tooltip">70%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">React Js</span>

        <div className="skill-bar">
          <span className="skill-per reactJs">
            <span className="tooltip">80%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">Next Js</span>

        <div className="skill-bar">
          <span className="skill-per nextJs">
            <span className="tooltip">90%</span>
          </span>
        </div>
      </div>
      <div className="skill-box">
        <span className="title">API’s</span>

        <div className="skill-bar">
          <span className="skill-per api">
            <span className="tooltip">70%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">Mongo DB</span>

        <div className="skill-bar">
          <span className="skill-per mongodb">
            <span className="tooltip">90%</span>
          </span>
        </div>
      </div>

      <div className="skill-box">
        <span className="title">Firebase DB</span>

        <div className="skill-bar">
          <span className="skill-per firebase">
            <span className="tooltip">73%</span>
          </span>
        </div>
      </div>

      
    </div>
  );
}
