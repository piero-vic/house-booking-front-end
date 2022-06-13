export const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const setToken = (token) => {
  localStorage.setItem('token', token);
  localStorage.setItem('lastLoginTime', new Date(Date.now()).getTime());
};

export const getToken = () => {
  const now = new Date(Date.now()).getTime();
  const thirtyMinutes = 1000 * 60 * 30;
  const timeSinceLastLogin = now - localStorage.getItem('lastLoginTime');
  if (timeSinceLastLogin < thirtyMinutes) {
    return localStorage.getItem('token');
  }
  return false;
};
