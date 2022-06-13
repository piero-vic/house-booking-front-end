import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
import Sidebar from './pages/Sidebar';
import useAuth from './hooks/useAuth';
import Houses from './pages/Houses';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AddReservation from './pages/addReservation';
import Reservations from './pages/reservations';
import NewHouse from './pages/newhouse';
import HouseDetails from './components/HouseDetails';
import DeleteHouse from './pages/DeleteHouse';

function App() {
  const { authChecked, loggedIn } = useAuth();
  return (
    <Router>
      <div className={loggedIn ? 'sm:flex' : null}>
        <div className={!loggedIn ? 'hidden' : 'absolute inset-0 sm:w-1/5 sm:relative'}>
          <Sidebar />
        </div>
        <div className="flex-1">
          <Routes>
            <Route path="/login" element={<Login loggedIn={loggedIn} />} />
            <Route path="/signup" element={<Signup loggedIn={loggedIn} />} />
            <Route element={<ProtectedRoutes isAllowed={loggedIn} authChecked={authChecked} redirectPath="/login" />}>
              <Route path="/" element={<Houses />} />
              <Route path="/houses/:id" element={<HouseDetails />} />
              <Route path="/reserve/:id" element={<AddReservation />} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/add_house" element={<NewHouse />} />
              <Route path="/delete_house" element={<DeleteHouse />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
