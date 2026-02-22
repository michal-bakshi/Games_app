import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export function Nav() {
  const isManager = useSelector((state) => state.users.isManeger);
  const isConnected = useSelector((state) => state.users.isConnect);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark app-nav">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
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
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/myListGame">
                משחקים
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/myBag">
                עגלה
              </Link>
            </li>
            {isConnected && (
              <li className="nav-item">
                <Link className="nav-link" to="/myListKategory">
                  קטגוריות
                </Link>
              </li>
            )}
            {isConnected && (
              <li className="nav-item">
                <Link className="nav-link" to="/myPersonal">
                  אזור אישי
                </Link>
              </li>
            )}
            {isManager && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/myAddGame">
                    הוספת משחק
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/myAddKategory">
                    הוספת קטגוריה
                  </Link>
                </li>
              </>
            )}
          </ul>
          <ul className="navbar-nav">
            {!isConnected && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/myRegistration">
                    הרשמה
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/mylogin">
                    התחברות
                  </Link>
                </li>
              </>
            )}
            {isConnected && (
              <li className="nav-item">
                <span className="nav-link text-muted">ברוך הבא</span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
