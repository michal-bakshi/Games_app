import { useState } from "react";
import { addGame, update } from "../axios/gameAxios";
import { useLocation, useNavigate } from "react-router-dom";
import { add_game, updateGame } from "../redux/gameActions";
import { useDispatch, useSelector } from "react-redux";

export const AddGame = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const kat = useSelector(x => x.kategory.listCat);
  const location = useLocation();
  const isForUpdate = location.state?.fromUpdate || "";
  const [objGame, setObjGame] = useState({
    // name:"",
    // code_Category:"",
    // price:0,
    // pic:"",
    // amount:0
  });

  const handleGame = (e) => {
    e.preventDefault();
    if (isForUpdate == "") {
      addNewGame();
    } else {
      updateThisGame();
    }
  };

  const addNewGame = () => {
    addGame(objGame)
      .then((x) => {
        dispatch(add_game(x.data));
        navigate('/myListGame');
      })
      .catch((err) => console.log(err));
  };

  const updateThisGame = () => {
    console.log("in update");
    update(isForUpdate, objGame)
      .then((x) => {
        dispatch(updateGame(x.data));
        navigate('/myListGame');
      })
      .catch((err) => console.log(err));
  };

  return (
    <form className="container" onSubmit={(e) => handleGame(e)}>
      <h2 className="">הוספת משחק</h2>
      <p className="text-danger ">שדות המסומנים בכוכבית הם שדות חובה</p>
      <div className="col">
        <input
          className="form-control row m-2"
          type="text"
          placeholder=" *הכנס שם משחק"
          onBlur={(x) => setObjGame({ ...objGame, name: x.target.value })}
          required={isForUpdate === ""}
        />
        {/* {exception.nameK && <p className="text-danger row m-2">{exception.nameK}</p>} */}
      </div>
      <div className="col">
        {/* לבדוק שיש קוד כזה */}
        {/* <input className="form-control row m-2" type="text" placeholder="*הכנס קוד קטגוריה" 
        } required={isForUpdate === ""}/> */}
        <label>הכנס שם קטגוריה</label>
        <select
          className="m-2 form-select"
          onBlur={(x) => setObjGame({ ...objGame, code_Category: x.target.value })}
          required={isForUpdate === ""}
        >
          {kat.map((x) => (
            <option value={x._id}>{x.name}</option>
          ))}
        </select>
        {/* <p>{objGame.code_Category}</p> */}
        {/* {exception.codeK && <p className="text-danger row m-2">{exception.codeK}</p>} */}
      </div>
      <div className="col">
        <input
          className="form-control row m-2"
          type="number"
          placeholder="*הכנס מחיר משחק "
          onBlur={(x) => setObjGame({ ...objGame, price: x.target.value })}
          required={isForUpdate === ""}
        />
      </div>

      <div className="col">
        <select
          className="form-control row m-2"
          onChange={(e) => setObjGame({ ...objGame, pic: e.target.value })}
          required={isForUpdate === ""}
        >
          <option value="">בחר משחק</option>
          <option value="למהכובע.jpg">למהכובע</option>
          <option value="שחמט.jpg">שחמט</option>
          <option value="מונופול.jpg">מונופול</option>
          <option value="לינק.jpg">לינק</option>
          <option value="מפלצת.jpg">מפלצת</option>
          <option value="תפוסתקלף.jpg">תפוסתקלף</option>
          <option value="רמיקוב.jpg">רמיקוב</option>
          <option value="חתחתול.jpg">חתחתול</option>
          <option value="ארץעיר.jpg">ארץעיר</option>
          <option value="נחשמי.jpg">נחשמי</option>
        </select>
      </div>

      <div className="col">
        <input
          className="form-control row m-2"
          type="number"
          placeholder="*כמות במלאי"
          onBlur={(x) => setObjGame({ ...objGame, amount: x.target.value })}
          required={isForUpdate === ""}
        />
      </div>
      <input
        type="submit"
        className="btn btn-primary"
        value={isForUpdate !== "" ? "עדכן" : "הוסף"}
      />
    </form>
  );
};
