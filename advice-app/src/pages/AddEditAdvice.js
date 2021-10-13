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
  const [data, setData] = useState({});

  const { name, advice } = state;

  const history = useHistory();

  // grab the id of the data
  const { id } = useParams();

  // query to get data from the firebase database
  useEffect(() => {
    fireDb.child('advice-list').on('value', (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });

    return () => {
      setData({});
    };
  }, [id]);

  // will only run when we have the id and the data from the database
  //sets state so that we can populate the existing value into each respective input field
  useEffect(() => {
    if (id) {
      setState({ ...data[id] });
    } else {
      setState({ ...initialState });
    }

    return () => {
      setState({ ...initialState });
    };
  }, [id, data]);

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
      if (!id) {
        fireDb.child('advice-list').push(state, (err) => {
          if (err) {
            toast.error(err);
          } else {
            toast.success('Advice added successfully ');
          }
        });
      } else {
        fireDb.child(`advice-list/${id}`).set(state, (err) => {
          if (err) {
            toast.error(err);
          } else {
            toast.success('Advice updated successfully ');
          }
        });
      }

      // go back to show advice page once data has been added
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
          value={name || ''}
          onChange={handleInputChange}
        />
        <label className="label">Your Advice</label>
        <textarea
          id="advice"
          name="advice"
          placeholder="Your Advice.."
          value={advice || ''}
          onChange={handleInputChange}
        ></textarea>

        <input
          className="submitInput"
          type="submit"
          value={id ? 'Update' : 'Save'}
        />
      </form>
    </div>
  );
};

export default AddEditAdvice;
