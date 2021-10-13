import React, { useState, useEffect } from 'react';
import fireDb from '../firebase';
import { Link } from 'react-router-dom';
import './ShowAdvice.scss';

const ShowAdvice = () => {
  const [data, setData] = useState({});
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
  }, []);

  return <div className="listContainer">Advice List</div>;
};

export default ShowAdvice;
