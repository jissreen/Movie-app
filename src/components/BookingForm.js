import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const BookingForm = () => {
  const { id } = useParams();
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('name', name);
    alert('Ticket booked successfully!');
    window.history.back();
  };

  return (
    <div className="container">
      <h1 className="mb-4">Booking Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="movie">Movie:</label>
          <input type="text" id="movie" className="form-control" value={id} disabled />
        </div>
        <button type="submit" className="btn btn-primary">
          Book Ticket
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
