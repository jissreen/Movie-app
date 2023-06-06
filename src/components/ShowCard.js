import React from 'react';
import { Link } from 'react-router-dom';

const ShowCard = ({ show }) => {
  return (
    <div className="card">
      <img src={show.image.medium} alt={show.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{show.name}</h5>
        <p className="card-text">{show.summary}</p>
        <Link to={`/summary/${show.id}`} className="btn btn-primary">
          View Summary
        </Link>
      </div>
    </div>
  );
};

export default ShowCard;
