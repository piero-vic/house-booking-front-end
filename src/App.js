import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
import useAuth from './hooks/useAuth';
import Login from './pages/Login';
import Reservations from './pages/reservations';

function App() {
  const { authChecked, loggedIn } = useAuth();
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login loggedIn={loggedIn} />} />
        <Route path="/signup" element={<h1>Sign Up Page</h1>} />
        <Route element={<ProtectedRoutes isAllowed={loggedIn} authChecked={authChecked} redirectPath="/login" />}>
          <Route path="/" element={<h1>Houses Page</h1>} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/add_house" element={<h1>AddHouse Page</h1>} />
          <Route path="/delete_house" element={<h1>DeleteHouse Page</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
