import { React } from 'react';
import './StartButton.scss';

export default function StartButton({ text }) {
  return (
    <button data-testid="start-now" className="startButton">
      {text}
    </button>
  );
}
