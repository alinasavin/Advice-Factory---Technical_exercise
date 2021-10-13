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

  return (
    <div className="listContainer">
      <table className="adviceTable">
        <thead>
          <tr>
            <th> No</th>
            <th>Name</th>
            <th>Advice</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((id, index) => {
            return (
              <tr key={id}>
                <th scope="row">{index + 1}</th>
                <td className="nameLine">{data[id].name}</td>
                <td className="adviceLine">{data[id].advice}</td>
                <td>
                  <Link to={`/update/${id}`}>
                    <button className="editBtn">Edit</button>
                  </Link>
                  <button className="deleteBtn">Delete</button>
                  <Link to={`/view/${id}`}>
                    <button className="viewBtn">Edit</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowAdvice;
