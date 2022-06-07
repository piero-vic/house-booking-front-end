import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <h1>Navigation</h1>
      <Routes>
        <Route path="/" element={<h1>Houses</h1>} />
        <Route path="/reserve" element={<h1>Reserve</h1>} />
        <Route path="/reservations" element={<h1>Reservations</h1>} />
        <Route path="/add_house" element={<h1>AddHouse</h1>} />
        <Route path="/delete_house" element={<h1>DeleteHouse</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
