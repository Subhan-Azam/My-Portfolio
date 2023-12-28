import React from 'react';
import "./skill.css"
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';

const Skill = () => {
  return (
    <Tilt>
      <div style={{ height: '300px', backgroundColor: 'darkgreen' }}>
        <h1>React Parallax Tilt 👀</h1>
      </div>
    </Tilt>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));