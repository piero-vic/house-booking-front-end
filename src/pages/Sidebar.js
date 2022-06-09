import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as TiSocial from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import logo from '../images/logo.png';
import { logoutUser } from '../redux/actions/auth';

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const showPage = () => {
    if (sidebar) setSidebar(!sidebar);
  };
  const dispatch = useDispatch();
  const logout = () => {
    showPage();
    dispatch(logoutUser());
  };

  return (
    <div className="text-slate-600 h-screen sm:border-r-2 ">

      <button type="button" className="sm:hidden m-3 absolute" onClick={showSidebar}>
        {!sidebar ? (
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 5h16M4 12h16M4" />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        )}
      </button>

      <nav
        className={
        !sidebar ? 'sm:flex flex-col h-full hidden'
          : 'flex flex-col h-full bg-white pt-7 sm:pt-0'
      }
      >
        <Link className="m-4 hidden sm:flex" to="/">
          <img src={logo} alt="logo" width={100} />
        </Link>
        <ul className="sm:ml-2 pt-2 pb-3 mt-6 text-center">
          <li className="flex flex-col">
            {[
              ['HOUSES', '/'],
              ['RESERVATIONS', '/reservations'],
              ['ADD HOUSES', '/add_house'],
              ['DELETE HOUSES', '/delete_house'],
            ].map(([title, url]) => (
              <Link
                to={url}
                key={title}
                onClick={showPage}
                className="text-sm font-semibold px-3 py-2 hover:bg-lime-500 hover:text-white w-full"
              >
                {title}
              </Link>
            ))}
            <Link
              to="/"
              onClick={logout}
              className="text-sm font-semibold px-3 py-2 hover:bg-lime-500 hover:text-white w-full"
            >
              LOGOUT
            </Link>
          </li>
        </ul>

        <div className="mt-auto text-center">
          <ul className="flex justify-center">
            <li>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <TiSocial.TiSocialFacebook />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <TiSocial.TiSocialTwitter />
              </a>
            </li>
            <li>
              <a href="https://myaccount.google.com/" target="_blank" rel="noreferrer">
                <TiSocial.TiSocialGooglePlus />
              </a>
            </li>
            <li>
              <a href="https://vimeo.com/" target="_blank" rel="noreferrer">
                <TiSocial.TiSocialVimeo />
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
                <TiSocial.TiSocialPinterest />
              </a>
            </li>
          </ul>
          <span className="text-xs">&copy; 2022, RENT ME</span>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
