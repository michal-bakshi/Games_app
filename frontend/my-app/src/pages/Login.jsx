import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginFunc } from '../redux/usersActions';
import { login } from '../axios/usersAxios';

const MANAGER_CREDENTIALS = { userName: 'מנהל', password: '1234' };

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ userName: '', password: '' });

  const setField = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.userName === MANAGER_CREDENTIALS.userName && form.password === MANAGER_CREDENTIALS.password) {
      dispatch(loginFunc('m'));
      navigate('/');
      return;
    }
    login(form.userName, form.password)
      .then((res) => {
        dispatch(loginFunc('u', res.data));
        navigate('/myPersonal');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container py-4">
      <div className="auth-form">
        <h1>התחברות</h1>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">שם משתמש</label>
          <input
            type="text"
            className="form-control"
            onBlur={(e) => setField('userName', e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">סיסמא</label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setField('password', e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          התחבר
        </button>
        <p className="mt-2 small">
          עדיין לא רשום? <Link to="/myRegistration">הרשם</Link>
        </p>
        </form>
      </div>
    </div>
  );
}
