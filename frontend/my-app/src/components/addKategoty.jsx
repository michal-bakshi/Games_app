import { useState } from "react";
import { useDispatch } from "react-redux";
import { add_cat, updateCategory } from '../redux/kategoryActions';
import { useLocation, useNavigate } from "react-router-dom";
import { addCategory, update } from '../axios/categoryAxios';

export const AddKategoty = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isForUpdate = location.state?.fromUpdate || "";
  const [kat, setKat] = useState({});
  const [exception, setException] = useState({ nameK: "" });

  const checkKategory = (e) => {
    const kategogyName = e.target.value;
    debugger;
    if (kategogyName == "") {
      setException({ ...exception, nameK: "שדה זה הוא שדה חובה" });
    } else if (!kategogyName.match("[א-ת]")) {
      setException({ ...exception, nameK: "הכנס רק אותיות עבריות" });
    } else {
      setKat({ ...kat, name: kategogyName });
      setException({ ...exception, nameK: "" });
    }
  };

  const handleCaterogy = (e) => {
    e.preventDefault();
    if (isForUpdate !== "") {
      updateCategoryFunc();
    } else {
      addNewKat();
    }
  };

  const addNewKat = () => {
    if (exception.nameK == "") {
      addCategory(kat)
        .then((x) => {
          dispatch(add_cat(x.data));
          navigate('/myListKategory');
        })
        .catch((err) => console.log(err));
    }
  };

  const updateCategoryFunc = () => {
    if (exception.nameK == "") {
      update(isForUpdate, kat)
        .then((x) => {
          dispatch(updateCategory(x.data));
          navigate('/myListKategory');
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <form className="container" onSubmit={(e) => handleCaterogy(e)}>
      <h1>הוספת קטגוריה</h1>
      <div className="col">
        <input
          className="form-control row m-2"
          type="text"
          value={kat.name}
          placeholder="הכנס שם קטגוריה"
          onBlur={(e) => checkKategory(e)}
        />
        {exception.nameK && (
          <p className="text-danger row m-2">{exception.nameK}</p>
        )}
      </div>
      <input
        type="submit"
        className="btn btn-primary"
        value={isForUpdate !== "" ? "עדכן" : "הוסף"}
      />
    </form>
  );
};
