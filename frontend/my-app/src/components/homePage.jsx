import { Link } from "react-router-dom";
import { ListGame } from "./listGame";

export const HomePage = () => {

  return (
    <div className="container">
      <Link to="/myRegistration" className="btn btn-primary m-2">
        הרשמה
      </Link>
      <Link to="/mylogin" className="btn btn-primary m-2">
        התחברות
      </Link>
      <ListGame></ListGame>
    </div>
  );
};
