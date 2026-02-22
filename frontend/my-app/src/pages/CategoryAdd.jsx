import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { add_cat, updateCategory } from '../redux/kategoryActions';
import { addCategory, update } from '../axios/categoryAxios';

const HEBREW_LETTERS = /[א-ת]/;

export function CategoryAdd() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isForUpdate = location.state?.fromUpdate ?? '';
  const [form, setForm] = useState({ name: '' });
  const [error, setError] = useState('');

  const validateName = (value) => {
    if (value === '') {
      setError('שדה זה הוא שדה חובה');
      return false;
    }
    if (!HEBREW_LETTERS.test(value)) {
      setError('הכנס רק אותיות עבריות');
      return false;
    }
    setError('');
    setForm((prev) => ({ ...prev, name: value }));
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error) return;
    if (!form.name && isForUpdate === '') {
      setError('שדה זה הוא שדה חובה');
      return;
    }
    if (isForUpdate !== '') {
      update(isForUpdate, form)
        .then((res) => {
          dispatch(updateCategory(res.data));
          navigate('/myListKategory');
        })
        .catch((err) => console.error(err));
    } else {
      addCategory(form)
        .then((res) => {
          dispatch(add_cat(res.data));
          navigate('/myListKategory');
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <form className="container form-page" onSubmit={handleSubmit}>
      <h1>הוספת קטגוריה</h1>
      <div className="mb-2">
        <label className="form-label">שם קטגוריה</label>
        <input
          className="form-control"
          type="text"
          value={form.name}
          placeholder="הכנס שם קטגוריה"
          onBlur={(e) => validateName(e.target.value)}
        />
        {error && <p className="text-danger small mt-1">{error}</p>}
      </div>
      <button type="submit" className="btn btn-primary">
        {isForUpdate !== '' ? 'עדכן' : 'הוסף'}
      </button>
    </form>
  );
}
