import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ShowSummary = () => {
  const { id } = useParams();
  const [summary, setSummary] = useState('');

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => {
        setSummary(response.data.summary);
      })
      .catch((error) => {
        console.error('Error fetching show summary:', error);
      });
  }, [id]);

  return (
    <div className="container">
      <h1 className="mb-4">Show Summary</h1>
      <p>{summary}</p>
      <Link to={`/booking/${id}`} className="btn btn-primary">
        Book Ticket
      </Link>
    </div>
  );
};

export default ShowSummary;
