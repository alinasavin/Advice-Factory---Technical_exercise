import React from 'react';
import './Intro.scss';

export default function Intro(props) {
  return (
    <div className="intro">
      <div className="left">
        <div className="wrapper">
          <div className="title">
            <h1>{props.title}</h1>
            <h2>{props.desc}</h2>
          </div>
          <div className="desc">
            <h3>{props.text}</h3>
          </div>
          <button>{props.button}</button>
        </div>
      </div>
      <div className="right">
        <div className="imgContainer">
          <img src="/assets/lemons1.jpeg" alt="home"></img>
        </div>
      </div>
    </div>
  );
}
