import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './AddEditAdvice.scss';
import fireDb from '../firebase';
import { toast } from 'react-toastify';

const initialState = {
  name: '',
  advice: '',
};

const AddEditAdvice = () => {
  const [state, setState] = useState(initialState);
  const [data, setDate] = useState({});

  const { name, advice } = state;

  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //input validation
    if (!name || !advice) {
      toast.error('Please provide value in each input field');
    } else {
      fireDb.child('advice-list').push(state, (err) => {
        if (err) {
          toast.error(err);
        } else {
          toast.success('Advice added successfully ');
        }
      });
      // go back to show advice page using useHistory hook
      setTimeout(() => history.push('/show'), 500);
    }
  };
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

export default AddEditAdvice;
