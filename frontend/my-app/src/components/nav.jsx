import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Nav = () => {
  const isManeger = useSelector(x => x.users.isManeger);
  const isConnect = useSelector(x => x.users.isConnect);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Game App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {isManeger && (
              <li className="nav-item">
                <Link className="nav-link" to="myAddGame">
                  הוספת משחק
                </Link>
              </li>
            )}
            {isManeger && (
              <li className="nav-item">
                <Link className="nav-link" to="myAddKategory">
                  הוספת קטגוריה
                </Link>
              </li>
            )}
            {isConnect && (
              <li className="nav-item">
                <Link className="nav-link" to="myListKategory">
                  קטגוריות
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="myListGame">
                משחקים
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="myBag">
                עגלה
              </Link>
            </li>
            {isConnect && (
              <li className="nav-item">
                <Link className="nav-link" to="myPersonal">
                  אזור אישי
                </Link>
              </li>
            )}
            {isConnect && (
              <li className="nav-item ">
                <Link className="nav-link"> ברוך הבא</Link>
              </li>
            )}
            <li className="nav-item">
              <Link to="/myRegistration" className="nav-link">
                הרשמה
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/mylogin" className="nav-link">
                התחברות
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
