import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowList from './components/ShowList';
import ShowSummary from './components/ShowSummary';
import BookingForm from './components/BookingForm';

const App = () => {
  return (
    <Router>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<ShowList />} />
          <Route path="/summary/:id" element={<ShowSummary />} />
          <Route path="/booking/:id" element={<BookingForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
