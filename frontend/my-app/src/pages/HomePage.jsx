import { Link } from 'react-router-dom';
import { GameList } from './GameList';

export function HomePage() {
  return (
    <div className="container">
      <div className="home-hero">
        <h1 className="page-title mb-3">ברוכים הבאים ל־Game App</h1>
        <p className="page-subtitle text-muted mb-0">גלו משחקים, הוסיפו לסל וקנו</p>
        <div className="home-actions mt-3">
          <Link to="/myRegistration" className="btn btn-primary m-2">
            הרשמה
          </Link>
          <Link to="/mylogin" className="btn btn-primary m-2">
            התחברות
          </Link>
        </div>
      </div>
      <GameList />
    </div>
  );
}
