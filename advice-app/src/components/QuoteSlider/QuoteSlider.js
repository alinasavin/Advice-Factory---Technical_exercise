import React, { useState } from 'react';
import { quotes } from '../../data';
import './QuoteSlider.scss';

export default function QuoteSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleClick(side) {
    if (side === 'left') {
      setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 9);
    } else {
      setCurrentSlide(currentSlide < quotes.length - 1 ? currentSlide + 1 : 0);
    }
  }
  return (
    <div className="quotesSection">
      <div className="introQuotes">
        <h1>When Life Gives You Lemons</h1>
        <h2> Funny Quotes To Feel Better</h2>
      </div>
      <div className="quotes">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {quotes.map((data) => (
            <div className="quotesContainer">
              <div className="itemQuotes">
                <div className="textQuotes">
                  <h3>{data.quote}</h3>
                  <p>{data.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <img
          className="arrow left"
          src="/assets/arrowLeft.png"
          alt=""
          onClick={() => handleClick('left')}
        />
        <img
          className="arrow right"
          src="/assets/arrowRight.png"
          alt=""
          onClick={() => handleClick('right')}
        />
      </div>
    </div>
  );
}
