import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginUser } from './redux/actions/auth';
import ProtectedRoutes from './components/ProtectedRoutes';
import useAuth from './hooks/useAuth';
import Houses from './pages/Houses';

function App() {
  const { authChecked, loggedIn } = useAuth();
  const dispatch = useDispatch();

  // TODO: I'm keeping this for testing. Delete once the login is implemented
  const handleClick = () => {
    dispatch(loginUser({ email: 'sahar@example.com', password: '123123' }));
  };

  return (
    <Router>
      <div>
        { loggedIn ? 'Logged In' : <button type="button" onClick={handleClick}>Log In</button> }
      </div>
      <Routes>
        <Route path="/login" element={<h1>Log In Page</h1>} />
        <Route path="/signup" element={<h1>Sign Up Page</h1>} />
        <Route element={<ProtectedRoutes isAllowed={loggedIn} authChecked={authChecked} redirectPath="/login" />}>
          <Route path="/" element={<Houses />} />
          <Route path="/reservations" element={<h1>Reservations Page</h1>} />
          <Route path="/add_house" element={<h1>AddHouse Page</h1>} />
          <Route path="/delete_house" element={<h1>DeleteHouse Page</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
