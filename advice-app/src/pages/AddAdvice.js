import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './AddAdvice.scss';
import fireDb from '../firebase';
import { toast } from 'react-toastify';

const initialState = {
  name: '',
  advice: '',
};

const AddAdvice = () => {
  const [state, setState] = useState(initialState);
  const [data, setDate] = useState({});

  const { name, advice } = state;

  const handleInputChange = () => {};
  const handleSubmit = () => {};
  return (
    <div className="formContainer">
      <form className="adviceForm" onSubmit={handleSubmit}>
        <label className="label">Name</label>
        <input
          className="textInput"
          type="text"
          id="name"
          name="name"
          placeholder="Your Name.."
          value={name}
          onChange={handleInputChange}
        />
        <label className="label">Your Advice</label>
        <textarea
          id="advice"
          name="advice"
          placeholder="Your Advice.."
          value={advice}
          onChange={handleInputChange}
        ></textarea>

        <input className="submitInput" type="submit" value="Save" />
      </form>
    </div>
  );
};

export default AddAdvice;
