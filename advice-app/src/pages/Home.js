import React from 'react';
import { Link } from 'react-router-dom';
import Intro from '../components/Intro/Intro';
import StartButton from '../components/StartButton/StartButton';

export default function Home() {
  return (
    <div>
      <Intro
        title={'Are you having a bad day?'}
        desc={'Feeling a bit low?'}
        text={
          'Or maybe you are just in need for some free much needed advice. You have come to the right place.'
        }
        button={
          <Link to={'/advice'}>
            <StartButton text={'Get started'} />
          </Link>
        }
      />
    </div>
  );
}
