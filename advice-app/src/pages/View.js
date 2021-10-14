import React, { useState, useEffect } from 'react';
import fireDb from '../firebase';
import { useParams, useHistory, Link } from 'react-router-dom';
import './View.scss';

const View = () => {
  const [user, setUser] = useState({});

  //grab the id when user clicks on view button

  const { id } = useParams();

  // query to get data from the firebase database
  useEffect(() => {
    fireDb
      .child(`advice-list/${id}`)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUser({ ...snapshot.val() }); // get the single advice inside the user object
        } else {
          setUser({});
        }
      });
  }, [id]); // only runs when we have the id
  return (
    <div className="viewData">
      <div className="cardDetails">
        <div className="cardHeader">
          <p>User Details</p>
        </div>
        <div className="viewContainer">
          <strong>ID:</strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Name:</strong>
          <span>{user.name}</span>
          <br />
          <br />
          <strong>Advice:</strong>
          <span>{user.advice}</span>
          <br />
          <br />
          <Link to="/show">
            <button className="viewButton">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
