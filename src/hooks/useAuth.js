import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { checkAuth } from '../redux/actions/auth';

const useAuth = () => {
  const dispatch = useDispatch();
  const { authChecked, loggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return { authChecked, loggedIn };
};

export default useAuth;
