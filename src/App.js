import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowListScreen from './screens/ShowListScreen';
import ShowSummaryScreen from './screens/ShowSummaryScreen';
import './App.css';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowListScreen />} />
        <Route path="/show/:showId" element={<ShowSummaryScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
