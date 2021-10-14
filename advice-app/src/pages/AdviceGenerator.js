import React, { useState, useEffect } from 'react';
import QuoteSlider from '../components/QuoteSlider/QuoteSlider';
import './AdviceGenerator.scss';

const AdviceGenerator = () => {
  // state that holds the recipes fetched data
  const [advice, setAdvice] = useState('');

  // useEffect fetch data from API
  useEffect(() => {
    getAdvice();
  }, []);

  // async function to get API data
  const getAdvice = async () => {
    const response = await fetch(`https://api.adviceslip.com/advice`);

    const adviceData = await response.json();
    console.log(adviceData);
    // all data is saved in the state
    setAdvice(adviceData.slip);
  };
  return (
    <div>
      <div className="advice">
        <div className="card">
          <h1 className="heading">{advice.advice}</h1>
          <button className="button" onClick={getAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
      <QuoteSlider />
    </div>
  );
};

export default AdviceGenerator;
