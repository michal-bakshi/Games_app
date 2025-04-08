import { Link } from "react-router-dom"
import { ListGame } from "./listGame"
import { useSelector } from "react-redux"

export const HomePage=()=>{
    const isManeger=useSelector(x=>x.users.isManeger)
    const isConnect=useSelector(x=>x.users.isConnect)

    return<div className="container">
        <Link to="/myRegistration" className="btn btn-primary m-2"> הרשמה</Link>
        <Link to="/mylogin" className="btn btn-primary m-2"> התחברות</Link>
        <ListGame></ListGame>


    </div>
}