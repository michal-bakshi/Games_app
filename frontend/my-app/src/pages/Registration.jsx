import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../axios/usersAxios';
import { addNewUser } from '../redux/usersActions';

export function Registration() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const [message, setMessage] = useState({ password: '' });

  const setField = (field, value) => setUser((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password !== user.repeatPassword) {
      setMessage({ password: 'הסיסמא אינה זהה' });
      return;
    }
    setMessage({ password: '' });
    addUser(user)
      .then((res) => {
        dispatch(addNewUser(res));
        navigate('/myPersonal');
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container py-4">
      <div className="auth-form">
        <h1>הרשמה</h1>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">שם משתמש</label>
          <input
            type="text"
            className="form-control"
            onBlur={(e) => setField('name', e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">פרטי אשראי</label>
          <div className="row g-2">
            <div className="col-12">
              <label className="form-label small">מספר אשראי</label>
              <input
                type="text"
                className="form-control"
                placeholder="4580 0087 3354 1234"
                onBlur={(e) => setField('number', e.target.value)}
              />
            </div>
            <div className="col-6">
              <label className="form-label small">תוקף</label>
              <input
                type="text"
                className="form-control"
                placeholder="01/1"
                onBlur={(e) => setField('expirationDate', e.target.value)}
              />
            </div>
            <div className="col-6">
              <label className="form-label small">3 ספרות בגב הכרטיס</label>
              <input
                type="text"
                className="form-control"
                placeholder="123"
                onBlur={(e) => setField('cvv', e.target.value)}
              />
            </div>
          </div>
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
        <div className="mb-3">
          <label className="form-label">אימות סיסמא</label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setField('repeatPassword', e.target.value)}
            required
          />
          {message.password && <p className="text-danger small">{message.password}</p>}
        </div>
        <button type="submit" className="btn btn-primary">
          אישור
        </button>
        <p className="mt-2 small">
          כבר רשום? <Link to="/mylogin">התחבר</Link>
        </p>
        </form>
      </div>
    </div>
  );
}
