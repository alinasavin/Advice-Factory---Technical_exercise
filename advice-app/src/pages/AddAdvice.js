import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './AddAdvice.scss';
import firedb from '../firebase';
import { toast } from 'react-toastify';

const initialState = {
  name: '',
  advice: '',
};

const AddAdvice = () => {
  const [state, setState] = useState(initialState);
  return <div></div>;
};

export default AddAdvice;
