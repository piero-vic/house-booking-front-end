import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes';
import Sidebar from './pages/Sidebar';
import useAuth from './hooks/useAuth';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Reservations from './pages/reservations';
import HouseDetails from './components/HouseDetails';
// import Houses from './pages/Houses';

function App() {
  const { authChecked, loggedIn } = useAuth();
  return (
    <Router>
      <div className={loggedIn && 'sm:flex'}>
        <div className={!loggedIn ? 'hidden' : 'absolute inset-0 sm:w-1/5 z-10 sm:relative'}>
          <Sidebar />
        </div>
        <div className="flex-1">
          <Routes>
            <Route path="/login" element={<Login loggedIn={loggedIn} />} />
            <Route path="/signup" element={<Signup loggedIn={loggedIn} />} />
            <Route element={<ProtectedRoutes isAllowed={loggedIn} authChecked={authChecked} redirectPath="/login" />}>
              <Route path="/" element={<h1>Houses Page</h1>} />
              {/* <Route path="/houses" element={<Houses />} /> */}
              <Route path="/houses/:id" element={<HouseDetails />} />
              <Route path="/reserve" element={<h1>Reserve Page</h1>} />
              <Route path="/reservations" element={<Reservations />} />
              <Route path="/add_house" element={<h1>AddHouse Page</h1>} />
              <Route path="/delete_house" element={<h1>DeleteHouse Page</h1>} />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
