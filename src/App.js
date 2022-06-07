import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loginUser, checkAuth } from './redux/actions/auth';

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const handleClick = () => {
    dispatch(loginUser({ email: 'sahar@example.com', password: '123123' }));
  };

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return (
    <Router>
      <h1>Navigation</h1>
      <div className="App">
        { auth.loggedIn ? 'logged in' : 'not logged in'}
        <button type="button" onClick={handleClick}>get data</button>
      </div>
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
