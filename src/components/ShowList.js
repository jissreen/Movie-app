import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShowCard from './ShowCard';

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.tvmaze.com/shows')
      .then((response) => {
        setShows(response.data);
      })
      .catch((error) => {
        console.error('Error fetching shows:', error);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="mb-4">Show List</h1>
      <div className="row">
        {shows.map((show) => (
          <div className="col-md-4 mb-4" key={show.id}>
            <ShowCard show={show} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
